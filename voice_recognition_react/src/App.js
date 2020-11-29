import React, { useState, useEffect } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import NewsCards from "./components/NewsCards/NewsCards";
const App = () => {
  const [newArticles, setnewArticles] = useState([]);
  useEffect(() => {
    alanBtn({
      key:
        "7c216fe9ef86871f1be9cfbe0b5e25042e956eca572e1d8b807a3e2338fdd0dc/stage",
      onCommand: (commandData) => {
        if (commandData.command === "new headlines") {
          console.log(commandData.saved_articles);
          let articles = commandData.saved_articles;
          setnewArticles(articles);
        }
      },
    });
  }, []);

  return (
    <div>
      <p> this is working</p>
    </div>
  );
};

export default App;
