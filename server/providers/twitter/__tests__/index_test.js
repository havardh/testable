import * as mock from "../mock";
import {mapFromApi} from "../index";

describe("Twitter", () => {
  test("should map from twitter api", () => {
    const [tweet] = mock.getTweets();

    expect(mapFromApi(tweet)).toMatchObject({
      id: 874143587189088300,
      name: "Github Trending",
      text: "lafikl / consistent: A Go library that implements Consistent Hashing and Consistent Hashing With Bounded Loads. ★158 https://t.co/oPwQnyhM3F",
      owner: "lafikl",
      repo: "consistent"
    });
  });
});
