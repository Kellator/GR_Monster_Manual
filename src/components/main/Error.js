import React from 'react';
import {Link, Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import Grid from 'material-ui-next/Grid';
import RaisedButton from 'material-ui/RaisedButton';
import Login from './Login';
import { showLogin } from '../../redux/actions/ViewActions';


class Error extends React.Component {
    navToLogin = () => {
        this.props.dispatch(showLogin());
    }
    render() {
        console.log(this.props);
        let error;
        let errorMessage =
            <Grid item 
                xs={10} sm={10} md={8} lg={6} xl={6}
                className="div-center div-opaque-color"
            >
                <h1 
                    style={{fontWeight: "bolder"}}
                    className="red-text"
                >Sorry!  There is an unexpected error occurring.  Please try again.</h1>
                {error}
            </Grid>;
        return (
            <Grid 
                container
                justify="center"
                alignItems="center" 
                direction="column"
                style={{marginTop: "40px"}}    
            >
                { errorMessage }
                <RaisedButton onClick={ () => this.navToLogin() }>Back</RaisedButton>
            </Grid>
        )
    }
}
const mapStateToProps = (state, props) => ({
    db: state.database
});
export default connect(mapStateToProps)(Error);