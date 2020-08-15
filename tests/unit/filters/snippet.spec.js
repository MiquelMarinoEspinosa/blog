import snippet from "@/filters/snippet";

describe("snippet filter", () => {
  it("returns an empty value", () => {
    expect(snippet("")).toBe("");
  });

  it("returns the exact value with three periods", () => {
    expect(snippet("hi there")).toBe("hi there...");
  });

  it("returns the value shrink to 100 with three periods", () => {
    const actualValue =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua";
    const expectedValue =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ...";
    expect(snippet(actualValue)).toBe(expectedValue);
  });
});
