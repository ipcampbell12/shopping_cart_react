import React, { useState } from 'react';

import Alert from 'react-bootstrap/Alert';


function AddedAlert({ show, setShow }) {

    if (show) {
        return (
            <Alert variant="danger" className='alert'>
                <span className='text'>This item has already been added. Use the "+" and "-" buttons to adjust the quantity</span>
                <span className='close' onClick={() => setShow(false)}> &times;</span>
            </Alert>
        );

    }



}

export default AddedAlert;

