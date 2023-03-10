import { render, screen } from "@testing-library/react";
import App from "./App";

// Wallaby.js start extantion

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders 3 list items", () => {
  render(<App />);
  const listitems = screen.getAllByRole("listitem");
  // expect(listitems).toHaveLength(3);
  expect(listitems.length).toBe(3);
});

test("renders title", () => {
  render(<App />);
  const title = screen.getByTestId("testid");
  expect(title).toBeInTheDocument();
});

test("renders sum", () => {
  render(<App />);
  const sum = screen.getByTitle("sum");
  expect(sum.textContent).toBe("9");
});
