import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';

//importamos hoja de estilo task.scss
import '../../styles/task.scss'
import { LEVELS } from '../../models/levels.enum';

const TaskComponent = ({ task, complete, remove }) => {

    useEffect(() => {
        console.log("Created Task");
        return () => {
            console.log("Task: {task.name} is going to unmount");
        };
    }, [task]);

    /**
     * Function retorna Badge
     * dependiendo del nivel de tarea
     */
    function taskLevelBadge(){
        switch (task.level) {
            case LEVELS.NORMAL:
                return(
                    <h6 className='mb-0'>
                        <span className='badge bg-primary'>
                            { task.level }
                        </span>
                    </h6>
                );
            case LEVELS.URGENT:
                return(
                    <h6 className='mb-0'>
                        <span className='badge bg-warning'>
                            { task.level }
                        </span>
                    </h6>
                );        
            case LEVELS.BLOCKING:
                return(
                    <h6 className='mb-0'>
                        <span className='badge bg-danger'>
                            { task.level }
                        </span>
                    </h6>
                ); 
            default:
                break;
        }
    }

    /**
     * Funcion retorna icon en base a completada la tarea
     */
    function taskIconCompletedIcon(){
        if(task.completed){
            return (<i onClick={() => complete(task)} className='bi-toggle-on task-action' style={{color:'green'}}></i>)
        } else {
            return (<i onClick={() => complete(task)} className='bi-toggle-off task-action' style={{color:'grey'}}></i>)
        }
    }

    const taskCompletedStyle = {        
        color: 'gray',
        fontWeight: 'bold',
        textDecoration: 'line-through'
    }

    const taskPendingStyle = {
        color: 'tomato',
        fontWeight: 'bold'
    }    

    return (
        <tr className='fw-normal' style={task.completed ? taskCompletedStyle : taskPendingStyle}>
            <th>
                <span className='ms-2'>{ task.name }</span>
            </th>
            <td className='align-middle'>
                <span>{ task.description }</span>
            </td>
            <td className='align-middle'>
                { taskLevelBadge() }
            </td>
            <td className='align-middle'>
                { taskIconCompletedIcon() }
                <i className='bi-trash task-action' onClick={() => remove(task)} style={{color:'tomato', fontSize: '20px', fontWeight:'bold'}}></i>
                {/* <span>{ task.completed ? 'Completed' : 'Pending' }</span> */}
            </td>
        </tr>
    );
};

TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task).isRequired,
    complete: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired
};

export default TaskComponent;
