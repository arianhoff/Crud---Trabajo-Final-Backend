const {check} = require("express-validator")

const pacienteChecks = [
    check('name').not().isEmpty().withMessage("Debe ingresar el nombre del paciente.").isLength({ max: 30, min: 1 }).withMessage("Debe tener entre 1-30 caracteres."),
    check('lastName').not().isEmpty().withMessage("Debe ingresar el apellido del paciente"),
    check('dni').not().isEmpty().withMessage("Ingresar DNI del paciente."),
    check('email').not().isEmpty().withMessage("Debe ingresar el email del paciente."),
]

module.exports = {pacienteChecks}