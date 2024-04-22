import { screen, render } from "@testing-library/react";
import AboutUs from "./AboutUs";

describe("Test for About Us Section", () => {
  test("Should have one H2 title", () => {
    render(<AboutUs />);

    const title = screen.getByText("About Us");

    expect(title).toBeInTheDocument();
  });

  test("Should have 4 sections", () => {
    render(<AboutUs />);

    const sections = screen.getAllByRole("article");

    expect(sections).toHaveLength(4);
  });

  test("Should have welcome title", () => {
    render(<AboutUs />);

    const title = screen.getByText("Welcome to Four Paws!");

    expect(title).toBeInTheDocument();
  });

  test("Should have second hand title", () => {
    render(<AboutUs />);

    const title = screen.getByText("New and Pre-owned");

    expect(title).toBeInTheDocument();
  });

  test("Should have dog and cat title", () => {
    render(<AboutUs />);

    const title = screen.getByText("Dog and Cat");

    expect(title).toBeInTheDocument();
  });
});
