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
    // Step 5)
    // Call service.getTrendingLanguages
    // verify that twitter.getTweets has been called
    // hint: use stub.calledOnce
  });

  test("fetch github repos", () => {
    // Step 5)
    // Verify that github.getLanguages has been called with the
    // results of calling twitter.getTweets
    // hint: use stub.calledWith
  });

  test("should return tweet with languages", () => {
    // Step 5)
    // Call the service.getTrendingLanguages()
    // verify that the result is [{ ...tweet, languages }]
  });
});
