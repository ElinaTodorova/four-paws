import { screen, render } from "@testing-library/react";
import Welcome from "./Welcome";

describe("Home tests", () => {
  test("Have an H1", () => {
    render(<Welcome />);

    const title = screen.getByText("Four paws");

    expect(title).toBeInTheDocument();
  });

  test("Have a into paragraph", () => {
    render(<Welcome />);

    const paragraph = screen.getByRole("presentation");

    expect(paragraph).toBeInTheDocument();
  });

  test("Have an image", () => {
    render(<Welcome />);

    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
  });

  test("Button has message", () => {
    render(<Welcome />);

    const button = screen.getByRole("button");
    const buttonText = screen.getByText("Get started");

    expect(button).toContainElement(buttonText);
  });
});
