import * as React from 'react';
import { SearchForm } from '../';
import { ActionsI, StateI, TracksListI } from '../../interfaces';
import * as actions from '../../actions';
import { Footer, SearchResponse } from '../../components';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

interface PropsI {
    tracksLoading: boolean;
    tracksList: TracksListI;
    error: Error;
    actions: ActionsI;
}

class SearchPage extends React.Component<PropsI, {}> {

    render() {
        return (
            <div>
                <Helmet>
                    <title>Tracks search app</title>
                </Helmet>
                <div className="ui container app-container">
                    <SearchForm
                        actions={this.props.actions}
                        tracksLoading={this.props.tracksLoading}
                    />
                    <SearchResponse
                        tracksList={this.props.tracksList}
                        error={this.props.error}
                        toggleTrack={this.props.actions.toggleTrack}
                    />
                </div>
                <Footer/>
            </div>
        );
    }

}

export default connect<any, Dispatch<any>>(
    (state: StateI) => ({
        tracksLoading: state.isLoading,
        tracksList: state.tracksList,
        error: state.error
    }),
    (dispatch: Dispatch<any>) => ({
        actions: bindActionCreators(actions, dispatch)
    })
)(SearchPage);
