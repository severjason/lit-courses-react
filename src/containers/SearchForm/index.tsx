import * as React from 'react';
import './index.css';
import { ChangeEvent, ReactNode } from 'react';

class SearchForm extends React.Component {

    state = {
        value: ''
    };

    private onChange = (e: ChangeEvent<HTMLInputElement>): void => this.setState({value: e.target.value});

    private isEmpty = (): boolean => !this.state.value;

    public render(): ReactNode {
        return (
            <form className="ui form app-search-form">
                <div className="ui icon input fluid ">
                    <input
                        onChange={this.onChange}
                        className="app-search-input"
                        type="text"
                        placeholder="Search tracks by artist..."
                    />
                    <button
                        disabled={this.isEmpty()}
                        className={'ui button app-search-button'}
                    >
                        <i className="search icon"/>
                    </button>
                </div>
            </form>
        );
    }
}

export default SearchForm;
