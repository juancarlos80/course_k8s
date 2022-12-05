const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

const PORT = process.env.SERVER_PORT || 8080;

var corsOptions = {
	origin: "http://localhost:"+PORT+"/"
		};

app.use (cors(corsOptions));
app.use (bodyParser.json());

app.use (bodyParser.urlencoded({extended:true}));


const db = require("./models");
db.sequelize.sync()
  .then(() => {
    console.log("Success.");
  })
  .catch((err) => {
    console.log("Failed to connect to data base: " + err.message);
  });


//simple route
app.get ("/", (req, res) => {
    res.json({message: "Welcome to the backend"});
});

require("./routes/employe.routes")(app);

app.listen(PORT, () => {
    console.log (`Server is running on port ${PORT}.`);
});