import React from "react";
import NewsCard from "./NewsCard";

function NewsCards({ articles }) {
  return (
    // () fom an instant return
    <div>
      {articles.map((articles, i) => (
        <NewsCard></NewsCard>
      ))}
    </div>
  );
}

export default NewsCards;
