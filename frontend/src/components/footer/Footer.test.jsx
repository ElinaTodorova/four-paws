import { screen, render } from "@testing-library/react";
import Footer from "./Footer";

describe("Footer tests", () => {
  test("Renders Footer component", () => {
    render(<Footer />);

    const icons = screen.getByRole("list");
    expect(icons).toBeInTheDocument();
  });
  test("Renders Footer component with 4 icons", () => {
    render(<Footer />);

    const elements = screen.getAllByTestId("svg-icon");
    expect(elements).toHaveLength(4);
  });
});
