import React from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import Grid from 'material-ui-next/Grid/Grid';

class WeaponStats extends React.Component {
    render() {
        let stats = this.props.stats;
        let weaponType;
            if (!stats.basicWeaponSkills) {
                weaponType = "NO BASIC WEAPON SKILLS"
            }
            else {
                weaponType = stats.basicWeaponSkills
            }
        let slays;        
        let assassinates;        
        let advancedWeaponSkills;
        let compToRender;
        let plusStrength;
        let strengthCompToRender;
        // logic to control returned element if Object Key is present
        if (Object.keys(stats).includes("plusStrength")) {
            plusStrength = stats.plusStrength;
            strengthCompToRender =
            <div>
                <p><span>{plusStrength}</span></p>
            </div>
        }
        // displays slay and/or assassinate times per day
        if (Object.keys(stats).includes("advancedWeaponSkills")) {
            advancedWeaponSkills = stats.advancedWeaponSkills;
            // if both keys are included, below code executes to display x/day for both
            if (Object.keys(advancedWeaponSkills).includes("assassinates") && 
            Object.keys(advancedWeaponSkills).includes("slays")) {
                assassinates = advancedWeaponSkills.assassinates;
                slays = advancedWeaponSkills.slays;
                let numOfAssassinates = assassinates.numberOfAssassinates;
                let numOfSlays = slays.numberOfSlays;
                compToRender =
                <div>
                    <p><span>Assassinates per day:  {numOfAssassinates}</span></p>
                    <p><span>Slays per day:  {numOfSlays}</span></p>
                </div>
            }
            // if only one or the other key is present, below code executes to display applicable skill
            else if (Object.keys(advancedWeaponSkills).includes("assassinates")) {
                assassinates = advancedWeaponSkills.assassinates;
                let numOfAssassinates = assassinates.numberOfAssassinates;
                compToRender =
                    <div>
                        <p><span>Assassinates per day:  {numOfAssassinates}</span></p>
                    </div>
            }
            else if (Object.keys(advancedWeaponSkills).includes("slays")) {
                slays = advancedWeaponSkills.slays;
                let numOfSlays = slays.numberOfSlays;
                compToRender = 
                    <div>
                        <p><span>Slays per day:  {numOfSlays}</span></p>
                    </div>                    
            }
        }
        return (
            <Grid
                item
                xs={12}
                sm={6}
                md={6}
                lg={4}
                xl={4}
                style={{margin: "auto"}}
                id="weapon-stat-container"
                className="stat-container"
            >
                <div className="light-text stat-div" >
                    <p className="skill-underline">WEAPON SKILLS</p>
                    <div>
                        <p><span>Weapons Type:  { weaponType }</span></p>
                        {compToRender}
                        {strengthCompToRender}
                    </div>
                </div>
            </Grid>
        )
    }
};
export default WeaponStats;
