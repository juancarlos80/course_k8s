module.exports = app => {
    const employes = require("../controllers/employe.controller.js");
  
    var router = require("express").Router();
      
    router.post("/", employes.create);
    router.get("/", employes.findAll);

    app.use('/api/employes', router);
  };