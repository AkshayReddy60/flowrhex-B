import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";  // import MemoryRouter
import '@testing-library/jest-dom';
import Products from "./Products";

describe("Products component", () => {
  test("renders operating conditions, applications, and features lists with check icons", () => {
    render(
      <MemoryRouter>
        <Products />
      </MemoryRouter>
    );

    function checkListByText(sampleText) {
      const matchedTexts = screen.getAllByText(new RegExp(sampleText, "i"));
      expect(matchedTexts.length).toBeGreaterThan(0);

      const list = matchedTexts[0].closest("ul");
      expect(list).toBeInTheDocument();

      const items = list.querySelectorAll("li");
      expect(items.length).toBeGreaterThanOrEqual(3);

      items.forEach((li) => {
        const checkIcon = li.querySelector("svg");
        expect(checkIcon).toBeInTheDocument();
      });

      return list;
    }

    checkListByText("Operating Temperature");
    checkListByText("Liquid-liquid reactions");
    checkListByText("High heat and mass transfer");
  });
});
