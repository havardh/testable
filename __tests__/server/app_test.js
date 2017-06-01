import app from "../../server/app";

test('app to be defined', () => {
  expect(app).not.toBeUndefined();
});
