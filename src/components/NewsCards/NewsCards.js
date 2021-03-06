import React from "react";
import NewsCard from "../NewsCard/NewsCard";
import { Grid, Grow, Typography } from "@material-ui/core";
import useStyles from "./styles.js";
const infoCards = [
  { color: "#00838f", title: "Latest News", text: "Give me the latest news" },
  {
    color: "#1565c0",
    title: "News by Categories",
    info:
      "Business, Entertainment, General, Health, Science, Sports, Technology",
    text: "Give me the latest Technology news",
  },
  {
    color: "#4527a0",
    title: "News by Terms",
    info: "Bitcoin, PlayStation 5, Smartphones, Donald Trump...",
    text: "What's up with PlayStation 5",
  },
  {
    color: "#283593",
    title: "News by Sources",
    info: "CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC News...",
    text: "Give me the news from CNN",
  },
];

function NewsCards({ articles, activeArticle }) {
  const classes = useStyles();

  if (!articles.length) {
    return (
      <Grow in>
        <Grid
          className={classes.container}
          container
          alignItems="stretch"
          spacing={3}
        >
          {infoCards.map((infoCard) => (
            <Grid className={classes.infoCard} item xm={12} sm={6} m={4} lg={3}>
              <div
                className={classes.card}
                style={{ backgroundColor: infoCard.color }}
              >
                <Typography variant="h6"> {infoCard.title}</Typography>
                {infoCard.info ? (
                  <Typography>
                    <strong>
                      {infoCard.title.split(" ")[2]}:<br />
                    </strong>

                    <p> {infoCard.info}</p>
                  </Typography>
                ) : null}
                <Typography>
                  Try Saying: <i>{infoCard.text}</i>
                </Typography>
              </div>
            </Grid>
          ))}
        </Grid>
      </Grow>
    );
  }
  return (
    // () fom an instant return

    <div>
      <Grow in>
        <Grid
          className={classes.container}
          container
          alignItems="stretch"
          spacing={3}
        >
          {articles.map((article, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} style={{ diaplay: "flex" }}>
              <NewsCard
                article={article}
                key={index}
                index={index}
                activeArticle={activeArticle}
              />
            </Grid>
          ))}
        </Grid>
      </Grow>
    </div>
  );
}

export default NewsCards;
