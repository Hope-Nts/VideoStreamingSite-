import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../contexts/user.context';
import { getUserAccount } from '../utils/firebase/firebase.utils';
import VideoTable from '../components/videostable/videoTable.component';
import { CategoriesContext } from '../contexts/categories.context';

const Videos = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  const { currentUser } = useContext(UserContext);

  const [videos, setVideos] = useState(categoriesMap);

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
      <>
        {videoData.length > 0 ? <VideoTable data={videoData} /> : null}
        users
      </>
    </>
  );
};

export default Videos;
