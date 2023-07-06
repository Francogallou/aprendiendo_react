import React, { Component } from 'react';
import Slider from './Slider';

class Home extends Component {

    render() {

        return (
            <div id="home">
                <Slider
                    title="Bienvenido a mi terrible página"
                    btn="Ir al blog"
                />
                <div id="content">
                    <h1 class="subheader">Ultimos articulos</h1>
                </div>
            </div>
        );
    }
}

export default Home;

