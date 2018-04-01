import * as React from 'react';
import './index.css';
import Track from '../Track';
import { TrackI } from '../../interfaces';
import { ReactNode } from 'react';

const TracksList: React.StatelessComponent<any> = (props: any) => {
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
            <div className="ui segments ">
                <div className="ui grid app-track-title">
                    <div className="two wide column"/>
                    <div className="three wide column">
                        Artist
                    </div>
                    <div className="three wide column">
                        Track
                    </div>
                    <div className="three wide column">
                        Collection
                    </div>
                    <div className="three wide column">
                        Genre
                    </div>
                    <div className="two wide column"/>
                </div>
                {tracks}
            </div>
        );
    }

};

export default TracksList;
