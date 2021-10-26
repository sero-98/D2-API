const mongoose = require('mongoose');
const express = require('express');


const mentorSchema = new mongoose.Schema(
  {
    name: { 
      type: String, 
      required: true 
    },
    email: {
      type: String, 
      unique: true, 
    },
    mentorias: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Mentoria',
      }
    ]
  },
  {
    timestamps: true
  }
);

const Mentor = mongoose.model('Mentor', mentorSchema);
module.exports = Mentor ;