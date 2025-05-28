import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
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
      const matchedTexts = screen.getAllByText((content, element) => 
        element.tagName.toLowerCase() === 'li' && content.includes(sampleText)
      );

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
    checkListByText("Liquid-Liquid reactions");
    checkListByText("Excellent heat and mass transfer"); // match actual string used in ProductThree
  });
});
