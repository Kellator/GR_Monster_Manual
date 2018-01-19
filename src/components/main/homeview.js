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
            <Grid item xs={12} className="div-opaque-color ">
                <div>
                    <h2>Search by name or type of creature.</h2>
                    <BasicSearch />
                </div>
                {/* <div>
                    <RaisedButton onClick={ this.props.create } className="button-main">Create New</RaisedButton>
                </div> */}
            </Grid>
        )
    }
};
export default HomeView;