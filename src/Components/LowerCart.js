import React from 'react';

import '../App.scss'

const numberFormatter =
    new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    });

function LowerCart({ grandTotal }) {
    return (
        <div>
            <div className="lower-cart">
                <p> Grand Total: <span id="grand-total"> {numberFormatter.format(grandTotal)}</span></p>
                <button> Submit Order</button>
                <button id='reset-button'> Reset Order</button>
            </div>
        </div>
    );
}

export default LowerCart;