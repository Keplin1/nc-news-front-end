import { Routes, Route } from "react-router-dom";
import { useState } from 'react'
import '../App.css'
import NavigationBar from "./NavigationBar";
import Home from "./Home";


function App() {

  return (
    <>
      <NavigationBar />
      <Routes>

        <Route path="/" element={<Home />} />
      </Routes>
    </>
  )
}

export default App
