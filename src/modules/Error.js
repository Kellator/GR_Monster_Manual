import React from 'react';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import Login from './Login';

class Error extends React.Component {
    render() {
        console.log(this.props);
        let error;
        // if (this.props.db) {
        //     error = <div>
        //                 <p>Error Code: { this.props.db.error.code }</p>
        //                 <p>Error Message: { this.props.db.error.message }</p>
        //             </div>
        // }
        // else {
        //     error = <p>No idea what happened. Try again.</p>
        // }
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