import Vue from 'vue'
import VueRouter from 'vue-router'

import NewsList from './components/NewsList';
import GameList from './components/gamelist';
import News from './components/News';
import AddNews from './components/AddNews';
//import UpdateNewsThumbnail from './components/UpdateNewsThumbnail';
import UploadNewsThumbnail from './components/UploadNewsThumbnail';


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
        /*children: [
            {
                path: 'update-thumbnail',
                component: UpdateNewsThumbnail,
            }
        ]*/
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
    },
    {
        path :"/api/news-update-thumbnail/:id_berita",
        name : 'UploadNewsThumbnail',
        component :UploadNewsThumbnail,
    }
];

const router = new VueRouter({
    routes,
    mode : 'history'
})

export default router
