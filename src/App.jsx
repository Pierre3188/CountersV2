import "./App.css";
import { useState } from "react";
import Counter from "./components/Counter";

function incrementCount() {
  addCounter((prevState) => ({ ...prevState, count: prevState.count + 1 }));
}

function App() {
  const [count, setCount] = useState([4, 5]);
  const changeCount = (value, index) => {
    console.log(count[0]);
    setCount(count[index] + Number(value));
  };

  return <Counter cpt={count} changeCount={changeCount} />;
}

export default App;
