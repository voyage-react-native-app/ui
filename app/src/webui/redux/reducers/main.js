import {
    USER_DATA_FETCHED,
    LOCATION_FETCHED
} from '../actions/actionTypes';

const INITIAL_STATE = {
    loaderDisplayed: false,
    location: undefined
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case USER_DATA_FETCHED:
            return {
                ...state,
                firstName: action.firstName,
                lastName: action.lastName,
                email: action.email
            };
        case LOCATION_FETCHED:
            return {
                ...state,
                location: action.location
            }
        default:
            return state;
    }
};
