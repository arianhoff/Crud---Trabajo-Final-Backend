const express = require("express")
const router = express.Router();
const { vistaPaciente, vistaUnoPaciente, crearPaciente, editarPaciente, eliminarPaciente } = require("../controller/controller");
const { validarId } = require("../middleware/validaciones")
const { pacienteChecks } = require("../middleware/pacientesCheck")

router.get("/ver", vistaPaciente);
router.get("/ver/:id", validarId, vistaUnoPaciente);
router.post('/crear', pacienteChecks, crearPaciente)
router.put("/editar/:id", validarId, pacienteChecks, editarPaciente)
router.delete("/eliminar/:id", validarId, eliminarPaciente)

module.exports = router;
