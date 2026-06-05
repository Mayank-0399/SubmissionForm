const express = require("express");
const Contact = require("../models/Contact");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    const contact = await Contact.create({
      name,
      email,
      message,
    });

    res.status(201).json({
      success: true,
      message: "Form Submitted Successfully",
      contact,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

module.exports =  router;