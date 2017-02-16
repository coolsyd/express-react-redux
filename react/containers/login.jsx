import React from 'react'
import { connect } from 'react-redux'
import { action_login } from '../actions'

import history from '../history'

import loginSelector from '../selectors/loginSelector'

import Login from '../components/login.jsx'

class loginContainer extends React.Component {
    componentWillUpdate(nextProps, nextState) {
        //console.log(nextProps);
        //console.log(history);
        if(nextProps.isLogin){
            history.replace({
                pathname: '/'
            });
        }
    }

    render() {
        const { dispatch, isLogining } = this.props;
        return (
            <div className="container">
                <form className="form-signin">
                    <h2 className="form-signin-heading">Please sign in</h2>
                    <input type="text" className="input-block-level" placeholder="Email address"/>
                    <input type="password" className="input-block-level" placeholder="Password"/>
                    <label className="checkbox">
                        <input type="checkbox" value="remember-me"/> Remember me
                    </label>
                    <button className="btn btn-large btn-primary" type="submit">Sign in</button>
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