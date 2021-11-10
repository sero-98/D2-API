const express = require('express');
const Mentorizado = require('../models/mentorizado.js');
const nodemailer =require('nodemailer');
const config = require('../config/index.js');

const mentorizadoRouter = express.Router();

mentorizadoRouter.post('/send-email', async (req, res) => {
  
  const { name, email, phone, message } = req.body;

  contentHTML = `
        <h1>Reunion de Mentorizados</h1>
        <ul>
            <li>Username: ${name}</li>
            <li>User Email: ${email}</li>
            <li>PhoneNumber: ${phone}</li>
        </ul>
        <p>${message}</p>
        <br>
        <h2>si quieres ser parte de esta gran oportunidad ingresa aquí y registrate ya!!!!!</h2>
        <br>
        <h2>http://localhost:3002/</h2>
    `;

    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
          user: 'sergio.ac.1503@gmail.com',
          pass: 'kjdguugxigjrbpui',
      }
  });


  let info = await transporter.sendMail({
      from: '"UNMSM form', // sender address,
      to: 'sergio.aroni@unmsm.edu.pe, aroni.carbajals@gmail.com',
      //to: mentorizados.email,
      subject: 'Website Contact Form',
      //text: 'Hello World'
      html: contentHTML
  })

  console.log('Message sent: %s', info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...

  res.redirect('/success.html'); 

  /*console.log(req.body);
  res.send("recibido")*/

})


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