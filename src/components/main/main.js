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
            <div className="container">
                      {/* <div ><img className="image-bar" src="https://i.pinimg.com/originals/91/81/59/918159168c17ffb04512eb27fb0a2952.jpg" /></div>              */}
                { componentToDisplay }
            </div>
        )
    }
}
const mapStateToProps = (state, props) => ({
    view: state.view.type
});
export default connect(mapStateToProps)(Main);