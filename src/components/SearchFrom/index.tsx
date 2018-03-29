import * as React from 'react';
import './index.css';

const SearchForm: React.StatelessComponent<{}> = () => {
    return (
        <form className="ui form ">
            <div className="ui icon input app-search-form center aligned">
                <input className="app-search-input" type="text" placeholder="Search tracks by artist..."/>

                <button className="ui button app-search-button" disabled={true}><i className="search icon"/></button>
            </div>
        </form>
    );
};

export default SearchForm;
