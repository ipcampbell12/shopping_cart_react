import React from 'react';
import { numberFormatter } from '../App';


import '../App.scss'
import pic from './scpng.png'


function LowerCart({ grandTotal, onShow, quantityTotal, setToSubmit, setToClear }) {



    return (
        <div>
            <div className="lower-cart">
                <div className="icon-container">
                    <img src={pic} alt="Cart" className='icon' />
                    <p className="quantity">{quantityTotal}</p>
                </div>

                <p> Grand Total: <span id="grand-total"> {numberFormatter.format(grandTotal)}</span></p>

                <button onClick={event => {
                    setToSubmit(); onShow();
                }}> Submit Order</button>

                <button id='reset-button' onClick={event => {
                    setToClear(); onShow();
                }}> Reset Order</button>
            </div>
        </div >
    );



}

export default LowerCart;