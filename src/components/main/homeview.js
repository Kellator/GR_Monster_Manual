import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Grid from 'material-ui-next/Grid';
import BasicSearch from '../card_search/BasicSearch.js';
import CategorySearch from '../card_search/CategorySearch.js';

// div with search or enter
class HomeView extends React.Component {
    render() {
        console.log(this.props)
        const style = {
            marginTop: '5rem',
            textAlign: 'center',
        }
        return (
            <Grid item 
                sm={4} 
                className="div-opaque-color "
                style={{margin: 'auto'}}
            >
                <div className="div-center div-opaque-color" style={{margin: 'auto', padding: '20px'}} > 
                    <h2 style={{paddingTop:'20px'}}>Search by Creature Name</h2>
                    <BasicSearch />
                    {/* <h4 style={{paddingTop:'20px'}}>Search by Creature Category</h4>
                    <CategorySearch categorySearch={ this.props.categorySearch }/> */}
                </div>
            </Grid>
        )
    }
};
export default HomeView;