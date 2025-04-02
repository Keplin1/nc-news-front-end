import { Container, Chip } from "@mui/material";
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/joy/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';
import VoteCounter from "./VoteCounter";
import { useState } from 'react'
import Alert from '@mui/material/Alert';


const SingleArticleCard = ({ article }) => {
    const formattedDate = new Date(article.created_at).toLocaleDateString();
    const [currentVotesCount, setVotesCount] = useState(article.votes);

    const [error, setError] = useState(null);
    return (
        <section>
            <Container maxWidth="lg" sx={{ my: 4 }}>
                <Paper elevation={3} sx={{ p: 3, mb: 4 }}>

                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                        <Avatar
                            alt={article.author}
                            src={`/static/images/avatar/${article.author}.jpg`}
                            sx={{ width: 40, height: 40, mr: 2 }}
                        />
                        <Box>
                            <Typography level="title-sm">
                                {article.author}
                            </Typography>

                            <Typography level="body-xs" sx={{ color: 'text.secondary' }}>
                                {formattedDate}
                            </Typography>

                        </Box>

                        <Chip
                            label={article.topic}
                            size="small"
                            color="primary"
                            variant="solid"
                            sx={{ ml: 'auto' }}
                        />

                    </Box>

                    <Divider sx={{ mb: 3 }} />

                    <Typography level="h1" sx={{ mb: 2 }}>{article.title}</Typography>

                    <Typography sx={{ mb: 3 }}>{article.body}</Typography>
                    <CardActions>

                        <VoteCounter setError={setError} articleId={article.article_id} currentVotesCount={currentVotesCount} setVotesCount={setVotesCount} />
                        <Button size="small">{article.comment_count} Comments</Button>
                        {error ?
                            <Alert variant="outlined" severity="error">
                                {error}
                            </Alert>
                            : null}
                    </CardActions>

                </Paper>
            </Container>
        </section >
    )
}

export default SingleArticleCard;