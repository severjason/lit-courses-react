import { types } from '../constants/types';
import { ActionI } from '../interfaces';

export default function loadingReducer(state: boolean = false, action: ActionI) {
    switch (action.type) {
        case types.TRACKS_FETCH_ERROR:
        case types.TRACKS_FETCHED:
        case types.REQUEST_TRACKS: {
            return action.isLoading;
        }
        default: {
            return state;
        }
    }
}
