import React, {Component} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Importar componentes
import SeccionPrueba from './components/SeccionPruebas';
import MiComponente from './components/MiComponente';
import Peliculas from './components/Peliculas';
import Error from './components/Error'
import Header from './components/Header';
import Slider from './components/Slider';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Formulario from './components/Formulario'
import Home from './components/Home';
import Blog from './components/Blog'

class Router extends Component{

    render(){

        return(
            <BrowserRouter>

                <header className="App-header">

                    <Header />

                </header>

                <Slider
                    title="Bienvenido a mi terrible página"
                    size='slider-big'
                />

                <Sidebar />

                <div className="center">
                    <body className="App-body">
                        {/* Configurar Rutas y Paginas */}
                        <Routes>
                            <Route exact path="/" element={<Peliculas />}></Route>
                            <Route exact path="/home" element={<Peliculas />}></Route>
                            <Route exact path="/blog" element={<Blog />}></Route>
                            <Route exact path="/formulario" element={<Formulario />}></Route>
                            <Route exact path="/peliculas" element={<Peliculas />}></Route>
                            <Route exact path="/segunda-ruta" element={<MiComponente />}></Route>
                            <Route
                                exact path="/pruebas"
                                element={
                                <div id="content">
                                    <h1 className="subheader">Página de pruebas</h1>
                                </div>
                                }
                            />
                            
                            <Route path="*" element={<Error />} />
                        </Routes>
                    </body>
                </div>

                <Footer />

            </BrowserRouter>
        );
    }
}

export default Router;


        <Route
            exact
            path="/pruebas"
            element={
              <div id="content">
                <h1 className="subheader">Página de pruebas</h1>
              </div>
            }
          />