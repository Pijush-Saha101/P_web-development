import React from "react";
import { useState , useEffect } from "react";
import'./App.css';



function App(){
  const[users , setUsers] = useState([])
  //  https://jsonplaceholder.typicode.com/users

  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json() )
    .then(data => setUsers(data))

    .catch(error => console.log("Error Fetch", error))


  },[])


  return(
    <>

    <div className="app">
      <h2 className="title">Employee Dashbord</h2>
      {users.map (abc=>(
        <div key={abc.id}>
          <h3>{abc.name}</h3>
          <p>{abc.email}</p>
        </div>


      ))}


    </div>
    {/* <h2> User List</h2>

    {users.map( (abc)=>(

      <p key={abc.id}> {abc.name} and {abc.email}</p>
    ))} */}
    </>
  )

}
export default App