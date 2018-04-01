import { Dispatch } from 'redux';

export interface TrackI {
    trackId: number;
    artistName: string;
    collectionName: string;
    collectionPrice: number;
    artworkUrl100: string;
    primaryGenreName: string;
    opened: boolean;
    trackName: string;
    trackCount: number;
    trackPrice: number;
    trackDuration: string;
}

export interface TracksListI {
    received?: boolean;
    tracks: TrackI[];
}

export interface ApiResponseI {
    resultCount: number;
    results: TrackI[];
}

export interface ActionI {
    type: string;
    id?: number;
    isLoading?: boolean;
    error?: Error;
}

export interface ActionFetchI extends ActionI {
    payload: TrackI[];
    received: boolean;
}

export interface StateI {
    isLoading: boolean;
    tracksList: TracksListI;
    error: Error | null;
}

export interface ActionsI {
    requestTracks(): ActionI;
    tracksFetched(json: TrackI[]): ActionFetchI;
    tracksFetchError(error: Error): ActionI;
    toggleTrack(id: number): ActionI;
    fetchTracks(artist: string): Dispatch<ActionI | ActionFetchI>;
}
