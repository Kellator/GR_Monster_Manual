import React from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';

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
        let alchemyComponentTotRender;
        let text;
        let textComponentToRender;
        // determines if creature has alchemy
        if (Object.keys(stats).includes("alchemy")) {
            let levelsOfAlchemy = stats.alchemy.levelsOfAlchemy;
            alchemyComponentTotRender = 
                <CardText><p><span>Levels of Alchemy:  {levelsOfAlchemy}</span></p></CardText>
        }
        // special instruction text display
        if (Object.keys(stats).includes("magicSpecialInstructions")) {
            text = stats.magicSpecialInstructions;
            textComponentToRender = 
                <CardText><p><span>Special Instructions:  {text}</span></p></CardText>
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
                    <CardText>
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
                    </CardText>
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
                    <CardText>
                        <p><span>Primary School of Magic:  {primarySchool}</span></p>
                        <p><span>{primaryColumn}</span></p>
                        {primaryFormalCompToRender}                        
                    </CardText>
            }
        }
        return(
            <Card>
                <CardHeader subtitle={"Scholarly Skills"}/>
                {alchemyComponentTotRender}
                {magicCompToRender}
                {textComponentToRender}
            </Card>
        )
    }
}
export default ScholarStats;