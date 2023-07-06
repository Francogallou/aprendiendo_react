import React, { Component } from 'react'
import logo from '../assets/images/logo.svg'
import '../assets/css/App.css';
import { NavLink } from 'react-router-dom';

class Header extends Component {

    render() {

        return (
            <header id="header">
                <div className="Logo">
                    {/* Logo */}
                    <div id="logo">
                        <img src={logo} className="App-logo" alt="Logotipo" />
                        <span id="brand">
                            <strong>Curso</strong>React
                        </span>
                    </div>
                </div>

                {/* Menu */}
                <nav id="menu">
                    <ul>
                        <li>
                            <NavLink to="/home" activeClassName="active">Inicio</NavLink>
                        </li>
                        <li>
                            <NavLink to="/blog" activeClassName="active">Blog</NavLink>
                        </li>
                        <li>
                            <NavLink to="/formulario" activeClassName="active">Formulario</NavLink>
                        </li>
                        <li>
                            <NavLink to="/peliculas" activeClassName="active">Peliculas</NavLink>
                        </li>
                    </ul>


                </nav>

                {/* Limpiar flotados */}
                <div className="clearfix"></div>
            
            </header>
        );
    }

}

export default Header;