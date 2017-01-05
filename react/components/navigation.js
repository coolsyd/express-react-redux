/**
 * Created by admin on 2016/8/26.
 */
require('../css/navigation.css');
import React from "react";
import {Link} from "react-router";
class SingleNav extends React.Component {
    render() {
        return (
            <li>{this.props.menuName}</li>
        )
    }
}
class Nav extends React.Component {
    render() {
        return (
            <ul className="nav">
                <li className="active"><a href="#">Home</a></li>
                <li><a href="#/test01">test01</a></li>
                <li><a href="#/test02">test02</a></li>
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
export {Nav, SingleNav}