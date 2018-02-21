import { HTTP } from './../utils/HTTP';

import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
} from '../constants/ActionTypes';

export function loginRequest (data) {
    return function (dispatch) {
        return new Promise(function (resolve, reject) {
            {

                // API
                HTTP('post', '/login', data)
                    .then(function (response) {
                        console.log("response: ", response.data.data);
                        resolve(response.data);
                    })
                    .catch(error => {
                        console.log("error: ", error);
                        reject(error);
                    })
            }
        })
    }
}

export function login (data) {
    return function (dispatch) {
        return new Promise(function (resolve, reject) {
            {
                dispatch({
                    type: LOGIN_SUCCESS,
                    data: data
                })
            }
        })
    }
}