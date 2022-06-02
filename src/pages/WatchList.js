import React, { useContext, useEffect, useState } from 'react';
import VideoCard from '../components/videoCard/videoCard.component';
import VideoGrid from '../components/videogrid/videogrid.component';
import { CategoriesContext } from '../contexts/categories.context';

const WatchList = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  const [videos, setVideos] = useState(categoriesMap);
  useEffect(() => {
    setVideos(categoriesMap);
  }, [categoriesMap]);
  console.log(videos);

  return (
    <>
      {videos.length > 0
        ? videos.map((data, idx) => {
            if (idx < 1) {
              return <VideoGrid broadcastData={data} />;
            }
          })
        : null}
    </>
  );
};
export default WatchList;
