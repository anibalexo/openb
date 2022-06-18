/**
 * Ejemplo de uso de:
 * - useState()
 * - useRef()
 * - useEffect()
 */
import React, { useState, useRef, useEffect } from 'react';

const Ejemplo2 = () => {

    // dos contadores con estados diferentes
    const [contador1, setContador1] = useState(0);
    const [contador2, setContador2] = useState(0);

    // creamos una referencia con useRef() para asociar una variable
    // con un elemento del DOM del componente (vista HTML) 
    const miRef = useRef();

    function incrementar1(){
        setContador1(contador1 + 1)
    }

    function incrementar2(){
        setContador2(contador2 + 1)
    }

    /**
     * Trabajando con useEffect
     */

    /**
     * ? Caso 1: ejecutar siempre un snippet de codigo
     * Cada vez que haya un cambio en el estado del componente
     * se ejecuta aquello que esta dentro de useEffect()
     */
    /**
    useEffect(() => {
        console.log('cambio en estado del componente');
        console.log('mostrandor referencia a elemento del DOM');
        console.log(miRef);
    });
     */

    /**
     * ? Caso 2: ejecutar solo cuando se cambia contador 1
     * Cada vez que haya un cambio en contador 1, en contador 2 no habra ejecucion
     * se ejecuta aquello que esta dentro de useEffect()
     */
    /**
    useEffect(() => {
        console.log('cambio en estado del componente contador 1');
        console.log('mostrandor referencia a elemento del DOM');
        console.log(miRef);
    }, [contador1]);
     */

    /**
     * ? Caso 2: ejecutar solo cuando se cambia contador 1 o contador 2
     * Cada vez que haya un cambio en contador 1 o contador 2
     * se ejecuta aquello que esta dentro de useEffect()
     */
     useEffect(() => {
        console.log('cambio en estado del componente contador 1 o 2');
        console.log('mostrandor referencia a elemento del DOM');
        console.log(miRef);
    }, [contador1, contador2]);    

    return (
        <div>
            <h1>Ejempl de useState(), useRef(), useEffect() ***</h1>
            <h2>Contador1: { contador1 }</h2>
            <h2>Contador2: { contador2 }</h2>            
            {/* elemento referenciado */}
            <h4 ref={ miRef }>Ejemplo de elemento referenciado</h4>
            {/* botones para cambiar contadores */}
            <div>
                <button onClick={ incrementar1 }>Incrementar contador1</button>
                <button onClick={ incrementar2 }>Incrementar contador2</button>
            </div>                        
        </div>
    );
}

export default Ejemplo2;
