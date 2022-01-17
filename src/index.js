import React from "react"
import ReactDom from "react-dom"

function MyInfo() {
return (
   <div>
    <h1>Saravanan </h1> 
    <p> 
      Hi, I am Saravanan and interested to learn ReactJS 
      <br></br>
      My vaction locations are in order and unorder list are: 
     <br></br>
     <ul>
      <li>Seattle</li>
      <li>London</li>
      <li>Seoul</li>
     </ul> 
       <ol>
          <li>Seattle</li>
          <li>London</li>
          <li>Seoul</li>
      </ol>
     </p>  
   </div>  
)
}

ReactDom.render(<MyInfo />,document.getElementById("root"))
