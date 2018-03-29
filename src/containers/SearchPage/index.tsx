import * as React from 'react';
import { SearchForm } from '../';
import { Footer, TrackList } from '../../components';
import { Helmet } from 'react-helmet';

class SearchPage extends React.Component {
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

export default SearchPage;
