import React from 'react';
import 'bulma/css/bulma.css';

const Navbar = () =>{
    return(
        <nav class="navbar is-transparent is-light is-spaced">
        <div class="navbar-brand">
            <a class="" href="#">
            <img src="https://blog.flamingtext.com/blog/2018/06/04/flamingtext_com_1528139928_142697387.png" border="0" alt="Logo Design by FlamingText.com" title="Logo Design by FlamingText.com" width="150" height="350" />
            </a>
        </div>
            <div id="navbarExampleTransparentExample is-centered" class="navbar-menu">
                <div class="navbar-start">
                        <a class="navbar-item" href="#">
                            Inicio
                        </a>
                        <a class="navbar-item" href="#">
                            Trabajos
                        </a>
                        <a class="navbar-item" href="#">
                            Historial
                        </a>
                        <a class="navbar-item" href="#">
                            Sueldo
                        </a>
                </div>
            </div>
        </nav>
    );
}
export default Navbar;