import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Checkbox } from 'redux-form-material-ui';
import RaisedButton from 'material-ui/RaisedButton';
import validate from './validate';
// import renderField from './renderField';

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
            component={Checkbox}
            label="One Handed Weapon"
          />
          <Field
            name="weapons_two_handed"
            type="checkbox"
            component={Checkbox}
            label="Two Handed Weapon"
          />
          <Field
            name="weapons_two_weapons"
            type="checkbox"
            component={Checkbox}
            label="Two Weapons"
          />
          <Field
            name="weapons_shield"
            type="checkbox"
            component={Checkbox}
            label="Shield"
          />
          <Field
            name="weapons_claws"
            type="checkbox"
            component={Checkbox}
            label="Claws"
          />
          <Field
            name="weapons_long_claws"
            type="checkbox"
            component={Checkbox}
            label="Long Claws"
          />
          <Field
            name="weapons_bite"
            type="checkbox"
            component={Checkbox}
            label="Bite"
          />
        </div>
        </div>
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

export default reduxForm({
  form: 'wizard', //Form name is same
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
})(WizardFormSecondPage)