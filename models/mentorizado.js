const mongoose = require('mongoose');
const express = require('express');


const mentorizadoSchema = new mongoose.Schema(
  {
    name: { 
      type: String, 
      required: true 
    },
    email: {
      type: String, 
      unique: true, 
    },
  },
  {
    timestamps: true
  }
);

const Mentorizado = mongoose.model('Mentorizado', mentorizadoSchema);
module.exports = Mentorizado ;