import { types } from '../constants/types';
import { ActionI } from '../interfaces';

export default function errorReducer(state: Error | null = null, action: ActionI) {
    switch (action.type) {
        case types.TRACKS_FETCH_ERROR: {
            return action.error;
        }
        default: {
            return state;
        }
    }
}