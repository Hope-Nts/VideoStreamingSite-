import { Box, Flex, Container } from '@chakra-ui/react';
import { Stack, Input, Button, useColorModeValue } from '@chakra-ui/react';
import ReactPlayer from 'react-player';
import React, { useContext, useEffect, useState } from 'react';
import { CategoriesContext } from '../contexts/categories.context';
import { useParams } from 'react-router-dom';

const WatchVideo = () => {
  const { id } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [videos, setVideos] = useState(categoriesMap);
  const [commentText, setCommentText] = useState('');
  let request = [];

  useEffect(() => {
    setVideos(categoriesMap);
  }, [categoriesMap]);

  const handleSubmit = evt => {
    request[0].comments.push(commentText);
    setCommentText('');
  };
  if (videos.length > 0) {
    request = videos
      .map(data => {
        return data.videos.filter(video => video.id === parseInt(id));
      })
      .flat();

    console.log('REQUEST', request[0].url);
  }

  return (
    <Flex mx="6" justifyContent="space-between">
      <Box ml={{ base: 0, md: 4 }} p="4">
        <ReactPlayer
          url={`${request[0].url}`}
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
                value={commentText}
                placeholder={'comment'}
                color={useColorModeValue('gray.800', 'gray.200')}
                bg={useColorModeValue('gray.100', 'gray.600')}
                border={0}
                _focus={{
                  bg: useColorModeValue('gray.200', 'gray.800'),
                  outline: 'none',
                }}
                onChange={e => setCommentText(e.target.value)}
              />
              <Button
                bg={'blue.400'}
                rounded={'full'}
                color={'white'}
                flex={'1 0 auto'}
                _hover={{ bg: 'blue.500' }}
                _focus={{ bg: 'blue.500' }}
                onClick={handleSubmit}
              >
                comment
              </Button>
            </Stack>
            {/* <Icon as={NotificationIcon} w={24} h={24} /> */}
            <Stack align={'left'} spacing={2} w="full">
              {request[0].comments.map(comment => (
                <Container
                  rounded={'full'}
                  maxW="md"
                  bg="blue.600"
                  color="white"
                >
                  {comment}
                </Container>
              ))}
            </Stack>
          </Stack>
        </Flex>
      </Box>
    </Flex>
  );
};

export default WatchVideo;
