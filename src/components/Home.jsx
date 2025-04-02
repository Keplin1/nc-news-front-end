import ArticleList from "./ArticleList"
import { useState, useEffect } from 'react'
import { getAllArticles } from "./API";

const Home = () => {

    const [articleList, setArticleList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getAllArticles().then((articles) => {

            setArticleList(articles);

            setIsLoading(false)
        })

    }, [])
    return (
        <main>
            <ArticleList articleList={articleList} isLoading={isLoading} />
        </main>
    )


}

export default Home