import { combineReducers } from 'redux';

import auth from './auth';
import sidebar from './sidebar';

const reducers = {
    auth,
    sidebar

};

module.exports = combineReducers(reducers);