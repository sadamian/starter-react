import { connect } from "react-redux";
import { RootState, Dispatch } from "../../../store/store";
import React from "react";
import ProductList from "./product.list.component";
import { IProduct } from "../../../interface/product.interface";

type StateProps = ReturnType<typeof mapState>;
type DispatchProps = ReturnType<typeof mapDispatch>;
type Props = StateProps & DispatchProps;

const mapState = (state: RootState) => ({
  products: state.productModel.items,
});

const mapDispatch = (dispatch: Dispatch) => ({
  populate: (payload: IProduct[]) => dispatch.productModel.populate(payload),
  getProducts: () => dispatch.productModel.getProducts(),
});

const ProductListContainer = ({ products, getProducts }: Props) => {
  return <ProductList products={products} getProducts={getProducts} />;
};

export default connect(mapState, mapDispatch)(ProductListContainer);
