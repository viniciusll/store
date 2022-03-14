import React from 'react';
import ReactDOM from 'react-dom';

import Routes from './infra/routes';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './presetion/styles/GlobalStyles';
import CartProvider from './presetion/context/Cart';

ReactDOM.render(
  <React.StrictMode>
    <CartProvider>
      <ThemeProvider theme={{}}>
        <GlobalStyles />
        <Routes />
      </ThemeProvider>
    </CartProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
