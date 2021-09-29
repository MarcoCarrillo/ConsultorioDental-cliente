import React from 'react'

const Cargo = ({cargo}) => {
    return ( 
        <li className="cargos mt-2">
            <p>{cargo.concepto}
                <span className="cargo">${cargo.cantidad}</span>
            </p>

            <div className="acciones mt-2">
                <button className="btn btn-warning mt-2">Editar</button>
                <button className="btn btn-danger mt-2">Eliminar</button>
            </div>
        </li>
     );
}
 
export default Cargo;