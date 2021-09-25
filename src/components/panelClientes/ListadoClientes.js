import React from 'react';
import Cliente from './Cliente';

const ListadoClientes = () => {

    const clientes = [
        {nombre: 'Memo Ochoa', edad: '30', telefono: '6181762612', tratamiento: 'Muelas picadas'},
        {nombre: 'Leo Messi', edad: '50', telefono: '6181762611', tratamiento: 'Brackets'},
        {nombre: 'Neymar', edad: '20', telefono: '6181762613', tratamiento: 'Muelas del juicio'},
        {nombre: 'Pelé', edad: '80', telefono: '6181762614', tratamiento: 'Extraccion'}
    ];


    return ( 
        <ul className="listado-clientes">
            {clientes.map(cliente => (
                <Cliente 
                    cliente={cliente}
                />
            ))}
        </ul>
     );
}
 
export default ListadoClientes;