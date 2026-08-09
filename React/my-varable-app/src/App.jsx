// import React from "react";

// function App(){

//   let username = "Gautam"

//   function Greet(){
//     alert(`Good to see You ${username}`)
//   }


//   return(
// <>
// <h2> My name is : {username}</h2>

// <button onClick={Greet}>Greet </button>



// </>




//   )
// }
// export default App;

// import React from "react";

// function App(){

//   let count = 10

//   function increaseCount(){
//     count = count + 1
//     console.log(count)

//   }


//   return(
// <>
// <h2>cart/quantity = {count}</h2>

// <button onClick={increaseCount}>increase</button>



// </>




//   )
// }
// export default App;

// Example 3 useState vriable

import React  , {useState} from "react";

function App(){

  const [like, setLike] = useState(10)

  function increaseLike(){
    setLike(like + 1)
    console.log(like)

  }


  return(
<>
<h2>cart/quantity = {like}</h2>

<button onClick={increaseLike}>increase</button>



</>




  )
}
export default App;