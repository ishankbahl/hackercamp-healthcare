import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';

const theme = createMuiTheme();

export const BrowserRouterWrapper = InputComponent => () => (
  <BrowserRouter>
    <InputComponent />
  </BrowserRouter>
);

export const MuiThemeProviderWrapper = InputComponent => () => (
  <MuiThemeProvider theme={ theme } >
    <InputComponent />
  </MuiThemeProvider>
);

const WrappedComponent = InputComponent =>
  BrowserRouterWrapper(MuiThemeProviderWrapper(InputComponent));

export default WrappedComponent;