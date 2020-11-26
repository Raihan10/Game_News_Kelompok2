<template id="add-news">
  <div class="submit-form">
    <div v-if="!submitted">
      <form>
        <div class="form-group">
            <label for="judul_berita">Judul Berita</label>
            <input type="text" class="form-control" id="judul_berita"
            v-model="news.judul_berita"
            />
        </div>
        <div class="form-group">
            <label for="kategori">kategori</label>
            <input type="text" class="form-control" id="kategori"
            v-model="news.kategori"
            />
        </div>
        <div class="form-group">
            <label for="isi">isi</label>
            <input type="text" class="form-control" id="isi"
            v-model="news.isi"
            />
        </div>
    </form>

      <button @click="saveNews" class="btn btn-success">Submit</button>
    </div>

    <div v-else>
      <h4>You submitted successfully!</h4>
      <button class="btn btn-success" @click="newNews">Add</button>
    </div>
  </div>
</template>

<script>
//import NewsDataService from "../services/NewsDataService";
import http from "@/http";
import "bootstrap/dist/css/bootstrap.css";

export default {
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
        createdAt: "",
        updatedAt: "",
        publish_date: ""
      },
      submitted: false
    };
  },
  methods: {
    saveNews() {
      var newNews = {
        id_game: this.news.id_game,
        judul_berita: this.news.judul_berita,
        kategori: this.news.kategori,
        thumbnail: this.news.thumbnail,
        isi: this.news.isi,
        createdAt: this.news.create_date,
        updatedAt: this.news.lastupdate,
        publish_date: this.news.publish_date
      };
      //var data = this.news;

      http.post("http://localhost:8000/api/news", newNews)
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