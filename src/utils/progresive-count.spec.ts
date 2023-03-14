import { describe, it, expect } from "vitest";
import { progresiveCount } from "./progresive-count";

describe("progresiveCount", () => {
  it("expect it consucutive call to be diff", () => {
    const firstCall = progresiveCount();
    const secondCall = progresiveCount();
    expect(firstCall).not.toEqual(secondCall);
  });
});
