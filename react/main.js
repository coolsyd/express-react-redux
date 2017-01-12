import React from "react";
import {render} from "react-dom";
import { Router, Route, IndexRoute, Link, IndexLink } from 'react-router'
import {createHistory, useBasename} from "history";
import {Topbar} from "./components/topbar";
import {Provider} from "react-redux";
import createStore from "./store";

const store = createStore();

class App extends React.Component {
    render() {
        return (
            <div>
                <Topbar />
                <div style={{marginTop:'40px'}}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

class Index extends React.Component {
    render() {
        return (
            <div>
                <h2>Index!</h2>
            </div>
        )
    }
}

class Users extends React.Component {
    render() {
        return (
            <div>
                <h2>Users</h2>
            </div>
        )
    }
}

class UsersIndex extends React.Component {
    render() {
        return (
            <div>
                <h3>UsersIndex</h3>
            </div>
        )
    }
}

class User extends React.Component {
    render() {
        return (
            <div>
                <h3>User {this.props.params.id}</h3>
            </div>
        )
    }
}

class About extends React.Component {
    render() {
        return (
            <div>
                <h2>About</h2>
            </div>
        )
    }
}

const history = useBasename(createHistory)({
    basename: '/views'
});

render((
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={Index}/>
                <Route path="/about" component={About}/>
                <Route path="users" component={Users}>
                    <IndexRoute component={UsersIndex}/>
                    <Route path=":id" component={User}/>
                </Route>
            </Route>
        </Router>
    </Provider>
), document.getElementById('app'));