import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Art from "../Art";

const MockArt = () => {
  const queryClient = new QueryClient();

  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Art />
      </QueryClientProvider>
    </BrowserRouter>
  );
};

describe("filtered list", () => {
  beforeEach(() => {
    jest.mock("../../__mocks__/getData");
  });

  test("should render art based on the search value", async () => {
    render(<MockArt />);

    const followerDivElement = await screen.findByRole("heading");
    expect(followerDivElement).toBeInTheDocument();
  });
});
