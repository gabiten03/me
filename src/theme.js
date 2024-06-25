// src/theme.js
import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    heading: `'Raleway', sans-serif`,
    body: `'Open Sans', sans-serif`,
    merriweather: `'Merriweather', serif`,
  },
});

export default theme;
