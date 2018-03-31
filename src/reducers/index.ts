import { combineReducers } from 'redux';
import loadingReducer from './loadingReduser';
import tracksReducer from './tracksReducer';
import { StateI } from '../interfaces';
import errorReducer from './errorReducer';

const rootReducer = combineReducers<StateI>({
    isLoading: loadingReducer,
    tracksList: tracksReducer,
    error: errorReducer,
});

export default rootReducer;
