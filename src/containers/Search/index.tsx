import * as React from 'react';
import { Footer } from '../../components';
import { SearchForm, TrackList } from '../../components';

class Search extends React.Component {
    render() {
        return (
            <div>
                <div className="ui container app-container">
                    <SearchForm/>
                    <TrackList/>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Search;
