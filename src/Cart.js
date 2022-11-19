import React, { useState } from 'react';
import './App.scss'

function Cart(props) {


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


            </table>



        </div>
    );
}

export default Cart;