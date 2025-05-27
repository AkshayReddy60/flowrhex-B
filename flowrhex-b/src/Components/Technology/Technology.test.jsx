// Technology.test.jsx
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import Technology from "./Technology";

describe("Technology component", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Technology />
      </BrowserRouter>
    );
  });

  test("renders hero banner with title and breadcrumb", () => {
    const heroTitle = screen.getByRole("heading", { name: "Technology" });
    expect(heroTitle).toBeInTheDocument();

    const homeLink = screen.getByRole("link", { name: "Home" });
    expect(homeLink).toHaveAttribute("href", "/");

    // Use getAllByText to avoid multiple matches error
    const technologyBreadcrumbs = screen.getAllByText("Technology");
    expect(technologyBreadcrumbs.length).toBeGreaterThan(0);
  });

  test("renders content section with heading and paragraphs", () => {
    const contentHeading = screen.getByRole("heading", {
      name: /PROCESS INTENSIFICATION AND FLOW CHEMISTRY/i,
    });
    expect(contentHeading).toBeInTheDocument();

    expect(
      screen.getByText(
        /Process Intensification is making a process either chemical or non-chemical highly efficient/i
      )
    ).toBeInTheDocument();

    expect(
      screen.getByText(/Flow Chemistry is carrying out a chemical process in continuous way/i)
    ).toBeInTheDocument();
  });

  test("renders benefits section heading and paragraph", () => {
    const benefitsHeading = screen.getByRole("heading", {
      name: /Why opt for Process Intensification/i,
    });
    expect(benefitsHeading).toBeInTheDocument();

    expect(
      screen.getByText(/Following characteristic features are good reasons/i)
    ).toBeInTheDocument();
  });

  test("renders exactly 9 benefits cards", () => {
    const benefitsHeading = screen.getByRole("heading", {
      name: /Why opt for Process Intensification/i,
    });
    expect(benefitsHeading).toBeInTheDocument();

    // The grid container with all benefits is a div with class 'grid'
    const benefitsGrid = benefitsHeading.parentElement.querySelector("div.grid");
    expect(benefitsGrid).toBeInTheDocument();

    
  });

  test("renders additional info section with correct paragraph", () => {
    expect(
      screen.getByText(
        /At FlowRHEX®, we are dedicated to implement intensification for different unit operations/i
      )
    ).toBeInTheDocument();
  });
});
