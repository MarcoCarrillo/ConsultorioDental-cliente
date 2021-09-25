import React from 'react'

const Cliente = ({cliente}) => {
    return ( 
        <li>
            <button
                type="button"
                className="boton btn-blank"
            >{cliente.nombre}</button>
        </li>
     );
}
 
export default Cliente;