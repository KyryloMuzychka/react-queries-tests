import React from "react";
import { it, expect, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import SingleAlbum from "../src/components/SingleAlbum/SingleAlbum";
 
describe('SingleAlbum', () => {
  it('should', () => {
    const album = {
      userId: 200,
      title: "Lorem"
    }
    render(<SingleAlbum album={album} />);            
    expect(screen.getByText(new RegExp(`User Id: ${album.userId}`, "i"))).toBeInTheDocument();
    expect(screen.getByText(new RegExp(`Title: ${album.title}`, "i"))).toBeInTheDocument();
  })
})