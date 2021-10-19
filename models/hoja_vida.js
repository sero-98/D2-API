const mongoose = require('mongoose');
const express = require('express');


const hoja_vidaSchema = new mongoose.Schema(
  {
    informacion_personal: { 
      type: String, 
      required: true 
    },
    habilidades: {
      type: String, 
      required: true, 
    },
    contactos: { 
      type: String, 
      required: true 
    },
  }
);

const Hoja_vida = mongoose.model('Hoja_vida', hoja_vidaSchema);
module.exports = Hoja_vida ;