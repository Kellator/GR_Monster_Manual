import React from 'react';

class WeaponStats extends React.Component {
    render() {
        console.log(this.props)
        let stats = this.props.stats;
        let weaponType;
            if (!stats.basicWeaponSkills.weaponType) {
                weaponType = "NO BASIC WEAPON SKILLS"
            }
            else {
                weaponType = stats.basicWeaponSkills.weaponType
            }
        let slays;
        let hasSlays;
        let advancedWeaponSkills;
        let hasAdvancedWeaponSkills = stats.advancedWeaponSkills.hasAdvancedWeaponSkills;
        console.log(stats.advancedWeaponSkills.hasAdvancedWeaponSkills)
            if (hasAdvancedWeaponSkills) {
               //switch case for slays and assassinates
               advancedWeaponSkills = <div><p>"has skills"</p></div> 
            }
            else {
                advancedWeaponSkills = "CREATURE DOES NOT HAVE ADVANCED WEAPONS SKILLS";
            }
        return (
            <div>
                <h3>Weapons Stats</h3>
                <p><span>Weapons Type:  {weaponType}</span></p>
                <div>
                    <h4>Advanced Weapons Skills</h4>
                    <div>{ advancedWeaponSkills }</div>
                </div>
            </div>
        )
    }
};
export default WeaponStats;