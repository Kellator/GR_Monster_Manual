import React from 'react';

class DefenseComponent extends React.Component {
    render() {
        let text = this.props.stat;
        function ucFirst(text) {
            return text.charAt(0).toUpperCase() + text.slice(1);
        }
        let newText = ucFirst(text);
        return(
                <p><span>{newText} per day: {this.props.times}</span></p>
        )
    }
};
export default DefenseComponent;