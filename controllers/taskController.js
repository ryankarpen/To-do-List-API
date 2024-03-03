const TaskModel = require("../models/Task")


const taskController = {
    create: async(req, res) => {
        try {

            const formTask = {
                name: req.body.name,
                description: req.body.description,
                rating: req.body.rating,
                color: req.body.color,
                isDone: req.body.isDone,
            }

            const response = await TaskModel.create(formTask)

            res.status(201).json({response, msg: "Tarefa criada com sucesso"})
            
        } catch (error) {
            console.log(error)
        }
    },

    getAll: async(req, res) => {
        try {
            
            const tasks = await TaskModel.find()

            res.json(tasks)

        } catch (error) {
            console.log(error)
        }
    },


    delete: async(req, res) => {
        try {

            const id = req.params.id
            const task = await TaskModel.findById(id)

            if(!task){
                res.status(404).json({msg: "Tarefa não encontrada"})
                return
            }

            const deletedTask = await TaskModel.findByIdAndDelete(id)
            res.status(200).json({deletedTask, msg: "Tarefa excluída com sucesso"})
            
        } catch (error) {
            console.log(error)
        }
    },

    update: async(req, res) => {
        try {

            const id = req.params.id

            const formTask = {
                name: req.body.name,
                description: req.body.description,
                rating: req.body.rating,
                color: req.body.color,
                isDone: req.body.isDone,
            }


            const updatedTask = await TaskModel.findByIdAndUpdate(id, formTask)

            if(!updatedTask){
                res.status(404).json({msg: "Tarefa não encontrada"})
                return
            }


            res.status(200).json({updatedTask, msg: "Tarefa concluída com sucesso"})
            
        } catch (error) {
            console.log(error)
        }
    }
}


module.exports = taskController