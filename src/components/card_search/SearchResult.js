import React from 'react';
import {List, ListItem} from 'material-ui/List';
import { connect } from 'react-redux';
import { setCard } from '../../redux/actions/DatabaseActions';
import { showCardView } from '../../redux/actions/ViewActions';

class SearchResult extends React.Component {
    render() {
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
    let result = ownProps.result;
    let id = result._id
    return {
        showCard: () => {
            dispatch(setCard(id));
            dispatch(showCardView());
            }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SearchResult);