import * as React from 'react';
import './index.css';

const ErrorComponent: React.StatelessComponent<any> = (props: any) => {
    return (
        <div className="ui negative message app-track-list-error">
            <div className="header">
                Error occurred
            </div>
            <p>
                {props.error.message}
            </p>
        </div>
);
};

export default ErrorComponent;
