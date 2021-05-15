import { Schema, model } from 'mongoose';

const task_schema = new Schema({
    title: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    }
}, 
{
    timestamps: true,
    versionKey: false
});

export default model("Task", task_schema);