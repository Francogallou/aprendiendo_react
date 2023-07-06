import React, { Component } from "react";
import MiComponente from './MiComponente';
import '../assets/css/App.css';

class SeccionPrueba extends Component {


    contador = 0;

    constructor(props){
        super(props);

        this.state = {
            contador:0
        };
    }

    // var HolaMundo = () => {}
    HolaMundo(nombre) {
        var presentacion = (<h2> Hola soy {nombre}</h2>);
        return presentacion;
    }

    sumar(){
        //this.contador = this.contador +1
        //this.state.contador = this.state.contador +1
        this.setState({
            contador: (this.state.contador+1)
        })
    }

    restar = (e) => {
        //this.contador = this.contador -1
        //this.state.contador = this.state.contador -1
        this.setState({
            contador: (this.state.contador-1)
        })
    }



    render() {
        var nombre = 'Franco'


        return (
            <section id="content">        

                <div>
                    {this.HolaMundo(nombre)}
                </div>

                <section className="componentes">
                    <MiComponente />

                </section>

                <p>
                    Contado: {this.state.contador}
                </p>
                <p>
                    <input type="button" value="Sumar" onClick={this.sumar.bind(this)}/>
                    <input type="button" value="Restar" onClick={this.restar}/>
                </p>

            </section>



        );
    }

}

export default SeccionPrueba;