import sinon from "sinon";

import * as service from "../service";

describe("Service", () => {

  test("should return 20 tweets", () => {
    return service.getTrendingLanguages()
      .then((result) => expect(result.length).toEqual(20));
  });
});
