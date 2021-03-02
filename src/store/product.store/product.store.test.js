import { productModel } from "store/product.store/product.store.model";
import { products } from "fixture/product.fixture";

describe("productModel ", () => {
  it("reducer: populate action", () => {
    const result = productModel.reducers.populate(productModel.state, null);
    expect(result.items.length).toBe(0);
  });

  it("reducer: populate action", () => {
    const result = productModel.reducers.populate(productModel.state, products);
    expect(result.items.length).toBe(products.length);
  });
});
