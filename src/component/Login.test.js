import { render, screen } from "@testing-library/react";
import Login from "./Login";

test("User name should be rendered", () => {
  render(<Login />);
  const userInputEl = screen.getByPlaceholderText(/username/i);
  expect(userInputEl).toBeInTheDocument();
});

test("Password should be rendered", () => {
  render(<Login />);
  const passwordInput = screen.getByPlaceholderText(/password/i);
  expect(passwordInput).toBeInTheDocument();
});

test("Button should be rendered", () => {
  render(<Login />);
  const button = screen.getByRole("button");
  expect(button).toBeInTheDocument();
});

test("Button should be disable", () => {
  render(<Login />);
  const buttonEl = screen.getByRole("button");
  expect(buttonEl).toBeDisabled();
});

test("Error message should not be visible", () => {
  render(<Login />);
  const error = screen.getByTestId("error");
  expect(error).not.toBeVisible();
});

test("username input should be empty", () => {
  render(<Login />);
  const usernameInputEl = screen.getByPlaceholderText(/username/i);
  expect(usernameInputEl.value).toBe("");
});
