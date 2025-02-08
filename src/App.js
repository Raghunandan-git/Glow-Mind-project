//app.js
import './App.css';
import React from 'react';
import Nav from './component/Nav';
import Header from './component/Header';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './component/Navbar';

function App() {
  return (
   <>
   <BrowserRouter>
   <Header/>
   <Navbar/>
   <Nav/>
   </BrowserRouter>
   </>
  );
}

export default App;
