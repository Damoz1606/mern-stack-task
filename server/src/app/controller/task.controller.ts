import { Request, Response } from 'express';
import Task from '../model/task.model';

export async function getTasks(req: Request, res: Response) {
    try {
        const tasks = await Task.find();
        return res.status(200).json(tasks);
    } catch (error) {
        return res.status(500).json({
            message: "Error",
            error: error.message
        });
    }
}

export async function getTask(req: Request, res: Response) {
    try {
        const task = await Task.findById(req.params.id);
        if(!task){
            throw new Error("Task not found");
        }
        return res.status(200).json(task);
    } catch (error) {
        return res.status(500).json({
            message: "Error",
            error: error.message
        });
    }
}

export async function postTask(req: Request, res: Response) {
    try {
        const task = await Task.create(req.body);
        return res.status(200).json(task);
    } catch (error) {
        return res.status(500).json({
            message: "Error",
            error: error.message
        });
    }
}

export async function putTask(req: Request, res: Response) {
    try {
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
        return res.status(200).json(task);
    } catch (error) {
        return res.status(500).json({
            message: "Error",
            error: error.message
        });
    }
}

export async function deleteTasks(req: Request, res: Response) {
    try {
        const task = await Task.deleteMany({});
        return res.status(200).json(task);
    } catch (error) {
        return res.status(500).json({
            message: "Error",
            error: error.message
        });
    }
}

export async function deleteTask(req: Request, res: Response) {
    try {
        const task = await Task.findByIdAndRemove(req.params.id);
        return res.status(200).json(task);
    } catch (error) {
        return res.status(500).json({
            message: "Error",
            error: error.message
        });
    }
}