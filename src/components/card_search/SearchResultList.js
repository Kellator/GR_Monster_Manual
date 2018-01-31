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
            <div>
                <List style={{textAlign: 'center'}}>
                    { results }
                </List>

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
            </div>
        )
    }
}
export default SearchResultList;