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
        <form onSubmit={handleSubmit} className='stat-container' id="basic-stats-entry" >
            <Grid item
                md={6}   
            >
                <p>Enter Name of New Creature (required).</p>
                <Field
                    name="monster_name"
                    type="text"
                    component={TextField}
                    label="Monster Name"
                    className="form-container"
                    placeholder="creature name"
                />
            </Grid>
            <Grid item
                md={6}     
            >
            <p>Choose One Category of Creature (required).</p>
                <Field name="monster_category"  
                    component={RadioButtonGroup} 
                    label="Monster Category" 
                    defaultSelected="Animal"
                    className="form-container"
                >             
                    <RadioButton value="Animal" label="Animal"/>
                    <RadioButton value="Elemental" label="Elemental"/>
                    <RadioButton value="Fae" label="Fae"/>
                    <RadioButton value="Giant" label="Giant"/>
                    <RadioButton value="Goblinoid" label="Goblinoid"/>
                    <RadioButton value="Human" label="Human"/>
                    <RadioButton value="Humanoid" label="Humanoid"/>
                    <RadioButton value="Magical Creature" label="Magical Creature"/>
                    <RadioButton value="Undead" label="Undead"/>
                </Field>
            </Grid>
            <Grid item
                md={6}  
            >
            <p>Choose Level of Difficulty (required).</p>
                <Field 
                    name="monster_level" 
                    component={RadioButtonGroup} 
                    label="Monster Level" 
                    defaultSelected="Low"
                    className="form-container"
                > 
                    <RadioButton value="Low" label="Low"/>
                    <RadioButton value="Mid" label="Mid"/>
                    <RadioButton value="High" label="High"/>
                </Field>
                </Grid>
            {/* <p>Enter the Body Points (required) and Armor Points for the Creature, if applicable.</p>
            <p>Use only numbers.</p> */}
            <Grid item
                md={6}  
            >
                <label>
                Body Points {' '}
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
                </Grid>
                {/* <p>Include a Physical Description.</p>
                <p>This description should include the visible appearance of the monster.</p>
                <p>Include brief makeup and costuming instructions if applicable.</p> */}
                <Grid item
                    md={6}   
                    >
                <p>Physical Description</p>
                <p>Should include costume and makeup instructions if applicable.</p>
                {/* <p>Limit of 200 characters.</p> */}
                <Field
                    name="monster_description"
                    type="TextArea"
                    component={TextField}
                    label="Physical Description"
                    maxLength="200"
                    className="form-container"
                    placeholder="limit to 200 characters"
                />
                </Grid>
                <Grid container justify="center">
                    <Grid item xs={12} md={4}>
                        <div className="">
                            <RaisedButton type="submit" className="next full-size-button">
                            Next
                            </RaisedButton>
                        </div>
                    </Grid>
                    <Grid item xs={12}>
                        <InstructionDialog />
                    </Grid>
                </Grid>
        </form>
  )
}

export default reduxForm({
  form: 'wizard', // <------ same form name
  destroyOnUnmount: false, // <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
})(WizardFormFirstPage)