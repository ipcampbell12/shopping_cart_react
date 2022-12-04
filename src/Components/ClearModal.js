
import { clear } from '@testing-library/user-event/dist/clear';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { numberFormatter } from '../App';



function ClearModal({ handleClose, modalShow, onClear, submit, grandTotal, quantityTotal, openAlert, setSubmit, setClear }) {

    if (submit) {

        return (
            <Modal
                show={modalShow}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Proceed to Checkout?</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Woulod you to proceed to checkout?
                    <br />
                    <p>Your shopping cart currently contains {quantityTotal} ships for a total price of {numberFormatter.format(grandTotal)}. </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={event => {
                        setSubmit(); handleClose(); onClear(); openAlert();
                    }}>
                        Yes
                    </Button>

                    <Button variant="primary" onClick={handleClose} >No, continue shopping</Button>
                </Modal.Footer>
            </Modal>

        );
    } else {
        return (
            <Modal
                show={modalShow}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Clear cart?</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Are you sure you want to clear your shopping cart? These changes cannot be undone.
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={event => {
                        setClear(); handleClose(); onClear(); openAlert();
                    }}>
                        Yes
                    </Button>
                    <Button variant="primary" onClick={handleClose} >No</Button>
                </Modal.Footer>
            </Modal>

        );

    }



}

export default ClearModal;