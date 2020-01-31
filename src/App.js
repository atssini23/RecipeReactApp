import React, { useEffect, useState } from "react";
import "./styles.css";

const App = () => {
  const APP_ID = "2e0759b9";
  const APP_KEY = "9184a0997c1629fa38c60b63ab042e78";
  const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const [counter, setCounter] = useState(0);
  useEffect(() => {
    console.log("Effect has been run");
  }, [counter]);

  return (
    <div className="App">
      <h1>Hello React</h1>
      <form className="search-form">
        <input className="search-bar" type="text" />
        <button className="search-button" type="submit">
          Search
        </button>
        <h3 onClick={() => setCounter(counter + 1)}>{counter}</h3>
      </form>
    </div>
  );
};
export default App;
