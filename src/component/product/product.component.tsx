import React, { ReactNode } from "react";
import {
  Product_StyledComponent,
  ProductImage_StyledComponent,
  ProductTitle_StyledComponent,
} from "./product.styled.component";
import { ImageProps, IProduct, TitleProps } from "interface/product.interface";

export interface Props {
  product: IProduct;
}

const Product: React.FC<Props> = ({ product }) => {
  return (
    <Product_StyledComponent>
      <div style={{ display: "flex" }}>
        <ProductImage image={product.image} />
        <ProductTitle name={product.name} />
      </div>
    </Product_StyledComponent>
  );
};

export const ProductImage = ({ image }: ImageProps) => (
  <ProductImage_StyledComponent image={image} />
);

export const ProductTitle = ({ name }: TitleProps) => (
  <ProductTitle_StyledComponent>{name}</ProductTitle_StyledComponent>
);

export default Product;
