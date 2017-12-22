import React from 'react';
import SearchResultList from './SearchResultList.js'
import NoResults from './NoResults.js';
import { connect } from 'react-redux';


class SearchResultContainer extends React.Component {
    render() {
        console.log(this.props);
        let data = this.props.data;
        if (data.length === 0) {
            console.log("zero")
            return <NoResults />
        }
        return(
            <div>
                <SearchResultList data={ data } />
            </div>
        )
    }
}
const mapStateToProps = (state, props) => ({
    data: state.database.data.data
});
export default connect(mapStateToProps)(SearchResultContainer);