const { Paciente } = require("../models/pacientes")

const validarId = async (req, res, next) => {
    const id = await Paciente.findById(req.params.id)
        if (id !== null) {
            next();
        } else {
            res.status(501).json({msg: "Error al ingresar el ID o ID inexistente"})
        }
}

module.exports = { validarId }