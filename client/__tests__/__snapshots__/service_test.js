import * as service from "../service";
import sinon from "sinon";

window.fetch = () => {};

describe("service.get", () => {

  beforeEach(() => {
    sinon.stub(window, "fetch");
  });

  afterEach(() => {
    window.fetch.restore();
  });

  test("should call fetch on /api", () => {
    window.fetch.returns(Promise.resolve({
      json: () => ([])
    }));

    // Step 3)
    // call the service method here

    // use expect(actual).toBe(expected) and
    // window.fetch.calledWith(expected) to
    // verify that the service fetches from /api
  });
});
