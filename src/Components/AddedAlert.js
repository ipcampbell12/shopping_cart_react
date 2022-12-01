
import Alert from 'react-bootstrap/Alert';


function AddedAlert({ show, setShow, danger }) {

    if (show) {
        return (
            <Alert variant="danger" className={danger ? 'alert-danger' : 'alert-success'}>
                {danger ?
                    <span className='text'>This item has already been added. Use the "+" and "-" buttons to adjust the quantity </span> :
                    <span className='text'>Item added to cart successfully</span>}
                <span className='close' onClick={() => setShow(false)}> &times;</span>
            </Alert>
        );

    }

}

export default AddedAlert;

