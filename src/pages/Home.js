import { Grid, GridItem } from '@chakra-ui/react';
import React from 'react';
import VideoCard from '../components/videoCard/videoCard.component';

const Home = () => {
  return (
    <Grid templateColumns="repeat(4, 1fr)" gap={6}>
      <VideoCard />
      <GridItem w="100%" h="10" bg="blue.500" />
      <GridItem w="100%" h="10" bg="blue.500" />
      <GridItem w="100%" h="10" bg="blue.500" />
    </Grid>
  );
};

export default Home;
