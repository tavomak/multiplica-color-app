import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
toast.configure()
function MyVerticallyCenteredModal({ color, year, name, pantone, ...props }) {

  const notify = () => {
    toast(`Haz copiado el color: ${color}`,{position: toast.POSITION.TOP_CENTER})
  }
  const handleClick = () => {
    props.onHide();
    notify()
  }
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton style={{ background: color }}>
        <Modal.Title id="container-moda-title-vcenter" className="card--title__modal w-100" style={{ color: color, textAlign:'center' }}>
          <h1>{name}</h1>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ul className="d-md-flex mb-0 p-lg-5 align-items-center">
          <li className="modal--column">
            <h3>
              <b className="display-font">Año: </b>{year}
            </h3>
            <h3>
              <b className="display-font">Color: </b>{color}
            </h3>
            <h3>
              <b className="display-font">Pantone: </b>{pantone}
            </h3>
          </li>
          <li  className="modal--column">
            <ul>
              <li>
                <span
                  className="d-inline-block color--example__darken"
                  style={{ background: color, width:'100%', height:'80px' }}>
                </span>
                <p ><small>Color natural brightness -20 </small></p>
              </li>
              <li>
                <span
                  className="p-7 d-inline-block"
                  style={{ background: color, width:'100%', height:'80px' }}>
                </span>
                <p ><small>Color natural</small></p>
              </li>
              <li>
                <span
                  className="p-7 d-inline-block color--example__lighten"
                  style={{ background: color, width:'100%', height:'80px' }}>
                </span>
                <p><small>Color natural brightness +20</small></p>
              </li>
            </ul>
          </li>
        </ul>
      </Modal.Body>
      <Modal.Footer>
        <CopyToClipboard text={color}>
          <Button style={{ backgroundColor:color, margin: '10px auto' }} onClick={() => handleClick(color)}>Copiar código hex y cerrar</Button>
        </CopyToClipboard>
      </Modal.Footer>
    </Modal>
  );
}

function ModalApp({ color, year, name, pantone }) {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button variant="primary" style={{ backgroundColor:color }} onClick={() => setModalShow(true)}>
        Ver más
        </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        color={color}
        year={year}
        name={name}
        pantone={pantone}
      />
    </>
  );
}
export default ModalApp;