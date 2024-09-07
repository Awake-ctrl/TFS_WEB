

// ?import React from 'react'
// import { useState } from 'react';
import { BrowserRouter as Router, Route,Routes } from "react-router-dom"

import ArticlePage from "./pages/ArticlePage"
import Saikiran from "../src/pages/Authors/Saikiran"

import Home from "../src/pages/Home"
import Bytes from "../src/pages/BYTES"
import News from "../src/pages/News"
import Events from "../src/pages/Events"
import Heritage from "../src/pages/Heritage"
import Freshine from "../src/pages/Freshine"
import Sports from "../src/pages/Sports"
import Science_Deconstructed from "../src/pages/Science_Deconstructed"
import COI from "../src/pages/Center_for_innovation"
import Spotlight from "../src/pages/Spotlight"
import Immerse from "../src/pages/Immerse"
import Interviews from "../src/pages/INTERVIEWS"
import Entertainment from "../src/pages/ENTERTAINMENT"
import About_us from "../src/pages/ABOUT_US"
import Contact_us from "../src/pages/CONTACT_US"
import Feedback from "../src/pages/Feedback"

import Section from "./Components/Sidebar/section"

function App() {
  // const [token, setToken] = useState(false);
  return (

 
    
    



    
    <Router>

      <Routes>
       <Route path="/Article" element={<ArticlePage/>}/>
       <Route path="/Authors/Saikiran" element={<Saikiran/>} />

        <Route path="/" element={<Home/>}/>
        <Route path="/Bytes" element={<Bytes />} />
        <Route path="/News" element={<News/>}/>
        <Route path="/Events" element={<Events/>}/>
        <Route path="/Heritage" element={<Heritage/>}/>
        <Route path="/Freshine" element={<Freshine />} />
        <Route path="/Sports" element={<Sports/>}/>
        <Route path="/Science_Deconstructed" element={<Science_Deconstructed/>}/>
        <Route path="/COI" element={<COI/>}/>
        <Route path="/Spotlight" element={<Spotlight/>}/>
        <Route path="/Immerse" element={<Immerse/>}/>
        <Route path="/Interviews" element={<Interviews/>}/>
        <Route path="/Entertainment" element={<Entertainment/>}/>
        <Route path="/About_us" element={<About_us/>}/>
        <Route path="/Contact_us" element={<Contact_us/>}/>
        <Route path="/Feedback" element={<Feedback />} />
        <Route path = "/section" element={<Section/>}/>

        

        
          
      
      
        
        
      
    
        </Routes>
      </Router>
      
  
      
    
  )
}

export default App;
