import React, {Fragment} from 'react';

const BarraInfo = () => {
    return ( 
        <Fragment>
        
            <div className="container bg-cliente">
                <div className="row justify-content-start">
                    <div className="col-md-auto text-center alinear">
                        <span className="icon">
                            <i className="far fa-user-circle"></i>
                        </span>
                    </div>
                    <div className="container col-10">
                        <div className="row info-cliente">
                            <div className="col align-self-start">
                                <p>Nombre: Marco Carrillo</p>
                                <p>Tratamiento: Muelas picadas</p>
                            </div>
                            <div className="col align-self-center">
                                <p>Edad: 18</p>
                                <p>Telefono: 6181028267</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
     );
}
 
export default BarraInfo;