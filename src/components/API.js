import axios from "axios";



const newsApi = axios.create({

    baseURL: 'https://nc-news-project-50ht.onrender.com/api'

});

export const getAllArticles = (itemQuery) => {

    return newsApi.get('/articles').then(({ data }) => {

        return data.articles
    }).catch((err) => {

        console.log(err)
    })

}
