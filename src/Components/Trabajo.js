import React from 'react';
import 'bulma/css/bulma.css';

const Trabajos = () =>{

    return (
        <div>
            <div class="columns">
            <div class="column">
                
            </div>
            <div class="column">
            <br/>
            <div class="field">
                <label class="label">Mecanico</label>
                <div class="control">
                    <div class="select">
                    <select>
                        <option>Adolfo</option>
                        <option>Juan</option>
                        <option>Elkin</option>
                    </select>
                    </div>
                </div>
            </div>
            <br/>
            <div class="field">
                <label class="label">Día</label>
                <div class="control">
                    <div class="select">
                    <select>
                        <option>Lunes</option>
                        <option>Martes</option>
                        <option>Miercoles</option>
                        <option>Jueves</option>
                        <option>Viernes</option>
                        <option>Sabado</option>
                    </select>
                    </div>
                </div>
            </div>
            <br/>
                <div>
                    <label class="label">Vehiculo</label>
                    <div class="control">
                        <input class="input" type="text" placeholder="AKT"/>
                    </div>
                </div>
                <br/>
                <div>
                    <label class="label">Mano de Obra</label>
                    <div class="control">
                        <input class="input" type="text" placeholder="30000"/>
                    </div>
                </div>
                <br/>
                <br/>
                <a class="button is-success is-outlined">Confirmar</a>
            </div>
            <div class="column">
                    
            </div>
            <div class="column">
                
            </div>
            </div>

            
        </div>

    );
}

export default Trabajos;