import { meetingRounds } from "../src/index";

describe("testing meetingRounds with an even number", () => {
  it("should return a list of rounds", () => {
    const rounds = meetingRounds(4);
    expect(rounds.length).toBe(3);
    expect(rounds[0].length).toBe(2);
    expect(rounds[1].length).toBe(2);
    expect(rounds[2].length).toBe(2);
  });
  it("should never have repeating persons", () => {
    const rounds = meetingRounds(4);
    rounds.forEach((round) => {
      round.forEach(([person1, person2]) => {
        const p1Count = round.flatMap((r) => r).filter((p) => "name" in p && "name" in person1 && p.name == person1.name ).length;
        const p2Count = round.flatMap((r) => r).filter((p) => "name" in p && "name" in person2 && p.name == person2.name ).length;
        expect(p1Count).toBe(1);
        expect(p2Count).toBe(1);
        });
    });
  });
});

describe("testing meetingRounds with an odd number", () => {
  it("should return a list of rounds", () => {
    const rounds = meetingRounds(3);
    expect(rounds.length).toBe(3);
    expect(rounds[0].length).toBe(1);
    expect(rounds[1].length).toBe(1);
    expect(rounds[2].length).toBe(1);
  });
});

describe("testing meetingRounds with empty input", () => {
  it("should return an empty list", () => {
    const rounds = meetingRounds([]);
    expect(rounds.length).toBe(0);
  });
})