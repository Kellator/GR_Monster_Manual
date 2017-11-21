import React from 'react';

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
        // determines if creature has magical skills
        if (Object.keys(stats).includes("magic")) {
            let magic = stats.magic;
            console.log(magic)

            // determines if creature has multiple schools of magic
            // currently only 2 spell schools are available at a time
            if (Object.keys(magic).includes("primarySchool") && Object.keys(magic).includes("secondarySchool")) {
                // sets display tags for formal magic skills
                if (Object.keys(magic.primarySchool).includes("formalMagic") && Object.keys(magic.secondarySchool).includes("secondaryFormal")) {
                    let primaryFormalLevels = magic.primarySchool.formalMagic.primaryFormalLevels;
                    let secondaryFormalLevels = magic.secondarySchool.secondaryFormal.secondaryFormalLevels;
                    primaryFormalCompToRender = 
                        <p><span>Levels of Formal:  {primaryFormalLevels}</span></p>
                    secondaryFormalCompToRender =
                        <p><span>Levels of Formal:  {secondaryFormalLevels}</span></p>
                }
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
            <div>
                <h3>Scholarly Skills</h3>
                {magicCompToRender}
            </div>
        )
    }
}
export default ScholarStats;