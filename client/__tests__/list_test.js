import React from "react";
import renderer from 'react-test-renderer';
import List from "../list";

const tweets = [
  {
    id: 123,
    name: "@TrendingGithub",
    owner: "facebook",
    repo: "jest",
    languages: {
      "JavaScript": 1233
    }
  }
];

describe("List", () => {
  test("should render a list of tweets", () => {
    const list = renderer.create(
      <List tweets={tweets} />
    ).toJSON();

    expect(list).toMatchSnapshot();
  })
});
