import React from 'react';
import ReactDOM from 'react-dom';

import Routes from './infra/routes';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './presetion/styles/GlobalStyles';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={{}}>
      <GlobalStyles />
      <Routes />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
