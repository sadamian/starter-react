import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import { ThemeProvider } from "styled-components";

import Product from "component/product/product.component";
import { IProduct } from "interface/product.interface";
import { appTheme } from "style/app-theme";

const product: IProduct = {
  name: "prout",
  category: "tech",
  description: "lelele",
  image: "jeje",
  price: 12,
};
describe("Check Product Component", () => {
  afterEach(cleanup);

  test("Renders Product Properly", () => {
    const productElement = render(
      <ThemeProvider theme={appTheme}>
        <Product product={product} />
      </ThemeProvider>
    );
    const titleElement = productElement.getByText(/prout/i);
    expect(titleElement).toBeInTheDocument();
  });
});
