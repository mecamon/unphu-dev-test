import { describe, it, expect, vi, afterEach } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { Pagination } from "./pagination";

const currentPage = 1;
const totalOfItems = 13;
const limit = 5;
const clickHandler = vi.fn();

function setup() {
  render(
    <Pagination
      currentPage={currentPage}
      totalOfItems={totalOfItems}
      limit={limit}
      onClick={clickHandler}
    />
  );
}

afterEach(() => {
  clickHandler.mockClear();
});

describe("Pagination", () => {
  it("renders the number of pages equal to the totalOfItems / limit, rounded to the next number in case of float result", () => {
    setup();
    const expectedPages = Math.ceil(totalOfItems / limit);
    const pagesTags = screen.getAllByTestId("page");
    expect(pagesTags.length).toEqual(expectedPages);
  });

  it("triggers the clickHandler function after clickin a page button", () => {
    setup();
    const pagesTags = screen.getAllByTestId("page");
    fireEvent.click(pagesTags[1]);
    expect(clickHandler).toHaveBeenCalledOnce();
  });

  it("current page is unable to be clicked", () => {
    setup();
    const pagesTags = screen.getAllByTestId("page");
    fireEvent.click(pagesTags[currentPage - 1]);
    expect(clickHandler).not.toHaveBeenCalled();
  });

  it("previous button is not available if current page is the first position", () => {
    setup();
    const prev = screen.getByTestId("previous");
    fireEvent.click(prev);
    expect(clickHandler).not.toHaveBeenCalled();
  });
});
