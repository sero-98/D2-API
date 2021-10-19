const express = require('express');
const Hoja_vida = require('../models/hoja_vida.js')


const hvRouter = express.Router();

hvRouter.post('/', async (req, res) => {
  const { informacion_personal, habilidades,contactos } = req.body

  const newhv = new Hoja_vida({
    informacion_personal, habilidades,contactos
  })

  const savedhv= await newhv.save();

  res.status(200).json({ error: false, message: 'Fue creado correctamente' })

})

hvRouter.get('/', async (req, res) => {
  const hvs = await Hoja_vida.find().sort({ name: 1});
  if (hvs) {
    res.status(200).json({ error: false, hvs });
  } else {
    return res
      .status(400)
      .json({ error: true, message: "No hay registrados en el sistema" });
  }
})

hvRouter.get('/:id', async (req, res) => {
  const id = req.params.id
  const foundhv = await Hoja_vida.findOne({ _id: id })
  if (foundhv) {
    res.status(200).json({ error: false, foundhv });
  } else {
    return res
      .status(400)
      .json({ error: true, message: "No hay registrado en el sistema" });
  }
})

module.exports = hvRouter ;