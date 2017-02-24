import React from "react";
import {connect} from "react-redux";
import {action_login} from "../actions";
import loginSelector from "../selectors/loginSelector";
import history from "../history"

class loginContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: null,
            password: null
        };
    }

    componentWillUpdate(nextProps, nextState) {
        console.log(nextState);
        if (nextProps.isLogin) {
            // history.push({
            //     pathname:'/'
            // })
        }
    }

    handleClick(e) {
        const {dispatch, isLogining} = this.props;
        e.preventDefault();
        const username = this.state.username.value;
        const password = this.state.password.value;
        console.log(username, password);
        if (username.trim() && password.trim()) {
            const user = {
                username: username,
                password: password
            };
            // action_login(user);
            dispatch(action_login(user));
        }
        else {
            alert('empty');
        }
    }


    render() {
        return (
            <div className="container">
                <form className="form-signin">
                    <h2 className="form-signin-heading">Please sign in</h2>
                    <p>{this.state.userName}</p>
                    <input type="text" className="input-block-level" placeholder="Email address" ref={node => {
                        this.state.username = node
                    }}/>
                    <input type="password" className="input-block-level" placeholder="Password" ref={node => {
                        this.state.password = node
                    }}/>
                    <label className="checkbox">
                        <input type="checkbox" value="remember-me"/> Remember me
                    </label>
                    <button className="btn btn-large btn-primary" onClick={ e => this.handleClick(e) }>Sign in</button>
                </form>
            </div>
        )
    }
}

loginContainer.propTypes = {
    isLogin: React.PropTypes.bool.isRequired,
    isLogining: React.PropTypes.bool.isRequired
}

export default connect(loginSelector)(loginContainer);