<template>
<div>
  <div id="brand">
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <router-link to="/" class="navbar-brand">Game News</router-link>
      <div class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/api/news-add/" class="nav-link">Add</router-link>
        </li>
      </div>
    </nav>

    <div class="container mt-3">
      <router-view />
    </div>
  </div>
  <div class="news-list">
    <v-container>
    <v-row>
          <v-col>
            <v-simple-table height="500px" class="grey lighten-5">
              <template v-slot:default>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Judul Berita</th>
                    <th>Kategori</th>
                    <th>Isi</th>
                    <th>Date Publish</th>
                    <th>Date Update</th>

                    <th class="text-center">Pilihan</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="news_item in news" :key="news_item.id_berita">
                    <td class="text-xs-center">{{ news_item.id_berita }}</td>
                    <td class="text-xs-center">{{ news_item.judul_berita }}</td>
                    <td class="text-xs-center">{{ news_item.kategori }}</td>
                    <td class="text-xs-center">{{ news_item.isi }}</td>
                    <td class="text-xs-center">{{ news_item.createdAt }}</td>
                    <td class="text-xs-center">{{ news_item.updatedAt }}</td>
                    <td class="text-center">
                        <v-btn
                          class="ma-2"
                          color="warning"
                          dark
                          width="110px"
                          :to="'/api/news/' + news_item.id_berita"
                        >
                        Edit
                      </v-btn>
                      <v-btn
                          class="ma-2"
                          color="warning"
                          dark
                          width="110px"
                          :to="'/api/news-update-thumbnail/' + news_item.id_berita"
                        >
                        Update Thumbnail
                      </v-btn>
                        <v-dialog
                          v-model="dialog"
                          persistent
                          max-width="290"
                          :retain-focus="false"
                        >
                        <template v-slot:activator="{ on, attrs }">
                          <v-btn
                            class="ma-2"
                            color="error"
                            width="100px"
                            v-bind="attrs"
                            v-on="on"
                            @click.prevent="selectedNews(news_item.id_berita)"
                            >
                            Delete
                          </v-btn>
                        </template>
                        <v-card>
                          <v-card-title class="text-h8">
                            Apakah Anda yakin untuk menghapus berita ini? (ID = :{{selectedIdBerita}})
                          </v-card-title>
                          <v-card-text></v-card-text>
                          <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn
                              color="grey darken-1"
                              text
                              @click="dialog = false"
                            >
                              Batal
                            </v-btn>
                            <v-btn
                              color="blue darken-1"
                              text
                              @click="dialog = false"
                              @click.prevent="deleteNews(selectedIdBerita)"
                            >
                              Yakin
                            </v-btn>
                          </v-card-actions>
                        </v-card> 
                        </v-dialog>
                      </td>
                    </tr> 
                  </tbody>
              </template>
            </v-simple-table>
          </v-col>
    </v-row>
    </v-container>
  </div>
  <div class="col-md-8">
      <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Search by Judul Berita"
          v-model="judul_berita"/>
        <div class="input-group-append">
          <button class="btn btn-outline-secondary" type="button"
            @click="searchJudulBerita"
            :to="'/api/news?judul_berita=' + judul_berita"
          >
            Search
          </button>
        </div>
      </div>
    </div>
</div>
</template>

<script>
import http from "@/http";
import "bootstrap/dist/css/bootstrap.css";
export default {
    name:"news",
    data () {
      return {
        news: [],
        key: "",
        id: 0,
        dialog: false,
        isLoading: false,
        judul_berita: "",
        selectedIdBerita: null
      }
    },
    methods:{
        retrieve(){
          http
          .get("http://localhost:8000/api/news")
            .then((response) =>{
              this.news = response.data;
            })
            .catch((e)=>{
              console.log(e);
            });
        },
        searchJudulBerita() {
          http.get('http://localhost:8000/api/news?judul_berita='+this.judul_berita)
            .then(response => {
              this.news = response.data;
              console.log(response.data);
            })
            .catch(e => {
              console.log(e);
            });
        },
        deleteNews(id_berita) {
          http.delete('http://localhost:8000/api/news/'+id_berita)
            .then(response => {
              console.log(response.data);
            })
            .catch(e => {
              console.log(e);
            });
        },
        selectedNews(id_berita) {
          this.selectedIdBerita = id_berita
        }
    },
    mounted(){
      this.retrieve();
    },
};
</script>

<style scoped>
.progressbar {
  position: relative;
  bottom: 50%;
  left: 50%;
}
</style>