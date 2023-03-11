import { describe, it, expect, vi, afterEach } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { SideBarTab } from "./side-bar-tab";

const onClick = vi.fn();

afterEach(() => {
  onClick.mockClear();
});

describe("SideBarTab", () => {
  it("calls once the onClick function after clicking the tab", () => {
    render(<SideBarTab text="some text" iconText="logout" onClick={onClick} />);
    const tab = screen.getByTestId("tab-button");
    fireEvent.click(tab);
    expect(onClick).toHaveBeenCalledOnce();
  });
});
