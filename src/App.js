import logo from './logo.svg';
import './App.css';

import Greeting from './components/pure/greeting';
import GreetingF from './components/pure/greetingF';
import TaskListComponent from './components/container/task_list';
import Ejemplo1 from './hooks/Ejemplo1';
import Ejemplo2 from './hooks/Ejemplo2';
import MiComponenteConContexto from './hooks/Ejemplo3';
import Ejemplo4 from './hooks/Ejemplo4';
import GreetingStyled from './components/pure/greetingStyled';
import { Father } from './components/container/father';


function App() {
  return (
    <div className="App">
{/*       <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header> */}
        {/* Conponente propio greeting.jsx*/ }
        {/* <Greeting name="Anibal"></Greeting> */}
        {/* Componente de ejemplo funcional */}
        {/* <GreetingF name={"Anibal"}></GreetingF> */}
        {/* Componente de listado de Tareas */}
        <TaskListComponent></TaskListComponent>
        {/* Ejemplos de uso de hooks */}
        {/* <Ejemplo1></Ejemplo1> */}
        {/* <Ejemplo2></Ejemplo2> */}
        {/* <MiComponenteConContexto></MiComponenteConContexto> */}
        {/* Todo lo que hay aqui es tratado como props.children */}
        {/* <Ejemplo4 nombre="Anibal">          
          <h3>
            Contenido de props.children
          </h3>
        </Ejemplo4> */}
        {/* <GreetingStyled></GreetingStyled> */}
        {/* gestion de eventos */}
        {/* <Father></Father> */}
    </div>
  );
}

export default App;
