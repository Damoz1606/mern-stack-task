import React, { FormEvent, useState } from 'react'
import { ChangeEvent } from 'react';
import { Task } from '../../interfaces/task';
import * as TaskService from '../../services/task.service';

interface Props {
    flag: boolean,
    setFlag: (React.Dispatch<React.SetStateAction<any>>),
    task: Task;
    setTask: (React.Dispatch<React.SetStateAction<any>>),
    tasks: Task[];
    setTasks: (React.Dispatch<React.SetStateAction<any[]>>);
}

const TaskForm = ({flag, setFlag, task, setTask, tasks, setTasks}: Props) => {

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTask({...task, [e.target.name]: e.target.value});
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(!flag){
            const newtask = await TaskService.postTask(task);
            setTasks(item => [...item, newtask.data]);
        } else {
            await TaskService.putTask(task._id, task);
            const aux = tasks.map(item => {
                if (item._id === task._id) {
                    return task;
                } else {
                    return item;
                }
            } );
            setTasks(aux);
            setFlag(false);
        }
        setTask({} as Task);
        document.querySelector('form')?.reset();
    }

    return (
        <div className="card">
            <form className="card-body" onSubmit={handleSubmit}>
                <div className="form-group">
                    <input type="text" value={task.title} name="title" className="form-control" onChange={handleChange} placeholder="Title"/>
                </div>
                <div className="form-group">
                    <input type="text" value={task.description} name="description" className="form-control" onChange={handleChange} placeholder="Description"/>
                </div>
                {
                    (!flag)?
                    <button type="submit" className="btn btn-secondary btn-block"><span className="fa fa-save"></span> Save</button>
                    :
                    <button type="submit" className="btn btn-secondary btn-block"><span className="fa fa-save"></span> Update</button>
                }
            </form>
        </div>
    )
}

export default TaskForm
