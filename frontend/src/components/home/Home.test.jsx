import { screen, render } from "@testing-library/react";
import Home from "./Home";

describe("Home tests", () => {
  test("Have an H1", () => {
    render(<Home />);

    const title = screen.getByText("Our Categories");

    expect(title).toBeInTheDocument();
  });

  test("Have a into paragraph", () => {
    render(<Home />);

    const carousel = screen.getByRole("role");

    expect(carousel).toBeInTheDocument();
  });

  test("Have an image", () => {
    render(<Home />);

    const listAnimals = screen.getByRole("list");

    expect(listAnimals).toBeInTheDocument();
  });
});
