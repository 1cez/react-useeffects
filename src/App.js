import { useState, useEffect } from "react";

function App() {
  const [number, setNumber] = useState(0);
  const [name, setName] = useState("Mehmet");

  useEffect(() => {
    console.log("Number State Güncellendi");
  },[number]);

  useEffect(() => {
    console.log("Name State Güncellendi");
  },[name]);

  useEffect(() => {
    console.log("Component Mount Edildi")
  },[]);

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={() => setNumber(number + 1)}>Click</button>

      <hr/>

      <h1>{name}</h1>
      <button onClick={() => setName("Serhan")}>Click</button>

    </div>
  );
}

export default App;
