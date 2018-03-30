import * as React from 'react';
import './index.css';
import { ChangeEvent, ReactNode } from 'react';

class SearchForm extends React.Component<any, any> {

    state = {
        value: '',
        isLoading: this.props.isLoading
    };

    componentDidUpdate() {
        const { isLoading } = this.props;

        if (this.state.isLoading !== isLoading) {
            this.setState({isLoading: isLoading});
        }
    }

    private onChange = (e: ChangeEvent<HTMLInputElement>): void => this.setState({value: e.target.value});

    private isEmpty = (): boolean => !this.state.value;

    private handleClick = (e: any) => {
        const { actions } = this.props;
        e.preventDefault();
        actions.fetchTracks(this.state.value);
        this.setState({value: ''});
    }

    public render(): ReactNode {
        return (
            <form className="ui form app-search-form">
                <div className="ui icon input fluid ">
                    <input
                        onChange={this.onChange}
                        className="app-search-input"
                        type="text"
                        value={this.state.value}
                        placeholder="Search tracks by artist..."
                    />
                    <button
                        onClick={this.handleClick}
                        disabled={this.isEmpty()}
                        className={
                            (this.state.isLoading)
                                ? 'ui button app-search-button loading'
                                : 'ui button app-search-button'}
                    >
                        <i className="search icon"/>
                    </button>
                </div>
            </form>
        );
    }
}

export default SearchForm;
