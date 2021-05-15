import React from 'react';

import TaskForm from './taskform/TaskForm';
import TaskList from './tasklist/TaskList';

import { Task } from '../interfaces/task';
import { useState } from 'react';
import { useEffect } from 'react';

import * as TaskService from '../services/task.service';

const TaskApp = () => {

    const [task, setTask] = useState<Task>({} as Task);
    const [flag, setFlag] = useState<boolean>(false)
    const [tasks, settasks] = useState<Task[]>([]);

    useEffect(() => {
        loadItems();
    }, [])

    const loadItems = async () => {
        const res = await TaskService.getTasks();
        settasks(res.data);
    }

    const handleDeleteAll = async () => {
        TaskService.deleteTasks();
        settasks([]);
    }

    return(
        <div>
            <div className="container mb-4">
                <button className="btn btn-dange btn-block" onClick={handleDeleteAll}>Delete All</button>
            </div>
            <div className="row">
                <div className="col-5">
                    <TaskForm flag={flag} setFlag={setFlag} tasks={tasks} setTasks={settasks} task={task} setTask={setTask}/>
                </div>
                <div className="col-7">
                    <TaskList setFlag={setFlag} tasks={tasks} setTasks={settasks} setTask={setTask}/>
                </div>
            </div>
        </div>
    );
}

export default TaskApp;
