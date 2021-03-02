/**
 * @file Model Store file
 * @description
 * RootModel who import all rematch modules to be use by store init
 *
 */

import { Models } from "@rematch/core";
import { productModel } from "store/product.store/product.store.model";

export interface RootModel extends Models<RootModel> {
  productModel: typeof productModel;
}

export const models: RootModel = { productModel };
