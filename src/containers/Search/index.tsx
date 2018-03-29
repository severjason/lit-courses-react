import * as React from 'react';
import { Footer } from '../../components';
import { SearchForm, TrackList } from '../../components';
import { Helmet } from 'react-helmet';

class Search extends React.Component {
    render() {
        return (
            <div>
                <Helmet>
                    <title>Tracks search app</title>
                </Helmet>
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
