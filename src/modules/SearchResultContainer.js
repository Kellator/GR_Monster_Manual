import React from 'react';
import SearchResultList from './SearchResultList.js'
import NoResults from './NoResults.js';
import { connect } from 'react-redux';

class SearchResultContainer extends React.Component {
    render() {
        console.log(this.props);
        let resultArray = this.props.resultsList;
        console.log(resultArray);
        if (resultArray.length === 0) {
            return <NoResults />
        }
        return(
            <SearchResultList resultsList={ this.props.resultsList }/>
        )
    }
}
const mapStateToProps = (state, props) => ({
    resultsList: state.database.resultsList
});
export default connect(mapStateToProps)(SearchResultContainer);