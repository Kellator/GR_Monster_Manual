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
        let assassinates;
        let hasAssassinates;
        // let advancedWeaponSkills;
        let advancedWeaponSkills = stats.advancedWeaponSkills;
        let hasAdvancedWeaponSkills = stats.advancedWeaponSkills.hasAdvancedWeaponSkills;
        console.log(Object.keys(advancedWeaponSkills));
        switch (hasAdvancedWeaponSkills) {
            case true:
                console.log('hello');
                hasSlays = stats.advancedWeaponSkills.slays.hasSlays;
                hasAssassinates = stats.advancedWeaponSkills.assassinates.hasAssassinates;
                switch (hasSlays) {
                    case true:
                        console.log('hasSlays');
                        let numOfSlays = stats.advancedWeaponSkills.slays.numberOfSlays;
                        slays = <div><p><span>Slays: {numOfSlays}</span></p></div>
                        break;
                    case false:
                        console.log('has no slays');
                        break;
                    default:
                        console.log('default slay result');
                }
                switch (hasAssassinates) {
                    case true:
                        console.log('assassinates');
                        let numOfAssassinates = stats.advancedWeaponSkills.assassinates.numberOfAssassinates;
                        assassinates = <div><p><span>Assassinates: {numOfAssassinates}</span></p></div>
                        break;   
                    case false:
                        console.log('no assassinates');
                        break;
                    default :
                        console.log('default assassinate');                     
                }
                break;
            case false:
                console.log('result is false');
                break;
            default:
                console.log('default result');                
        }
        return (
            <div>
                <h3>Weapons Stats</h3>
                <p><span>Weapons Type:  { weaponType }</span></p>
                <div>
                    <h4>Advanced Weapons Skills</h4>
                    <div>{ slays }</div>
                    <div>{ assassinates }</div>
                </div>
            </div>
        )
    }
};
export default WeaponStats;