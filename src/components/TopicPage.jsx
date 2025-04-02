import { useParams } from "react-router-dom";
import { getArticlesByTopic } from './API'
import { useState, useEffect } from "react";
import ArticleList from "./ArticleList";
import Typography from '@mui/joy/Typography';
import Card from '@mui/joy/Card';

const TopicPage = () => {
    const { topic_name } = useParams();

    const [articleList, setArticleList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getArticlesByTopic(topic_name)
            .then((articles) => {
                setArticleList(articles);
                setIsLoading(false)

            }).catch((err) => {

                console.log(err)
            })
    }, [topic_name]);
    return (
        <main>
            <Card variant="solid" invertedColors color='primary' sx={{ mt: 1, width: '25%' }}>
                <Typography >
                    {topic_name} related articles:
                </Typography>
            </Card>
            <ArticleList articleList={articleList} isLoading={isLoading} />
        </main>
    )
}

export default TopicPage