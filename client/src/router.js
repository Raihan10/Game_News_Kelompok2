import Vue from 'vue'
import VueRouter from 'vue-router'

import NewsList from './components/NewsList';
import GameList from './components/gamelist';
import News from './components/News';
import AddNews from './components/AddNews';


Vue.use(VueRouter)

const routes = [
    {
        path :"/",
        name : 'List',
        component :NewsList,
    },
    {
        path :"/api/news/:id_berita",
        name : 'News',
        component :News,
    },
    {
        path :"/api/news-add/",
        name : 'AddNews',
        component :AddNews,
    },
    {
        path :"/game",
        name : 'game',
        component :GameList,
    }
];

const router = new VueRouter({
    routes,
    mode : 'history'
})

export default router
