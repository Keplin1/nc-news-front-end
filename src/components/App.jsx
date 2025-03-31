import { Routes, Route } from "react-router-dom";
import { useState } from 'react'
import '../App.css'
import NavigationBar from "./NavigationBar";
import Home from "./Home";
import ArticlePage from './ArticlePage'


function App() {

  return (
    <>
      <NavigationBar />
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/articles/:article_id" element={<ArticlePage />} />
      </Routes>
    </>
  )
}

export default App
