
import ArticleCard from "./ArticleCard";
import Grid from '@mui/joy/Grid';
import ErrorMessage from "./ErrorMessage";


const ArticleList = ({ error, articleList, isLoading }) => {


    if (isLoading) {
        return (
            <section className="loading">
                <p>Loading... please wait </p>
            </section>
        )
    }
    if (error) {

        return (
            <ErrorMessage error={error} />
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