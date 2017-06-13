import sinon from "sinon";

import * as github from "../providers/github";
import * as twitter from "../providers/twitter";

import * as service from "../service";

const languages = { "go": 123 };

const tweet = {
  id: 874143587189088300,
  name: "Github Trending",
  text: "lafikl / consistent: A Go library that implements Consistent Hashing and Consistent Hashing With Bounded Loads. ★158 https://t.co/oPwQnyhM3F",
  owner: "lafikl",
  repo: "consistent"
}

describe("Service", () => {

  beforeEach(() => {
    sinon.stub(twitter, "getTweets").returns(Promise.resolve([tweet]));
    sinon.stub(github, "getLanguages").returns(Promise.resolve(languages));
  })

  afterEach(() => {
    twitter.getTweets.restore();
    github.getLanguages.restore();
  })

  test("fetch tweets", () => {
    return service.getTrendingLanguages()
      .then(() => expect(twitter.getTweets.calledOnce).toBe(true));
  });

  test("fetch github repos", () => {
    return service.getTrendingLanguages()
      .then(() => expect(github.getLanguages.calledWith(tweet)).toBe(true));
  });

  test("should return tweet with languages", () => {
    const expected = { ...tweet, languages };

    return service.getTrendingLanguages()
      .then(([actual]) => expect(actual).toEqual(expected));
  });
});
