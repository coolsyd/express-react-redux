/**
 * Created by admin on 2016/8/26.
 */
require('../css/navigation.css');
import React from "react";
class SingleNav extends React.Component {
    render() {
        return (
            <li>{this.props.menuName}</li>
        )
    }
}
class Nav extends React.Component {
    // componentDidMount() {
    //     $.get(this.props.source, function (result) {
    //         var lastGist = result[0];
    //         if (this.isMounted()) {
    //             this.setState({
    //                 username: lastGist.owner.login,
    //                 lastGistUrl: lastGist.html_url
    //             });
    //         }
    //     }.bind(this));
    // }

    render() {
        return (
            <ul className="nav">
                <li className="active"><a href="/views/">Home</a></li>
                <li><a href="/views/users">/users</a></li>
                <li><a href="/views/about">/about</a></li>
                <li className="dropdown">
                    <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                        Dropdown <b className="caret"></b>
                    </a>
                    <ul className="dropdown-menu">
                        <li><a href="#">Actio23n</a></li>
                        <li><a href="#">Another action</a></li>
                        <li><a href="#">Something else here</a></li>
                        <li className="divider"></li>
                        <li className="nav-header">Nav header</li>
                        <li><a href="#">Separated link</a></li>
                        <li><a href="#">One more separated link</a></li>
                    </ul>
                </li>
            </ul>
        )
    }
}

function getJSON(url, cb) {
    const req = new XMLHttpRequest()
    req.onload = function () {
        if (req.status === 404) {
            cb(new Error('not found'))
        } else {
            cb(null, JSON.parse(req.response))
        }
    }
    req.open('GET', url)
    req.setRequestHeader('authorization', localStorage.token)
    req.send()
}

export {Nav, SingleNav}