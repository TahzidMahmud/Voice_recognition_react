import React, { useState, useEffect } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import axios from "axios";
import NewsCards from "./components/NewsCards/NewsCards";
import useStyles from "./styles.js";
import { Typography } from "@material-ui/core";
const App = () => {
  const [newArticles, setnewArticles] = useState([]);
  const [activeArticle, setActiveArticle] = useState(-1);
  useEffect(() => {
    // speech voice code start

    const speech = new SpeechSynthesisUtterance();

    speech.text =
      " welcome to the app . This app is fully voice command oriented .Just click the mic button and read the prompts on the cards"; //the real speech
    speech.volume = 1;
    speech.rate = 0.9;
    speech.pitch = 0.8;
    //listen to the command and talk back

    window.speechSynthesis.speak(speech);
    // speech voice code end
    alanBtn({
      key:
        "7c216fe9ef86871f1be9cfbe0b5e25042e956eca572e1d8b807a3e2338fdd0dc/stage",
      onCommand: (commandData) => {
        if (commandData.command === "new headlines") {
          let articles = commandData.saved_articles;
          setnewArticles(articles);
          setActiveArticle(-1);
        } else if (commandData.command === "highlight") {
          setActiveArticle((prevActiveArticle) => prevActiveArticle + 1);
        }
      },
    });
    // place holder api code startnpm
    // let url =
    //   "https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=6fb015a987474e7d9eb5ee7ff92f90c1";
    // axios
    //   .get(url)
    //   .then((res) => {
    //     console.log(res.data.articles);
    //     let articles = res.data.articles;
    //     // setnewArticles(articles);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    //place holder api cdoe end
  }, []);
  const classes = useStyles();
  return (
    <div>
      <div className={classes.logoContainer}>
        <Typography variant="h1">Powred By</Typography>
        <img
          src="https://alan.app/voice/images/previews/preview.jpg"
          className={classes.alanLogo}
          alt="alan Logo"
        />
      </div>
      <NewsCards articles={newArticles} activeArticle={activeArticle} />
    </div>
  );
};

export default App;
