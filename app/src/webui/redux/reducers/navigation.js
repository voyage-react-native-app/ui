import {
    DISPLAY_LOADER,
    REMOVE_LOADER
} from '../actions/actionTypes';

const INITIAL_STATE = {
    loaderDisplayed: false
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case DISPLAY_LOADER:
            return {
                ...state,
                loaderDisplayed: true
            }
        case REMOVE_LOADER:
            return {
                ...state,
                loaderDisplayed: false
            }
        default:
            return state;
    }
};
