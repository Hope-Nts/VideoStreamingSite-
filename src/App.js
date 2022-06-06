import React, { useContext, useState } from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { Routes, Route } from 'react-router-dom';
import { getUserAccount, signOutUser } from './utils/firebase/firebase.utils';
import AuthPage from './pages/Authentication';
import Home from './pages/Home';
import WatchVideo from './pages/WatchVideo';
import WatchList from './pages/WatchList';
import Users from './pages/Users';
import { UserContext } from './contexts/user.context';
import Layout from './layout/layout';
import Videos from './pages/Videos';
let loggedIn = true;
function App() {
  // const user = null;

  const { currentUser } = useContext(UserContext);
  if (currentUser && loggedIn) {
    (async () => {
      try {
        const userDetails = await getUserAccount(currentUser.uid);

        if (!userDetails.blocked && loggedIn) {
          loggedIn = false;
          alert('Your Account has been blocked');
          signOutUser();
        }

        if (
          userDetails.userType === 'Broadcaster' &&
          !userDetails.verfied &&
          loggedIn
        ) {
          loggedIn = false;
          alert('Your Account has not been Verified');
          signOutUser();
        }
      } catch (e) {
        console.log(e);
      }
    })();
  }

  return (
    <ChakraProvider theme={theme}>
      {currentUser ? (
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/watchvideo/:id" element={<WatchVideo />} />
            <Route path="/watchlist" element={<WatchList />} />
            <Route path="/users" element={<Users />} />
            <Route path="/videos" element={<Videos />} />
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
