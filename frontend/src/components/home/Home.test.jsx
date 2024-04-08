import { screen, render } from "@testing-library/react";
import Home from "./Home";

describe("Home tests", () => {
  test("Have an H1", () => {
    render(<Home />);

    const title = screen.getByText("Four paws");

    expect(title).toBeInTheDocument();
  });

  test("Have a into paragraph", () => {
    render(<Home />);

    const paragraph = screen.getByRole("presentation");

    expect(paragraph).toBeInTheDocument();
  });

  test("Have an image", () => {
    render(<Home />);

    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
  });

  test("Button has message", () => {
    render(<Home />);

    const button = screen.getByRole("button");
    const buttonText = screen.getByText("Get started");

    expect(button).toContainElement(buttonText);
  });
});
