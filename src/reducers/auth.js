
/* Actions */
import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_REQUEST,
    LOGOUT_SUCCESS,
    LOGOUT_FAIL,
} from './../constants/ActionTypes';

import initialState from '../store/initialState';

const auth_reducer = (state = initialState.auth, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            console.log(LOGIN_SUCCESS);
            // localStorage.setItem('@agora:token', action.data.access_token);
            return Object.assign(
                {},
                state,
                {
                    user: action.data
                }
            );
        case LOGOUT_SUCCESS:
            console.log(LOGOUT_SUCCESS);
            // localStorage.removeItem('@agora:token');
            return Object.assign(
                {},
                state,
                {
                    user: null
                }
            );
        default:
            return state;
    }
};

export default auth_reducer;
