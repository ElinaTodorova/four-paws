import { MemoryRouter } from "react-router-dom";
import { screen, render } from "@testing-library/react";
import Header from "./Header";

describe("Test for Header", () => {
  test("Have a header", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    const header = screen.getAllByRole("navigation");

    expect(header).toHaveLength(2);
  });

  test("Have two item in header", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    const elements = screen.getAllByTestId("svg-icon");

    expect(elements).toHaveLength(2);
  });
});
