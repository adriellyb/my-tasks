const Task = require('../models/Task');
const User = require('../models/User');

/** Create new task */
const create = async (req, res) => {
    console.log("create task");
    try {
        const { userId } = req.params;
        const user = await User.findByPk(userId);

        if (!user) { 
            return res.status(500).json({ error: 'Usuário não existe' }) 
        }
        const task = await Task.create(req.body);

        return res.status(200).json({ message: "Usuário criado com sucesso!", task: task });
    }
    catch (err) {
        return res.status(500).json(`${err}`);
    }
}

/** List all tasks */
const index = async (req, res) => {
    console.log("list tasks");
    try {
        const tasks = await Task.findAll();

        return res.status(200).json({ tasks });
    } 
    catch (err) {
        return res.status(500).json(`${err}`);
    }
}

/** Find a task by id */
const show = async (req, res) => {
    console.log("find task");
    try {
        const { id } = req.params;
        const task = await Task.findByPk(id);

        return res.status(200).json({ task });
    } 
    catch (err) {
        return res.status(500).json(`${err}`);
    }
}

/** Update task register */
const update = async (req, res) => {
    console.log("update task");
    try {
        const { id } = req.params;

        const [updated] = await Task.update(req.body, {
            where: { id: id }
        });

        if (updated) {
            const task = await Task.findByPk(id);
            
            return res.status(200).json({ task });
        }
    }
    catch (err) {
        return res.status(500).json(`${err}`);
    }
}

/** Delete task */
const destroy = async (req, res) => {
    console.log("delete task");
    try {
        const { id } = req.params;
        const deleted = await Task.destroy({ where: { id } });

        if (deleted) {
            return res.status(200).json("Registro deletado com sucesso.");
        }

        throw new Error("Registro não encontrado.");
    } catch (err) {
        return res.status(500).json(`${err}`);
    }
}

module.exports = {
    index,
    show,
    create,
    update,
    destroy
};