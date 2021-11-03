import clienteAxios from "./axios";

const tokenAuth = token => {
    if(token){
        //En caso de que haya token pasarlo por headers
        clienteAxios.defaults.headers.common['x-auth-token'] = token;
    } else{
        //Si no eliminarlo
        delete clienteAxios.defaults.headers.common['x-auth-token'];
    }
}

export default tokenAuth;