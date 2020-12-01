<template>
<div id="app">
  <v-app>
    <v-content>
      <v-container>
        <v-file-input 
          v-model="file" 
          label="Select Image File..." 
          accept="image/*"
        ></v-file-input>
        <v-btn color="primary" @click="onUpload">Upload</v-btn>
      </v-container>
    </v-content>
  </v-app>
</div>
</template>

<script>
import NewsDataService from "../services/NewsDataService";
export default {
  data: () => ({
    file: null,
    imageUrl: null
  }),
  methods: {
    onUpload() {
      console.log(this.file)
      NewsDataService.createThumbnail(this.file)
      .then(response => {
        console.log(response.data);
        this.submitted = true;
      })
      .catch(e => {
        console.log(e);
      });
    }
  }
}
</script>