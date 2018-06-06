import React from 'react';

const Historial = () => { 
    return (
        <div>
            <div>
            <div class="columns">
            <div class="column">
                
            </div>
            <div class="column">
            <br/>
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

                <a class="button is-link is-outlined ">Buscar</a>
            </div>
            <div class="column">
            <table class="table is-striped is-fullwidth">
                <thead>
                <tr>
                    <th>Vehiculo</th>
                    <th>Mano de Obra $</th>
                    <th>Día</th>

                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>AKT</td>
                    <td>100000</td>
                    <td>Lunes</td>
                </tr>
                <tr>
                    <td>BOXER</td>
                    <td>12000</td>
                    <td>Lunes</td>
                </tr>
                <tr>
                    <td>DUKE</td>
                    <td>30000</td>
                    <td>Martes</td>
                </tr>
                <tr>
                    <td>PULSAR</td>
                    <td>6000</td>
                    <td>Martes</td>
                </tr>
                </tbody>
            </table>
                
            </div>
            <div class="column">
                
            </div>
            </div>

            
        </div>
        </div>
    );

}

export default Historial;