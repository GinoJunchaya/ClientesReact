import React, {Component} from 'react';
import Header from './Header';
import Menu from './Menu';
import ListaClientes from './ListaClientes';
import axios from 'axios';

class Clientes extends Component{

    constructor(props, context){
        super(props);
        this.state = {
            loading: true,
            clientes: []
        }
    }

    componentWillMount(){
        this.getClientes();
    }

    render(){
        return(
            <section>
                <Header/>
                <Menu/>
                <ListaClientes clientes={this.state.clientes} loading={this.state.loading}/>
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
    
}

export default Clientes;
