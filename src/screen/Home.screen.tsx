import React from "react";
import GotoButtonComponent from "component/common/GoToButton.component";

const HomeScreen = () => (
  <div>
    <h1>home</h1>
    <GotoButtonComponent url={"/products"}>
      <div>Go to Products</div>
    </GotoButtonComponent>
  </div>
);
export default HomeScreen;
