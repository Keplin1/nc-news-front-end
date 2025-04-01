import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react'
import { getSingleArticle, getCommentByArticleId } from "./API";

import Typography from '@mui/joy/Typography';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import CommentCard from "./CommentCard";
import SingleArticleCard from "./SingleArticleCard";


const ArticlePage = () => {
    const { article_id } = useParams();
    const [article, setSingleArticle] = useState([]);
    const [comments, setComments] = useState([])

    const [isLoading, setIsLoading] = useState(true);



    useEffect(() => {
        getSingleArticle(article_id)
            .then((article) => {

                setSingleArticle(article);

                setIsLoading(false);

            }).then(() => {
                getCommentByArticleId(article_id)
                    .then((comments) => {
                        setComments(comments)
                    }).catch((err) => {

                        console.log(err)
                    })

            })
    }, []);


    if (isLoading) {
        return (
            <section className="loading">
                <p>Loading... please wait </p>
            </section>
        )
    }

    return (

        <section>
            <SingleArticleCard key={article.article_id} article={article} />

            <Box sx={{ my: 4 }}>
                <Typography level="h2" sx={{ mb: 3 }}>Comments</Typography>
                <Divider sx={{ mb: 3 }} />
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    {comments.map((comment) => (
                        <CommentCard key={comment.comment_id} comment={comment} />
                    ))}
                </Box>

            </Box>
        </section>
    )

}

export default ArticlePage