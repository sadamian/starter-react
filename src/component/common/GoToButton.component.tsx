import React, { ReactNode } from "react";
import { useHistory } from "react-router-dom";

export interface Props {
  url: string;
  children: ReactNode;
}

const GotoButtonComponent = ({ url, children }: Props) => {
  let history = useHistory();

  function handleClick() {
    history.push(url);
  }
  return <div onClick={handleClick}>{children}</div>;
};
export default GotoButtonComponent;
