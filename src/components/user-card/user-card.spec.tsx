import { expect, it, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import { UserPreview } from "../../models/models";
import { UserCard } from "./user-card";

const user: UserPreview = {
  id: "1",
  completeName: "Carlo Alberto Mejia Aquino",
  email: "carlos@mail.com",
  gender: "m",
};

describe("UserCard", () => {
  it("find the user properties in rendered in the dom", () => {
    render(<UserCard user={user} />);
    const completeNameTag = screen.getByTestId("complete-name");
    const genderTag = screen.getByTestId("gender");
    const emailTag = screen.getByTestId("email");
    const idTag = screen.getByTestId("id");

    expect(completeNameTag.textContent).toEqual(user.completeName);
    expect(genderTag.textContent).toEqual("Hombre");
    expect(emailTag.textContent).toEqual(user.email);
    expect(idTag.textContent).toContain(user.id);
  });
});
