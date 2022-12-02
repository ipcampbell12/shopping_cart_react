
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function ClearModal({ handleClose, modalShow, onClear }) {


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
                    handleClose(); onClear();
                }}>
                    Yes
                </Button>
                <Button variant="primary" onClick={handleClose} >No</Button>
            </Modal.Footer>
        </Modal>

    );
}

export default ClearModal;