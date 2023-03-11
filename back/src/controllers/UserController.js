const User = require('../models/User');

/** Create new user */
const create = async (req, res) => {
    console.log("create user");
    try {
        const user = await User.create(req.body);

        return res.status(200).json({ message: "Usuário criado com sucesso!", user: user });
    }
    catch (err) {
        return res.status(500).json(`${err}`);
    }
}

/** List all users */
const index = async (req, res) => {
    console.log("list users");
    try {
        const users = await User.findAll();

        return res.status(200).json({ users });
    } 
    catch (err) {
        return res.status(500).json(`${err}`);
    }
}

/** Find a user by id */
const show = async (req, res) => {
    console.log("find user");
    try {
        const { id } = req.params;
        const user = await User.findByPk(id);

        return res.status(200).json({ user });
    } 
    catch (err) {
        return res.status(500).json(`${err}`);
    }
}

/** Update user register */
const update = async (req, res) => {
    console.log("update user");
    try {
        const { id } = req.params;

        const [updated] = await User.update(req.body, {
            where: { id: id }
        });

        if (updated) {
            const user = await User.findByPk(id);
            
            return res.status(200).json({ user });
        }
    }
    catch (err) {
        return res.status(500).json(`${err}`);
    }
}

/** Delete user */
const destroy = async (req, res) => {
    console.log("delete user");
    try {
        const { id } = req.params;
        const deleted = await User.destroy({ where: { id } });

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