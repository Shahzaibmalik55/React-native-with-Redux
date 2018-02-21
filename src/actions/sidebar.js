import {
    SHOW_SIDEBAR,
    HIDE_SIDEBAR,
    TOGGLE_SIDEBAR
} from '../constants/ActionTypes';

export function showSidebar (data) {
    return function (dispatch) {
        console.log("asdddddddd");
        dispatch({
            type: SHOW_SIDEBAR
        })
    }
}
export function hideSidebar (data) {
    return function (dispatch) {
        dispatch({
            type: HIDE_SIDEBAR
        })
    }
}
export function toggleSidebar (data) {
    return function (dispatch) {
        dispatch({
            type: TOGGLE_SIDEBAR
        })
    }
}