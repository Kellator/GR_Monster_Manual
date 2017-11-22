import React from 'react';
import { connect } from 'react-redux';
import BasicStats from './BasicStats.js';
import WeaponStats from './WeaponStats.js';
import ScholarStats from './ScholarStats.js';
import PhysicalDefenses from './PhysicalDefenses.js';
import SpellDefenses from './SpellDefenses.js';
import RacialDefenses from './RacialDefenses.js';
import Treasure from './Treasure.js';

class CreatureCard extends React.Component {
    render() {
        console.log(this.props)
        let weaponComponentToRender;
        let scholarlyComponentToRender;
        let physicalDefenseComponentToRender;
        let spellDefenseComponentToRender;
        let racialDefenseComponentToRender;
        let treasureComponentToRender;
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
        let spellDefenses = creature.spellDefenses;
        let racialDefenses = creature.racialDefenses;
        let treasure = creature.treasure;
        if (Object.keys(creature).includes("weaponSkills")) {
            weaponComponentToRender = <WeaponStats stats={ weaponStats } />
        }
        if (Object.keys(creature).includes("scholarlySkills")) {
            scholarlyComponentToRender = <ScholarStats stats={ scholarStats } />
        }
        if (Object.keys(creature).includes("physicalDefenses")) {
            physicalDefenseComponentToRender = <PhysicalDefenses stats={ physicalDefenses } />
        }
        if (Object.keys(creature).includes("spellDefenses")) {
            spellDefenseComponentToRender = <SpellDefenses stats={ spellDefenses } />
        }
        if (Object.keys(creature).includes("racialDefenses")) {
            racialDefenseComponentToRender = <RacialDefenses stats={ racialDefenses } />
        }
        if (Object.keys(creature).includes("treasure")) {
            treasureComponentToRender = <Treasure stats={ treasure } />
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
                <div>
                    {spellDefenseComponentToRender}
                </div>
                <div>
                    {racialDefenseComponentToRender}
                </div>
                <div>
                    {treasureComponentToRender}
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state, props) => ({
    creature: state.database.cardView
});
export default connect(mapStateToProps)(CreatureCard);