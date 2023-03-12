import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { UsersList } from "./users-list";
import { UserPreview } from "../../models/models";

const users: UserPreview[] = [
  {
    id: "1",
    completeName: "Carlo Alberto Mejia Aquino",
    email: "carlos@mail.com",
    gender: "m",
  },
  {
    id: "2",
    completeName: "Maria Contreras",
    email: "maria@mail.com",
    gender: "f",
  },
];

describe("UsersList", () => {
  it("renders the same quantity of cards as the users props", () => {
    render(<UsersList users={users} />);
    const cards = screen.getAllByTestId("card");
    expect(cards.length).toEqual(users.length);
  });
});
