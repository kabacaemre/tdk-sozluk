import 'react-native-gesture-handler';
import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import theme from './utils/theme';
import Navigation from './Navigation';

function Router() {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        <Navigation />
      </SafeAreaProvider>
    </ThemeProvider>
  );
}

export default Router;
