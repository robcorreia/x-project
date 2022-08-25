import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Header } from ".";

describe("Header Component", () => {
  it("should render exist text", () => {
    const { getByText } = render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    expect(getByText("Brand")).toBeTruthy();
    expect(getByText("Produtos")).toBeTruthy();
    expect(getByText("Minha Conta")).toBeTruthy();
    expect(getByText("Sair")).toBeTruthy();
  });
});
