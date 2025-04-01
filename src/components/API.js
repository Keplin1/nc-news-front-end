import axios from "axios";



const newsApi = axios.create({

    baseURL: 'https://nc-news-project-50ht.onrender.com/api'

});

export const getAllArticles = (itemQuery) => {

    return newsApi.get('/articles').then(({ data }) => {

        return data.articles
    })


}
export const getSingleArticle = (article_id) => {

    return newsApi.get(`/articles/${article_id}`).then(({ data }) => {

        return data.articles
    })
}

export const getCommentByArticleId = (article_id) => {

    return newsApi.get(`/articles/${article_id}/comments`).then(({ data }) => {

        return data.comments
    })

}