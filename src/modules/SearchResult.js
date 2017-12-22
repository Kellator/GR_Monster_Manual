import React from 'react';

import {List, ListItem} from 'material-ui/List';


class SearchResult extends React.Component {
    render() {
        console.log(this.props)
        let monster = this.props.result;
        let name = monster.name;
        let level = monster.level;
        let category = monster.category; 
        // let func = () => {
        //     this.props.showCardView(monster);
        // }
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
// const mapStateToProps = (state, props) => ({
//     data: state.data
// })
// const mapDispatchToProps = (dispatch, ownProps) => {
//     return {
//         showCard: () => {
//             dispatch(showCardView())
//         }
//     }
// }
export default SearchResult;