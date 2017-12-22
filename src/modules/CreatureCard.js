import React from 'react';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import BasicStats from './BasicStats.js';
import WeaponStats from './WeaponStats.js';
import ScholarStats from './ScholarStats.js';
import PhysicalDefenses from './PhysicalDefenses.js';
import SpellDefenses from './SpellDefenses.js';
import RacialDefenses from './RacialDefenses.js';
import Treasure from './Treasure.js';
import Notes from './Notes.js';
import DeleteDialog from './Dialog.js';

class CreatureCard extends React.Component {
    render() {
        console.log(this.props);
        return(
            <div>creature card here</div>
        )
    //     console.log(this.props);
    //     let weaponComponentToRender;
    //     let scholarlyComponentToRender;
    //     let physicalDefenseComponentToRender;
    //     let spellDefenseComponentToRender;
    //     let racialDefenseComponentToRender;
    //     let treasureComponentToRender;
    //     let notesComponentToRender;

    //     let creature = this.props.creature;
    //     let card_id = creature._id;
    //     let deleteCard = this.props.deleteCard;
    //     let editCard = this.props.editCard;

    //     let basicStats = {
    //         name: creature.name,
    //         category: creature.category,
    //         level: creature.level,
    //         body: creature.body,
    //         armor: creature.armor,
    //         description: creature.description
    //     };

    //     let scholarStats = creature.scholarlySkills;
    //     let weaponStats = creature.weaponSkills;
    //     let physicalDefenses = creature.physicalDefenses;
    //     let spellDefenses = creature.spellDefenses;
    //     let racialDefenses = creature.racialDefenses;
    //     let treasure = creature.treasure;
    //     let notes = creature.special;

    //     if (Object.keys(creature).includes("weaponSkills")) {
    //         weaponComponentToRender = <WeaponStats stats={ weaponStats } />
    //     }
    //     if (Object.keys(creature).includes("scholarlySkills")) {
    //         scholarlyComponentToRender = <ScholarStats stats={ scholarStats } />
    //     }
    //     if (Object.keys(creature).includes("physicalDefenses")) {
    //         physicalDefenseComponentToRender = <PhysicalDefenses stats={ physicalDefenses } />
    //     }
    //     if (Object.keys(creature).includes("spellDefenses")) {
    //         spellDefenseComponentToRender = <SpellDefenses stats={ spellDefenses } />
    //     }
    //     if (Object.keys(creature).includes("racialDefenses")) {
    //         racialDefenseComponentToRender = <RacialDefenses stats={ racialDefenses } />
    //     }
    //     if (Object.keys(creature).includes("treasure")) {
    //         treasureComponentToRender = <Treasure treasure={ treasure } />
    //     }
    //     if (Object.keys(creature).includes("special")) {
    //         notesComponentToRender = <Notes notes={ notes } />
    //     }
    //     return( 
    //         <div>
    //             <div>
    //                 <BasicStats stats={ basicStats }/>
    //             </div>
    //             <div>
    //                 {weaponComponentToRender}
    //             </div>
    //             <div>
    //                 {scholarlyComponentToRender}
    //             </div>
    //             <div>
    //                 {physicalDefenseComponentToRender}
    //             </div>
    //             <div>
    //                 {spellDefenseComponentToRender}
    //             </div>
    //             <div>
    //                 {racialDefenseComponentToRender}
    //             </div>
    //             <div>
    //                 {treasureComponentToRender}
    //             </div>
    //             <div>
    //                 {notesComponentToRender}
    //             </div>
    //             {/* <RaisedButton card_id={ card_id } onClick={ this.props.editCard }>Edit</RaisedButton> */}
    //             <RaisedButton onClick={ this.props.showResultsList }>Back</RaisedButton>
    //             <DeleteDialog deleteCard={ deleteCard } card_id={ card_id }/>
    //         </div>
    //     )
    }
}
const mapStateToProps = (state, props) => ({
    currentCard: state.database.currentCard.data
})
export default connect(mapStateToProps)(CreatureCard);