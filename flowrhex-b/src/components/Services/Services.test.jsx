import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Services from "./Services";

describe("Services Component", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Services />
      </BrowserRouter>
    );
  });

  test("renders Services heading and breadcrumb", () => {
    const servicesHeadings = screen.getAllByRole("heading", { name: /services/i });
    expect(servicesHeadings.length).toBeGreaterThan(0);
    // Optional: check that one of them has exact text "Services"
    expect(servicesHeadings.some(h => h.textContent.trim() === "Services")).toBe(true);

    expect(screen.getByText(/home/i)).toBeInTheDocument();
    expect(screen.getByText(/services/i, { selector: "span" })).toBeInTheDocument();
  });

  test("renders Our Services main heading and description", () => {
    expect(screen.getByRole("heading", { name: /our services/i })).toBeInTheDocument();
    expect(screen.getByText(/FlowRHEX® is an innovation/i)).toBeInTheDocument();
  });

  test("renders all service sections with correct titles", () => {
    const serviceTitles = [
      /Introduction to Technology/i,
      /Fast Track Tests & Quality Feasibility Tests/i,
      /Process Development & Optimization/i,
      /Dosing Solution/i,
    ];

    serviceTitles.forEach(title => {
      const matches = screen.getAllByText(title);
      expect(matches.length).toBeGreaterThan(0);
    });
  });
});
