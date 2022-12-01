import React from 'react';
import { numberFormatter } from '../App';
import '../App.scss'


function LowerCart({ grandTotal, onClear }) {
    return (
        <div>
            <div className="lower-cart">
                <p> Grand Total: <span id="grand-total"> {numberFormatter.format(grandTotal)}</span></p>
                <button> Submit Order</button>
                <button id='reset-button' onClick={onClear}> Reset Order</button>
            </div>
        </div>
    );
}

export default LowerCart;