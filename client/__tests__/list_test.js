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
    // Step 2)
    // - Run `yarn run test:watch`
    // - Replace <div /> with <List tweets={tweets} />
    const list = renderer.create(
      <div />
    ).toJSON();

    expect(list).toMatchSnapshot();
  })
});
