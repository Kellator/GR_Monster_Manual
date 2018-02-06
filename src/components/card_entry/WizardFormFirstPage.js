import React from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from './validate';
import { connect } from 'react-redux';
import Grid from 'material-ui-next/Grid';
import {RadioButton } from 'material-ui/RadioButton';
import FlatButton from 'material-ui/FlatButton';
import { RadioButtonGroup } from 'redux-form-material-ui';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import RaisedButton from 'material-ui/RaisedButton';
import { TextField, SelectField } from 'redux-form-material-ui';
import MenuItem from 'material-ui/MenuItem';
import InstructionDialog from './instruction_modals/InstructionDialog'

let WizardFormFirstPage = props => {
  const { handleSubmit } = props
  let pageNumber = props.pageNumber;
  return (
      <Grid item xs={12} sm={8} md={8} lg={6} >
        <form onSubmit={handleSubmit} className="card-entry div-opaque-color align-center " id="basic-stats-entry" >
            <div>
                <p>Enter Name of New Creature <span className="red-text" >(required)</span></p>
                <Field
                    name="monster_name"
                    type="text"
                    component={TextField}
                    label="Monster Name"
                    className="form-container"
                    placeholder="creature name"
                />
            </div>
            <div>
                <p>Type of Creature<span className="red-text" >(required)</span></p>
                <Field component={SelectField} label="Monster Category" name="monster_category" className="form-container" >
                    <MenuItem value="Animal" primaryText="Animal" className="light-text" /> 
                    <MenuItem value="Elemental" primaryText="Elemental" className="light-text" />
                    <MenuItem value="Fae" primaryText="Fae" className="light-text" />
                    <MenuItem value="Giant" primaryText="Giant" className="light-text" />
                    <MenuItem value="Goblinoid" primaryText="Goblinoid" className="light-text" />                   
                    <MenuItem value="Human" primaryText="Human" className="light-text" />
                    <MenuItem value="Humanoid" primaryText="Humanoid" className="light-text" />
                    <MenuItem value="Magical Creature" primaryText="Magical Creature" className="light-text" />
                    <MenuItem value="Undead" primaryText="Undead" className="light-text" />
                </Field>
            </div>
            <div>
                <p>Level of Difficulty <span className="red-text" >(required)</span></p>
                <Field 
                    name="monster_level" 
                    component={SelectField} 
                    label="Monster Level" 
                    className="form-container"
                > 
                    <MenuItem value="Low" primaryText="Low" label="Low" className="light-text"/>
                    <MenuItem value="Mid" primaryText="Mid" label="Mid" className="light-text"/>
                    <MenuItem value="High" primaryText="High" label="High"className="light-text"/>
                </Field>
            </div>    
                <label>
                Body Points {' '} <span className="red-text" >(required) </span>
                <Field
                    name="monster_body_points"
                    type="number"
                    component={TextField}
                    className="form-container"
                    placeholder="#"
                    >
                </Field>
                </label><br/>
                <label>
                    Armor Points {' '}
                <Field
                    name="monster_armor_points"
                    type="number"
                    component={TextField}
                    label="Armor Points"
                    className="form-container"
                    placeholder="#"
                />           
                </label>
                <p>Physical Description</p>
                <p>Should include costume and makeup instructions if applicable.</p>
                <Field
                    name="monster_description"
                    type="TextArea"
                    component={TextField}
                    label="Physical Description"
                    maxLength="200"
                    className="form-container"
                    placeholder="limit to 200 characters"
                />
                <Grid container justify="center">
                    <Grid item xs={6} sm={2} md={2}>                        
                        <RaisedButton 
                            type="submit" 
                            className="next full-size-button"
                            style={{
                                borderRadius: "1px",
                                fontWeight: "bold",
                                display: "block",
                                fontSize: "1.5rem"                   
                            }}
                        >
                        Next
                        </RaisedButton>                        
                    </Grid>
                    <Grid item xs={12} style={{textAlign: "center"}} >
                        <InstructionDialog />
                    </Grid>                    
                </Grid>
        </form>
    </Grid>
  )
}

export default reduxForm({
  form: 'wizard', // <------ same form name
  destroyOnUnmount: false, // <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
})(WizardFormFirstPage)