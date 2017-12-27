import React from 'react';
import SearchResultList from './SearchResultList.js'
import NoResults from './NoResults.js';
import { connect } from 'react-redux';

class SearchResultContainer extends React.Component {
    render() {
        console.log(this.props);
        let data = this.props.data;
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
    data: state.database.data.data
});
export default connect(mapStateToProps)(SearchResultContainer);