import { Grid, GridItem, Box, Flex } from '@chakra-ui/react';
import {
  Stack,
  Heading,
  Text,
  Input,
  Button,
  Icon,
  useColorModeValue,
  createIcon,
} from '@chakra-ui/react';
import ReactPlayer from 'react-player';
import React from 'react';
import { Link, useParams } from 'react-router-dom';

const WatchVideo = ({ id, title }) => {
  const { videoId } = useParams();
  return (
    <Flex mx="6" justifyContent="space-between">
      <Box ml={{ base: 0, md: 4 }} p="4">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=zMFb8Y2QLPc"
          controls={true}
          width={800}
          height={600}
        />
        <Stack
          pt={4}
          spacing={4}
          justify={'right'}
          direction={{ base: 'column', md: 'row' }}
          w={'full'}
        >
          <Button>Hello</Button>
          <Button>Add to WatchList</Button>
        </Stack>
      </Box>
      <Box ml={{ base: 0, md: 4 }} p="0">
        <Flex
          minH={'full'}
          justify={'center'}
          bg={useColorModeValue('gray.50', 'gray.800')}
        >
          <Stack
            boxShadow={'2xl'}
            bg={useColorModeValue('white', 'gray.700')}
            rounded={'xl'}
            p={2}
            spacing={8}
            align={'center'}
          >
            <Stack
              spacing={4}
              direction={{ base: 'column', md: 'row' }}
              w={'full'}
            >
              <Input
                type={'text'}
                placeholder={'comment'}
                color={useColorModeValue('gray.800', 'gray.200')}
                bg={useColorModeValue('gray.100', 'gray.600')}
                border={0}
                _focus={{
                  bg: useColorModeValue('gray.200', 'gray.800'),
                  outline: 'none',
                }}
              />
              <Button
                bg={'blue.400'}
                rounded={'full'}
                color={'white'}
                flex={'1 0 auto'}
                _hover={{ bg: 'blue.500' }}
                _focus={{ bg: 'blue.500' }}
              >
                Comment
              </Button>
            </Stack>
            {/* <Icon as={NotificationIcon} w={24} h={24} /> */}
            <Stack align={'center'} spacing={2}></Stack>
          </Stack>
        </Flex>
      </Box>
    </Flex>
  );
};

export default WatchVideo;
