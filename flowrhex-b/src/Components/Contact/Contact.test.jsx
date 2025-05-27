import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Contact from "./Contact";
import { MemoryRouter } from "react-router-dom";

// Optional: You can use test IDs for more reliable selection
describe("Contact Component", () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <Contact />
      </MemoryRouter>
    );
  });

  test("renders contact page title", () => {
    expect(screen.getByRole("heading", { name: /contact us/i })).toBeInTheDocument();
  });

  test("renders map image", () => {
    expect(screen.getByAltText(/location|map/i)).toBeInTheDocument();
  });

  test("renders contact form inputs", () => {
    expect(screen.getByPlaceholderText(/name/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/message/i)).toBeInTheDocument();
  });

  

 test("submits the form when submit button is clicked", () => {
  const nameInput = screen.getByPlaceholderText(/name/i);
  const emailInput = screen.getByPlaceholderText(/email/i);
  const messageInput = screen.getByPlaceholderText(/message/i);

  screen.debug(); // Helps debug what is actually rendered

  const submitButton = screen.getByRole("button", { name: /submit|send/i });

  fireEvent.change(nameInput, { target: { value: "Akshay" } });
  fireEvent.change(emailInput, { target: { value: "akshay@example.com" } });
  fireEvent.change(messageInput, { target: { value: "This is a test." } });

  fireEvent.click(submitButton);

  // Add expected behavior after form submission
});

});
