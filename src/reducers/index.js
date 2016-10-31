import { combineReducers } from 'redux';
import accessToken from 'reducers/accessToken';

let rootReducer = combineReducers({ accessToken });

export default rootReducer;
