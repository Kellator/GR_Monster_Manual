import React from 'react';
import { connect } from 'react-redux';
import BasicStats from './BasicStats.js';
import WeaponStats from './WeaponStats.js';
import ScholarStats from './ScholarStats.js';

class CreatureCard extends React.Component {
    render() {
        console.log(this.props)
        let creature = this.props.creature;

        let basicStats = {
            name: creature.name,
            category: creature.category,
            level: creature.level,
            body: creature.body,
            armor: creature.armor,
            description: creature.description
        };

        let scholarStats = creature.scholarlySkills;
        let weaponStats = creature.weaponSkills;
        return( 
            <div>
                <div>
                    <BasicStats stats={ basicStats }/>
                </div>
                <div>
                    <WeaponStats stats={ weaponStats } />
                </div>
                <div>
                    <ScholarStats stats={ scholarStats } />
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state, props) => ({
    creature: state.database.cardView
});
export default connect(mapStateToProps)(CreatureCard);