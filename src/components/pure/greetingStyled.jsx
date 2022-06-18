import React, { useState } from 'react';

// definiendo stilos constantes:

// estilo para usuario logeado
const loggedStyle = {
    color: 'white',
}

// estilo para usuario no logeado
const unloggedStyle = {
    color: 'tomato',
    fontWeight: 'bold'
}

const GreetingStyled = (props) => {

    // generamos un estado para el componente
    // y asi controlar si el usuario esta o no logeado
    const [logged, setLogged] = useState(false);



    return (
        <div style={ logged ? loggedStyle : unloggedStyle }>
            { logged ? (<p>Hola, { props.name }</p>) : <p>Please Login</p>}
            
            <button onClick={() => {
                console.log("boton pulsado");
                setLogged(!logged);
            }}>
                { logged ? 'Logout' : 'Login'}
            </button>
        </div>
    );
}

export default GreetingStyled;
