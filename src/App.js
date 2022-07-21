
import './App.css';
import React, { useState } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import LoadingBar from 'react-top-loading-bar'

import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

const App =()=> {
  const pageSize = 9;
  const apiKey = '976128246ebf4c83a5d076689c1ad1af';
  const[progress,setProgress] = useState(0);
  
    return (
      <BrowserRouter>
      <LoadingBar
        color='#f11946'
        progress={progress}
        height = {4}
        />
      <Navbar/>
        <Routes>
          <Route exact path='/' element= { <News key="Home" pageSize={pageSize} country="in" setProgress = {setProgress}
  apiKey = {apiKey} category="general"/> }/>
          <Route exact path='/business' element= { <News key="business" pageSize={pageSize} country="in" setProgress = {setProgress}
  apiKey = {apiKey} category="business"/> }/>
          <Route exact path='/entertainment' element= { <News key="entertainment" pageSize={pageSize} country="in" setProgress = {setProgress}
  apiKey = {apiKey} category="entertainment"/> }/>
          <Route exact path='/health' element= { <News key="health" pageSize={pageSize} country="in" setProgress = {setProgress}
  apiKey = {apiKey} category="health"/> }/>
          <Route exact path='/science' element= { <News key="science" pageSize={pageSize} country="in" setProgress = {setProgress}
  apiKey = {apiKey} category="science"/> }/>
          <Route exact path='/sports' element= { <News key="sports" pageSize={pageSize} country="in" setProgress = {setProgress}
  apiKey = {apiKey} category="sports"/> }/>
          <Route exact path='/technology' element= { <News key="technology" pageSize={pageSize} country="in" setProgress = {setProgress}
  apiKey = {apiKey} category="technology"/> }/>
        </Routes>
      </BrowserRouter>
    )
  
}


export default App 