import * as React from 'react';
import './index.css';

const TrackList: React.StatelessComponent<any> = (props: any) => {
    if (props.tracks.length === 0) {
        return (
            <div className="ui warning message app-track-list-info">
                <div className="header">
                    No results
                </div>
                <p>
                    Try another artist...
                </p>
            </div>
        );
    } else {
        return (
            <div>{props.tracks.toString()}</div>
        );
    }

};

export default TrackList;
