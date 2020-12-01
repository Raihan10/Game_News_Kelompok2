const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const uploadImage = require("./app/middleware/upload");

global.__basedir = __dirname;

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

    app.get("/api/news-thumbnail/:id_berita", news.downloadFile);
    app.get("/api/show-thumbnail/:id_berita", news.showFile);
  
    //app.use('/api/news', router);

    // Upload File
    /*const multer = require('multer');
    var storage = multer.diskStorage({   
      destination: function(req, file, cb) { 
         cb(null, './resources/uploads');    
      }, 
      filename: function (req, file, cb) { 
         cb(null , file.originalname);   
      }
   });
    const upload = multer({ storage: storage }).single("demo_image");*/
    /*const multer = require("multer");

    const imageFilter = (req, file, cb) => {
      if (file.mimetype.startsWith("image")) {
        cb(null, true);
      } else {
        cb("Please upload only images.", false);
      }
    };

    var storage = multer.diskStorage({
      destination: (req, file, cb) => {
        cb(null, __basedir + "/resources/uploads/");
      },
      filename: (req, file, cb) => {
        cb(null, `${Date.now()}-GameNews-${file.originalname}`);
      },
    });*/
    //var upload = multer({ storage: storage, fileFilter: imageFilter }).single("demo_image");
    //upload = uploadImage.single("thumbnail");
    app.put("/api/news-thumbnail/:id_berita", uploadImage.single("thumbnail"), news.updateThumbnail);/*(req, res) => {
    
      const idBeritaUpdated = req.params.id_berita;
      upload(req, res, (err) => {
       if(err) {
         res.status(400).send("Something went wrong!");
       }
       const dataFile = req.file.filename;
       const fileOriginalName = req.file.originalname;
       news.updateThumbnail(idBeritaUpdated, dataFile, fileOriginalName);
       res.send(req.file);
      });
    });*/


// set port, listen for requests
/*const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});*/