<template id="news-details">
  <div v-if="currentNews" class="edit-form">
    <h4>News</h4>
    <form>
      <div class="form-group">
        <label for="judul_berita">Judul Berita</label>
        <input type="text" class="form-control" id="judul_berita"
          v-model="currentNews.judul_berita"
        />
      </div>
      <div class="form-group">
        <label for="kategori">kategori</label>
        <input type="text" class="form-control" id="kategori"
          v-model="currentNews.kategori"
        />
      </div>
      <div class="form-group">
        <label for="isi">isi</label>
        <input type="text" class="form-control" id="isi"
          v-model="currentNews.isi"
        />
      </div>
    </form>

    <button class="badge badge-primary mr-2"
      v-if="currentNews.published"
      @click="updatePublished(false)"
    >
      UnPublish
    </button>
    <button v-else class="badge badge-primary mr-2"
      @click="updatePublished(true)"
    >
      Publish
    </button>

    <button class="badge badge-danger mr-2"
      @click="deleteNews"
    >
      Delete
    </button>

    <button type="submit" class="badge badge-success"
      @click="updateNews"
    >
      Update
    </button>
    <p>{{ message }}</p>
  </div>

  <div v-else>
    <br />
    <p>Please click on a News...</p>
    ID BERITA {{ $route.params.id_berita}}
  </div>
</template>

<script>
//import NewsDataService from "../services/NewsDataService";
import http from "@/http";
import "bootstrap/dist/css/bootstrap.css";
export default {
  name: "news-details",
  data() {
    return {
      currentNews: null,
      message: '',
    };
  },
  methods: {
    getNews() {
      http.get('http://localhost:8000/api/news/'+this.$route.params.id_berita)
        .then(response => {
          this.currentNews = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },

    /*updatePublished(status) {
      var data = {
        id_berita: this.currentNews.id_berita,
        id_game: this.currentNews.id_game,
        judul_berita: this.currentNews.judul_berita,
        kategori: this.currentNews.kategori,
        thumbnail: this.currentNews.thumbnail,
        isi: this.currentNews.isi,
        create_date: this.currentNews.create_date,
        lastupdate_date: this.currentNews.lastupdate_date,
        publish_date: this.currentNews.publish_date,
      };

      NewsDataService.update(this.currentNews.id_berita, data)
        .then(response => {
          //this.currentNews.published = status;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },*/

    updateNews() {
      http.put('http://localhost:8000/api/news/'+this.$route.params.id_berita, this.currentNews)
        .then(response => {
          console.log(response.data);
          this.message = 'The news was updated successfully!';
        })
        .catch(e => {
          console.log(e);
        });
    },

    /*deleteNews() {
      NewsDataService.delete(this.currentNews.id_berita)
        .then(response => {
          console.log(response.data);
          this.$router.push({ name: "news" });
        })
        .catch(e => {
          console.log(e);
        });
    }*/
  },
  mounted() {
    //this.message = '';
    this.getNews();
  }
};
</script>

<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>