require('./css/base.css');
import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, Link, IndexLink } from 'react-router'
import { createHistory, useBasename } from 'history'
import {Topbar} from "./components/topbar";
import {Test01} from "./components/test01";
import {Test02} from "./components/test02";
import {Provider} from "react-redux";
import createStore from "./store";
// import reducers from "./reducers";

const store = createStore();

const rootElement = document.getElementById('app');

class App extends React.Component {
    render() {
        return (
            <div>
                <Topbar/>
                {this.props.children}
            </div>
        )
    }
}

const history = useBasename(createHistory)({
    basename: '/active-links'
})

render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={Test01}/>
                <Route path="test02" component={Test02}/>
            </Route>
        </Router>
    </Provider>,
    rootElement
);