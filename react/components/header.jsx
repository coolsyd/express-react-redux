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
                                <li activeClassName="active"><IndexLink to="/">首页</IndexLink></li>
                                <li activeClassName="active"><Link to="/qr" activeClassName="active">二维码生成</Link></li>吃
                                <li activeClassName="active"><Link property="" to="/login"  activeClassName="active"> 登录 </Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}