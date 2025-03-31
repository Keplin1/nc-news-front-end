import ArticleList from "./ArticleList"
import { useState } from 'react'

const Home = () => {

    const [articleList, setArticleList] = useState([]);
    return (
        <main>
            <p>Home</p>
            <ArticleList articleList={articleList} setArticleList={setArticleList} />

        </main>
    )


}

export default Home