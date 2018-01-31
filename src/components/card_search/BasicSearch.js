import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { TextField, MenuItem, SelectField } from 'redux-form-material-ui';
import Grid from 'material-ui-next/Grid';
// import Tooltip from 'material-ui-next/Tooltip';
import { Field, reduxForm } from 'redux-form';
import {searchDatabase} from '../../redux/actions/DatabaseActions';
let hintText;
class BasicSearch extends React.Component {
    submit = (value, dispatch) => {
        dispatch(searchDatabase(value));
        console.log(value);  
    };
    render() {
        const {handleSubmit, pristine, reset, submitting } = this.props
        return (
            <Grid 
            item             
            style={{paddingBottom: '20px', paddingLeft: '20px', paddingRight: '20px', paddingTop: '20px'}}>
                <form onSubmit={ handleSubmit(this.submit.bind(this)) } >
                    <div>
                        <Field 
                            placeholder="search" 
                            name="basic_search_input" 
                            component={ TextField }
                            initialvalue=' '
                            style={{
                                width: '100%'
                            }}
                        />
                        <RaisedButton 
                            type="submit" 
                            className="button-main"                            
                            style={{
                                borderRadius: '1px',
                                padding: '10px, 24px',
                                fontWeight: 'bold',
                                width: '100%',
                                marginTop: '2rem'
                            }}
                        >Submit</RaisedButton>
                    </div>
                </form>
            </Grid>
        )
    }
}
export default reduxForm({
    form: 'basicSearch'
})(BasicSearch);