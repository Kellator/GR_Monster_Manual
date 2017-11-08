import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { TextField } from 'redux-form-material-ui';
import { Field, reduxForm } from 'redux-form';

const BasicSearch = props => {
    const {handleSubmit, pristine, reset, submitting } = props
    console.log(props);
    console.log(this.props)
    return (
        <form onSubmit={ handleSubmit(props.onSubmit) }>
            <div>
                <Field 
                    placeholder="Wight" 
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