import { legacy_createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { reducer as AdminReducer } from './AdminReducer/reducer';
import { reducer as productReducer } from './ProductReducer/reducer';
import {reducer as AuthReducer } from './AuthReducer/reducer';

const rootReducer = combineReducers({ AdminReducer, productReducer,AuthReducer });


export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
