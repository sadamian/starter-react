/**
 * @file Product Model
 * @description
 * rematch model of Product
 *
 * state : {} : IProductModel
 * reducers:
 *  populate : reducer who will populate items
 * effects
 *  getProducts : Fetch all products by an api call
 *
 */

import { createModel } from "@rematch/core";
import { RootModel } from "store/models.store";
import { IProduct, ProductCategory } from "interface/product.interface";
import { products } from "fixture/product.fixture";
import { instanceAxios } from "service/axios.service";

interface IProductModel {
  items: IProduct[];
}

export const productModel = createModel<RootModel>()({
  state: {
    //fixture to remove
    items: products,
  } as IProductModel,
  reducers: {
    populate(state, payload: IProduct[] = []) {
      const items = payload || [];
      return { ...state, items };
    },
  },
  effects: (dispatch) => ({
    // handle state changes with impure functions.
    // use async/await for async actions
    async getProducts(payload = null, state) {
      const result = await instanceAxios.get<IProduct[]>("/product");
      dispatch.productModel.populate(result.data);
    },
  }),
});
