const mongoose = require('mongoose');
const express = require('express');


const mentoriaSchema = new mongoose.Schema(
  {
    comentario: { 
      type: String, 
      required: true 
    },
    plan_estrategico: {
      type: String, 
      required: true, 
      unique: true, 
    },
    plan_accion: { 
      type: String, 
      required: true 
    },
    mentor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Mentor',
    }
  },
  {
    timestamps: true
  }
);

const Mentoria = mongoose.model('Mentoria', mentoriaSchema);
module.exports = Mentoria ;