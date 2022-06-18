/**
 * Ejemplo de uso del Hook useState
 * 
 * Crear un componente de tipo funcion y acceder a su estado
 * privado a travez de un hook y ademas poder modificarlo
 */

import React, { useState } from 'react';

const Ejemplo1 = () => {

    // valor inicial para contador
    const valorInicial = 0;

    // valor inicial para una persona
    const personaInicial = {
        nombre: 'Anibal',
        email: 'aigonzalezpec@gmail.com'
    }

    /**
     * queremos que el valorinicial y personainicial sean parte del
     * estado del componente para asi poder gestionar su cambio y que
     * este se vea reflejado en la vista del componente
     * 
     * const [nombreVariable, fucionParaCambiar] = useState(valorInicial)
     */
    const [contador, setContador] = useState(valorInicial);
    const [persona, setPersona] = useState(personaInicial);

    /**
     * Funcion para actualizar estado privado que contiene contador
     */
    function incrementarContador(){
        // ? funcionParaCambiar(nuevoValor)
        setContador(contador + 1);
    }

    /**
     * Funcion para actualizar estado de persona
     */
    function actualizarPersona(){
        setPersona(
            {
                nombre: 'Ejemplo',
                email: 'ejemplo@gmail.com'
            }
        )
    }

    return (
        <div>
            <h1>Ejempl de useState() ***</h1>
            <h2>Contador: { contador }</h2>
            <h2>Datos de persona:</h2>
            <h3>Nombre: { persona.nombre }</h3>
            <h3>Email: { persona.email }</h3>
            {/* Bloque de botones par actualuizar estado */}
            <button onClick={ incrementarContador }>Incrementar contador</button>
            <button onClick={ actualizarPersona }>Actualizar persona</button>
        </div>
    );
}

export default Ejemplo1;
