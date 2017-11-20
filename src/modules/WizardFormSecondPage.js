import React from 'react';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { connect } from 'react-redux';
import { Checkbox, TextField, SelectField } from 'redux-form-material-ui';
import RaisedButton from 'material-ui/RaisedButton';
import MenuItem from 'material-ui/MenuItem';
import validate from './validate';
// import renderField from './renderField';

let WizardFormSecondPage = props => {
  const { 
    handleSubmit, 
    previousPage,
    // hasPlusStrengthValue,
    hasAdvancedWeaponSkillsValue,
    hasSlaysValue,
    hasAssassinatesValue
  } = props
  return (
    <form onSubmit={handleSubmit}>
        <h3>Weapons Skills</h3>
        <p>Click the box to view weapon skill options.  Choose basic weapon skills, if applicable.</p>
        <p>This section includes body weaponry like claws and bite.</p>
        <p>If monster has no weaponskills, click the next button.</p>
        <div>
          <label>Basic Weapon Skills/Type</label>
          <div>
            <Field 
              name="weapon_type"
              component={ SelectField }
              type="selectfield">
                <MenuItem value={"No Weapons"} primaryText="No Weapons" />
                <MenuItem value={"Weapon of Choice"} primaryText="Weapon of Choice" />
                <MenuItem value={"Claws"} primaryText="Claws" />
                <MenuItem value={"Long Claws"} primaryText="Long Claws" />
                <MenuItem value={"Bite"} primaryText="Bite" />      
            </Field>
          </div>
        </div>
        <div>
          <label>Plus Strength</label>
          <div>
            <Field 
              name="plus_strength_level"
              component= { SelectField }
              type="selectfield">
                <MenuItem value={"Normal Strength (+0)"} primaryText="Normal Strength (+0)" />
                <MenuItem value={"Plus 2 Strength (+2)"} primaryText="Plus 2 Strength (+2)" />
                <MenuItem value={"Plus 4 Strength (+4)"} primaryText="Plus 4 Strength (+4)" />
                <MenuItem value={"Plus 6 Strength (+6)"} primaryText="Plus 6 Strength (+6)" />
                <MenuItem value={"Plus 8 Strength (+8)"} primaryText="Plus 8 Strength (+8)" />
                <MenuItem value={"Plus 10 Strength (+10)"} primaryText="Plus 10 Strength (+10)" />      
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
  // const hasPlusStrengthValue = selector(state, 'has_plus_strength');
  const hasAdvancedWeaponSkillsValue = selector(state, 'has_advanced_weapon_skills');
  const hasSlaysValue = selector(state, 'has_slays');
  const hasAssassinatesValue = selector(state, 'has_assassinates');
  return {
    // hasPlusStrengthValue,
    hasAdvancedWeaponSkillsValue,
    hasSlaysValue,
    hasAssassinatesValue
  }
})(WizardFormSecondPage);
export default WizardFormSecondPage;

