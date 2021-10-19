const express = require('express');
const Mentoria = require('../models/mentoria.js');

const mentoriaRouter = express.Router();

mentoriaRouter.post('/', async (req, res) => {
  const { comentario, plan_estrategico, plan_accion } = req.body

  const newMentoria = new Mentoria({
    comentario, plan_estrategico, plan_accion
  })

  const savedMentoria= await newMentoria.save();

  res.status(200).json({ error: false, message: 'La mentoria fue creada correctamente' })

})

mentoriaRouter.get('/', async (req, res) => {
  const Mentorias = await Mentoria.find();
  if (Mentorias) {
    res.status(200).json({ error: false, Mentorias });
  } else {
    return res
      .status(400)
      .json({ error: true, message: "No hay Mentorias registradas en el sistema" });
  }
})

mentoriaRouter.get('/:id', async (req, res) => {
  const id = req.params.id
  const foundMentoria = await Mentoria.findOne({ _id: id })
  if (foundMentoria) {
    res.status(200).json({ error: false, foundMentoria });
  } else {
    return res
      .status(400)
      .json({ error: true, message: "No hay esta Mentoria registrado en el sistema" });
  }
})

module.exports = mentoriaRouter ;