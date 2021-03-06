import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, Store, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import 'semantic-ui-css/semantic.min.css';
import { App } from './containers';
import rootReducer from './reducers';
import { StateI } from './interfaces';

import registerServiceWorker from './registerServiceWorker';
import './index.css';

const loggerMiddleware = createLogger();

const store: Store<StateI> = createStore(
    rootReducer,
    applyMiddleware (
        thunkMiddleware,
        loggerMiddleware
    )
);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root') as HTMLElement
);
registerServiceWorker();
