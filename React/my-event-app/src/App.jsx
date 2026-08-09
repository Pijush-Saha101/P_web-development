// example 1
// import React from "react";

// function App(){

//   function msgShow(){
//     alert ('Welcome to site')
//   }

//   return(
//     <>

//     <button onClick={msgShow}>click Me</button>
    
//     </>
//   )


// }
// export default App

// Example 2

// import React from "react";
// import { useState } from "react";

// function App(){

//   const [IsFollow , setIsFollowed] = useState(false)

//   return(
//     <>
//     <button onClick={()=> setIsFollowed(!IsFollow)}>
//       {IsFollow ? "Following":"Follow"}
//     </button>
    
    
//     </>
//   )

// }
// export default App

// Example 3 search

import React from "react";
import { useState } from "react";

function App(){

  const [text , setText] = useState("")

  return(
    <>
    <input
    type = "text"
    placeholder="search..."
    onChange={(e)=> setText(e.target.value)}
    
    
    />
    <h3>You type : {text}</h3>
    
    
    
    </>
  )

}
export default App