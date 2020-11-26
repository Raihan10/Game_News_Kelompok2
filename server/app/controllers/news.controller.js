const db = require("../models");
const News = db.news;
const Op = db.Sequelize.Op;

// Create and Save a new News
exports.create = (req, res) => {
  // Validate request
  if (!req.body.judul_berita) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Tutorial
  const news = {
    id_berita: req.body.id_berita,
    id_game: req.body.id_game,
    judul_berita: req.body.judul_berita,
    kategori: req.body.kategori,
    thumbnail: req.body.thumbnail,
    isi: req.body.isi,
    create_date: req.body.create_date,
    lastupdate_date: req.body.lastupdate_date,
    publish_date: req.body.publish_date
  };

  // Save Tutorial in the database
  News.create(news)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the News."
      });
    });
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
    const judul_berita = req.query.judul_berita;
    var condition = judul_berita ? { judul_berita: { [Op.iLike]: `%${judul_berita}%` } } : null;
  
    News.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving news list."
        });
      });
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
    const id_berita = req.params.id_berita;

    News.findByPk(id_berita)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving News with id=" + id_berita
        });
      });
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
    const id_berita = req.params.id_berita;

    News.update(req.body, {
      where: { id_berita: id_berita }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "News was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update News with id=${id_beritad}. Maybe News was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating News with id=" + id_berita
        });
      });
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
    const id_berita = req.params.id_berita;

    News.destroy({
      where: { id_berita: id_berita }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "News was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete News with id=${id_berita}. Maybe News was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete News with id=" + id_berita
        });
      });
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
    News.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums} News List were deleted successfully!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all news list."
          });
        });
};

// Find all published Tutorials
/*exports.findAllPublished = (req, res) => {
    News.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });

};*/