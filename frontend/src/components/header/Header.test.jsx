import { screen, render } from "@testing-library/react";
import Header from "./Header";

test("Run test", () => {
  render(<Header />);

  const header = screen.getByRole("navigation");

  expect(header).toBeInTheDocument();
});
