import React, { Component } from 'react';
import {
    Modal,
    Button,
    Form
} from 'react-bootstrap';
import axios from 'axios';

class ModalFormCliente extends Component {

    constructor(props, context){
        super(props);
        this.state = {
            show: this.props.show,
            editable: this.props.editable,
            id: this.props.cliente !== undefined ? this.props.cliente.id : "",
            razon_social: this.props.cliente !== undefined ? this.props.cliente.razon_social : "",
            ruc: this.props.cliente !== undefined ? this.props.cliente.ruc : "",
            telefono: this.props.cliente !== undefined ? this.props.cliente.telefono : "",
            direccion: this.props.cliente !== undefined ? this.props.cliente.direccion : ""
        }
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            show: nextProps.show,
            editable: nextProps.editable,
            id: nextProps.cliente !== undefined ? nextProps.cliente.id : "",
            razon_social: nextProps.cliente !== undefined ? nextProps.cliente.razon_social : "",
            ruc: nextProps.cliente !== undefined ? nextProps.cliente.ruc : "",
            telefono: nextProps.cliente !== undefined ? nextProps.cliente.telefono : "",
            direccion: nextProps.cliente !== undefined ? nextProps.cliente.direccion : ""
        });
    }

    render() {
        return (
            <Modal show={this.state.show} onHide={this.props.closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Datos del cliente</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formGroupEmail">
                            <Form.Label>Razon social</Form.Label>
                            <Form.Control disabled={!this.state.editable} onChange={this.changeRazonSocial.bind(this)} value={this.state.razon_social} type="text" placeholder="Ingrese razon social" />
                        </Form.Group>
                        <Form.Group controlId="formGroupPassword">
                            <Form.Label>RUC</Form.Label>
                            <Form.Control disabled={!this.state.editable} onChange={this.changeRuc.bind(this)} value={this.state.ruc} type="text" placeholder="Ingrese su RUC" />
                        </Form.Group>
                        <Form.Group controlId="formGroupPassword">
                            <Form.Label>Teléfono</Form.Label>
                            <Form.Control disabled={!this.state.editable} onChange={this.changeTelefono.bind(this)} value={this.state.telefono} type="text" placeholder="Ingrese su telefono" />
                        </Form.Group>                       
                        <Form.Group controlId="formGroupPassword">
                            <Form.Label>Dirección</Form.Label>
                            <Form.Control disabled={!this.state.editable} onChange={this.changeDireccion.bind(this)} value={this.state.direccion} type="text" placeholder="Ingrese su dirección" />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={this.postCliente.bind(this)}>
                        Guardar
                    </Button>
                    <Button variant="secondary" onClick={this.props.closeModal}>
                        Cancelar
                     </Button>
                </Modal.Footer>
            </Modal>
        );
    }

    changeRazonSocial(e){
        e.preventDefault();
        this.setState({
            razon_social: e.target.value
        });
    }

    changeRuc(e){
        e.preventDefault();
        this.setState({
            ruc: e.target.value
        });        
    }

    changeTelefono(e){
        e.preventDefault();
        this.setState({
            telefono: e.target.value
        });        
    }

    changeDireccion(e){
        e.preventDefault();
        this.setState({
            direccion: e.target.value
        });        
    }

    postCliente(){
        var objCliente = {
            razon_social: this.state.razon_social,
            ruc: this.state.ruc,
            direccion: this.state.direccion,
            telefono: this.state.telefono
        };
        var urlPostCliente = "https://clients-backend.herokuapp.com/contabilidad/clientes";
        axios.post(urlPostCliente, objCliente).then( res => {
            this.props.closeModal();
            this.props.getClientes();
        }).catch(error => {
            this.props.closeModal();
            console.log(error);
        });
    }

}

export default ModalFormCliente;