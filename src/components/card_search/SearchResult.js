import React from 'react';
import {List, ListItem, ListItemText} from 'material-ui/List';
import Grid from 'material-ui-next/Grid';
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
        const secondaryText = 
            <div style={{fontWeight: 'bold', fontSize: '1.25rem', paddingTop: '8px'}}>
                {category}
            </div>

        return (
            // <Grid 
            //     item
            //     xs={12}
            //     sm={12}
            //     md={12}
            //     lg={12}
            //     xl={12}
            //     className='grid-item-return'
            // >
                <ListItem onClick={ this.props.showCard } 
                        primaryText={ name + " (" + level + ")"}
                        secondaryText={ secondaryText }
                        style={{fontSize: '2rem', fontWeight: 'bolder'}}
                        className="red-text list-item"
                        >
                </ListItem>
            // </Grid>
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