import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Grid from 'material-ui-next/Grid';
import BasicSearch from '../card_search/BasicSearch.js';
import InstructionDialog from '../card_entry/instruction_modals/InstructionDialog';
import instructions from '../main/InstructionText';

// div with search or enter
class HomeView extends React.Component {
    render() {
        console.log(this.props)
        const style = {
            marginTop: "5rem",
            textAlign: "center",
        }
        let text = instructions.homeView.text

        return (
            <Grid item 
                sm={8} md={6} lg={3}
                className="div-opaque-color "
                style={{margin: "auto"}}
            >
                <div className="div-center div-opaque-color" style={{margin: "auto", padding: "20px"}} > 
                    <h2 style={{paddingTop:"20px"}}>Search by Creature Name</h2>
                    <BasicSearch />
                    <InstructionDialog view={this.props.view} text={text}/>
                </div>
            </Grid>
        )
    }
};
export default HomeView;