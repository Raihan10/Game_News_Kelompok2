import http from "../http";

class NewsDataService {
  getAll() {
    return http.get("/news");
  }

  get(id_berita) {
    return http.get(`/news/${id_berita}`);
  }

  create(data) {
    return http.post("http://localhost:8000/api/news", data);
  }

  update(id_berita, data) {
    return http.put(`/news/${id_berita}`, data);
  }

  delete(id_berita) {
    return http.delete(`/news/${id_berita}`);
  }

  deleteAll() {
    return http.delete(`/news`);
  }

  findByTitle(judul_berita) {
    return http.get(`/news?title=${judul_berita}`);
  }

  createThumbnail(id_berita, data) {
    return http.put(`/news-thumbnail/${id_berita}`, data);
  }
}

export default new NewsDataService();