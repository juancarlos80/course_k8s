const db = require("../models");
const Employe = db.employes;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  // Validate request
  if (!req.body.first_name) {
    res.status(400).send({
      message: "First name can not be empty!"
    });
    return;
  }

  const employe = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    rol: req.body.rol
  };

  Employe.create(employe)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the employe."
      });
    });
};

exports.findAll = (req, res) => {  
  Employe.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving employes."
      });
    });
};