import {legacy_createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {reducer as AdminReducer} from './AdminReducer/reducer';

const rootReducer=combineReducers({AdminReducer});

export const store= legacy_createStore(rootReducer, applyMiddleware(thunk))