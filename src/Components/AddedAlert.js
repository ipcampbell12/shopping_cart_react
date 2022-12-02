
import Alert from 'react-bootstrap/Alert';
import { useEffect } from 'react'


function AddedAlert({ show, setShow, danger }) {

    useEffect(() => {
        setTimeout(() => setShow(false), 1000)
    })



    if (show) {
        return (
            <Alert variant={danger ? 'danger' : 'success'}>
                {danger ?
                    <span className='text'>This item has already been added. Use the "+" and "-" buttons to adjust the quantity </span> :
                    <span className='text'>Item added to cart successfully</span>}
                <span className='close' onClick={() => setShow(false)}> &times;</span>
            </Alert>
        );


    }
    setTimeout(() => setShow(false), 2000)
}

export default AddedAlert;

