

// ?import React from 'react'
// import { useState } from 'react';
import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
import Rectangle from './pages/Rectangle';


function App() {
  // const [token, setToken] = useState(false);
  return (
 



    
    <Router>
    

      
      <Routes>
         <Route path="/rectangle" element={<Rectangle/>}/>
        {/* // <Route path="/" element={<Home/>}/>
        // <Route path="/about" element={<About />} />
       */}
    
        </Routes>
      </Router>
      
          
          
      
    
  )
}

export default App
