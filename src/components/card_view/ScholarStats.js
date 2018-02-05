import React from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import Grid from 'material-ui-next/Grid';

class ScholarStats extends React.Component {
    render() {
        console.log(this.props);
        let stats = this.props.stats;
        let primarySchool;
        let secondarySchool;
        let magicCompToRender;
        let alchemyCompToRender;
        let primaryFormalCompToRender;
        let secondaryFormalCompToRender;
        let alchemyComponentToRender;
        let text;
        let textComponentToRender;
        // determines if creature has alchemy
        if (Object.keys(stats).includes("alchemy")) {
            let levelsOfAlchemy = stats.alchemy.levelsOfAlchemy;
            alchemyComponentToRender = 
                <p><span>Levels of Alchemy:  {levelsOfAlchemy}</span></p>
        }
        // special instruction text display
        if (Object.keys(stats).includes("magicSpecialInstructions")) {
            text = stats.magicSpecialInstructions;
            textComponentToRender = 
                <p><span>Special Instructions:  {text}</span></p>
        }
        // determines if creature has magical skills
        if (Object.keys(stats).includes("magic")) {
            let magic = stats.magic;
            // determines if creature has multiple schools of magic
            // currently only 2 spell schools are available at a time
            if (Object.keys(magic).includes("primarySchool") && Object.keys(magic).includes("secondarySchool")) {
                // sets display tags for formal magic skills if present
                if (Object.keys(magic.primarySchool).includes("formalMagic") && Object.keys(magic.secondarySchool).includes("secondaryFormal")) {
                    let primaryFormalLevels = magic.primarySchool.formalMagic.primaryFormalLevels;
                    let secondaryFormalLevels = magic.secondarySchool.secondaryFormal.secondaryFormalLevels;
                    primaryFormalCompToRender = 
                        <p><span>Levels of Formal:  {primaryFormalLevels}</span></p>
                    secondaryFormalCompToRender =
                        <p><span>Levels of Formal:  {secondaryFormalLevels}</span></p>
                }
                // sets display tag if only primary formal school is present
                else if (Object.keys(magic.primarySchool).includes("formalMagic")) {
                    let primaryFormalLevels = magic.primarySchool.formalMagic.primaryFormalLevels;
                    primaryFormalCompToRender = 
                        <p><span>Levels of Formal:  {primaryFormalLevels}</span></p>
                }
                // sets display for primary and secondary schools of magic when both are present
                // incorporates formal magic as applicable
                primarySchool = magic.primarySchool.primarySchool;
                let primaryColumn = magic.primarySchool.primaryColumn;
                secondarySchool = magic.secondarySchool.secondarySchool;
                let secondaryColumn = magic.secondarySchool.secondaryColumn;
                magicCompToRender = 
                    <div>
                        <div>
                            <p><span>Primary School of Magic:  {primarySchool}</span></p>
                            <p><span>{primaryColumn}</span></p>
                            {primaryFormalCompToRender}
                        </div>
                        <div>
                            <p><span>Secondary School of Magic:  {secondarySchool}</span></p>
                            <p><span>{secondaryColumn}</span></p>
                            {secondaryFormalCompToRender}
                        </div>
                    </div>
            }
            // sets display if only one school of magic is present
            // includes logic to display formal magic, if present
            else if (Object.keys(magic).includes("primarySchool")) {
                if (Object.keys(magic.primarySchool).includes("formalMagic")) {
                    let primaryFormalLevels = magic.primarySchool.formalMagic.primaryFormalLevels;
                    primaryFormalCompToRender = 
                        <p><span>Levels of Formal:  {primaryFormalLevels}</span></p>
                }
                primarySchool = magic.primarySchool.primarySchool;
                let primaryColumn = magic.primarySchool.primaryColumn;
                magicCompToRender = 
                    <div>
                        <p><span>Primary School of Magic:  {primarySchool}</span></p>
                        <p><span>{primaryColumn}</span></p>
                        {primaryFormalCompToRender}                        
                    </div>
            }
        }
        return(
            <Grid
                item
                xs={12}
                sm={6}
                md={6}
                lg={4}
                xl={4}
                style={{margin: 'auto'}}
                id='scholar-stats-container'
                className="stat-container"
            >
                <div className="light-text stat-div" >
                    {/* <CardHeader subtitle={"Scholarly Skills"}/> */}
                    <p className="skill-underline">SCHOLARLY SKILLS</p>
                    {alchemyComponentToRender}
                    {magicCompToRender}
                    {textComponentToRender}
                </div>
            </Grid>
        )
    }
}
export default ScholarStats;