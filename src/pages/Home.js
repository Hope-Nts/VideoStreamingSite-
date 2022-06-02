import React, { useContext, useEffect, useState } from 'react';

import VideoGrid from '../components/videogrid/videogrid.component';
import { CategoriesContext } from '../contexts/categories.context';

import { SPORT_DATA } from '../shop-data';
const Home = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  const [videos, setVideos] = useState(categoriesMap);
  useEffect(() => {
    setVideos(categoriesMap);
  }, [categoriesMap]);
  if (videos.length > 0) {
    console.log(videos);
  }

  return (
    <>
      {videos.length > 0
        ? videos.map(data => {
            return <VideoGrid broadcastData={data} />;
          })
        : null}
    </>
  );
};

export default Home;
