import React from "react";
import { it, expect, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import AlbumList from "../src/components/AlbumsList/AlbumsList";

describe("AlbumList", () => {
  it("should render no albums when the albums array is empty", () => {
    render(<AlbumList albums={[]} />);
    expect(screen.getByText(/no albums available/i)).toBeInTheDocument();
  });

  it("should render a list of albums", () => {
    const albums = [
      { id: 1, userId: 1, title: "title1" },
      { id: 2, userId: 2, title: "title2" },
    ];
    render(<AlbumList albums={albums} />);

    albums.forEach((album) => {      
      expect(screen.getByText(`Title: ${album.title}`)).toBeInTheDocument();
    });
    
    const hrElements = screen.getAllByRole("separator");
    expect(hrElements.length).toBe(albums.length);
  });
});
