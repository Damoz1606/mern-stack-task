import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import config from './config/config';
import TaskRoutes from './app/routes/task.routes'

const app = express();

//settings
app.set("port", config.PORT);

//middleware
app.use(cors());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//routes
app.use("/api/task", TaskRoutes);

//export
export default app;