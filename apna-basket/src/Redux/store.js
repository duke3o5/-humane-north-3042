import {legacy_createStore, applyMiddleware, combineReducers} from 'redux';

const rootReducer=combineReducers({});

export const store= legacy_createStore(rootReducer, applyMiddleware(thunk))