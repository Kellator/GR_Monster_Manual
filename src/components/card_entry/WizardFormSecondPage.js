import React from 'react';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { connect } from 'react-redux';
import { Checkbox, TextField, SelectField } from 'redux-form-material-ui';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import { RadioButton } from 'material-ui/RadioButton';
import { RadioButtonGroup } from 'redux-form-material-ui';
import RaisedButton from 'material-ui/RaisedButton';
import MenuItem from 'material-ui/MenuItem';
import validate from './validate';

let WizardFormSecondPage = props => {
  const { 
    handleSubmit, 
    previousPage,
    hasAdvancedWeaponSkillsValue,
    hasSlaysValue,
    hasAssassinatesValue
  } = props
  return (
    <form onSubmit={handleSubmit}>
        <h3>Weapons Skills</h3>
        <p>Click the box to view weapon skill options.  Choose basic weapon skills, if applicable.</p>
        <p>This section includes body weaponry like claws and bite.</p>
        <div>
          <label>Basic Weapon Skills/Type</label>
          <div>
            <Field component={RadioButtonGroup} name="weapon_type" label="Weapon Type"> 
                <RadioButton checkedIcon={<ActionFavorite style={{color: '#FE0006'}} />} value="No Weapons" label="No Weapons"/>
                <RadioButton value="Weapon of Choice" label="Weapon of Choice"/>
                <RadioButton value="Claws" label="Claws"/>
                <RadioButton value="Long Claws" label="Long Claws"/>
                <RadioButton value="Bite" label="Bite"/>
            </Field>
          </div>
        </div>
        <div>
          <label>Plus Strength</label>
          <div>
            <Field component={RadioButtonGroup} name="plus_strength_level" label="Plus Strength"> 
                <RadioButton value="Normal Strength (+0)" label="Normal Strength (+0)"/>
                <RadioButton value="Plus 2 Strength (+2)" label="Plus 2 Strength (+2)"/>
                <RadioButton value="Plus 4 Strength (+4)" label="Plus 4 Strength (+4)"/>
                <RadioButton value="Plus 6 Strength (+6)" label="Plus 6 Strength (+6)"/>
                <RadioButton value="Plus 8 Strength (+8)" label="Plus 8 Strength (+8)"/>
                <RadioButton value="Plus 10 Strength (+10)" label="Plus 10 Strength (+10)"/>
            </Field>
          </div>
        </div>
      <div>
        <h3>Advanced Weapons Skills</h3>
        <p>Click the box to view advanced weapon skills.</p>
        <p>This section includes slay and assassinate.</p>
        <p>If monster has no weaponskills or advanced weaponskills, click the next button.</p>
        <div>
          <label>Advanced Weapon Skills</label>
          <div>
            <Field
              name="has_advanced_weapon_skills"
              component= { Checkbox }
              type="checkbox"
            />
          </div>
        </div>
      </div>
      {hasAdvancedWeaponSkillsValue && (
        <div>
          <div>
            <label>Slays</label>
            <div>
              <Field
                name="has_slays"
                component={ Checkbox }
                type="checkbox"
              />
            </div>
          </div>
          {hasSlaysValue && (
          <div>
            <p>Enter the number of Slays.</p>
            <label>Number of Slays</label>
            <div>
              <Field  
                name="number_of_slays"
                component={ TextField }
                type="number"
              />
            </div>
          </div>
          )}
          <div>
            <label>Assassinates</label>
            <div>
              <Field
                name="has_assassinates"
                component={ Checkbox }
                type="checkbox"
              />
            </div>
          </div>
          {hasAssassinatesValue && (
          <div>
            <p>Enter the number of Assassinates.</p>
            <label>Number of Assassinates</label>
            <div>
              <Field  
                name="number_of_assassinates"
                component={ TextField }
                type="number"
              />
            </div>
          </div>
          )}
        </div>
      )}        
        <div>
          <RaisedButton type="button" className="previous" onClick={previousPage}>
              Previous
            </RaisedButton>
          <RaisedButton type="submit" className="next">
            Next
          </RaisedButton>
        </div>
    </form>
  )
}

WizardFormSecondPage = reduxForm({
  form: 'wizard', //Form name is same
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
})(WizardFormSecondPage)

const selector = formValueSelector('wizard');
WizardFormSecondPage = connect(state => {
  const hasAdvancedWeaponSkillsValue = selector(state, 'has_advanced_weapon_skills');
  const hasSlaysValue = selector(state, 'has_slays');
  const hasAssassinatesValue = selector(state, 'has_assassinates');
  return {
    hasAdvancedWeaponSkillsValue,
    hasSlaysValue,
    hasAssassinatesValue
  }
})(WizardFormSecondPage);
export default WizardFormSecondPage;

