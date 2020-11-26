const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

/*var corsOptions = {
  origin: "http://localhost:8001"
};*/

app.use(cors(/*corsOptions*/));

const db = require("./app/models");
db.sequelize.sync();

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

/*app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});*/

// simple route
/*app.get("/", (req, res) => {
  res.json({ message: "Welcome to game news." });
});*/

//require("./app/routes/news.routes.js")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

//----- from controllers -----
const news = require("./app/controllers/news.controller.js");
  
    // Create a new Tutorial
    app.post("/api/news/", news.create);
  
    // Retrieve all Tutorials
    app.get("/api/news/", news.findAll);
  
    // Retrieve all published Tutorials
    //router.get("/published", tutorials.findAllPublished);
  
    // Retrieve a single Tutorial with id
    app.get("/api/news/:id_berita", news.findOne);
  
    // Update a Tutorial with id
    app.put("/api/news/:id_berita", news.update);
  
    // Delete a Tutorial with id
    app.delete("/api/news/:id_berita", news.delete);
  
    // Create a new Tutorial
    app.delete("/api/news/", news.deleteAll);
  
    //app.use('/api/news', router);

// set port, listen for requests
/*const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});*/