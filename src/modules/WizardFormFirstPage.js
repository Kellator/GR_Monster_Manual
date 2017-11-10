import React from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from './validate';
// import renderField from './renderField';
import RaisedButton from 'material-ui/RaisedButton';

import { TextField, SelectField } from 'redux-form-material-ui';
import MenuItem from 'material-ui/MenuItem';

let WizardFormFirstPage = props => {
  const { handleSubmit } = props
  return (
    <form onSubmit={handleSubmit}>
        <p>Enter name of new monster (required).</p>
        <Field
            name="monster_name"
            type="text"
            component={TextField}
            label="Monster Name"
        />
        <p>Choose one type of monster (required).</p>
            <Field 
            name="monster_category"
            label="Monster Category"
            component={SelectField}>
                <MenuItem value={"Animal"} primaryText="Animal" />
                <MenuItem value={"Elemental"} primaryText="Elemental" />
                <MenuItem value={"Fae"} primaryText="Fae" />
                <MenuItem value={"Giant"} primaryText="Giant" />
                <MenuItem value={"Goblinoid"} primaryText="Goblinoid" />
                <MenuItem value={"Human"} primaryText="Human" />
                <MenuItem value={"Humanoid"} primaryText="Humanoid" />
                <MenuItem value={"Magical Creature"} primaryText="Magical Creature" />
                <MenuItem value={"Undead"} primaryText="Undead" />
            </Field>
        <p>Choose monster level of difficulty (required).</p>
            <Field
            name="monster_level"
            label="Monster Level"
            component={SelectField}>
                <MenuItem value={"Low"} primaryText="Low" />
                <MenuItem value={"Mid"} primaryText="Mid" />
                <MenuItem value={"High"} primaryText="High" />
            </Field>
        <p>Enter the body points (required) and armor points for the monster, if applicable.</p>
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
            <p>Enter the physical description of the monster.</p>
            <p>This description should include the visible appearance of the monster.</p>
            <p>Inlcude brief makeup and costuming instructions if applicable.</p>
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