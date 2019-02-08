import React, { Component } from 'react';
import {
    Modal,
    Button,
    Form
} from 'react-bootstrap';

class ModalFormCliente extends Component {

    render() {
        return (
            <Modal show={true}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formGroupEmail">
                            <Form.Label>Razon social</Form.Label>
                            <Form.Control type="text" placeholder="Ingrese razon social" />
                        </Form.Group>
                        <Form.Group controlId="formGroupPassword">
                            <Form.Label>RUC</Form.Label>
                            <Form.Control type="text" placeholder="Ingrese su RUC" />
                        </Form.Group>
                        <Form.Group controlId="formGroupPassword">
                            <Form.Label>Teléfono</Form.Label>
                            <Form.Control type="text" placeholder="Ingrese su telefono" />
                        </Form.Group>                       
                        <Form.Group controlId="formGroupPassword">
                            <Form.Label>Dirección</Form.Label>
                            <Form.Control type="text" placeholder="Ingrese su dirección" />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary">
                        Guardar
                    </Button>
                    <Button variant="secondary">
                        Cancelar
                     </Button>
                </Modal.Footer>
            </Modal>
        );
    }

}

export default ModalFormCliente;