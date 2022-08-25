import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Products } from ".";

describe("Products Page", () => {
  it("should render exist item", () => {
    const { getByText } = render(
      <BrowserRouter>
        <Products />
      </BrowserRouter>
    );
    expect(getByText("Produto")).toBeTruthy();
  });
});
