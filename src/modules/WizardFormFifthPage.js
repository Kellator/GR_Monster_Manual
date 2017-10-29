import React from 'react';
import { Field, reduxForm } from 'redux-form';
import  RaisedButton  from 'material-ui/RaisedButton';
import { TextField } from 'redux-form-material-ui';
import validate from './validate';
import renderField from './renderField';
import { bindActionCreators } from 'redux';
import { dispatch } from 'react-redux';

const WizardFormFifthPage = props => {
    const { handleSubmit, pristine, previousPage, submitting } = props
    return (
      <form onSubmit={handleSubmit}>
        <p>Enter standard treasure distribution amount.</p>
          <Field 
          name="standard_treasure"
          component={TextField}
          label="Standard Treasure" 
          />
        <p>Enter any special instruction specific to creature.</p>
          <Field 
          name="special_instructions"
          component={TextField}
          label="Special Instructions" 
          />
        <div>
          <RaisedButton type="button" className="previous" onClick={previousPage}>
            Previous
          </RaisedButton>
          <RaisedButton type="submit" disabled={pristine || submitting}>
            Submit
          </RaisedButton>
        </div>
      </form>
    )
  }
export default reduxForm({
  form: 'wizard', //Form name is same
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
})(WizardFormFifthPage)