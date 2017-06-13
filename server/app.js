import express from "express";

import * as service from "./service";

const app = express();

app.get("/api", (req, res) => {
  service.getTrendingLanguages()
    .then(response => {
      res.json(response);
      res.end();
    })
    .catch(err => console.log(err));
});

export default app;
