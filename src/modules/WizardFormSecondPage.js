import React from 'react'
import { Field, reduxForm } from 'redux-form'
import validate from './validate'
import renderField from './renderField'

const renderError = ({ meta: { touched, error } }) =>
touched && error ? <span>{error}</span> : false

const WizardFormSecondPage = props => {
const { handleSubmit, previousPage } = props
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Weapons Skills</label>
        <p>Choose a weapon skill if applicable.</p>
        <p>This section includes body weaponry like claws</p>
        <div>
          <Field
            name="weapons_one_handed"
            type="checkbox"
            component={renderField}
            label="One Handed Weapon"
          />
          <Field
            name="weapons_two_handed"
            type="checkbox"
            component={renderField}
            label="Two Handed Weapon"
          />
          <Field
            name="weapons_two_weapons"
            type="checkbox"
            component={renderField}
            label="Two Weapons"
          />
          <Field
            name="weapons_shield"
            type="checkbox"
            component={renderField}
            label="Shield"
          />
          <Field
            name="weapons_claws"
            type="checkbox"
            component={renderField}
            label="Claws"
          />
          <Field
            name="weapons_long_claws"
            type="checkbox"
            component={renderField}
            label="Long Claws"
          />
          <Field
            name="weapons_bite"
            type="checkbox"
            component={renderField}
            label="Bite"
          />
        </div>
        </div>
        <div>
          <button type="button" className="previous" onClick={previousPage}>
              Previous
            </button>
          <button type="submit" className="next">
            Next
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
})(WizardFormSecondPage)