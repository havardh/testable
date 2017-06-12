import Twitter from "twitter";

const shouldMock = true;

export function mapFromApi({id, user, text, entities}) {
  const re = /https:\/\/github.com\/(.*)\/(.*)/
  const {name} = user;

  if (entities.urls) {
    const url = entities.urls[0].expanded_url;

    const match = re.exec(url);
    const owner = match[1];
    const repo = match[2];
    return {id, name, text, owner, repo}
  } else {
    return {id, name, text};
  }
}

export function getTweets(username) {
  return new Promise((resolve, reject) => {
    if(shouldMock) {
      const mock = require('./mock');
      resolve(mock.getTweets());
    } else {
      const client = new Twitter({
        consumer_key: '',
        consumer_secret: '',
        access_token_key: '',
        access_token_secret: '',
      });

      client.get("statuses/user_timeline", {screen_name: "TrendingGithub"}, (error, tweets) => {
        if (error) {
          reject(error);
          return;
        }

        resolve(tweets);
      });
    }
  }).then(tweets => tweets.map(mapFromApi))
    .catch(err => console.log(err));
}
