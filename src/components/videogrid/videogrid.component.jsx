import React, { useState } from 'react';
import { Grid, Heading } from '@chakra-ui/react';
import VideoCard from '../videoCard/videoCard.component';

const VideoGrid = props => {
  return (
    <>
      <Heading as="h3" size="lg">
        {props.broadcastData.sportingCode}🏃‍♂️
      </Heading>
      <Grid pt={4} templateColumns="repeat(4, 1fr)" gap={6}>
        {props.broadcastData.videos.map(video => {
          return (
            <VideoCard
              key={video.id}
              id={video.id}
              url={video.url}
              title={video.title}
              broadcaster={video.broadcaster}
            />
          );
        })}
      </Grid>
    </>
  );
};

export default VideoGrid;
