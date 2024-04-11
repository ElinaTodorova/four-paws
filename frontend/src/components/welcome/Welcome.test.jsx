import { fireEvent, screen, render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Welcome from "./Welcome";

describe("Home tests", () => {
  test("Renders Welcome component", () => {
    const { getByText } = render(
      <BrowserRouter>
        <Welcome />
      </BrowserRouter>
    );

    const button = getByText(/Get started/i);
    expect(button).toBeInTheDocument();
    fireEvent.click(button);
  });
  test("Have an H1", () => {
    render(
      <BrowserRouter>
        <Welcome />
      </BrowserRouter>
    );

    const title = screen.getByText("Four paws");

    expect(title).toBeInTheDocument();
  });

  test("Have a into paragraph", () => {
    render(
      <BrowserRouter>
        <Welcome />
      </BrowserRouter>
    );

    const paragraph = screen.getByRole("presentation");

    expect(paragraph).toBeInTheDocument();
  });

  test("Have an image", () => {
    render(
      <BrowserRouter>
        <Welcome />
      </BrowserRouter>
    );
    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
  });

  test("Button has message", () => {
    render(
      <BrowserRouter>
        <Welcome />
      </BrowserRouter>
    );
    const button = screen.getByRole("button");
    const buttonText = screen.getByText("Get started");

    expect(button).toContainElement(buttonText);
  });
});
