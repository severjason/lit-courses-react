import { types } from '../constants/types';
import { Action } from '../models';

const INITIAL_STATE = {
    tracks: [],
};

export default function tracksReducer(state: {} = INITIAL_STATE, action: Action) {
    switch (action.type) {
        case types.TRACKS_FETCHED: {
            return {
                ...state,
                tracks: action.payload.results,
            };
        }
        default: {
            return state;
        }
    }
}