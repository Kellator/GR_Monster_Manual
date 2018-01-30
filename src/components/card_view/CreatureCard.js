import React from 'react';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardActions, CardHeader, CardTitle, CardText} from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import BasicStats from './BasicStats.js';
import WeaponStats from './WeaponStats.js';
import ScholarStats from './ScholarStats.js';
import PhysicalDefenses from './PhysicalDefenses.js';
import SpellDefenses from './SpellDefenses.js';
import RacialDefenses from './RacialDefenses.js';
import Treasure from './Treasure.js';
import Notes from './Notes.js';
import DeleteDialog from './Dialog.js';
import { deleteCard, returnNewList } from '../../redux/actions/DatabaseActions';
import {  showResultsListView } from '../../redux/actions/ViewActions';
import Grid from 'material-ui-next/Grid/Grid';

class CreatureCard extends React.Component {
    render() {
        let id = this.props.currentCard._id;
        let data = this.props.data;
        console.log(this.props.currentCard);
        let weaponComponentToRender;
        let scholarlyComponentToRender;
        let physicalDefenseComponentToRender;
        let spellDefenseComponentToRender;
        let racialDefenseComponentToRender;
        let treasureComponentToRender;
        let notesComponentToRender;

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
// renders component in appropriate section if data exists in mongo document
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
            <Grid
                container
                spacing={24}  
                justify="center"
                alignItems="center"
            >
                <Grid 
                    item
                    xs={12} 
                >
                    <div> 
                        <h2 >{this.props.currentCard.name}</h2> 
                        <h4 className="red-text">{this.props.currentCard.level}</h4> 
                    </div>
                </Grid>

                    <BasicStats stats={ basicStats }/>                        
                    {weaponComponentToRender}                        
                    {scholarlyComponentToRender}                        
                    {physicalDefenseComponentToRender}                        
                    {spellDefenseComponentToRender}                        
                    {racialDefenseComponentToRender}                        
                    {treasureComponentToRender}                        
                    {notesComponentToRender}

                {/* <RaisedButton card_id={ card_id } onClick={ this.props.editCard }>Edit</RaisedButton> */}
                <Grid
                    item
                    xs={12}
                    sm={12}
                    md={6}
                >
                    <RaisedButton 
                        onClick={ this.props.returnToList }
                        style={{width: '100%'}}
                    >Back</RaisedButton>
                </Grid>
                <Grid
                    item
                    xs={12}
                    sm={12}
                    md={6}
                >
                    <DeleteDialog 
                        deleteCard={ this.props.delete } 
                        id={ id }
                        data={ data } 
                        returnNewList={ this.props.returnNewList }
                        
                    />
                </Grid>
            </Grid>
        )
    }
}
const mapStateToProps = (state, props) => ({
    currentCard: state.database.currentCard,
    data: state.database.data.data
});
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        delete: (id) => {
            dispatch(deleteCard(id));
        },
        returnNewList: (id, data) => {
            dispatch(returnNewList(data, id));
        },
        returnToList: () => {
            dispatch(showResultsListView());
        }
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(CreatureCard);