/**
 * @file Store File
 * @description
 * Init redux store
 * export type to use when using connect
 *
 */

import { init, RematchDispatch, RematchRootState } from "@rematch/core";
import { models, RootModel } from "store/models.store";

export const store = init({
  models,
});

export type Store = typeof store;
export type Dispatch = RematchDispatch<RootModel>;
export type RootState = RematchRootState<RootModel>;
