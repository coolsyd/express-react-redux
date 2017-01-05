require('./css/base.css');
import React from "react";
import {render} from "react-dom";
import {Router, Route} from "react-router";
import {Topbar} from "./components/topbar";
import {Test01} from "./components/test01";
import {Test02} from "./components/test02";
import {Provider} from "react-redux";
import createStore from "./store";
// import reducers from "./reducers";

const store = createStore();

const rootElement = document.getElementById('root');

render(
    <Provider store={store}>
        <Router>
            <Route path="/" component={Topbar}>
                <Route path="test01" component={Test01}/>
                <Route path="test02" component={Test02}/>
            </Route>
        </Router>
    </Provider>,
    rootElement
);