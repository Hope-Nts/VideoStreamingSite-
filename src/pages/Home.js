import { Grid, Heading } from '@chakra-ui/react';
import React from 'react';
import VideoCard from '../components/videoCard/videoCard.component';
import VideoGrid from '../components/videogrid/videogrid.component';

const Home = () => {
  return (
    <>
      <VideoGrid />
      <Heading as="h3" size="lg">
        Running 🏃‍♂️
      </Heading>
      <Grid pt={4} pd={4} templateColumns="repeat(4, 1fr)" gap={6}>
        <VideoCard />
      </Grid>
    </>
  );
};

export default Home;
