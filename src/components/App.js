import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { BrowserRouter } from 'react-router-dom';

import Header from './common/Header';
import Main from './common/Main';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="container-fluid">
                    <Header loading={this.props.loading} />
                    <Main />
                </div>
            </BrowserRouter>
        );
    }
}

App.propTypes = {
    loading: PropTypes.bool.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        loading: state.ajaxCallsInProgress > 0
    };
}

export default connect(mapStateToProps)(App);