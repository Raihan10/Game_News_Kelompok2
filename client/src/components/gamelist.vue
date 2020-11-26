<template>
  <v-app light>
      <v-toolbar fixed app light clipped-left color="primary" class="elevation-2">
        <v-toolbar-side-icon @click="drawer = !drawer"  class="white--text"></v-toolbar-side-icon>
        <v-toolbar-title class="white--text">News App</v-toolbar-title>
      </v-toolbar>

      <v-content>
        <v-container fluid>
        <v-layout row wrap align-center>
          <v-flex xs8  offset-md2>
            <div v-for="game in articles" :key="game.id_game">
              <v-card class="my-3" hover>
                <v-img
                  height="350px"
                  v-bind:src="game.urlToImage"
                ></v-img>
                <v-card-media>
                  <v-container fill-height fluid>
                    <v-layout>
                      <v-flex xs12 align-end d-flex>
                        <span class="headline">{{ game.judul_game }}</span>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-card-media>
                <v-card-text>
                  {{ game.description }}
                </v-card-text>
                <v-card-actions>
                  <v-chip small color="secondary" class="white--text">
                    {{game.release_date}}
                  </v-chip>
                  <v-spacer></v-spacer>
                  <v-btn icon class="red--text">
                    <v-icon small>fa-reddit</v-icon>
                  </v-btn>
                  <v-btn icon class="light-blue--text">
                    <v-icon small>fa-twitter</v-icon>
                  </v-btn>
                  <v-btn icon class="blue--text text--darken-4">
                    <v-icon small>fa-facebook</v-icon>
                  </v-btn>
                  <v-btn icon class="red--text">
                    <v-icon small>fa-google-plus</v-icon>
                  </v-btn>
                  <v-btn icon class="blue--text text--darken-4">
                    <v-icon small>fa-linkedin</v-icon>
                  </v-btn>
                  <v-spacer></v-spacer>
                <v-btn small replace color="info" v-bind:href="game.url" target="_blank" >Read More</v-btn>
                </v-card-actions>
              </v-card>
            </div>
          </v-flex>
        </v-layout>
        </v-container>
      </v-content>
  </v-app>
</template>

<script>
import http from "@/http";

export default {
  data(){
    return{
      drawer : false,
      articles :[],
      error:[]
    }
  },
    created() {
      http.get('http://localhost:8000/api/game/')
      .then(response =>{
        this.articles = response.data;
        console.log('data')
        console.log(response.data)
      })
      .catch(e=>{
        this.errors(e)
      })
    },
    mounted(){
    this.created();
  },
}


</script>