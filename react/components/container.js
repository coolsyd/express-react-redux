import React from "react";
import {Topbar} from "./topbar";

class Container extends React.Component {
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
export {Container}