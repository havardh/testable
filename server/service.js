import * as twitter from "./providers/twitter";
import * as github from "./providers/github";

export function getTrendingLanguages() {
  return twitter.getTweets("from: @TrendingGithub")
    .then(tweets => tweets.map((tweet) => {
      return github.getLanguages(tweet)
         .then(languages => ({
           ...tweet,
           languages
         }))
         .catch(err => console.log(err));
    }))
    .then(response => Promise.all(response))
}
