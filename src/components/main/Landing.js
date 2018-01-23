import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Grid from 'material-ui-next/Grid';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import { showLogin } from '../../redux/actions/ViewActions';
import { showRegisterView } from '../../redux/actions/ViewActions';
import Login from './Login';

export class Landing extends React.Component {
    viewRegistration = () => {
        return this.props.dispatch(showRegisterView());
    }
    render() {
        console.log(this.props);
        // if already logged in, redirect to user's dashboard
        if(this.props.loggedIn) {
            return <Redirect to="/dashboard" />;
        }
        return (
            <Grid 
                item 
                xs={12} sm={12} md={10} lg={8} xl={8} 
                style={{paddingTop: '1rem'}}
                className="div-absolute large-text div-center"
            >
                <h2>Welcome to the Index of Creatures!</h2>
                <h2 style={{color: '#FE0006'}}>Get into game faster.</h2>
                <div style={{paddingTop: '1.25rem', paddingBottom: '1.25rem', paddingLeft: '1rem', paddingRight: '1rem'}}>
                    <p>
                        As an avid roleplayer, I'm always looking for ways to get me and my friends into game faster.  
                        One of the most time consuming things for game-masters, DMs, and plot staff can be trying to find the stats for their NPCs or non-player-characters.
                        Many game-masters have only old-school paper systems or books to flip through.  This can lead to a lot of inefficient page flipping while game-masters 
                        search for a specific creature or type of creature and players wait for an adventure to start.
                        With the IoC, all you need is your creature's name or category. 
                    </p>
                    <p>
                        Are your players about to enter a crypt filled with undead?  Need to know the stats for your skeletons, wraiths, death knights, and a lich to control them all?
                        Just put UNDEAD into the search bar for IoC and you'll get a list of creatures you can choose from!
                    </p>
                    <p>
                        Originally designed for the plot team of a Michigan based LARP.
                    </p>
                    <p>
                        If you're ready to test out the IoC, click below.  Feel free to create your own user credentials or use the demo.  View existing creatures or create your own.
                        Demonstration instructions throughout.
                    </p>
                </div>
                <Grid
                    item 
                    style={{padding: '1rem', margin: 'auto'}}
                    xs={12} sm={6} md={3} lg={3} xl={3} 
                >
                    <RaisedButton 
                        onClick={ () => this.viewRegistration() }
                        className="button-main"
                        style={{
                            borderRadius: '1px',
                            padding: '10px, 24px',
                            fontWeight: 'bold',
                            width: '100%'
                        }}
                        >Register
                    </RaisedButton>
                </Grid>
            </Grid>
        )
    }
}
const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null,
});
export default connect(mapStateToProps)(Landing);