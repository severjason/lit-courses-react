export interface TrackI {
    trackId: string;
    artistName: string;
    collectionName: string;
    collectionPrice: number;
    artworkUrl100: string;
    primaryGenreName: string;
    opened: boolean;
    trackName: string;
    trackCount: number;
    trackPrice: number;
    trackTimeMillis: number;
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
    isLoading: boolean;
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
