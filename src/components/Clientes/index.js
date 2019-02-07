import React, {Component} from 'react';
import Header from './Header';
import Menu from './Menu';
import ListaClientes from './ListaClientes';

class Clientes extends Component{

    render(){
        return(
            <section>
                <Header />
                <Menu />
                <ListaClientes />
            </section>
        );
    }
}

export default Clientes;
