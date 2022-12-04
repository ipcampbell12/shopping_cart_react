import Alert from 'react-bootstrap/Alert';
import { useEffect } from 'react'


function CartAlert({ show, setShow, submit }) {

    useEffect(() => {
        setTimeout(() => setShow(false), 4000)
    })



    if (show) {
        return (
            <Alert variant={submit ? 'success' : 'warning'}>
                {submit ?
                    <span className='text'>Your order has been submitted.</span> :
                    <span className='text'>Your shopping cart has been cleared</span>}
                <span className='close' onClick={() => setShow(false)}> &times;</span>
            </Alert>
        );


    }
    setTimeout(() => setShow(false), 2000)
}

export default CartAlert;
