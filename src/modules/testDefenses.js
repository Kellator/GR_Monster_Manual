import React from 'react';
import { Field, reduxForm } from 'redux-form';
import RaisedButton from 'material-ui/RaisedButton';
import { Checkbox } from 'redux-form-material-ui';
import validate from './validate';
import { formValueSelector } from 'redux-form';