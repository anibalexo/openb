/**
 * Ejemplo de componente de tipo clase que dispone de los
 * metodos de ciclo de vida
 */
import React, { Component } from 'react';

class LifeCycleExample extends Component {

    constructor(props) {
        super(props)
        console.log('constructor: Cuando se instancia el componente');
    }

    componentWillMount(){
        console.log('WillMount: antes del montaje de componente');
    }

    componentDidMount(){
        console.log('DidMount: al terminar el montaje del componente, antes del renderizado');
    }

    componentWillReceiveProps(nextProps){
        console.log('WillReceiveProps: Si va a recibir nuevas props');
    }

    shouldComponentUpdate(nextProps, nextState) {
        /**
         * Controlar si el componente debe o no actualizarse
         */
        // return true / false
    }

    componentWillUpdate(nextProps, nextState){
        console.log('WillUpdate: justo antes de actualizarse');
    }

    componentDidUpdate(nextProps, nextState) {
        console.log('DidUpdate: justo despues de actualizarse');
    }

    componentWillUnmount(){
        console.log('WillUnmount: justo antes de desaparecer');
    }

    render() {
        return (
            <div>

            </div>
        );
    }
}

export default LifeCycleExample;

