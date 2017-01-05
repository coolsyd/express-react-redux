/**
 * Created by admin on 2016/8/26.
 */
import React from "react";
import {Nav} from "./navigation";
class Topbar extends React.Component {
    render() {
        return (
            <div className="navbar navbar-inverse navbar-fixed-top">
                <div className="navbar-inner">
                    <div className="container">
                        <a className="brand" href="#">公安大数据平台</a>
                        <Nav className="nav-collapse collapse"></Nav>
                    </div>
                </div>
            </div>
        )
    }
}

export {Topbar}