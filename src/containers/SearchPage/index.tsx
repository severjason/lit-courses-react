import * as React from 'react';
import { SearchForm } from '../';
import { State } from '../../reducers';
import * as actions from '../../actions';
import { Footer, TrackList } from '../../components';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

const SearchPage = (props: {}) => (
    <div>
        <Helmet>
            <title>Tracks search app</title>
        </Helmet>
        <div className="ui container app-container">
            <SearchForm {...props}/>
            <TrackList/>
        </div>
        <Footer/>
    </div>
);

export default connect<any, Dispatch<any>>(
    (state: State) => (state.isLoading),
    (dispatch: Dispatch<any>) => ({
        actions: bindActionCreators(actions, dispatch)
    })
)(SearchPage);
