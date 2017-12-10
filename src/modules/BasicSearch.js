import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { TextField, MenuItem, SelectField } from 'redux-form-material-ui';
import { Field, reduxForm } from 'redux-form';
import * as actions from '../redux/actions/index';

class BasicSearch extends React.Component {
    submit = (value, dispatch) => {
        let token = this.props.authToken;
        dispatch(actions.DatabaseActions.searchDatabase(value, token));
    };
    render() {
        const {handleSubmit, pristine, reset, submitting } = this.props
        console.log(this.props)
        return (
            <form onSubmit={ handleSubmit(this.submit.bind(this)) }>
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
}
export default reduxForm({
    form: 'basicSearch'
})(BasicSearch);