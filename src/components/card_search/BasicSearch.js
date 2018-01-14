import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { TextField, MenuItem, SelectField } from 'redux-form-material-ui';
import { Field, reduxForm } from 'redux-form';
import {searchDatabase} from '../../redux/actions/DatabaseActions';
class BasicSearch extends React.Component {
    submit = (value, dispatch) => {
        dispatch(searchDatabase(value));
    };
    render() {
        const {handleSubmit, pristine, reset, submitting } = this.props
        return (
            <form onSubmit={ handleSubmit(this.submit.bind(this)) }>
                <div>
                    <Field 
                        placeholder="search" 
                        name="basic_search_input" 
                        component={ TextField }
                    />
                    <RaisedButton type="submit" className="button-main">SUBMIT</RaisedButton>
                </div>
            </form>
        )
    }
}
export default reduxForm({
    form: 'basicSearch'
})(BasicSearch);