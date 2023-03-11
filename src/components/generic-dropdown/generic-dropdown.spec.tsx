import { describe, it, expect } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { GenericDropdown } from "../generic-dropdown/generic-dropdown";

const childrenList = [<button key={1}>Log out</button>];

describe("GenericDropdown", () => {
  it("finds the dropdown list 'childreList' after clicking the trigger button", () => {
    render(
      <GenericDropdown
        text="Some text"
        icon={<span className="material-icon">user</span>}
        childrenList={childrenList}
      />
    );
    const button = screen.getByTestId("trigger-dropdown");
    fireEvent.click(button);
    const list = screen.getByTestId("dropdown-list");
    expect(list).toBeDefined();
  });
});
