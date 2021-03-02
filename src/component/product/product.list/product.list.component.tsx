import React, { ReactNode } from "react";

import {
  ImageProps,
  IProduct,
  TitleProps,
} from "../../../interface/product.interface";
import Product from "../product.component";

export interface Props {
  products: IProduct[];
  getProducts: () => void;
}

const ProductList = ({ products, getProducts }: Props) => {
  return (
    <>
      <button
        onClick={async () => {
          const response: any = await getProducts();
        }}
      >
        get products
      </button>
      {products.map((p) => (
        <Product product={p} />
      ))}
    </>
  );
};

export default ProductList;
