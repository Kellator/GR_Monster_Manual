import React from 'react';
import SearchResult from './SearchResult.js';
import {List, ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';
import Grid from 'material-ui-next/Grid/Grid';

class SearchResultList extends React.Component {
    render() {
        const results = (this.props.data) ? this.props.data.map((result, index) => {
            return <SearchResult showCard={ this.props.showCard } key={ index } index={ index } result={ result } />
        }) : undefined;
        return(
            <Grid
                container
                spacing={24}
                justify='center'
                style={{
                    display: 'block'
                }}
            >
                <List >
                    { results }
                </List>
                <Grid 
                    item 
                    xs={12} sm={8} md={8} lg={6} xl={6}
                    className='centered-button'
                    style={{margin: 'auto'}}
                >
                    <RaisedButton 
                        onClick={ this.props.home }
                        style={{
                            borderRadius: '1px',
                            padding: '10px, 24px',
                            fontWeight: 'bold',
                            width: '100%',
                            marginTop: '2rem'                        
                        }}
                    >BACK</RaisedButton>
                </Grid>
            </Grid>
        )
    }
}
export default SearchResultList;