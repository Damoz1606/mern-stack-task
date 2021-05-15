import React from 'react';
import { Task } from '../../interfaces/task';

import * as TaskService from '../../services/task.service';

interface Props{
    setFlag: (React.Dispatch<React.SetStateAction<any>>),
    setTask: (React.Dispatch<React.SetStateAction<any>>),
    tasks: Task[],
    setTasks: (React.Dispatch<React.SetStateAction<any[]>>);
}

const TaskList = ({setFlag, setTask, tasks, setTasks}: Props) => {

    const handleDelete = async (id: string) => {
        const aux = tasks = tasks.filter(item => item._id !== id);
        await TaskService.deleteTask(id);
        setTasks(aux);
    }

    const handleEdit = async (id: string) => {
        const task = await TaskService.getTask(id);
        setFlag(true);
        setTask(task.data);
    }

    return (
        <div>
            <ul className="list-group">
                {tasks.map(task => {
                    return (
                        <li className="list-group-item">
                            <div className="container">
                                <div className="row">
                                    <div className="col-8">
                                        <p>{task.title}</p>
                                        <p>{task.description}</p>
                                    </div>
                                    <div className="col-4">
                                        <div className="btn-group">
                                            <button className="btn btn-warning btn-sm" onClick={() => task._id && handleEdit(task._id)}><span className="fa fa-edit"></span></button>
                                            <button className="btn btn-danger btn-sm" onClick={() => task._id && handleDelete(task._id)}><span className="fa fa-trash"></span></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    )
}

export default TaskList
