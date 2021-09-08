import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [score, setScore] = useState(0);
  const [name, setName] = useState("");

  const increment = () => {
    setScore(score + 1);
  };

  const decrement = () => {
    setScore(score - 1);
  };

  useEffect(() => {
    console.log(name);
    console.log(score);
  }, [name, score]);

  return (
    <div className="app">
      <h3 className="score">The score is {score}</h3>
      <button className="button__decrement" onClick={decrement}>
        decrement
      </button>
      <button className="button__increment" onClick={increment}>
        increment
      </button>
      <input
        className="input"
        placeholder="enter your name"
        key={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
}

export default App;
