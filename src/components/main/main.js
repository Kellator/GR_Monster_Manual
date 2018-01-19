// contains and controls view components for unauthorized users
import React from 'react';
import { connect } from 'react-redux';
import Grid from 'material-ui-next/Grid';
import Login from './Login';
import Register from './Register';
import Landing from './Landing';

class Main extends React.Component {
    render() {
        console.log(this.props);
        let view = this.props.view;
        let componentToDisplay;
        if(view === null) {
            componentToDisplay = <Login />
        }
        else {
            switch(view) {
                case "register":
                    componentToDisplay = <Register />
                break;
                case "login":
                    componentToDisplay = <Login />
                break;
                case "about":
                    componentToDisplay = <Landing />
                break;
                default: 
                    componentToDisplay = <Login />
            }
        }
        return (
            <Grid container styles={{flexGrow: '1'}}>
                <Grid item xs={12}>
                    <Grid
                        container 
                        justify="center"
                        alignItems="center" 
                        direction="row"
                        style={{marginTop: '40px'}}
                    >
                        { componentToDisplay }
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}
const mapStateToProps = (state, props) => ({
    view: state.view.type
});
export default connect(mapStateToProps)(Main);