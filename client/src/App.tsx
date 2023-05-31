import React, {useState} from "react";

function App() {

  const [message,setMessgage] = useState("")

  const handleClick = () => {
    setMessgage("hello world")
  }

  return <div>
    <h1>Test react app</h1>
    <button onClick={handleClick}>test</button>
    <p>{message}</p>
  </div>;
}

export default App;
