import React from 'react';
import { connect } from 'react-redux';
import Grid from 'material-ui-next/Grid';
import SearchResultList from './SearchResultList.js'
import NoResults from './NoResults.js';


class SearchResultContainer extends React.Component {
    render() {
        let data = this.props.data;
        console.log(data)
        if (data.length === 0) {
            return <NoResults home={ this.props.home }/>
        }
        return(
            <Grid 
                container 
                spacing={24}
                justify="center"
                alignItems="center" 
                className=""
            >
                <SearchResultList 
                data={ data } 
                home={ this.props.home }
                />
            </Grid>
        )
    }
}
const mapStateToProps = (state, props) => ({
    data: state.database.data
});
export default connect(mapStateToProps)(SearchResultContainer);