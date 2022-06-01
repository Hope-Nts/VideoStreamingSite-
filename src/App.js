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
import { Routes, Route } from 'react-router-dom';

import AuthPage from './pages/Authentication';
import Home from './pages/Home';
import WatchVideo from './pages/WatchVideo';
import WatchList from './pages/WatchList';
import Layout from './layout/layout';

function App() {
  const user = {};
  return (
    <ChakraProvider theme={theme}>
      {user ? (
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/watchvideo/:id" element={<WatchVideo />} />
            <Route path="/watchlist" element={<WatchList />} />
            {/* <Route path='shop/*' element={<Shop />} /> */}
            {/* <Route path='auth' element={<Authentication />} /> */}
            {/* <Route path='checkout' element={<Checkout />} /> */}
          </Routes>
        </Layout>
      ) : (
        <AuthPage />
      )}
    </ChakraProvider>
  );
}

export default App;
