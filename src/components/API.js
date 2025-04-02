import { DataArray } from "@mui/icons-material";
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


export const addArticleVote = (article_id) => {
    return newsApi.patch(`/articles/${article_id}`, { inc_votes: 1 })

        .then(({ data }) => {

            return data.articles.votes
        })
}

export const postNewComment = (article_id, username, body) => {
    const postBody = { body, username }
    return newsApi.post(`/articles/${article_id}/comments`, postBody).then(({ data }) => {
        return data.comments

    })
}

export const deleteComment = (comment_id) => {
    return newsApi.delete(`/comments/${comment_id}`).then((response) => {
        return response.data
    })
}

export const getAllTopics = () => {
    return newsApi.get('/topics').then((response) => {

        return response.data.topics
    })

}

export const getArticlesByTopic = (topic_name) => {
    return newsApi.get(`articles?topic=${topic_name}`).then((response) => {
        return response.data.articles

    })

}