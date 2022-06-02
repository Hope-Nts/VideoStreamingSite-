import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../contexts/user.context';
import { addVideo, getUserAccount } from '../utils/firebase/firebase.utils';
import VideoTable from '../components/videostable/videoTable.component';
import { CategoriesContext } from '../contexts/categories.context';
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  useDisclosure,
  FormControl,
  FormLabel,
  Radio,
  Stack,
  RadioGroup,
  Input,
  ModalCloseButton,
} from '@chakra-ui/react';

const defaultFormFields = {
  broadcaster: '',
  title: '',
  url: '',
};

function BasicUsage() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [formFields, setFormFields] = useState(defaultFormFields);
  const [sportingCode, setSportingCode] = useState('athletics');
  const { broadcaster, title, url } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleChange = event => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async event => {
    event.preventDefault();

    if (url.length < 1 && title.length < 1 && url.length < 1) {
      alert('Missing Values');
      return;
    }

    try {
      const video = {
        id: Math.random(),
        title: title,
        url: url,
        broadcaster: broadcaster,
        comments: [],
      };
      await addVideo(sportingCode, video);
      // const { user } = await createAuthUserWithEmailAndPassword(
      //   email,
      //   password
      // );

      // console.log('USER', user);

      // await createUserDocumentFromAuth(user, { username, userType });
      resetFormFields();
      onClose();
    } catch (error) {
      alert('Video Upload failed');
    }
  };
  return (
    <>
      <Button onClick={onOpen}>Add Video</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Video</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <RadioGroup onChange={setSportingCode} value={sportingCode}>
              <Stack direction="row">
                <Radio value="athletics">athletics</Radio>
                <Radio value="basketball">basketball</Radio>
                <Radio value="winter ❄️">winter</Radio>
                <Radio value="football">football</Radio>
              </Stack>
            </RadioGroup>
            <FormControl>
              <FormLabel>Broadcaster</FormLabel>
              <Input
                placeholder="BroadCaster"
                name="broadcaster"
                onChange={handleChange}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Title</FormLabel>
              <Input placeholder="Title" name="title" onChange={handleChange} />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Url</FormLabel>
              <Input placeholder="Url" name="url" onChange={handleChange} />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleSubmit}>
              Add
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

const Videos = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  const { currentUser } = useContext(UserContext);

  const [videos, setVideos] = useState(categoriesMap);
  const [showModal, setShowModal] = useState(false);

  const [details, setDetails] = useState({ username: '' });

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

  let videoData = [];
  useEffect(() => {
    setVideos(categoriesMap);
  }, [categoriesMap]);

  if (videos.length > 0 && details.username.length > 0) {
    videoData = videos
      .map(category => category.videos)
      .flat()
      .filter(
        video =>
          `${video.broadcaster.toLowerCase()}` ===
          `${details.username.toLowerCase()}`
      );
    // console.log(`${details.username}`);
    // console.log(`${videoData[0].broadcaster}`);
    // console.log(
    //   videos
    //     .map(category => category.videos)
    //     .flat()
    //     .filter(video => video.broadcaster === 'SuperSport')
    // );
  }

  return (
    <>
      <BasicUsage />
      {/* <Button
        bg={'blue.400'}
        rounded={'full'}
        color={'white'}
        flex={'1 0 auto'}
        _hover={{ bg: 'blue.500' }}
        _focus={{ bg: 'blue.500' }}
        marginBottom={'4px'}
        // onClick={() => verifyUser(id)}
      >
        Add Video
      </Button> */}
      {videoData.length > 0 ? <VideoTable data={videoData} /> : null}
    </>
  );
};

export default Videos;
