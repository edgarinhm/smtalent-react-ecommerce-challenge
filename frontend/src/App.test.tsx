import { act, render, screen, waitFor } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import App from "./App";

describe("App", () => {
  it("Title should be Poweredge Ecommerce", async () => {
    await act(async () => {
      render(<App />);
    });

    await waitFor(() => {
      expect(screen.getByText("Poweredge Ecommerce")).toBeInTheDocument();
    });
  });
});
