import React from "react"
import ReactDom from "react-dom"

function MyApp() {
return (
   <div>
     <li>HTML</li>
     <li>CSS</li>
     <li>Java Script</li>
   </div>
)
}
ReactDom.render(<MyApp />,document.getElementById("root"))
