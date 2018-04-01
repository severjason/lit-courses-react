import * as React from 'react';
import './index.css';
import { TrackI } from '../../interfaces';

const Track: React.StatelessComponent<any> = (props: any) => {
    const track: TrackI = props.track;
    return (
        <div
            onClick={() => props.toggleTrack(track.trackId)}
            className={`ui segment app-track-container ${props.class}`}
        >
            <div className="app-track-info ui grid middle aligned">
                <div className="row">
                    <div className="two wide column">
                        <img
                            src={track.artworkUrl100}
                        />
                    </div>
                    <div className="three wide column">
                        {track.artistName}
                    </div>
                    <div className="three wide column">
                        {track.trackName}
                    </div>
                    <div className="three wide column">
                        {track.collectionName}
                    </div>
                    <div className="three wide column">
                        {track.primaryGenreName}
                    </div>
                    <div className="two wide  column right aligned">
                        <i className={(track.opened) ? 'minus icon' : 'plus icon'}/>
                    </div>
                </div>

            </div>
            <div className={(track.opened) ? '' : 'app-additional-info-closed'}>
                <div className="app-track-info ui grid middle aligned app-additional-info">
                    <div className="row">
                        <div className="two wide column"/>
                        <div className="six wide column">
                            <div className="app-track-full-name">
                                {track.artistName} - {track.trackName}
                                <i className="music icon"/>
                            </div>
                            <div>
                                <strong>Collection: </strong>{track.collectionName}
                            </div>
                            <div>
                                <strong>Track count: </strong>{track.trackCount}
                            </div>
                            <div>
                                <strong>Price: </strong>{track.collectionPrice} USD
                            </div>
                        </div>
                        <div className="six wide column">
                            <div>
                                <strong>Track duration: </strong>{track.trackDuration} min
                            </div>
                            <div>
                                <strong>Track price: </strong>{track.trackPrice} USD
                            </div>
                        </div>
                        <div className="two wide column"/>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Track;