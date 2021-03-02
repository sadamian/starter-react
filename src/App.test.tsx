/**
 * @file App.tx test
 * @description
 * Only checks if App renders
 *
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("Render App without error", () => {
  render(<App />);
});
