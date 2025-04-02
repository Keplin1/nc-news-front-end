import { Routes, Route } from "react-router-dom";

import '../App.css'
import NavigationBar from "./NavigationBar";
import Home from "./Home";
import ArticlePage from './ArticlePage'
import { UserProvider } from "../contexts/UserContext";
import { Container } from "@mui/material";
import TopicPage from './TopicPage'

function App() {

  return (
    <Container>
      <UserProvider>
        <NavigationBar />
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/articles/:article_id" element={<ArticlePage />} />
          <Route path='/topics/:topic_name' element={<TopicPage />} />
        </Routes>
      </UserProvider >
    </Container>
  )
}

export default App
