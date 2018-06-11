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

    service.get();

    expect(window.fetch.calledWith("/api")).toBe(true);
  });
});
