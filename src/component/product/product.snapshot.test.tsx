import React from "react";
import renderer from "react-test-renderer";
import { ThemeProvider } from "styled-components";

import Product from "component/product/product.component";
import { IProduct } from "interface/product.interface";
import { appTheme } from "style/app-theme";

const product: IProduct = {
  name: "productos",
  category: "tech",
  description: "lelele",
  image: "jeje",
  price: 12,
};
describe("Snapshot Product Component", () => {
  test("Snap Product Properly", () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={appTheme}>
          <Product product={product} />
        </ThemeProvider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
