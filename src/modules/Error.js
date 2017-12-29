import React from 'react';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import Login from './Login';

class Error extends React.Component {
    render() {
        console.log(this.props);
        let error;
        let errorMessage =
            <div>
                <h1>Sorry!  There is an unexpected error occurring.  Please try again.</h1>
                {error}
            </div>;
        return (
            <div>
                { errorMessage }
                <RaisedButton >Back</ RaisedButton>
            </div>
        )
    }
}
const mapStateToProps = (state, props) => ({
    db: state.database
});
export default connect(mapStateToProps)(Error);