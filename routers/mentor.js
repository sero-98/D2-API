const express = require('express');
const Mentor = require('../models/mentor.js');

const mentorRouter = express.Router();

mentorRouter.post('/', async (req, res) => {
  const { name, email } = req.body

  const newMentor = new Mentor({
    name, email
  })

  const savedMentor= await newMentor.save();

  res.status(200).json({ error: false, message: 'El Mentor ' + name + ' fue creado correctamente' })

})

mentorRouter.get('/', async (req, res) => {
  const Mentores = await Mentor.find().sort({ name: 1});
  if (Mentores) {
    res.status(200).json({ error: false, Mentores });
  } else {
    return res
      .status(400)
      .json({ error: true, message: "No hay Mentores registrados en el sistema" });
  }
})

mentorRouter.get('/:id', async (req, res) => {
  const id = req.params.id
  const foundMentor = await Mentor.findOne({ _id: id })
  if (foundMentor) {
    res.status(200).json({ error: false, foundMentor });
  } else {
    return res
      .status(400)
      .json({ error: true, message: "No hay este Mentor registrado en el sistema" });
  }
})

module.exports = mentorRouter ;