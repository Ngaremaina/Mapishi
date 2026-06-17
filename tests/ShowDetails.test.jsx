import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import ShowDetails from "../src/pages/ShowDetails";
import * as service from "../service/service";
import { MemoryRouter, Route, Routes } from "react-router-dom";

// Mock dependencies
vi.mock("../service/service", () => ({
  fetchData: vi.fn(),
}));

vi.mock("../components/Loader", () => ({
  default: () => <div>Loading...</div>,
}));

vi.mock("../components/icons", () => ({
  AlertIcon: () => <div>AlertIcon</div>,
}));

vi.mock("../components/ShowItem", () => ({
  default: ({ label }) => <div>ShowItem: {label}</div>,
}));

const renderWithRouter = (label) => {
  return render(
    <MemoryRouter initialEntries={[`/details/${label}`]}>
      <Routes>
        <Route path="/details/:label" element={<ShowDetails />} />
      </Routes>
    </MemoryRouter>
  );
};

describe("ShowDetails Component", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("shows loader initially", () => {
    service.fetchData.mockReturnValue(new Promise(() => {})); // never resolves

    renderWithRouter("pizza");

    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("renders ShowItem when recipe is found", async () => {
    service.fetchData.mockResolvedValue({
      hits: [
        {
          recipe: {
            label: "pizza",
          },
        },
      ],
    });

    renderWithRouter("pizza");

    await waitFor(() => {
      expect(screen.getByText("ShowItem: pizza")).toBeInTheDocument();
    });

    expect(service.fetchData).toHaveBeenCalledWith("pizza");
  });

  it("shows 'Recipe not found' when no match exists", async () => {
    service.fetchData.mockResolvedValue({
      hits: [
        {
          recipe: {
            label: "burger",
          },
        },
      ],
    });

    renderWithRouter("pizza");

    await waitFor(() => {
      expect(screen.getByText("Recipe not found")).toBeInTheDocument();
    });

    expect(
      screen.getByText(/We couldn’t find details for/i)
    ).toBeInTheDocument();
  });
});