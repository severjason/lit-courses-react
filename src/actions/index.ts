import { types } from '../constants/types';
import Api from '../services/api';
import { Dispatch } from 'redux';
import { ActionI, TrackI, ApiResponseI, ActionFetchI } from '../interfaces';

const api = new Api();

export const requestTracks = (): ActionI => ({
    type: types.REQUEST_TRACKS,
    isLoading: true,
});

export const tracksFetched = (json: TrackI[]): ActionFetchI => ({
    type: types.TRACKS_FETCHED,
    isLoading: false,
    received: true,
    payload: json,
});

export const tracksFetchError = (error: Error): ActionI => ({
    type: types.TRACKS_FETCH_ERROR,
    isLoading: false,
    error: error,
});

export function fetchTracks(artist: any) {
    return (dispatch: Dispatch<any>) => {
        dispatch(requestTracks());
        return api.getTracks(artist)
            .then((response: Response) => response.json())
            .then((json: ApiResponseI) => {
                dispatch(tracksFetched(mapTracks(json.results)));
            })
            .catch((error: Error) => {
                dispatch(tracksFetchError(error));
            });
    };
}

function mapTracks(tracksArray: any[]): TrackI[] {
    return tracksArray.map((track: TrackI) => {
        return {
            trackId: track.trackId,
            artistName: track.artistName,
            collectionName: track.collectionName,
            collectionPrice: track.collectionPrice,
            artworkUrl100: track.artworkUrl100,
            primaryGenreName: track.primaryGenreName,
            opened: false,
            trackName: track.trackName,
            trackCount: track.trackCount,
            trackPrice: track.trackPrice,
            trackTimeMillis: track.trackTimeMillis
        };
    });
}