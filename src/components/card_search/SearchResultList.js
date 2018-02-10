import React from 'react';
import SearchResult from './SearchResult.js';
import {List, ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';
import Grid from 'material-ui-next/Grid';

class SearchResultList extends React.Component {
    render() {
        const results = (this.props.data) ? this.props.data.map((result, index) => {
            return <SearchResult showCard={ this.props.showCard } key={ index } index={ index } result={ result } />
        }) : undefined;
        return(
            <div>
                <Grid container justify="center">
                    <Grid item>
                        <List style={{textAlign: "center"}}>
                            { results }
                        </List>
                    </Grid>
                </Grid>
                <Grid container justify="center">
                    <Grid item xs={6} sm={2} md={2} >
                        <RaisedButton 
                            onClick={ this.props.home }
                            style={{
                                borderRadius: "1px",
                                fontWeight: "bold",
                                display: "block",
                                fontSize: "1.5rem"                   
                            }}
                        >BACK</RaisedButton>
                    </Grid>
                </Grid>
            </div>
        )
    }
}
export default SearchResultList;