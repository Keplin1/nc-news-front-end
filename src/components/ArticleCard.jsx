import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const ArticleCard = ({ article }) => {


    return (
        <Card sx={{ maxWidth: 300, minHeight: 300, maxHeight: 300 }}>
            <p className='date'>{article.created_at}</p>
            <CardMedia
                sx={{ height: 140 }}
                image={article.article_img_url}
                title={article.title}
            />
            <CardContent>
                <Typography gutterBottom variant="h7" component="div">
                    {article.title}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', marginTop: 2 }}>
                    {article.author}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Votes: {article.votes}</Button>
                <Button size="small">Comments: {article.comment_count}</Button>
            </CardActions>
        </Card>


    )

}
export default ArticleCard
