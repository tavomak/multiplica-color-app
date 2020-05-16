import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import {CopyToClipboard} from 'react-copy-to-clipboard';

function MyVerticallyCenteredModal({color, ...props}) {


  const handleClick = (colorname) => {
    props.onHide()
  }
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton style={{ background: props.color }}>
          <Modal.Title id="contained-modal-title-vcenter">
            Modal heading
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Centered Modal</h4>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
          </p>
        </Modal.Body>
        <Modal.Footer>
        <CopyToClipboard text={color}>
        <Button onClick={() => handleClick(color)}>Copiar código hex y cerrar</Button>
        </CopyToClipboard>
        </Modal.Footer>
      </Modal>
    );
  }
  
  function ModalApp({color}) {
    const [modalShow, setModalShow] = React.useState(false);
  
    return (
      <>
        <Button variant="primary" onClick={() => setModalShow(true)}>
          Ver más
        </Button>
  
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          color={color}
        />
      </>
    );
  }
export default ModalApp;