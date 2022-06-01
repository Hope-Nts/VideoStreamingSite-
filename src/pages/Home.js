import { Grid, Heading } from '@chakra-ui/react';
import React from 'react';
import VideoCard from '../components/videoCard/videoCard.component';
import VideoGrid from '../components/videogrid/videogrid.component';
import { SPORT_DATA } from '../shop-data';
const Home = () => {
  return (
    <>
      {SPORT_DATA.map(data => {
        return <VideoGrid broadcastData={data} />;
      })}
    </>
  );
};

export default Home;
