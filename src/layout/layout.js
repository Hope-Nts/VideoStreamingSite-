import React, { useState, useContext } from 'react';
import { signOutUser, getUserAccount } from '../utils/firebase/firebase.utils';
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  BoxProps,
  FlexProps,
} from '@chakra-ui/react';
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
  FiLogOut,
} from 'react-icons/fi';
import { Link as ReactRouterLink } from 'react-router-dom';
import { UserContext } from '../contexts/user.context';

const LinkItems = [
  { name: 'Home', icon: FiHome, url: '/' },
  { name: 'Trending', icon: FiTrendingUp, url: '/' },
  { name: 'Explore', icon: FiCompass, url: '/' },
  { name: 'WatchList', icon: FiStar, url: '/watchlist' },
  { name: 'Sign Out', icon: FiLogOut, url: '/' },
];

export default function Layout({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: 'none', md: 'block' }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav display={{ base: 'flex', md: 'none' }} onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
    </Box>
  );
}

const SidebarContent = ({ onClose, ...rest }) => {
  const [details, setDetails] = useState({ userType: '' });
  const { currentUser } = useContext(UserContext);
  if (currentUser) {
    (async () => {
      try {
        const userDetails = await getUserAccount(currentUser.uid);
        setDetails(userDetails);
      } catch (e) {
        console.log(e);
      }
    })();
  }

  return (
    <Box
      bg={useColorModeValue('white', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          Logo
        </Text>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      <NavItem key={'Home'} icon={FiHome} url={'/'}>
        Home
      </NavItem>
      {details.userType === 'BroadCaster' ? (
        <NavItem key={'Trending'} icon={FiTrendingUp} url={'/'}>
          Trending
        </NavItem>
      ) : null}
      {details.userType === 'Admin' ? (
        <NavItem key={'Explore'} icon={FiCompass} url={'/'}>
          Explore
        </NavItem>
      ) : null}
      <NavItem key={'WatchList'} icon={FiStar} url={'/watchlist'}>
        WatchList
      </NavItem>

      <NavItem onClick={signOutUser} key={'Sign Out'} icon={FiStar} url={'/'}>
        Sign Out
      </NavItem>
    </Box>
  );
};

const NavItem = ({ url, icon, children, ...rest }) => {
  return (
    <Link
      as={ReactRouterLink}
      to={`${url}`}
      style={{ textDecoration: 'none' }}
      _focus={{ boxShadow: 'none' }}
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: 'cyan.400',
          color: 'white',
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: 'white',
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};

const MobileNav = ({ onOpen, ...rest }) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 24 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue('white', 'gray.900')}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent="flex-start"
      {...rest}
    >
      <IconButton
        variant="outline"
        onClick={onOpen}
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Text fontSize="2xl" ml="8" fontFamily="monospace" fontWeight="bold">
        Logo
      </Text>
    </Flex>
  );
};
