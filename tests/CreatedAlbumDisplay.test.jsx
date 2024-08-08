import React from "react";
import { it, expect, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import CreatedAlbumDisplay from "../src/components/CreatedAlbumDisplay/CreatedAlbumDisplay";

describe("CreatedAlbumDisplay", () => {
  it("should show an error message when there is an error", () => {
    render(<CreatedAlbumDisplay createdAlbum={null} isError={true} />);    
    expect(screen.getByText(/enter correct data!/i)).toBeInTheDocument();
  });

  it("should show created album", () => {
    const album = {
      userId: 200,
      title: "Lorem"
    }
    render(<CreatedAlbumDisplay createdAlbum={album} isError={false} />);        
    expect(screen.getByText(/created element/i)).toBeInTheDocument();    
  });
});
