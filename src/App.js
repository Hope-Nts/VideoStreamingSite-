import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';

import AuthPage from './pages/Authentication';
import Layout from './layout/layout';

function App() {
  const user = {}
  return (
    <ChakraProvider theme={theme}>
      {user ? 
      (<Layout>
      </Layout>):
      <AuthPage />}
    </ChakraProvider>
  );
}

export default App;
