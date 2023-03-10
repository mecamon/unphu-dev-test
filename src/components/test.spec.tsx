import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Test } from "./test";

describe("Test", () => {
  it("finds the name textContent is equal to 'Charles'", () => {
    render(<Test />);
    const nameTag = screen.getByTestId("name");
    expect(nameTag.textContent).toEqual("Charles");
  });
});
