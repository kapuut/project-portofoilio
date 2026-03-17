import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Home from "../app/page";

test("renders welcome text", () => {
  render(<Home />);
  const text = screen.getByText(/Welcome to My Portfolio/i);
  expect(text).toBeInTheDocument();
});
