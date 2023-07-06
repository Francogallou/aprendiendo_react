import React, { Component } from 'react';
import Pelicula from './Pelicula';

class Peliculas extends Component {

    state = {
        peliculas:[
            {titulo : 'Assasin Creed', image:'https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/7qSZMxLOAsEPF6tXGFD83n/51a4c763cb1322fe1281aa639f8a86d1/ac-brotherhood.jpg?imwidth=360'},
            {titulo : 'Fifa 2023', image:'https://image.api.playstation.com/vulcan/ap/rnd/202301/0312/yM0eeJui8AFByeP5BC5XV5j9.png'},
            {titulo : 'GTA V', image:'https://cdn-products.eneba.com/resized-products/t0zqmqhdcxppyol3mtlg_350x200_2x-0.jpg'}
        ],
        nombre: 'Franco',
        favorita: {}
    };

    cambiarTitulo = () => {

        var {peliculas} =this.state;
        peliculas[0].titulo = "Assasin Creed Brotherhood"

        this.setState({
            peliculas: peliculas
        });
    }

    favorita = (pelicula) => {
        console.log("favorita marcada");
        console.log(pelicula);
        this.setState({
            favorita: pelicula
        });

    }

    
    

    render() {       
        var favorita;
        if(this.state.favorita.titulo){
            favorita = (
                <div className="favorita">
                    <strong>El juego favorito es:</strong>
                    <span>{this.state.favorita.titulo}</span>
                </div>
            );
        }else{
            favorita=(
                <p>No hay juego favorito</p>
            );
        }

        return (
            <div id='content' className="peliculas">

                <h2 className="subheader">Juegos</h2>
                <p>Selección de los juegos favoritos de {this.state.nombre}</p>
                <div>
                    <button onClick={this.cambiarTitulo}>
                        Cambiar titulo de assasin creed
                    </button>
                </div>
                
                {favorita}
                
                {/*}
                {this.state.favorita.titulo ? (
                        <div className="favorita">
                            <strong>El juego favorito es:</strong>
                            <span>{this.state.favorita.titulo}</span>
                        </div>
                    ) : (
                        <p>No hay juego favorito</p>
                    )
                }
                */}

                {/* Crear componente Pelicula */}
                
                <div id="articles">
                {
                    this.state.peliculas.map((pelicula,i) => {
                        return(
                            <Pelicula 
                                key={i}
                                pelicula={pelicula} 
                                marcarFavorita={this.favorita}
                            />
                        )
                    })
                }

                </div>

            </div>
        );

    }

}

export default Peliculas;