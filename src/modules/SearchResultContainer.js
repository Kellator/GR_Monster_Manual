import React from 'react';
import SearchResultList from './SearchResultList.js'
import NoResults from './NoResults.js';
import { connect } from 'react-redux';
import {showCardView} from '../redux/actions/ViewActions';

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
                <SearchResultList data={ data } showCard={ this.props.showCard }/>
            </div>
        )
    }
}
const mapStateToProps = (state, props) => ({
    data: state.database.data.data
});
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        showCard: () => {
            dispatch(showCardView())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SearchResultContainer);