import React, { Component } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import axios from 'axios';

class ModalFormCliente extends Component {

    constructor(props, context) {
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

    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
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
                    <Modal.Title>Datos cliente</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formGroupRazonSocial">
                            <Form.Label>Razón social</Form.Label>
                            <Form.Control value={this.state.razon_social} type="text" placeholder="Ingrese la razón social" onChange={this.changeRazonSocial.bind(this)} disabled={!this.state.editable}/>
                        </Form.Group>
                        <Form.Group controlId="formGroupRuc">
                            <Form.Label>RUC</Form.Label>
                            <Form.Control value={this.state.ruc} type="text" placeholder="Ingrese el ruc" onChange={this.changeRuc.bind(this)} disabled={!this.state.editable}/>
                        </Form.Group>
                        <Form.Group controlId="formGroupTelefono">
                            <Form.Label>Teléfono</Form.Label>
                            <Form.Control value={this.state.telefono} type="text" placeholder="Ingrese el teléfono" onChange={this.changeTelefono.bind(this)} disabled={!this.state.editable}/>
                        </Form.Group>
                        <Form.Group controlId="formGroupDireccion">
                            <Form.Label>Dirección</Form.Label>
                            <Form.Control value={this.state.direccion} type="text" placeholder="Ingrese la dirección" onChange={this.changeDireccion.bind(this)} disabled={!this.state.editable}/>
                        </Form.Group>                                    
                    </Form>
                </Modal.Body>
                <Modal.Footer hidden={this.props.modalType === "C" ? true : false}>
                    <Button variant="primary" onClick={this.handleGuardar.bind(this)}>Guardar</Button>
                    <Button variant="secondary" onClick={this.props.closeModal}>Cancelar</Button>
                </Modal.Footer>
                <Modal.Footer hidden={this.props.modalType === "C" ? false : true}>
                    <Button variant="primary" onClick={this.props.closeModal}>Cerrar</Button>
                </Modal.Footer>                
            </Modal>
        );
    }

    changeRazonSocial(e){
        e.preventDefault();
        this.setState({razon_social: e.target.value});
    }

    changeRuc(e){
        e.preventDefault();
        this.setState({ruc: e.target.value});
    }

    changeTelefono(e){
        e.preventDefault();
        this.setState({telefono: e.target.value});
    }    

    changeDireccion(e){
        e.preventDefault();
        this.setState({direccion: e.target.value});
    }    

    handleGuardar(e){
        e.preventDefault();
        var modalType = this.props.modalType;
        if(modalType === "R"){
            this.postCliente();
        }
        else{
            this.updateCliente();
        }
    }

    postCliente(){
        var objCliente = {
            razon_social: this.state.razon_social,
            ruc: this.state.ruc,
            direccion: this.state.direccion,
            telefono: this.state.telefono
        };
        var urlPostClientes = "https://clients-backend.herokuapp.com/contabilidad/clientes";
        axios.post(urlPostClientes, objCliente).then(res => {
            this.props.closeModal();
            this.props.getClientes();
        }).catch(error => {
            this.props.closeModal();            
            console.log(error);
        });
    }

    updateCliente(){
        var objCliente = {
            id: this.state.id,
            razon_social: this.state.razon_social,
            ruc: this.state.ruc,
            direccion: this.state.direccion,
            telefono: this.state.telefono
        };
        var urlUpdateCliente = "https://clients-backend.herokuapp.com/contabilidad/clientes";        
        axios.put(urlUpdateCliente, objCliente).then(res => {
            this.props.closeModal();
            this.props.getClientes();
        }).catch(error => {
            this.props.closeModal();            
            console.log(error);
        });
    }

}

export default ModalFormCliente;