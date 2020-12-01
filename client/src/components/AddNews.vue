<template id="add-news">
  <div class="submit-form">
    <div v-if="!submitted">
      <div class="form-group">
        <label for="judul_berita">Judul Berita</label>
        <input
          type="text"
          class="form-control"
          id="judul_berita"
          required
          v-model="news.judul_berita"
          name="judul_berita"
        />
      </div>

      <div class="form-group">
        <label for="kategori">Kategori</label>
        <input
          class="form-control"
          id="kategori"
          required
          v-model="news.kategori"
          name="kategori"
        />
      </div>

      <div class="form-group">
        <label for="isi">Isi</label>
        <input
          class="form-control"
          id="isi"
          required
          v-model="news.isi"
          name="isi"
        />
      </div>

      <button @click="saveNews" class="btn btn-success">Submit</button>
    </div>

    <div v-else>
      <h4>You submitted successfully!</h4>
      <button class="btn btn-success" @click="newNews">Add</button>
    </div>
  </div>
</template>

<script>
import NewsDataService from "../services/NewsDataService";

export default {
  template: '#add-news',
  name: "add-news",
  data() {
    return {
      news: {
        id_berita: null,
        id_game: "",
        judul_berita: "",
        kategori: "",
        thumbnail: null,
        isi: "",
        create_date: "2020-11-12",
        lastupdate: "2020-11-12",
        publish_date: "2020-11-12"
      },
      submitted: false
    };
  },
  methods: {
    saveNews() {
      var data = {
        id_game: this.news.id_berita,
        judul_berita: this.news.judul_berita,
        kategori: this.news.kategori,
        thumbnail: this.news.thumbnail,
        isi: this.news.isi,
        create_date: this.news.create_date,
        lastupdate: this.news.lastupdate,
        publish_date: this.news.publish_date
      };

      NewsDataService.create(data)
        .then(response => {
          this.news.id_berita = response.data.id_berita;
          console.log(response.data);
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        });
    },
    
    newNews() {
      this.submitted = false;
      this.news = {};
    }
  }
};
</script>

<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>