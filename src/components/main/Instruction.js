import React from 'react';
import {connect} from 'react-redux';
import Drawer from 'material-ui/Drawer';
import RaisedButton from 'material-ui/RaisedButton';
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
                <div>
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
                </div>
                break;
            case "create":
                if(page) {
                    textToRender = 
                    <div>
                        {
                            instructions.createView.text[page].map(function(text, i) {
                                return <p key={i}>{text}</p>
                            })
                        }
                    </div>
                }
                else {
                    textToRender = <div><p>Nothing to see here.</p></div>
                }
                break;
            case "new card":
            textToRender = 
                <div>
                    {
                        instructions.newCardView.text.map(function(text, i) {
                            return <p key={i}>{text}</p>
                        })
                    }
                </div>
                break;
            case "card":
            textToRender = 
                <div>
                    {
                        instructions.cardView.text.map(function(text, i) {
                            return <p key={i}>{text}</p>
                        })
                    }
                </div>
                break;
            case "results list":
            textToRender = 
                <div>
                    {
                        instructions.resultsListView.text.map(function(text, i) {
                            return <p key={i}>{text}</p>
                        })
                    }
                </div>
                break;
            case "error":

                break;
        default:
        }
        return(
            <div>{textToRender}</div>
        );
    }
};
export default Instruction;