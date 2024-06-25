import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import '@fontsource/raleway'; // Raleway font
import '@fontsource/open-sans'; // Open Sans font
import '@fontsource/merriweather'; // Merriweather font
import theme from './theme';

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode="dark" > </ColorModeScript>
      <App />

    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

