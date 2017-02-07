import React from "react";
export default class Index extends React.Component {
    render() {
        return (
            <div className="text-center">
                欢迎来到 react+redux+react 测试基地

                <div>
                    {this.props.children}
                </div>
            </div>
        );
    }
}