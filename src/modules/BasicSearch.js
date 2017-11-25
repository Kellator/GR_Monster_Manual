import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { TextField, MenuItem, SelectField } from 'redux-form-material-ui';
import { Field, reduxForm } from 'redux-form';

const BasicSearch = props => {
    const {handleSubmit, pristine, reset, submitting } = props
    console.log(props);
    return (
        <form onSubmit={ handleSubmit(props.onSubmit) }>
            <div>
                <Field 
                    placeholder="search" 
                    name="basic_search_input" 
                    component={ TextField }
                />
                <RaisedButton type="submit">Submit</RaisedButton>
            </div>
        </form>
    )
}
export default reduxForm({
    form: 'basicSearch'
})(BasicSearch);