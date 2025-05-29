//app.js
import './App.css';
import React, { useEffect } from 'react';
import Nav from './component/Nav';
import Header from './component/Header';
import { BrowserRouter,useLocation } from 'react-router-dom';
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
      window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
   <>
   <BrowserRouter>
   <ScrollToTop />
   <Header/>
   <Nav/>
   </BrowserRouter>
   </>
  );
}

export default App;
