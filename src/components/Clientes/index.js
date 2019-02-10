import React, {Component} from 'react';
import Header from './Header';
import Menu from './Menu';
import ListaClientes from './ListaClientes';
import axios from 'axios';
import ModalFormCliente from './ModalFormCliente';

class Clientes extends Component{

    constructor(props, context){
        super(props);
        this.state = {
            loading: true,
            clientes: [],
            showFormCliente: false,
            modalEditable: true,
            clienteAccion: undefined
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
                <ListaClientes clientes={this.state.clientes} loading={this.state.loading}/>
                <ModalFormCliente show={this.state.showFormCliente}
                                editable={this.state.modalEditable}
                                cliente={this.state.clienteAccion}
                                closeModal={this.closeModalFormCliente.bind(this)}
                                getClientes={this.getClientes.bind(this)}/>
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
        this.setState({
            showFormCliente: false,
            clienteAccion: undefined
        });
    }

    showModalRegistrar(){
        this.setState({
            showFormCliente: true,
            modalEditable: true,
            clienteAccion: undefined
        });
    }
    
}

export default Clientes;
