import * as React from 'react';
import './index.css';
import { TrackI } from '../../interfaces';

const Track: React.StatelessComponent<any> = (props: any) => {
    const track: TrackI = props.track;
    return (
        <div className={`ui segment ${props.class}`}>
            <div
                onClick={() => props.toggleTrack(track.trackId)}
            >
                {track.artistName}
            </div>
            <div className={(track.opened) ? '' : 'app-hide-info'}>
                {track.collectionPrice}
            </div>
        </div>
    );
};

export default Track;