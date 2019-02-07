import './bootstrap';

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { logger } from 'redux-logger'
import { routerMiddleware } from 'connected-react-router'
import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { createHashHistory,createMemoryHistory, createBrowserHistory } from 'history'
import Router from './components/Router'
import reducers from './redux/Reducers';
import * as serviceWorker from './serviceWorker'

import { save, load } from "redux-localstorage-simple"


const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();
const routeMiddleware = routerMiddleware(history);
const middlewares = [sagaMiddleware, routeMiddleware, save()];

if (process.env.NODE_ENV === 'development' && true) {
    middlewares.push(logger)
}
const store = createStore(
    reducers(history),
    load(),
    compose(
        applyMiddleware(...middlewares),
        process.env.NODE_ENV === 'development' && window.devToolsExtension && window.devToolsExtension(),
    ),
);



ReactDOM.render(
    <Provider store={store}>
            <Router history={history} />
    </Provider>,
    document.getElementById('root'),
)

serviceWorker.register();
export { store, history }
