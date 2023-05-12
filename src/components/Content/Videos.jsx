import React, { useContext, useEffect, useState } from 'react';
import VideoItem from './VideoItem';
import { useRouter } from 'next/router';
import { useUser } from '@clerk/nextjs';
import InfiniteScroll from 'react-infinite-scroll-component';
import Spinner from '../Layout/Spinner';
import videoContext from '@/context/video/videoContext';
import loadingContext from '@/context/loading/loadingContext';
import showVideoContext from '@/context/showVideo/showVideoContext';
import savedContext from '@/context/saved/savedContext';

const Videos = () => {
  const [fetchingNumber, setFetchingNumber] = useState(3);
  const LoadingContext = useContext(loadingContext);
  const { loading, setLoading } = LoadingContext;
  const VideoContext = useContext(videoContext);
  const { totalVideos, setTotalVideos, getTrendingVideos } = VideoContext;
  const ShowVideoContext = useContext(showVideoContext);
  const { videoList, setVideoList } = ShowVideoContext;
  const SavedContext = useContext(savedContext)
  const { saved, setSaved ,fetchSavedVideos } = SavedContext

  const router = useRouter();
  const { isLoaded, isSignedIn } = useUser();

  useEffect(() => {
    // const getCountryCode = async () => {
    //   const response = await fetch('https://ipapi.co/json/');
    //   const data = await response.json();
    //   return data.country_code;
    // };

    // const getTrendingVideos = async () => {
    //   setLoading(true);
    //   const country = await getCountryCode();
    //   const response = await fetch(`https://clipsurfmainbackend-production.up.railway.app/api/videos/${country}`, {
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //   });
    //   const json = await response.json();
    //   setLoading(false);
    //   setTotalVideos(json.data);
    //   setVideoList(json.data.slice(0, fetchingNumber));
    // };

    // const fetchSavedVideos = async () => {
    //   setLoading(true);
    //   if (isLoaded) {
    //     const emailAddress = user?.primaryEmailAddress?.emailAddress;
    //     const response = await fetch(`https://clipsurfmainbackend-production.up.railway.app/api/saved/${emailAddress}`, {
    //       headers: {
    //         'Content-Type': 'application/json',
    //       },
    //     })
    //     const json = await response.json();
    //     if (json.code === 404) {
    //       setSaved([])
    //     }
    //     else {
    //       setSaved(json.data)
    //     }
    //     setLoading(false);
    //   }
    // }

    if (isLoaded && !isSignedIn) {
      router.push('/sign-in');
    } else {
      if (totalVideos.length == 0) {
        getTrendingVideos();
      }
      if (saved.length === 0) {
        fetchSavedVideos();
      }
    }
  }, []);

  const fetchMoreVideos = () => {
    setTimeout(() => {
      const currentLength = videoList.length;
      const newFetchingNumber = currentLength + 3;
      setVideoList(totalVideos.slice(0, newFetchingNumber));
      setFetchingNumber(newFetchingNumber);
    }, 1000);
  };

  return (
    <>
      <div className="filler pt-20" id="videos"></div>

      {loading ? (
        <Spinner />
      ) : (
        <InfiniteScroll
          dataLength={videoList.length}
          next={fetchMoreVideos}
          hasMore={fetchingNumber < totalVideos.length}
          loader={<Spinner />}
        >
          <div className="bg-[rgba(255,255,255,0.2) pt-4 flex flex-wrap mb-40">
            {videoList.map((ID) => (
              <VideoItem key={ID} ID={ID} />
            ))}
          </div>
        </InfiniteScroll>
      )}
    </>
  );
};

export default Videos;
