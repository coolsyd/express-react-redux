import React from "react";
import {Route, IndexRoute} from "react-router";
import App from "../containers/app.jsx";
import Home from "../containers/home.jsx";
import Login from "../containers/login.jsx";
import Qr from "../containers/qr.jsx"; //ui视图

const routes = (state) => {
    function loginRequireAuth() {
        return state.isLogin;
    }

    return (
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="/login" component={Login} onEnter={loginRequireAuth}/>
            <Route path="/qr" component={Qr} onEnter={!loginRequireAuth}/>
        </Route>
    )
};

export default routes;