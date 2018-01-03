// contains and controls view components for unauthorized users
import React from 'react';
import { connect } from 'react-redux';
import Login from './Login';
import Register from './Register';
import Landing from './Landing';

class Main extends React.Component {
    render() {
        console.log(this.props);
        let view = this.props.view;
        let componentToDisplay;
        if(view === null) {
            componentToDisplay = <Login />
        }
        else {
            switch(view) {
                case "register":
                    componentToDisplay = <Register />
                break;
                case "login":
                    componentToDisplay = <Login />
                break;
                case "about":
                    componentToDisplay = <Landing />
                break;
                default: 
                    componentToDisplay = <Login />
            }
        }
        return (
            <div>
                { componentToDisplay }
            </div>
        )
    }
}
const mapStateToProps = (state, props) => ({
    view: state.view.type
});
export default connect(mapStateToProps)(Main);