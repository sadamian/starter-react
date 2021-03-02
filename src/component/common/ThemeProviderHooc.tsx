import { ThemeProvider } from "styled-components";
import React, { ReactNode } from "react";
import { appTheme } from "style/app-theme";

export function withThemeProvider(WrappedComponent: React.ElementType) {
  return class extends React.Component {
    constructor(props: any) {
      super(props);
    }
    render() {
      return (
        <ThemeProvider theme={appTheme}>
          <WrappedComponent {...this.props} />
        </ThemeProvider>
      );
    }
  };
}
