import React from 'react';
import SearchResultList from './SearchResultList.js'
import NoResults from './NoResults.js';
import { connect } from 'react-redux';

class SearchResultContainer extends React.Component {
    render() {
        let data = this.props.data;
        console.log(data)
        if (data.length === 0) {
            return <NoResults home={ this.props.home }/>
        }
        return(
            <div>
                <SearchResultList 
                data={ data } 
                home={ this.props.home }
                />
            </div>
        )
    }
}
const mapStateToProps = (state, props) => ({
    data: state.database.data
});
export default connect(mapStateToProps)(SearchResultContainer);