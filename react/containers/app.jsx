import React from 'react'
import {connect} from 'react-redux'
import indexSelector from '../selectors/indexSelector'
import Header from '../components/header.jsx'
import Footer from '../components/footer.jsx'
import Index from '../components/index.jsx'

class App extends React.Component {

    render() {
        console.log(this.props);
        //const { dispatch } = this.props;
        //console.log(this);
        //Auth.test();
        return (
            <div>
                <Header {...this.props}/>
                <div className="bs-docs-grid">
                    <div className="row-fluid show-grid">
                        <div className="span1">1</div>
                        <div className="span1">1</div>
                        <div className="span1">1</div>
                        <div className="span1">1</div>
                        <div className="span1">1</div>
                        <div className="span1">1</div>
                        <div className="span1">1</div>
                        <div className="span1">1</div>
                        <div className="span1">1</div>
                        <div className="span1">1</div>
                        <div className="span1">1</div>
                        <div className="span1">1</div>
                    </div>
                    <div className="row-fluid show-grid">
                        <div className="span4">4</div>
                        <div className="span4">4</div>
                        <div className="span4">4</div>
                    </div>
                    <div className="row-fluid show-grid">
                        <div className="span4">4</div>
                        <div className="span8">8</div>
                    </div>
                    <div className="row-fluid show-grid">
                        <div className="span6">6</div>
                        <div className="span6">6</div>
                    </div>
                    <div className="row-fluid show-grid">
                        <div className="span12">12</div>
                    </div>
                </div>
                <div>
                    {this.props.children}
                </div>
                <Footer/>
            </div>
        )
    }
}

App.propTypes = {
    isLogin: React.PropTypes.bool.isRequired
}

export default connect(indexSelector)(App);