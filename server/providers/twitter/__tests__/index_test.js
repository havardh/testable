import * as mock from "../mock";
import {mapFromApi} from "../index";

describe("Twitter", () => {
  test("should map from twitter api", () => {
    const [tweet] = mock.getTweets();

    // step 4) use expect(actual).toMatchObject(expected)
    // to verify that the tweet has been properly mapped
  });
});
