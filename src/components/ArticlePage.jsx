import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react'
import { getSingleArticle, getCommentByArticleId } from "./API";

import Typography from '@mui/joy/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import CommentCard from "./CommentCard";
import { Container } from "@mui/material";


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
                    })
            })

    }, [article_id]);


    if (isLoading) {
        return (
            <section className="loading">
                <p>Loading... please wait </p>
            </section>
        )
    }

    return (

        <section>
            <Container maxWidth="lg" sx={{ my: 4 }}>
                <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
                    <Typography level="h1" sx={{ mb: 2 }}>{article.title}</Typography>
                    <Typography sx={{ mb: 3 }}>{article.body}</Typography>
                    <CardActions>
                        <Button size="small">{article.votes} Votes</Button>
                        <Button size="small">{article.comment_count} Comments</Button>
                    </CardActions>
                </Paper>

                <Box sx={{ my: 4 }}>
                    <Typography level="h2" sx={{ mb: 3 }}>Comments</Typography>
                    <Divider sx={{ mb: 3 }} />

                    {comments.length === 0 ? (
                        <Typography>No comments yet. Be the first to comment!</Typography>
                    ) : (
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                            {comments.map((comment) => (
                                <CommentCard key={comment.comment_id} comment={comment} />
                            ))}
                        </Box>
                    )}
                </Box>
            </Container>



        </section >

    )


}

export default ArticlePage