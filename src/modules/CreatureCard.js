import React from 'react';
import { connect } from 'react-redux';
import BasicStats from './BasicStats.js';
import WeaponStats from './WeaponStats.js';

class CreatureCard extends React.Component {
    render() {
        console.log(this.props)
        let creature = this.props.creature;

        let basicStats = {
            name: this.props.creature.name,
            category: this.props.creature.category,
            level: this.props.creature.level,
            body: this.props.creature.body,
            armor: this.props.creature.armor,
            description: this.props.creature.description
        };

        let weaponStats = this.props.creature.weaponSkills;
        return( 
            <div>
                <div>
                    <BasicStats stats={ basicStats }/>
                </div>
                <div>
                    <WeaponStats stats={ weaponStats } />
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state, props) => ({
    creature: state.database.cardView
});
export default connect(mapStateToProps)(CreatureCard);