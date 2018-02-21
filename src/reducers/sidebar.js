
/* Actions */
import {
    SHOW_SIDEBAR,
    HIDE_SIDEBAR,
    TOGGLE_SIDEBAR
} from './../constants/ActionTypes';

import initialState from '../store/initialState';

const sidebar_reducer = (state = initialState.sidebar, action) => {
    switch (action.type) {
        case SHOW_SIDEBAR:
            console.log(SHOW_SIDEBAR, state);
            return true
        case HIDE_SIDEBAR:
            return false
        case TOGGLE_SIDEBAR:
            return !state.sidebar
        default:
            return state;
    }
};

export default sidebar_reducer;
