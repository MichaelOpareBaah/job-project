import React from 'react';
import './App.css';
import Header from './Header';
import Main from './Main';
import OptionD from './OptionD';
import SideBar from './SideBar';
import {
  BrowserRouter, Routes, Route, Link } from 
  "react-router-dom";


function App() {
  
  return (

    <BrowserRouter>

    <div className="app">
      

    
      
    <Header />
    <div className='main__content '> 
          <Routes>
          
          
          <Route path='/main' element={<>  <SideBar /> <Main /> </> } /> 
          <Route path='/optiond' element={<> <SideBar />  <OptionD /> </>} />
          <Route path='/' element={<> <SideBar /> <Main />    </>} />
          
          
          
        </Routes>
    </div>

    
      

    </div>

    </BrowserRouter>
  );
}

export default App;
