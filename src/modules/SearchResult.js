import React from 'react';
import {List, ListItem} from 'material-ui/List';
import { connect } from 'react-redux';
import { test } from '../redux/actions/DatabaseActions';
import { showCardView } from '../redux/actions/ViewActions';


class SearchResult extends React.Component {
    render() {
        console.log(this.props)
        console.log(this.props.index);
        let creature = this.props.result;
        let index = this.props.index;
        let name = creature.name;
        let level = creature.level;
        let category = creature.category; 
        return (
            <div>
                <ListItem onClick={ this.props.showCard } 
                        primaryText={ name + " (" + level + ")"}
                        secondaryText={ category }
                />
            </div>
        )
    }
}
const mapStateToProps = (state, props) => ({});
const mapDispatchToProps = (dispatch, ownProps) => {
    console.log(ownProps);
    let result = ownProps.result;
    let id = result._id
    console.log(result);
    return {
        showCard: () => {
            console.log("show card clicked");
            dispatch(test(id));
            dispatch(showCardView());
            }
    }


}
export default connect(mapStateToProps, mapDispatchToProps)(SearchResult);