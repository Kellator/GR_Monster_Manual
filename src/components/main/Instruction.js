import React from 'react';
import {connect} from 'react-redux';
import Drawer from 'material-ui/Drawer';
import RaisedButton from 'material-ui/RaisedButton';
import Grid from 'material-ui-next/Grid';
import instructions from './InstructionText';

class Instruction extends React.Component {
    render() {
        console.log(this.props);
        let view = this.props.view;
        let page = this.props.page;
        let textToRender;
        let fields;
        switch(view) {
            case "home":
            textToRender = 
                <Grid item>
                    {
                        instructions.homeView.text.map(function(text, i) {
                            return <p key={i}>{text}</p>
                        })
                    }
                    <ul>
                        {
                            instructions.homeView.categoryList.map(function(category, i) {
                                return <li key={i}>{category}</li>
                            })
                        }
                    </ul>
                </Grid>
                break;
            case "create":
                if(page) {
                    textToRender = 
                    <Grid item>
                        {
                            instructions.createView.text[page].map(function(text, i) {
                                return <p key={i}>{text}</p>
                            })
                        }
                    </Grid>
                }
                else {
                    textToRender = <div><p>Nothing to see here.</p></div>
                }
                break;
            case "new card":
            textToRender = 
                <Grid item>
                    {
                        instructions.newCardView.text.map(function(text, i) {
                            return <p key={i}>{text}</p>
                        })
                    }
                </Grid>
                break;
            case "card":
            textToRender = 
                <Grid item>
                    {
                        instructions.cardView.text.map(function(text, i) {
                            return <p key={i}>{text}</p>
                        })
                    }
                </Grid>
                break;
            case "results list":
            textToRender = 
                <Grid item>
                    {
                        instructions.resultsListView.text.map(function(text, i) {
                            return <p key={i}>{text}</p>
                        })
                    }
                </Grid>
                break;
            case "error":

                break;
        default:
        }
        return(
            <Grid container>{textToRender}</Grid>
        );
    }
};
export default Instruction;