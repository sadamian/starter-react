/**
 * @file Main Component
 * @description
 * • Provide a Theme for all the App (styled-component)
 * • Connect the App to redux (Provider)
 * • Define the main Routes of the App
 *    • Currently only 3 Routes
 *    • For each routes, render a screen
 *  Routes : /products & /cart & /
 *
 */

import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";

import {
  ProductsScreen,
  ProductScreen,
  HomeScreen,
  CartScreen,
} from "screen/index.screen";
import { appTheme } from "style/app-theme";
import { store, RootState, Dispatch } from "store/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <ThemeProvider theme={appTheme}>
          <Router>
            <Switch>
              <Route path="/products">
                <ProductsScreen />
              </Route>
              <Route path="/cart">
                <CartScreen />
              </Route>
              {/*should always be last*/}
              <Route path="/">
                <HomeScreen />
              </Route>
            </Switch>
          </Router>
        </ThemeProvider>
      </Provider>
    </>
  );
}

export default App;
