import React from "react";
import {
  Card,
  CardActions,
  CardActionArea,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import useStyles from "./styles.js";
function NewsCard({
  article: { description, publishedAt, source, title, url, urlToImage },
  index,
}) {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardActionArea href={url} target="_blank">
        <CardMedia
          className={classes.media}
          image={
            urlToImage ||
            "https://image.shutterstock.com/image-photo/strasbourg-france-nov-21-2017-260nw-760610884.jpg"
          }
        />
        <div className={classes.details}>
          <Typography variant="body2" color="textSecondary">
            {new Date(publishedAt).toDateString()}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {source.name}
          </Typography>
        </div>
        <Typography className={classes.title} gutterBottom variant="h5">
          {title}
        </Typography>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.cardActions}>
        <Button size="small" color="primary">
          Learn More
        </Button>
        <Typography variant="h5" color="textSecondary">
          {index + 1}
        </Typography>
      </CardActions>
    </Card>
  );
}

export default NewsCard;
