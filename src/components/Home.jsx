import ArticleList from "./ArticleList"
import { useState, useEffect } from 'react'
import { getAllArticles } from "./API";
import SortArticles from "./SortArticles";
import { useSearchParams } from "react-router-dom";


const Home = () => {

    const [articleList, setArticleList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [searchParams, setSearchParams] = useSearchParams();

    const newParams = new URLSearchParams(searchParams);
    const sortByQuery = searchParams.get("sort_by");
    const orderQuery = searchParams.get("order");

    useEffect(() => {
        getAllArticles(sortByQuery, orderQuery).then((articles) => {

            setArticleList(articles);

            setIsLoading(false)
        })

    }, [sortByQuery, orderQuery])
    return (
        <main>
            <SortArticles newParams={newParams} setSearchParams={setSearchParams} />
            <ArticleList articleList={articleList} isLoading={isLoading} />

        </main>
    )
}

export default Home