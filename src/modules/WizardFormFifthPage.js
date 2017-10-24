import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { TextField, RaisedButton } from 'material-ui/RaisedButton';
import validate from './validate';
import renderField from './renderField';

const WizardFormFifthPage = props => {
    const { handleSubmit, pristine, previousPage, submitting } = props
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label>Special Instructions/Descriptions</label>
          <p>Use this section to describe any monster specific qualities.  For example, 'reduced damage from normal weapons'.</p>
          <div>
            <Field name="special_instructions" component={TextField} />
          </div>
        </div>
        <div>
            <label>Standard Treasure</label>
            <p>Enter a standard amount of treasure this creature would have on it.</p>
            <p>Treasure may be coin, weaponry (or alchemy), armor, production items, spell components, or magic items.</p>
            {/* Eventually this should be a checkbox section with input for amounts. */}
            <div>
              <Field name="standard_treasure" component={TextField} />
            </div>
        </div>
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