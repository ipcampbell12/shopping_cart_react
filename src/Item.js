import React from "react";
import './App.scss'

const numberFormatter =
    new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    });

function Item(props) {

    const addItem = () => {

    }

    return (

        <div className='item' id={props.id}>
            <tr>
                <td>{props.product_name}</td>
                <td>{numberFormatter.format(props.price)}</td>
                <td><img src={props.image} alt={props.product_name} className="images" /></td>
                <td><button id={`item-${props.id}`} onClick={addItem}>Add</button></td>
            </tr>
        </div>

    );
}

export default Item;