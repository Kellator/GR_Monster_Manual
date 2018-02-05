import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Grid from 'material-ui-next/Grid';
import {connect} from 'react-redux';

class About extends React.Component {
    render() {
        console.log(this.props)
        return(
            <Grid 
                item 
                xs={12} sm={12} md={10} lg={8} xl={8} 
                style={{paddingTop: '1rem', margin: 'auto'}}
                className="large-text div-center div-opaque-color"
            >
                <h2>Welcome to the Codex Creatura</h2>
                <h2>Get into game faster.</h2>
                <div style={{paddingTop: '1.25rem', paddingBottom: '1.25rem', paddingLeft: '1rem', paddingRight: '1rem'}}>
                    <p>
                        As an avid roleplayer, I'm always looking for ways to get me and my friends into game faster.  
                        One of the most time consuming things for game-masters, DMs,
                        and plot staff can be trying to find the stats for their NPCs or non-player-characters.
                        Many game-masters have only old-school paper systems or books to flip through.  
                        This can lead to a lot of inefficient page flipping while game-masters 
                        search for a specific creature or type of creature and players wait for an adventure to start.
                        With the Codex, all you need is your creature's name or category. 
                    </p><br/>
                    <p>
                        Are your players about to enter a crypt filled with undead?  Need to know the stats for your skeletons, 
                        wraiths, death knights, and a lich to control them all?
                        Just enter <span style={{textDecoration: "underline"}}>UNDEAD</span> 
                        into the search bar for IoC and you'll get a list of creatures you can choose from!
                    </p><br/>
                    <p>
                        Originally designed for the plot team of a Michigan based LARP.
                    </p>
                    <p>
                        If you're ready to test out the <span style={{fontWeight: "bolder"}}>Codex Creatura</span>, 
                        click below.  You can search the existing Codex or create a new creature.
                    </p>
                </div>
                <Grid container justify="space-around">
                    <Grid
                        item 
                        style={{padding: '1rem'}}
                        xs={12} sm={6} md={4} lg={4} xl={4} 
                    >
                        <RaisedButton 
                            onClick={ this.props.home }
                            className="button-main"
                            style={{
                                borderRadius: '1px',
                                padding: '10px, 24px',
                                fontWeight: 'bold',
                                width: '100%'
                            }}
                            >Search the Codex
                        </RaisedButton>
                    </Grid>
                    <Grid
                        item 
                        style={{padding: '1rem'}}
                        xs={12} sm={6} md={4} lg={4} xl={4} 
                    >
                        <RaisedButton 
                            onClick={ this.props.create }
                            className="button-main"
                            style={{
                                borderRadius: '1px',
                                padding: '10px, 24px',
                                fontWeight: 'bold',
                                width: '100%'
                            }}
                            >Create a New Creature
                        </RaisedButton>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}
const mapStateToProps = state => ({
    
});
export default connect(mapStateToProps)(About);