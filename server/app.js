import express from "express";
import * as twitter from "./providers/twitter";
import * as github from "./providers/github";

const app = express();

app.get("/api", (req, res) => {
  twitter.getTweets("from: @TrendingGithub")
    .then(tweets => tweets.map((tweet) => {
      return github.getLanguages(tweet)
         .then(languages => ({
           ...tweet,
           languages
         }))
         .catch(err => console.log(err));
    }))
    .then(response => Promise.all(response))
    .then(response => {
      res.json(response);
      res.end();
    })
    .catch(err => console.log(err));
});

export default app;
