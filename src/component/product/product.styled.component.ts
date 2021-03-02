import styled from "styled-components";
import toMaterialStyle from "material-color-hash";
import { ImageProps, TitleProps } from "interface/product.interface";

export const Product_StyledComponent = styled.div`
  border-radius: ${(props) => props.theme.borderRadius};
  background-color: ${(props) => props.theme.background.color};
  width: 150px;
  height: 50px;
`;

export const ProductTitle_StyledComponent = styled.div`
  color: ${(props) => props.theme.colors.main};
`;

export const ProductImage_StyledComponent = styled.div<ImageProps>`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-color: ${(props) =>
    toMaterialStyle(props.image, 500).backgroundColor};
`;

export const ProductCategory_StyledComponent = styled.div`
  background-color: lol;
`;

export const ProductDescription_StyledComponent = styled.div`
  color: ${(props) => props.theme.colors.second};
`;

export const ProductPrice_StyledComponent = styled.div`
  color: ${(props) => props.theme.colors.main};
`;
