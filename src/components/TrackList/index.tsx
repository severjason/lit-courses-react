import * as React from 'react';
import './index.css';
import Track from '../Track';
import { TrackI } from '../../interfaces';
import { ReactNode } from 'react';

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
        const tracks: ReactNode = props.tracks.map((track: TrackI, index: number) => {
            return (
                <Track
                    key={index}
                    class={(index % 2 === 0) ? 'secondary' : ''}
                    track={track}
                    toggleTrack={props.toggleTrack}
                />);
        });

        return (
            <div className="ui segments">
                {tracks}
            </div>
        );
    }

};

export default TrackList;
