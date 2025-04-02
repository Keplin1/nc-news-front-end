import { useParams } from "react-router-dom";
import { useState, useEffect, useContext } from 'react'
import { getSingleArticle, getCommentByArticleId, postNewComment } from "./API";

import Typography from '@mui/joy/Typography';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import CommentCard from "./CommentCard";
import SingleArticleCard from "./SingleArticleCard";
import { Textarea } from "@mui/joy";


import { UserContext } from "../contexts/UserContext"
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';

const ArticlePage = () => {
    const { article_id } = useParams();
    const { user } = useContext(UserContext)
    const [article, setSingleArticle] = useState([]);
    const [comments, setComments] = useState([])
    const [commentBody, setCommentBody] = useState('')

    const [isLoading, setIsLoading] = useState(true);

    const [commentDelete, setCommentDelete] = useState(false)


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

            }).catch((err) => {

                console.log(err)
            })
    }, []);


    if (isLoading) {
        return (
            <section className="loading">
                <p>Loading... please wait </p>
            </section>
        )
    }


    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setCommentDelete(false)
    }

    const handleCommentPost = () => {
        if (commentBody.length !== 0) {
            postNewComment(article_id, user, commentBody).then((comment) => {
                setComments([comment, ...comments])
                setCommentBody('')
            }).catch((err) => {

                console.log(err)
            })

        }


    }

    return (

        <section>
            <SingleArticleCard key={article.article_id} article={article} />

            <Box sx={{ my: 4 }}>
                <Typography level="h2" sx={{ mb: 3 }}>Comments</Typography>
                <Divider sx={{ mb: 3 }} />

                <Textarea
                    name="comment-box"
                    color="neutral"
                    minRows={2}
                    size="lg"
                    variant="soft"
                    value={commentBody}
                    placeholder="Please type your comment here..."
                    onChange={e => setCommentBody(e.target.value)}
                    sx={{ my: 1 }}
                />
                <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                    <Button variant="contained" color="primary" sx={{ mb: 2, px: 4, py: 2 }} onClick={handleCommentPost} disabled={commentBody.length === 0}>
                        POST
                    </Button>
                </Box>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    {comments.map((comment) => (
                        <CommentCard key={comment.comment_id} setCommentDelete={setCommentDelete} comment={comment} comments={comments} setComments={setComments} />
                    ))}
                </Box>
                <Box>
                    <Snackbar
                        open={commentDelete}
                        autoHideDuration={5000}
                        onClose={handleClose}
                        message="This Snackbar will be dismissed in 5 seconds."
                    />
                </Box>
            </Box>
        </section >
    )

}

export default ArticlePage