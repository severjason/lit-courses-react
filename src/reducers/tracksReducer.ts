import { types } from '../constants/types';
import { ActionFetchI, TrackI, TracksListI } from '../interfaces';

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
        case types.TOGGLE_TRACK: {
            return {
                ...state,
                tracks: state.tracks.map((track: TrackI) => {
                    track.opened = (track.trackId === action.id && !track.opened);
                    return track;
                })
            };
        }

        default: {
            return INITIAL_STATE;
        }
    }
}