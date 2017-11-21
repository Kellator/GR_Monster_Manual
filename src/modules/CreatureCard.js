import React from 'react';
import { connect } from 'react-redux';
import BasicStats from './BasicStats.js';
import WeaponStats from './WeaponStats.js';
import ScholarStats from './ScholarStats.js';
import PhysicalDefenses from './PhysicalDefenses.js';

class CreatureCard extends React.Component {
    render() {
        console.log(this.props)
        let weaponComponentToRender;
        let scholarlyComponentToRender;
        let physicalDefenseComponentToRender;
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
        let physicalDefenses = creature.physicalDefenses;
        if (Object.keys(creature).includes("weaponSkills")) {
            weaponComponentToRender = <WeaponStats stats={ weaponStats } />
        }
        if (Object.keys(creature).includes("scholarlySkills")) {
            scholarlyComponentToRender = <ScholarStats stats={ scholarStats } />
        }
        if (Object.keys(creature).includes("physicalDefenses")) {
            physicalDefenseComponentToRender = <PhysicalDefenses stats={ physicalDefenses } />
        }
        return( 
            <div>
                <div>
                    <BasicStats stats={ basicStats }/>
                </div>
                <div>
                    {weaponComponentToRender}
                </div>
                <div>
                    {scholarlyComponentToRender}
                </div>
                <div>
                    {physicalDefenseComponentToRender}
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state, props) => ({
    creature: state.database.cardView
});
export default connect(mapStateToProps)(CreatureCard);