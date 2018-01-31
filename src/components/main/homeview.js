import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Grid from 'material-ui-next/Grid';
import BasicSearch from '../card_search/BasicSearch.js';

// div with search or enter
class HomeView extends React.Component {
    render() {
        const style = {
            marginTop: '5rem',
            textAlign: 'center',
        }
        return (
            // <Grid item 
            //     xs={12} sm={12} md={8} lg={8} xl={8} 
            //     className="div-opaque-color "
            //     style={{margin: 'auto'}}
            // >
                <div className="div-center div-opaque-color" style={{margin: 'auto', padding: '20px'}} > 
                    <h2 style={{paddingTop:'20px'}}>Search by name or type of creature.</h2>
                    <BasicSearch />
                </div>
            // </Grid>
        )
    }
};
export default HomeView;