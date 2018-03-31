import { types } from '../constants/types';
import { ActionFetchI, TracksListI } from '../interfaces';

const INITIAL_STATE = {
    received: false,
    tracks: [],
};

export default function tracksReducer(state: TracksListI = INITIAL_STATE, action: ActionFetchI): TracksListI {
    switch (action.type) {
        case types.TRACKS_FETCHED: {
            return {
                received: action.received,
                tracks: state.tracks.concat(action.payload),
            };
        }
        default: {
            return INITIAL_STATE;
        }
    }
}