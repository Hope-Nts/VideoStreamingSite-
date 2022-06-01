import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
} from '@chakra-ui/react';
import youtubeThumbnail from 'youtube-thumbnail';
import { Link } from 'react-router-dom';

// ' https://www.freepik.com/free-photo/abstract-grunge-decorative-relief-navy-blue-stucco-wall-texture-wide-angle-rough-colored-background_11712554.htm#&position=0&from_view=popular';
// 'https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80';

export default function VideoCard(props) {
  // const { url, title, id, broadcaster } = props;
  const thumbnail = youtubeThumbnail(`${props.url}`);
  const IMAGE = `${thumbnail.medium.url}`;

  return (
    // <Link to="/watchvideo/https:/www.youtube.com/watch?v=zMFb8Y2QLPc">
    <Link to={`/watchvideo/${props.id}`}>
      <Center>
        <Box
          role={'group'}
          p={2}
          maxW={'330px'}
          w={'full'}
          bg={useColorModeValue('white', 'white')}
          boxShadow={'2xl'}
          rounded={'lg'}
          pos={'relative'}
          zIndex={1}
        >
          <Image
            align={'center'}
            rounded={'lg'}
            height={200}
            width={'full'}
            objectFit={'cover'}
            src={IMAGE}
          />

          <Stack pt={1} align={'left'}>
            {/* <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
            Brand
          </Text> */}
            <Heading
              fontSize={'lg'}
              color={'gray.500'}
              fontFamily={'body'}
              fontWeight={500}
            >
              {props.title}
            </Heading>
            <Stack direction={'row'} align={'left'}>
              <Text color={'gray.500'} fontWeight={600} fontSize={'xl'}>
                {props.broadcaster}
              </Text>
              {/* <Text textDecoration={'line-through'} color={'gray.600'}>
                $199
              </Text> */}
            </Stack>
          </Stack>
        </Box>
      </Center>
    </Link>
  );
}
