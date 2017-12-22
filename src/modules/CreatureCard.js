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
import { deleteCard } from '../redux/actions/DatabaseActions';

class CreatureCard extends React.Component {
    render() {
        console.log(this.props);

    //     console.log(this.props);
        let weaponComponentToRender;
        let scholarlyComponentToRender;
        let physicalDefenseComponentToRender;
        let spellDefenseComponentToRender;
        let racialDefenseComponentToRender;
        let treasureComponentToRender;
        let notesComponentToRender;

    //     let creature = this.props.creature;
    //     let card_id = creature._id;
    //     let deleteCard = this.props.deleteCard;
    //     let editCard = this.props.editCard;

        let basicStats = {
            name: this.props.currentCard.name,
            category: this.props.currentCard.category,
            level: this.props.currentCard.level,
            body: this.props.currentCard.body,
            armor: this.props.currentCard.armor,
            description: this.props.currentCard.description
        };

        let scholarStats = this.props.currentCard.scholarlySkills;
        let weaponStats = this.props.currentCard.weaponSkills;
        let physicalDefenses = this.props.currentCard.physicalDefenses;
        let spellDefenses = this.props.currentCard.spellDefenses;
        let racialDefenses = this.props.currentCard.racialDefenses;
        let treasure = this.props.currentCard.treasure;
        let notes = this.props.currentCard.special;

        if (Object.keys(this.props.currentCard).includes("weaponSkills")) {
            weaponComponentToRender = <WeaponStats stats={ weaponStats } />
        }
        if (Object.keys(this.props.currentCard).includes("scholarlySkills")) {
            scholarlyComponentToRender = <ScholarStats stats={ scholarStats } />
        }
        if (Object.keys(this.props.currentCard).includes("physicalDefenses")) {
            physicalDefenseComponentToRender = <PhysicalDefenses stats={ physicalDefenses } />
        }
        if (Object.keys(this.props.currentCard).includes("spellDefenses")) {
            spellDefenseComponentToRender = <SpellDefenses stats={ spellDefenses } />
        }
        if (Object.keys(this.props.currentCard).includes("racialDefenses")) {
            racialDefenseComponentToRender = <RacialDefenses stats={ racialDefenses } />
        }
        if (Object.keys(this.props.currentCard).includes("treasure")) {
            treasureComponentToRender = <Treasure treasure={ treasure } />
        }
        if (Object.keys(this.props.currentCard).includes("special")) {
            notesComponentToRender = <Notes notes={ notes } />
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
                <div>
                    {notesComponentToRender}
                </div>
                {/* <RaisedButton card_id={ card_id } onClick={ this.props.editCard }>Edit</RaisedButton> */}
                <RaisedButton >Back</RaisedButton>
                <DeleteDialog deleteCard={ this.props.delete } card={ this.props.currentCard._id } />
            </div>
        )
    }
}
const mapStateToProps = (state, props) => ({
    currentCard: state.database.currentCard
})
const mapDispatchToProps = (dispatch, ownProps) => {
    console.log(ownProps);
    let id;
    return {
        delete: () => {
            console.log("deleted pushed");
            dispatch(deleteCard());
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CreatureCard);