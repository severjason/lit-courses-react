import { types } from '../constants/types';
import { Action } from '../models';
import Api from '../services/api';
import { Dispatch } from 'redux';

const api = new Api();

export const requestTracks = (): Action => ({
    type: types.REQUEST_TRACKS,
    isLoading: true,
});

export const tracksFetched = (json: JSON): Action => ({
    type: types.TRACKS_FETCHED,
    isLoading: false,
    payload: json,
});

export const tracksFetchError = (): Action => ({
    type: types.TRACKS_FETCH_ERROR,
    isLoading: false,
});

export function fetchTracks(artist: any) {
    return (dispatch: Dispatch<any>) => {
        dispatch(requestTracks());
        return api.getTracks(artist)
            .then((response: Response) => response.json())
            .then((json: JSON) => {
                console.log(json);
                dispatch(tracksFetched(json));
            })
            .catch((error) => {
                console.log(error);
                dispatch(tracksFetchError());
            });
    };
}