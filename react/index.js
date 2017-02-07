import React from 'react';
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {Router, browserHistory} from 'react-router'
import createStore from './store'
import routes from './routes'
import reducers from './reducers'

const store = createStore(reducers);
const rootElement = document.getElementById('root');

render(
    <Provider store={store}>
        <Router history={browserHistory}>
            {routes(store.getState())}
        </Router>
    </Provider>,
    rootElement
);
