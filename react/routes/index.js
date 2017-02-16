import React from "react";
import {Route, IndexRoute} from "react-router";
import App from "../containers/app.jsx";
import Home from "../containers/home.jsx";
import Login from "../containers/login.jsx";

const routes = (state) => {
    function loginRequireAuth(nextState, replace) {
        let pathIsLogin = /^\/login\/?$/.test(nextState.location.pathname);
        if (!state.login.isLogin && !pathIsLogin) {
            replace('/login');
        } else if (state.login.isLogin && pathIsLogin) {
            replace('/');
        }
    }

    return (
        <Route>
            <Route path="/login" component={Login} onEnter={loginRequireAuth}/>
            <Route path="/" component={App} onEnter={loginRequireAuth}>
                <IndexRoute component={Home}/>
            </Route>
        </Route>
    )
};

export default routes;