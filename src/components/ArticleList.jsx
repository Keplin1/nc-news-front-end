import { getAllArticles } from "./API";
import { useState, useEffect } from 'react'
import ArticleCard from "./ArticleCard";
import Grid from '@mui/joy/Grid';


const ArticleList = ({ articleList, setArticleList }) => {


    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getAllArticles().then((articles) => {

            setArticleList(articles);

            setIsLoading(false)
        })

    }, [])

    if (isLoading) {
        return (
            <section className="loading">
                <p>Loading... please wait </p>
            </section>
        )
    }
    return (
        <Grid container spacing={5} sx={{ mt: 2 }}>
            {articleList.map((article) => (
                <Grid xs={11} sm={6} md={4} lg={3} key={article.article_id}>
                    <ArticleCard article={article} />
                </Grid>
            ))}
        </Grid>
    )

}
export default ArticleList