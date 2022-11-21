import React, { useState } from 'react';
import Item from './Item';
import '../App.scss'

function Cart(props) {


    /*    const idSplit = evt.target.id.split('-')
       const itemId = Number(idSplit[1])
       const item = items.find(item => item.id === itemId)
       const table = cartContainer.rows
   
       for (let i = table.length - 1; i >= -1; i--) {
           //first value of i is zero
           // index 0 is "ships"
           if (table[i].cells[0].innerText !== item.product_name) {
               cartContainer.insertAdjacentHTML('beforeend', cartHtML(item));
               console.log(table[i].cells[0].innerText)
               console.log(i)
               console.log(table)
               break;
           }
           else if (table[i].cells[0].innerText === item.product_name) {
               console.log("The item is in the cart")
               // console.log(table[i].cells[0].innerText)
               break;
           }
   
       } */

    const [cartItems, setCartItems] = () => {

    }

    return (
        <div className="cart-items">

            <table class="ships-table" id="ships-table">

                <tr>
                    <th>Ships</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Ship Total</th>
                    <th>Add</th>
                    <th>Remove </th>
                </tr>
                <Item />

            </table>



        </div>
    );
}

export default Cart;