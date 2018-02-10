import React from 'react';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { connect } from 'react-redux';
import { Checkbox, TextField, SelectField } from 'redux-form-material-ui';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import { RadioButton } from 'material-ui/RadioButton';
import { RadioButtonGroup } from 'redux-form-material-ui';
import RaisedButton from 'material-ui/RaisedButton';
import Grid from 'material-ui-next/Grid';
import MenuItem from 'material-ui/MenuItem';
import validate from './validate';
import InstructionDialog from './instruction_modals/InstructionDialog'

let WizardFormSecondPage = props => {
  const { 
    handleSubmit, 
    previousPage,
    hasAdvancedWeaponSkillsValue,
    hasSlaysValue,
    hasAssassinatesValue
  } = props
  return ( 
    <Grid item xs={12} sm={8} md={6}> 
      <form onSubmit={handleSubmit} className="card-entry div-opaque-color" id="weapon-stats-entry">    
      <div className="align-center">  
          <h2 className="form-container" >Weapons Skills</h2>
          <p>Basic Weapon Skills/Type <span className="red-text" >(required)</span></p>
          <Field component={SelectField} 
            name="weapon_type" 
            label="Weapon Type" 
            className="form-container" 
            required="true" 
          > 
              <MenuItem value="No Weapons" 
                primaryText="No Weapons" label="No Weapons"className="light-text"/>
              <MenuItem value="Weapon of Choice" 
                primaryText="Weapon of Choice" label="Weapon of Choice" className="light-text"/>
              <MenuItem value="Claws" 
                primaryText="Claws" label="Claws" className="light-text"/>
              <MenuItem value="Long Claws" 
                primaryText="Long Claws" label="Long Claws" className="light-text"/>
              <MenuItem value="Bite" 
                primaryText="Bite" label="Bite" className="light-text"/>
          </Field>
        </div>
        <div className="align-center">
          <p>Plus Strength <span className="red-text" >(required)</span></p>
          <Field component={SelectField} 
            name="plus_strength_level" 
            label="Plus Strength" 
            className="form-container " 
            required="true" 
          > 
              <MenuItem value="Normal Strength (+0)" 
                primaryText="Normal Strength (+0)" label="Normal Strength (+0)" className="light-text"/>
              <MenuItem value="Plus 2 Strength (+2)"
                primaryText="Plus 2 Strength (+2)" label="Plus 2 Strength (+2)" className="light-text"/>
              <MenuItem value="Plus 4 Strength (+4)" 
                primaryText="Plus 4 Strength (+4)" label="Plus 4 Strength (+4)" className="light-text"/>
              <MenuItem value="Plus 6 Strength (+6)" 
                primaryText="Plus 6 Strength (+6)" label="Plus 6 Strength (+6)" className="light-text"/>
              <MenuItem value="Plus 8 Strength (+8)" 
                primaryText="Plus 8 Strength (+8)" label="Plus 8 Strength (+8)" className="light-text"/>
              <MenuItem value="Plus 10 Strength (+10)" 
                primaryText="Plus 10 Strength (+10)" label="Plus 10 Strength (+10)" className="light-text"/>
          </Field>
        </div>
        <div className="align-center" >
          <h3 className="form-container" >Advanced Weapons Skills</h3>
          <Field
            label="Advanced Weapon Skills"
            name="has_advanced_weapon_skills"
            component= { Checkbox }
            type="checkbox"
            className="form-container align-center"
            
          />

        {hasAdvancedWeaponSkillsValue && (
          <div>
            <div>
              <div>
                <Field
                  name="has_slays"
                  component={ Checkbox }
                  type="checkbox"
                  className="form-container"
                  label="Slays"
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
                  className="form-container"
                />
              </div>
            </div>
            )}
            <div>
              <div>
                <Field
                  name="has_assassinates"
                  component={ Checkbox }
                  type="checkbox"
                  className="form-container"
                  label="Assassinates"
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
                  className="form-container"
                />
              </div>
            </div>
            )}
          </div>          
        )}   
        </div>    
          <Grid container justify="space-around"  style={{marginTop: "40px"}}>
          <Grid item xs={6} sm={4} md={3}>
            <RaisedButton 
              type="button" 
              className="previous" 
              onClick={previousPage}
              style={{
                borderRadius: "1px",
                fontWeight: "bold",
                display: "block",
                fontSize: "1.5rem"                   
              }}
            >
                Previous
            </RaisedButton>
            </Grid>
            <Grid item xs={6} sm={4} md={3}>
              <RaisedButton 
                type="submit" 
                className="next"
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
          </Grid>
          <Grid container justify="center" className="align-center" >
            <Grid item xs={12}>
              <InstructionDialog />
            </Grid>
          </Grid>
      </form> 
      </Grid>
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

