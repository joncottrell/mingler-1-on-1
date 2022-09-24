import { rounds } from "../src/index";

describe("testing meetingRounds with an even number", () => {
  it("should return a list of rounds", () => {
    const results = rounds(4);
    expect(results.length).toBe(3);
    expect(results[0].length).toBe(2);
    expect(results[1].length).toBe(2);
    expect(results[2].length).toBe(2);
  });
  it("should never have repeating persons", () => {
    const results = rounds(4);
    results.forEach((round) => {
      round.forEach((meeting) => {
        expect(
          meeting.every(
            (person) =>
              round.flatMap((m) => m).filter((p) => p === person).length === 1
          )
        ).toBe(true);
        });
    });
  });
});

describe("testing meetingRounds with an odd number", () => {
  it("should return a list of rounds", () => {
    const results = rounds(3);
    expect(results.length).toBe(3);
    expect(results[0].length).toBe(1);
    expect(results[1].length).toBe(1);
    expect(results[2].length).toBe(1);
  });
});

describe("testing meetingRounds with empty input", () => {
  it("should return an empty list", () => {
    const results = rounds([]);
    expect(results.length).toBe(0);
  });
})