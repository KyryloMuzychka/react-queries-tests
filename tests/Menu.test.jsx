import React from "react";
import { it, expect, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import Menu from "../src/components/Menu/Menu";

describe("Menu", () => {
  it("should render tabs", () => {
    render(<Menu />);    
    const buttons = screen.getAllByRole("button");
    expect(buttons[0]).toHaveTextContent(/get all/i);
    expect(buttons[1]).toHaveTextContent(/get album by id/i);
    expect(buttons[2]).toHaveTextContent(/create/i);
  });
});
