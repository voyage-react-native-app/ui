import {
    FETCH_USER_DATA,
    USER_DATA_FETCHED,
    DISPLAY_LOADER,
    REMOVE_LOADER,
    INPUT_USER_NAME,
    INPUT_USER_EMAIL,
    INPUT_USER_PASSWORD,
    REGISTER_USER,
    SELECT_PLACE_TYPE,
    UNSELECT_PLACE_TYPE,
    SUBMIT_SELECTED_PLACE_TYPES,
    GET_LOCATION,
    LOCATION_FETCHED,
    FETCH_PLACES,
    PLACES_FETCHED
} from './actionTypes';

export const fetchUserData = () => ({ type: FETCH_USER_DATA });
export const userDataFetched = () => ({ type: USER_DATA_FETCHED });
export const displayLoader = () => ({type: DISPLAY_LOADER});
export const removeLoader = () => ({type: REMOVE_LOADER});
export const inputUserName = username => ({
   type: INPUT_USER_NAME,
   username
});
export const inputUserEmail = email => ({
    type: INPUT_USER_EMAIL,
    email
});
export const inputUserPassword = password => ({
    type: INPUT_USER_PASSWORD,
    password
});

export const registerUser = data => ({
   type: REGISTER_USER,
   data
});

export const selectPlaceType = placeName => ({
   type: SELECT_PLACE_TYPE,
   placeName
});

export const unselectPlaceType = placeName => ({
    type: UNSELECT_PLACE_TYPE,
    placeName
});

export const submitSelectedPlaceTypes = (selectedPlaceTypes, email) => ({
    type: SUBMIT_SELECTED_PLACE_TYPES,
    selectedPlaceTypes,
    email
});

export const getLocation = coords => ({
    type: GET_LOCATION,
    coords
});

export const locationFetched = location => ({
    type: LOCATION_FETCHED,
    location
});

export const fetchPlaces = (coords, selectedPlaceTypes) => ({
    type: FETCH_PLACES,
    coords,
    selectedPlaceTypes
})

export const placesFetched = places => ({
   type: PLACES_FETCHED,
   places
});
