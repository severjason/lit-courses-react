import { combineReducers } from 'redux';
import loadingReducer from './loadingReduser';
import tracksReducer from './tracksReducer';

export interface State {
    isLoading: boolean;
    tracks: Array<{}>;
}

const rootReducer = combineReducers<State>({
    isLoading: loadingReducer,
    tracks: tracksReducer,
});

export default rootReducer;
