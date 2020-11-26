module.exports = (sequelize, Sequelize) => {
    const News = sequelize.define("news", {
      id_berita: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement : true
      },
      id_game: {
        type: Sequelize.STRING
      },
      judul_berita: {
        type: Sequelize.STRING
      },
      kategori: {
        type: Sequelize.STRING
      },
      thumbnail: {
        type: Sequelize.BLOB
      },
      isi: {
        type: Sequelize.STRING
      },
      createdAt: {
        field: 'create_date',
        type: Sequelize.DATE,
      },
      updatedAt: {
        field: 'lastupdate_date',
        type: Sequelize.DATE,
      },
      publish_date: {
        type: Sequelize.DATE
      }
    });
  
    return News;
  };