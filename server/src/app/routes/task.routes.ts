import { Router } from 'express';
import * as TaskConstroller from '../controller/task.controller';

const router = Router();

router.route("/")
.get(TaskConstroller.getTasks)
.post(TaskConstroller.postTask)
.delete(TaskConstroller.deleteTasks);

router.route("/:id")
.get(TaskConstroller.getTask)
.put(TaskConstroller.putTask)
.delete(TaskConstroller.deleteTask);

export default router;