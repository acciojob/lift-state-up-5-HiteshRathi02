import React from "react";
import Child from "./Child";
import "./../styles/App.css";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  return (
    <div>
      <h1>Parent Component</h1>
      <Child isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
    </div>
  );
};

export default App;
