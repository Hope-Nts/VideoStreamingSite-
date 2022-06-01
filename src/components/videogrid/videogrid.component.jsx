import React, { useState } from 'react';
import { Grid, Heading } from '@chakra-ui/react';
import VideoCard from '../videoCard/videoCard.component';
const videos = [
  {
    id: 1,
    title: '100m final',
    url: 'https:/www.youtube.com/watch?v=zMFb8Y2QLPc',
    broadcaster: 'SuperSport',
    comments: ['Hello World ', 'These athletes are talented'],
  },
  {
    id: 2,
    title: '100m Heat',
    url: 'https:/www.youtube.com/watch?v=zMFb8Y2QLPc',
    broadcaster: 'SuperSport',
    comments: ['Hello World ', 'These athletes are talented'],
  },
  {
    id: 3,
    title: '200m heat',
    url: 'https:/www.youtube.com/watch?v=zMFb8Y2QLPc',
    broadcaster: 'SuperSport',
    comments: ['Hello World ', 'These athletes are talented'],
  },
  {
    id: 4,
    title: '800m Final',
    url: 'https:/www.youtube.com/watch?v=zMFb8Y2QLPc',
    broadcaster: 'SuperSport',
    comments: ['Hello World ', 'These athletes are talented'],
  },
  {
    id: 5,
    title: 'Green Beanie',
    url: 'https:/www.youtube.com/watch?v=zMFb8Y2QLPc',
    broadcaster: 'SuperSport',
    comments: ['Hello World ', 'These athletes are talented'],
  },
  {
    id: 6,
    title: 'Palm Tree Cap',
    url: 'https:/www.youtube.com/watch?v=zMFb8Y2QLPc',
    broadcaster: 'SuperSport',
    comments: ['Hello World ', 'These athletes are talented'],
  },
  {
    id: 7,
    title: 'Red Beanie',
    url: 'https:/www.youtube.com/watch?v=zMFb8Y2QLPc',
    broadcaster: 'SuperSport',
    comments: ['Hello World ', 'These athletes are talented'],
  },
  {
    id: 8,
    title: 'Wolf Cap',
    url: 'https:/www.youtube.com/watch?v=zMFb8Y2QLPc',
    broadcaster: 'SuperSport',
    comments: ['Hello World ', 'These athletes are talented'],
  },
  {
    id: 9,
    title: 'Blue Snapback',
    url: 'https:/www.youtube.com/watch?v=zMFb8Y2QLPc',
    broadcaster: 'SuperSport',
    comments: ['Hello World ', 'These athletes are talented'],
  },
];

const VideoGrid = () => {
  return (
    <>
      <Heading as="h3" size="lg">
        Running 🏃‍♂️
      </Heading>
      <Grid pt={4} templateColumns="repeat(4, 1fr)" gap={6}>
        {videos.map(video => {
          return (
            <VideoCard
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
