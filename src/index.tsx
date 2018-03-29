import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import { App } from './containers';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(
    <BrowserRouter>
                <App/>
            </BrowserRouter>,
    document.getElementById('root') as HTMLElement
);
registerServiceWorker();
