import { Task } from '../interfaces/task';
import axios from 'axios';


const URL: string = "http://localhost:4000/api/task";

export const getTasks = () => {
    return axios.get<Task[]>(URL);
}

export const deleteTasks = () => {
    return axios.delete(URL);
}

export const postTask = (task: Task) => {
    return axios.post<Task>(URL, task);
}

export const getTask = (id: string) => {
    return axios.get<Task>(`${URL}/${id}`);
}

export const deleteTask = (id: string) => {
    return axios.delete<Task>(`${URL}/${id}`);
}

export const putTask = (id:string, task: Task) => {
    return axios.put<Task>(`${URL}/${id}`, task);
}