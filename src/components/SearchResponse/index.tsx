import * as React from 'react';
import { TracksList, ErrorComponent } from '../../components';

const SearchResponse: React.StatelessComponent<any> = (props: any) => {
    if (!props.tracksList.received && props.error === null) {
        return null;
    } else if (props.error !== null) {
        return (
            <ErrorComponent error={props.error}/>
        );
    } else {
        return (
            <TracksList
                tracks={props.tracksList.tracks}
                toggleTrack={props.toggleTrack}
            />
        );
    }

};

export default SearchResponse;
