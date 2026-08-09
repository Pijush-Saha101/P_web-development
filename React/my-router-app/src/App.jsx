import React from "react";
import Home from "./Homepage";
import About from "./Aboutpage";
import{BrowserRouter , Routes , Route ,Link} from 'react-router-dom'


function App(){

  // import{BrowserRouter , Routes , Route ,Link} from 'react-routes-dom'

  return(
    <>
    <BrowserRouter>
    <nav>

      <Link to ="/" style={{marginRight : '15px'}}>Home</Link>
      <Link to ="/about">About</Link>
      
    </nav>

    <Routes>

      <Route path= "/"     element ={<Home />} />
      <Route path="/about" element = {<About />} />




    </Routes>
    </BrowserRouter>
    
    </>
  )
}
export default App