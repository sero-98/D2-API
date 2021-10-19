const express = require('express');
const Mentorizado = require('../models/mentorizado.js');

const mentorizadoRouter = express.Router();

mentorizadoRouter.post('/', async (req, res) => {
  const { name, email } = req.body

  const newMentorizado = new Mentorizado({
    name, email
  })

  const savedMentorizado= await newMentorizado.save();

  res.status(200).json({ error: false, message: 'El Mentorizado ' + name + ' fue creado correctamente' })

})

mentorizadoRouter.get('/', async (req, res) => {
  const Mentorizados = await Mentorizado.find().sort({ name: 1});
  if (Mentorizados) {
    res.status(200).json({ error: false, Mentorizados });
  } else {
    return res
      .status(400)
      .json({ error: true, message: "No hay Mentorizados registrados en el sistema" });
  }
})

mentorizadoRouter.get('/:id', async (req, res) => {
  const id = req.params.id
  const foundMentorizado = await Mentorizado.findOne({ _id: id })
  if (foundMentorizado) {
    res.status(200).json({ error: false, foundMentorizado });
  } else {
    return res
      .status(400)
      .json({ error: true, message: "No hay este Mentorizado registrado en el sistema" });
  }
})

module.exports = mentorizadoRouter ;