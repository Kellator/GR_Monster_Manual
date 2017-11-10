import React from 'react';
import { connect } from 'react-redux';

class CreatureCard extends React.Component {
    render() {
        console.log(this.props)
        return( 
            <div>
                <p>Here is the creature card.</p>
            </div>
        )
    }
}
const mapStateToProps = (state, props) => ({
    creature: state.database.cardView
});
export default connect(mapStateToProps)(CreatureCard);