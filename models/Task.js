const mongoose = require("mongoose")

const { Schema } = mongoose

const taskSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    rating: {
        type: String,
        required: true,
    },
    color: {
        type: String,
        required: true,
    },

    isDone: {
        type: String,
        required: false,
    }
}, {timestamps: true})


const Task = mongoose.model("Task", taskSchema)

module.exports = Task