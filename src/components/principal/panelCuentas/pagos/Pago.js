import React from 'react'

const Pago = ({pago}) => {
    return ( 
        <li className="cargos mt-2">
            <p>Concepto: {pago.concepto}
                <span className="pago">${pago.cantidad}</span>
            </p>
            <p>Fecha: {pago.fecha}</p>
            <div className="acciones mt-2">
                <button className="btn btn-warning mt-2">Editar</button>
                <button className="btn btn-danger mt-2">Eliminar</button>
            </div>
        </li>
     );
}
 
export default Pago;