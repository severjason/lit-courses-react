import { types } from '../constants/types';
import { Action } from '../models';

const INITIAL_STATE = {
    isLoading: false,
};

export default function loadingReducer(state: {} = INITIAL_STATE, action: Action) {
    switch (action.type) {
        case types.TRACKS_FETCH_ERROR:
        case types.TRACKS_FETCHED:
        case types.REQUEST_TRACKS: {
            return {
                ...state,
                isLoading: action.isLoading,
            };
        }
        default: {
            return state;
        }
    }
}
