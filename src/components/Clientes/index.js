import React, {Component} from 'react';
import Header from './Header';
import Menu from './Menu';
import ListaClientes from './ListaClientes';
import axios from 'axios';
import ModalFormCliente from './ModalFormCliente';
import ModalEliminar from './ModalEliminar';

class Clientes extends Component{

    constructor(props, context){
        super(props);
        this.state = {
            loading: true,
            clientes: [],
            showModalFormCliente: false,
            showEliminar: false,
            clienteAccion: undefined,
            modalEditable: true,
            modalType: undefined,
        }
    }

    componentWillMount(){
        this.getClientes();
    }

    render(){
        return(
            <section>
                <Header/>
                <Menu showModalRegistrar={this.showModalRegistrar.bind(this)}/>
                <ModalFormCliente show={this.state.showModalFormCliente} cliente={this.state.clienteAccion} closeModal={this.closeModalFormCliente.bind(this)} modalType={this.state.modalType} getClientes={this.getClientes.bind(this)} editable={this.state.modalEditable}/>
                <ModalEliminar show={this.state.showEliminar} cliente={this.state.clienteAccion} closeModal={this.closeModalEliminar.bind(this)} getClientes={this.getClientes.bind(this)}/>
                <ListaClientes clientes={this.state.clientes} loading={this.state.loading} showModalActualizar={this.showModalActualizar.bind(this)} showModalConsultar={this.showModalConsultar.bind(this)} showModalEliminar={this.showModalEliminar.bind(this)}/>
            </section>
        );
    }

    getClientes(){
        this.setState({
            loading: true
        });
        var urlGetClientes = "https://clients-backend.herokuapp.com/contabilidad/clientes";
        axios.get(urlGetClientes).then(response => {
            console.log(response);
            this.setState({
                clientes: response.data,
                loading: false
            });
        }).catch(error => {
            console.log(error);
            this.setState({
                clientes: [],
                loading: false
            });
        });
    }

    closeModalFormCliente(){
        this.setState({showModalFormCliente: false});
    }

    showModalActualizar(cliente){
        this.setState({
            showModalFormCliente: true,
            modalEditable: true,
            clienteAccion: cliente,
            modalType: "A"
        });
    }

    showModalEliminar(cliente){
        this.setState({
            showEliminar: true,
            clienteAccion: cliente
        });
    }

    closeModalEliminar(){
        this.setState({
            showEliminar: false,
            clienteAccion: undefined
        });
    }

    showModalRegistrar(){
        this.setState({
            showModalFormCliente: true,
            modalEditable: true,
            clienteAccion: undefined,
            modalType: "R"
        });
    }

    showModalConsultar(cliente){
        this.setState({
            showModalFormCliente: true,
            modalEditable: false,
            clienteAccion: cliente,
            modalType: "C"
        });        
    }

}

export default Clientes;
