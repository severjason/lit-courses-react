import * as React from 'react';
import { TrackList, ErrorComponent } from '../../components';

const SearchResponse: React.StatelessComponent<any> = (props: any) => {
    if (!props.tracksList.received && props.error === null) {
        return null;
    } else if (props.error !== null) {
        return (
            <ErrorComponent error={props.error}/>
        );
    } else {
        return (
            <TrackList tracks={props.tracksList.tracks} />
        );
    }

};

export default SearchResponse;
