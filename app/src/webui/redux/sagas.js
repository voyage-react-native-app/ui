import { put, takeEvery, all } from 'redux-saga/effects';

import {
    API_HOST,
    POSITION_STACK_API_KEY,
    API_OPENTRIPMAP,
    API_POSITIONSTACK,
    OPENTRIPMAP_API_KEY
} from '@env';

import {
    FETCH_USER_DATA,
    REGISTER_USER,
    SUBMIT_SELECTED_PLACE_TYPES,
    GET_LOCATION,
    FETCH_PLACES
} from './actions/actionTypes';
import {displayLoader, locationFetched, placesFetched, removeLoader} from './actions/actions';
import * as RootNavigation from '../views/RootNavigation';
import { postData, getData } from '../modules/util/fetch.js';
import { mapSelectedPlaceTypesToKeys } from '../modules/util/meta';

function* watchFetchUserData() {
    yield takeEvery(FETCH_USER_DATA, fetchUserData);
}

function* fetchUserData(action) {
    //do nothing for now
}

function* watchRegisterUser() {
    yield takeEvery(REGISTER_USER, registerUser)
}

function* registerUser(action) {
    yield put(displayLoader());

    const response = yield postData(`${API_HOST}/users/registration`, action.data);

    if(!response.hasErrors) {
        yield put(removeLoader());
        RootNavigation.navigate('Places Types');
    }
}

function* watchSubmitSelectedPlaceTypes() {
    yield takeEvery(SUBMIT_SELECTED_PLACE_TYPES, submitSelectedPlaceTypes);
}

function* submitSelectedPlaceTypes(action) {
    yield put(displayLoader());

    const data = {
        email: action.email,
        selectedPlaceTypes: action.selectedPlaceTypes
    }

    const response = yield postData(`${API_HOST}/users/placeTypesSelection`, data);

    if(!response.hasErrors) {
        yield put(removeLoader());
        RootNavigation.navigate('Home');
    }
}

function* watchGetLocation() {
    yield takeEvery(GET_LOCATION, getLocation);
}

function* getLocation(action) {
    const response = yield getData(`${API_POSITIONSTACK}/reverse?access_key=${POSITION_STACK_API_KEY}&query=${action.coords.latitude},${action.coords.longitude}&output=json&limit=1`);

    if(response) {
        yield put(locationFetched(response.data));
    }
}

function* watchFetchPlaces() {
    yield takeEvery(FETCH_PLACES, fetchPlaces);
}

function* fetchPlaces(action) {
    const { coords, selectedPlaceTypes } = action;
    const requestPlaceTypes = mapSelectedPlaceTypesToKeys(selectedPlaceTypes).toString();

    const response = yield getData(`${API_OPENTRIPMAP}/en/places/bbox?lon_min=${coords.longitude-0.5}&lon_max=${coords.longitude+0.5}&lat_min=${coords.latitude-0.5}&lat_max=${coords.latitude+0.5}&kinds=${requestPlaceTypes}&limit=20&format=json&apikey=${OPENTRIPMAP_API_KEY}`);

    if(response) {
        yield put(placesFetched(response));
    }
}

export default function* rootSaga() {
    yield all([
        watchFetchUserData(),
        watchRegisterUser(),
        watchSubmitSelectedPlaceTypes(),
        watchGetLocation(),
        watchFetchPlaces()
    ]);
};
