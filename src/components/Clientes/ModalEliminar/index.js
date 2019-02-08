import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
import axios from 'axios';

class ModalConfirmarEliminar extends Component {

    constructor(props, context) {
        super(props);
        this.state = {
            show: this.props.show,
            cliente: this.props.cliente
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            show: nextProps.show,
            cliente: nextProps.cliente
        });
    }    

    render() {
        var cliente = this.state.cliente;
        if(cliente === undefined){
            return(
                <span></span>
            );
        }
        return (
            <Modal show={this.props.show} onHide={this.props.closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirmar eliminar</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    ¿Desea eliminar el registro de {cliente.razon_social}?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={this.deleteCliente.bind(this)}>Confirmar</Button>
                    <Button variant="secondary" onClick={this.props.closeModal}>Cancelar</Button>
                </Modal.Footer>
            </Modal>
        );
    }

    deleteCliente(){
        var cliente = this.state.cliente;
        if(cliente === undefined){
            return;
        }
        var urlDeleteClientes = "https://clients-backend.herokuapp.com/contabilidad/clientes/" + cliente.id;
        axios.delete(urlDeleteClientes).then(res => {
            this.props.closeModal();
            this.props.getClientes();            
        }).catch(error => {
            this.props.closeModal();            
            console.log(error);
        });        
    }

}

export default ModalConfirmarEliminar;