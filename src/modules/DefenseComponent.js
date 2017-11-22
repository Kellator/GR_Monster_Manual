import React from 'react';

class DefenseComponent extends React.Component {
    render() {
        console.log(this.props);
        let text = this.props.stat;
        function ucFirst(text) {
            return text.charAt(0).toUpperCase() + text.slice(1);
        }
        let newText = ucFirst(text);
        console.log(newText);
        return(
            <div>
                <p><span>{newText} per day: {this.props.times}</span></p>
            </div>
        )
    }
}
export default DefenseComponent;