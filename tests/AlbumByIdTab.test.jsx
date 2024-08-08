import React from "react";
import { it, expect, describe, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import userEvent from "@testing-library/user-event";
import AlbumByIdTab from "../src/components/AlbumByIdTab/AlbumByIdTab";
import * as api from "../src/api";

describe("AlbumByIdTab", () => {
  it("should render album that is fetched by id", async () => {
    render(<AlbumByIdTab />);

    const mockAlbum = { userId: 1, title: "quidem molestiae enim" };
    vi.spyOn(api, "fetchAlbumById").mockResolvedValue(mockAlbum);

    userEvent.type(screen.getByRole("spinbutton"), "1");
    screen.getByRole("button").click();

    await waitFor(() => {
      expect(
        screen.getByText(new RegExp(`User Id: ${mockAlbum.userId}`, "i"))
      ).toBeInTheDocument();
      expect(
        screen.getByText(new RegExp(`Title: ${mockAlbum.title}`, "i"))
      ).toBeInTheDocument();
    });
  });
});
