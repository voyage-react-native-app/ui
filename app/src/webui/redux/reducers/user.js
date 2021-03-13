import {
    INPUT_USER_NAME,
    INPUT_USER_EMAIL,
    INPUT_USER_PASSWORD,
    USER_DATA_FETCHED,
    SELECT_PLACE_TYPE,
    UNSELECT_PLACE_TYPE,
    PLACES_FETCHED
} from '../actions/actionTypes';

const INITIAL_STATE = {
    username: '',
    email: '',
    password: '',
    selectedPlaceTypes: [],
    places: [...Array(10).fill('')]
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case USER_DATA_FETCHED:
            return {
                // destructuring state because sometimes in the future initial state won't
                // consist just of firstName, lastName and email (there will be many more properties)
                ...state,
                firstName: action.firstName,
                lastName: action.lastName,
                email: action.email
            };
        case INPUT_USER_NAME:
            return {
                ...state,
                username: action.username
            }
        case INPUT_USER_EMAIL:
            return {
                ...state,
                email: action.email
            }
        case INPUT_USER_PASSWORD:
            return {
                ...state,
                password: action.password
            }
        case SELECT_PLACE_TYPE:
            return {
                ...state,
                selectedPlaceTypes: [...state.selectedPlaceTypes, action.placeName]
            }
        case UNSELECT_PLACE_TYPE:
            return {
                ...state,
                selectedPlaceTypes: [...state.selectedPlaceTypes.filter(placeName => placeName !== action.placeName)]
            }
        case PLACES_FETCHED:
            return {
                ...state,
                places: action.places
            }
        default:
            return state;
    }
};
