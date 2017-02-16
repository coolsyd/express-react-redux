import React from 'react'
import {connect} from 'react-redux'
import { browserHistory } from 'react-router'
import indexSelector from '../selectors/indexSelector'
import Header from '../components/header.jsx'
// import Footer from '../components/footer.jsx'
// import Index from '../components/index.jsx'

class App extends React.Component {
    // componentWillMount() {
    //     console.log(this.props.isLogin);
    //     if(!this.props.isLogin){
    //         browserHistory.replace({
    //             pathname: '/login'
    //         });
    //     }
    // }

    render() {
        console.log(this.props);
        //const { dispatch } = this.props;
        //console.log(this);
        //Auth.test();
        return (
            <div>
                <Header {...this.props}/>
                <div>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

App.propTypes = {
    isLogin: React.PropTypes.bool.isRequired
}

export default connect(indexSelector)(App);