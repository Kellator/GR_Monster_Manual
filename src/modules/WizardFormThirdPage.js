import React from 'react'
import { Field, reduxForm } from 'redux-form';
import validate from './validate'
import renderField from './renderField'

const WizardFormThirdPage = props => {
    const { handleSubmit, pristine, previousPage, submitting } = props
    return (
      <form onSubmit={handleSubmit}>
        <div>
            <label>Scholarly Skills</label>
            <p>Choose if your monster has any scholarly or non-weapon skills.</p>
            <p>Be sure to add the number of levels of each skill.</p>
            <p>This section includes innate magically delivered or elementally delivered attacks.</p>
            <div>
                <Field
                    name="alchemy"
                    type="checkbox"
                    component={renderField}
                    label="Alchemy"
                />
                <Field
                    name="celestial_magic"
                    type="checkbox"
                    component={renderField}
                    label="Celestial Magic"
                />
                <Field
                    name="earth_magic"
                    type="checkbox"
                    component={renderField}
                    label="Earth Magic"
                />
                <Field
                    name="elemental_magic"
                    type="checkbox"
                    component={renderField}
                    label="Elementatl Magic"
                />
                <Field
                    name="harmonic_magic"
                    type="checkbox"
                    component={renderField}
                    label="Harmonic Magic"
                />
            </div>
        </div>
        <div>
          <button type="button" className="previous" onClick={previousPage}>
            Previous
          </button>
          <button type="submit" disabled={pristine || submitting}>
            Submit
          </button>
        </div>
      </form>
    )
  }
  export default reduxForm({
    form: 'wizard', //Form name is same
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
    validate
  })(WizardFormThirdPage)