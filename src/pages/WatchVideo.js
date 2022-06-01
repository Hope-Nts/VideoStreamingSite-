import { Grid, GridItem } from '@chakra-ui/react';
import ReactPlayer from 'react-player';
import React from 'react';
import { Link, useParams } from 'react-router-dom';

const WatchVideo = () => {
  const { videoId } = useParams();
  return (
    <>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=zMFb8Y2QLPc"
        controls={true}
        width={850}
        height={600}
      />
    </>
  );
};

export default WatchVideo;
