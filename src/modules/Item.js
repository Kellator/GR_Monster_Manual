import React from 'react';

class Item extends React.Component {
    render() {
        console.log(this.props);
        let item = this.props.item;
        function ucFirst(item) {
            return item.charAt(0).toUpperCase() + item.slice(1);
        }
        let newItem = ucFirst(item);
        return (
            <div>
                <p><span>{ newItem }</span></p>
            </div>
        )
    }
}
export default Item;