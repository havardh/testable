import express from "express";
import Twitter from "twitter";
import https from "https";

const client = new Twitter({
  consumer_key: '',
  consumer_secret: '',
  access_token_key: '',
  access_token_secret: '',
});

var GitHubApi = require("github");

var github = new GitHubApi({
    protocol: "https",
    host: "api.github.com",
    headers: { "user-agent": "My-Cool-GitHub-App" },
    followRedirects: false,
    timeout: 5000
});

const app = express();

app.get("/api", (req, res) => {
  client.get("search/tweets", {q: "@TrendingGithub"}, (error, tweets) => {
    const response = tweets.statuses
      .map(({id, user, text}) => {

        const re = /.* @TrendingGithub: ([a-z]*) \/ ([a-z-]*).*/

        const match = re.exec(text);
        if (match) {
          const owner = match[1];
          const repo = match[2];

          return github.repos.getLanguages({owner, repo})
            .then(({data}) => {
                return {id, user, text, owner, repo, languages: data};
            })
            .catch((err) => Promise.resolve({id, user, text}));
        } else {
          return Promise.resolve({id, user, text});
        }
      });

    Promise.all(response)
      .then(response => {
        res.json(response);
        res.end();
      });
  });
});

export default app;
