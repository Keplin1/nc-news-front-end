import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';


const ArticleCard = ({ article }) => {


    return (

        <Card sx={{ maxWidth: 300, minHeight: 350, maxHeight: 350 }}>
            <p className='date'>Posted: {article.created_at}</p>
            <Link to={`/articles/${article.article_id}`}>
                <CardMedia

                    sx={{ height: 140 }}
                    image={article.article_img_url}
                    title={article.title}
                />
                <CardContent>
                    <Typography gutterBottom variant="h7" component="div">
                        {article.title}

                    </Typography>
                </CardContent>
            </Link>
            <Typography variant="body2" sx={{ color: 'text.secondary', paddingLeft: 2 }}>
                {article.author}
            </Typography>

            <CardActions>
                <Button size="small">{article.votes} Votes</Button>
                <Button size="small"> {article.comment_count} Comments</Button>
            </CardActions>
        </Card>


    )

}
export default ArticleCard
