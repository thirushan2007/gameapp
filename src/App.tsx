import React, { useEffect, useState } from "react";
import "./App.css";
import MainRouter from "./router";
import IntroPage from "./screens/intro/intro";
import HeaderBar from "./common/header/header";

function App() {
  const [isSaved, setisSaved] = useState(false);

  useEffect(() => {
    const savedName = localStorage.getItem("user-name");
    if (savedName) {
      setisSaved(true);
    }
  }, []);

  return (
    <div className="App">
      {isSaved ? (
        <div>
          <HeaderBar />
          <MainRouter />
        </div>
      ) : (
        <IntroPage namesaved={() => setisSaved(true)} />
      )}
    </div>
  );
}

export default App;
