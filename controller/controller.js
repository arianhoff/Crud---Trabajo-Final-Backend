const { Paciente } = require('../models/pacientes')
const { validationResult } = require("express-validator")

const vistaUno = (req, res) => {
    res.render('index', { title: 'Express' });
}

const vistaUnoPaciente = async (req, res) => {
    try {
        const paciente = await Paciente.findById(req.params.id)
        res.json({paciente})
    } catch (error) {
        res.status(400).json({msg: "Paciente no encontrada", error})
    }
}

const vistaPaciente = async (req, res) => {
    const pacientes = await Paciente.find()
    res.json({ pacientes })
}

const crearPaciente = async (req, res) => {
    try {
        const error = validationResult(req)
        if (error.isEmpty()) {
            const crear = new Paciente(req.body);
            await crear.save()
            res.status(201).json({  msg: "Creado correctamente", crear })
        } else {
            res.status(501).json(error)
        }
    } catch (err) {
        res.status(501).json({ msg: "No se puede crear el nuevo paciente" })
    }
}

const editarPaciente = async (req, res) => {
    try {
        const error = validationResult(req)
        if (error.isEmpty()) {
            const { id } = req.params
            await Paciente.findByIdAndUpdate(id, req.body)
            res.status(202).json({ msg: "Paciente actualizado correctamente." })
        } else {
            res.status(501).json(error)
        }
    } catch (error) {
        res.status(501).json({ msg: "No se puedo actualizar el paciente." })
    }

}

const eliminarPaciente = async (req, res) => {
    try {
        const paciente = await Paciente.findByIdAndDelete(req.params.id)
        res.json({ msg: "El paciente se elimino con éxito.", paciente })
    } catch (error) {
        res.status(400).json({ msg: "Problemas al borrar información." })
    }
}

module.exports = { vistaUnoPaciente, crearPaciente, vistaPaciente, editarPaciente, eliminarPaciente, vistaUno }
