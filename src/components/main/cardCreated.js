import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Grid from 'material-ui-next/Grid';

// map state to props to display card name in <p>
class CardCreated extends React.Component {
    render() {
        return ( 
            <Grid container justify="center">           
                <Grid item xs={12} sm={8} md={6} className="align-center" >
                    <div id="creation-confirmation" className="card-entry div-opaque-color" >
                        <h1 className="form-container">New Creature Card added to the Codex.</h1>
                        <h3 className="form-container">Click HOME to return to the search or click ADD MORE to add more creatures.</h3>
                        <Grid container justify="space-around">
                            <Grid item xs={6} >
                                    <RaisedButton 
                                        onClick={ this.props.home }
                                        style={{
                                            borderRadius: "1px",
                                            fontWeight: "bold",
                                            display: "block",
                                            fontSize: "1.5rem"                   
                                        }}
                                    >Home</RaisedButton>
                                </Grid>
                            <Grid item xs={6} >
                                <RaisedButton 
                                    onClick={ this.props.create }
                                    style={{
                                        borderRadius: "1px",
                                        fontWeight: "bold",
                                        display: "block",
                                        fontSize: "1.5rem"                  
                                    }}
                                    // buttonStyle={{
                                    //     paddingLeft: "10px",
                                    //     paddingRight: "10px"
                                    // }}
                                >Add More</RaisedButton>
                            </Grid>
                        </Grid>
                    </div>
                </Grid> 
            </Grid>
        )
    }
}
export default CardCreated;