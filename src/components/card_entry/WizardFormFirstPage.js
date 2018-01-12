import React from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from './validate';
import { connect } from 'react-redux';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import RaisedButton from 'material-ui/RaisedButton';
import { TextField, SelectField } from 'redux-form-material-ui';
import MenuItem from 'material-ui/MenuItem';

let WizardFormFirstPage = props => {
  const { handleSubmit } = props
  let pageNumber = props.pageNumber;
  return (
    <form onSubmit={handleSubmit}>
        <p>Enter Name of New Creature (required).</p>
        <Field
            name="monster_name"
            type="text"
            component={TextField}
            label="Monster Name"
        />
        <p>Choose One Category of Creature (required).</p>
            <RadioButtonGroup name="monster_category" label="Monster Category">             
                <RadioButton value="Animal" label="Animal"/>
                <RadioButton value="Elemental" label="Elemental"/>
                <RadioButton value="Fae" label="Fae"/>
                <RadioButton value="Giant" label="Giant"/>
                <RadioButton value="Goblinoid" label="Goblinoid"/>
                <RadioButton value="Human" label="Human"/>
                <RadioButton value="Humanoid" label="Humanoid"/>
                <RadioButton value="Magical Creature" label="Magical Creature"/>
                <RadioButton value="Undead" label="Undead"/>
            </RadioButtonGroup>
        <p>Choose Level of Difficulty (required).</p>
            <RadioButtonGroup name="monster_level" label="Monster Level"> 
                <RadioButton value="Low" label="Low"/>
                <RadioButton value="Mid" label="Mid"/>
                <RadioButton value="High" label="High"/>
            </RadioButtonGroup>
        <p>Enter the Body Points (required) and Armor Points for the Creature, if applicable.</p>
        <p>Use only numbers.</p>
            <label>
            Body Points {' '}
            <Field
                name="monster_body_points"
                type="number"
                component={TextField}
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
            />           
            </label>
            <p>Include a Physical Description.</p>
            <p>This description should include the visible appearance of the monster.</p>
            <p>Include brief makeup and costuming instructions if applicable.</p>
            <p>Limit of 200 characters.</p>
            <Field
                name="monster_description"
                type="TextArea"
                component={TextField}
                label="Physical Description"
                maxLength="200"
            />
        <div>
            <RaisedButton type="submit" className="next">
            Next
            </RaisedButton>
        </div>
    </form>
  )
}

export default reduxForm({
  form: 'wizard', // <------ same form name
  destroyOnUnmount: false, // <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
})(WizardFormFirstPage)