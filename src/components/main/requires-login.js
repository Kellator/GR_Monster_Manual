import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
// from Thinkful React curriculum
export default () => Component => {
    function RequiresLogin(props) {
        const {authenticating, loggedIn, error, ...passingThroughProps} = props;
        if(authenticating) {
            return <div>Logging in...</div>;
        } else if (!loggedIn || error) {
            return <Redirect to="/" />;
        }
        return <Component {...passingThroughProps} />;
    }
    const displayName = Component.displayName || Component.name || 'Component';
    RequiresLogin.displayName = `RequiresLogin(${displayName})`;

    const mapStateToProps = (state, props) => ({
        authenticating: state.auth.loading,
        loggedIn: state.auth.currentUser !==null,
        error: state.auth.error
    });

    return connect(mapStateToProps)(RequiresLogin);
};