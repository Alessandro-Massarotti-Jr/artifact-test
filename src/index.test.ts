import { Sample } from ".";

const sample = new Sample();

describe("Sample tests", () => {
  it("Should return success", async () => {
    expect(sample.execute(2)).toEqual(2);
  });

  it("Should throw an error", async () => {
    expect(() => sample.execute(7)).toThrow("BOOM");
  });
});
