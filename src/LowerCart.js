import React from 'react';

function LowerCart(props) {
    return (
        <div>
            <div class="lower-cart">
                <p> Grand Total: <span id="grand-total"> 0</span></p>
                <button> Submit Order</button>
                <button id='reset-button'> Reset Order</button>
            </div>
        </div>
    );
}

export default LowerCart;