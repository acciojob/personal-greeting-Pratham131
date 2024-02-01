
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {

  const [name, setName] = useState("")

  return (
    <div>
        {/* Do not remove the main div */}
        
        <div>
        <p>Enter your name:</p>
        </div>
        <form>
          
          <input type="text"
          value={name}
          onChange={(e)=>setName(e.target.value)}/>
        </form>
        
        {name!="" ? <p>Hello {name}!</p>:""}
    </div>
  )
}

export default App
