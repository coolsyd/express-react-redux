import React from "react";
import { Link, IndexLink } from 'react-router'
import {action_logout} from "../actions";

export default class Header extends React.Component {
    handleClick(e) {
        e.preventDefault();
        console.log(this.props);
        //this.props.out();
        this.props.dispatch(action_logout());
        //Auth.logout();
    }

    render() {
        return (
            <div className="navbar navbar-inverse navbar-fixed-top">
                <div className="navbar-inner">
                    <div className="container-fluid">
                        <a className="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </a>
                        <a className="brand" href="#">合成作战平台</a>
                        <div className="nav-collapse collapse">
                            <p className="navbar-text pull-right">
                                Logged in as <a href="#" className="navbar-link">Username</a>
                            </p>
                            <ul className="nav">
                                <li><IndexLink to="/">首页</IndexLink></li>
                                <li className="dropdown">
                                    <Link property="" to="/" className="dropdown-toggle" data-toggle="dropdown" activeClassName="active"> 合成作战 <b className="caret"></b></Link>
                                    <ul className="dropdown-menu">
                                        <li><a href="#">Action</a></li>
                                        <li><a href="#">Another action</a></li>
                                        <li><a href="#">Something else here</a></li>
                                        <li className="divider"></li>
                                        <li className="nav-header">Nav header</li>
                                        <li><a href="#">Separated link</a></li> 
                                        <li><a href="#">One more separated link</a></li>
                                    </ul>
                                </li>
                                <li className="dropdown">
                                    <Link property="" to="/" className="dropdown-toggle" data-toggle="dropdown" activeClassName="active"> 战果统计 <b className="caret"></b></Link>
                                    <ul className="dropdown-menu">
                                        <li><a href="#">Action</a></li>
                                        <li><a href="#">Another action</a></li>
                                        <li><a href="#">Something else here</a></li>
                                        <li className="divider"></li>
                                        <li className="nav-header">Nav header</li>
                                        <li><a href="#">Separated link</a></li>
                                        <li><a href="#">One more separated link</a></li>
                                    </ul>
                                </li>
                                <li className="dropdown">
                                    <Link property="" to="/" className="dropdown-toggle" data-toggle="dropdown" activeClassName="active"> 研判分析 <b className="caret"></b></Link>
                                    <ul className="dropdown-menu">
                                        <li><a href="#">Action</a></li>
                                        <li><a href="#">Another action</a></li>
                                        <li><a href="#">Something else here</a></li>
                                        <li className="divider"></li>
                                        <li className="nav-header">Nav header</li>
                                        <li><a href="#">Separated link</a></li>
                                        <li><a href="#">One more separated link</a></li>
                                    </ul>
                                </li>
                                <li className="dropdown">
                                    <Link property="" to="/" className="dropdown-toggle" data-toggle="dropdown" activeClassName="active"> 系统管理 <b className="caret"></b></Link>
                                    <ul className="dropdown-menu">
                                        <li><a href="#">Action</a></li>
                                        <li><a href="#">Another action</a></li>
                                        <li><a href="#">Something else here</a></li>
                                        <li className="divider"></li>
                                        <li className="nav-header">Nav header</li>
                                        <li><a href="#">Separated link</a></li>
                                        <li><a href="#">One more separated link</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}