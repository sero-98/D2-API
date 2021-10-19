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
  },
);

const Mentor = mongoose.model('Mentor', mentorSchema);
module.exports = Mentor ;