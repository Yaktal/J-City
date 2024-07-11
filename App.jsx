import Nav from "./components/Nav";
import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Page from "./components/Pages/Page";
import Home from "./components/Home";

function App() {

  return (
    <>
      
      <BrowserRouter>
        <Nav/>
        <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route path="/page" element={<Page/>} />
            
        </Routes>
        
      </BrowserRouter>
      
    </>
  )
}

export default App;
