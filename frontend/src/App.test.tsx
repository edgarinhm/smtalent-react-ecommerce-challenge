import { act, render, screen, waitFor } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import App from "./App";
import { MemoryRouter } from "react-router-dom";
import { ReactNode } from "react";

const mockBasePath = ["/"];

const renderWithRouter = (children: ReactNode, initialEntries: string[]) => {
  return render(
    <MemoryRouter initialEntries={initialEntries}>{children}</MemoryRouter>
  );
};

describe("App", () => {
  it("Title should be Poweredge Ecommerce", async () => {
    await act(async () => {
      renderWithRouter(<App />, mockBasePath);
    });

    await waitFor(() => {
      expect(screen.getByText("Poweredge Ecommerce")).toBeInTheDocument();
    });
  });
});
