import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Grid from 'material-ui-next/Grid';
import BasicSearch from '../card_search/BasicSearch.js';


// div with search or enter
class HomeView extends React.Component {
    render() {
        console.log(this.props)
        const style = {
            marginTop: "5rem",
            textAlign: "center",
        }
        return (
            <Grid item 
                sm={8} md={6} lg={3}
                className="div-opaque-color "
                style={{margin: "auto"}}
            >
                <div className="div-center div-opaque-color" style={{margin: "auto", padding: "20px"}} > 
                    <h2 style={{paddingTop:"20px"}}>Search by Creature Name</h2>
                    <BasicSearch />
                </div>
            </Grid>
        )
    }
};
export default HomeView;