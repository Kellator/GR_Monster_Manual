import React from 'react';
import BasicSearch from './BasicSearch.js';
import RaisedButton from 'material-ui/RaisedButton';
import Grid from 'material-ui-next/Grid';

class NoResults extends React.Component {
    render() {
        console.log(this.props);
        return(
            <div className="div-opaque-color div-center" style={{margin: 'auto', padding: '20px'}}>
                <Grid container justify="center">
                    <Grid item xs={12} sm={6} md={6} lg={4} xl={4} className="div-center">
                        <h3>Sorry!  Your search has returned no results.  
                            Check your spelling or try again using a different name or category.</h3>
                        <RaisedButton 
                            onClick={ this.props.home }
                            style={{
                                borderRadius: '1px',
                                padding: '10px, 24px',
                                fontWeight: 'bold',
                                marginTop: '2rem'
                            }}
                        >Back</RaisedButton>
                    </Grid>
                </Grid>
            </div>            
        )
    }
}
export default NoResults;
