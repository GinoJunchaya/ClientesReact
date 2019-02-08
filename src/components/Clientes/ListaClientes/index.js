import React, { Component } from 'react';
import {Table, Button} from 'react-bootstrap';

class ListaClientes extends Component {

    constructor(props, context){
        super(props);
        this.state = {
            clientes: this.props.clientes,
            loading: this.props.loading
        }
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            clientes: nextProps.clientes,
            loading: nextProps.loading
        });
    }

    render() {

        if(this.state.loading){
            var loading = require("./loading.gif");            
            return(
                <section style={{width: "100%", textAlign: "center"}}>
                    <img src={loading} alt="" style={{margin: "auto"}}/>
                </section>
            );
        }

        var clientes = this.state.clientes;
        var tbodyMostrar = clientes.map( (cliente, k) => (
            <tr key={k} style={{cursor: "pointer"}}>
                <td onClick={(e) => this.props.showModalConsultar(cliente)}>{cliente.id}</td>
                <td onClick={(e) => this.props.showModalConsultar(cliente)}>{cliente.razon_social}</td>
                <td onClick={(e) => this.props.showModalConsultar(cliente)}>{cliente.ruc}</td>
                <td onClick={(e) => this.props.showModalConsultar(cliente)}>{cliente.telefono}</td>
                <td onClick={(e) => this.props.showModalConsultar(cliente)}>{cliente.direccion}</td>
                <td>
                    <Button onClick={(e) => this.props.showModalActualizar(cliente)} variant="info">Editar</Button>&nbsp;&nbsp;
                    <Button onClick={(e) => this.props.showModalEliminar(cliente)} variant="danger">Eliminar</Button>
                </td>
            </tr>
        ));

        return (
            <section style={{padding: "20px"}} >
                <Table bordered hover size="sm" responsive>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Razón social</th>
                            <th>RUC</th>
                            <th>Teléfono</th>
                            <th>Dirección</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tbodyMostrar}
                    </tbody>
                </Table>
            </section>                
        );
    }
}

export default ListaClientes;