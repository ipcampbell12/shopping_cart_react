import React from 'react';
import { numberFormatter } from '../App';
import '../App.scss'
import pic from './scpng.png'

function LowerCart({ grandTotal, onClear }) {
    return (
        <div>
            <div className="lower-cart">
                <div className="icon-container">
                    <img src={pic} alt="Cart" className='icon' />
                    <span className="quantity">1</span>
                </div>

                <p> Grand Total: <span id="grand-total"> {numberFormatter.format(grandTotal)}</span></p>
                <button> Submit Order</button>
                <button id='reset-button' onClick={onClear}> Reset Order</button>
            </div>
        </div>
    );
}

export default LowerCart;