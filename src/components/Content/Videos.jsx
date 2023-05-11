import React, { useContext, useEffect, useState } from 'react';
import VideoItem from './VideoItem';
import { useRouter } from 'next/router';
import { useUser } from '@clerk/nextjs';
import InfiniteScroll from 'react-infinite-scroll-component';
import Spinner from '../Layout/Spinner';
import videoContext from '@/context/video/videoContext';
import loadingContext from '@/context/loading/loadingContext';
import showVideoContext from '@/context/showVideo/showVideoContext';

const Videos = () => {
  const [fetchingNumber, setFetchingNumber] = useState(3);
  const LoadingContext = useContext(loadingContext);
  const { loading, setLoading } = LoadingContext;
  const VideoContext = useContext(videoContext);
  const { totalVideos, setTotalVideos } = VideoContext;
  const ShowVideoContext = useContext(showVideoContext);
  const { videoList, setVideoList } = ShowVideoContext;

  const router = useRouter();
  const { isLoaded, isSignedIn } = useUser();

  useEffect(() => {
    const getCountryCode = async () => {
      const response = await fetch('https://ipapi.co/json/');
      const data = await response.json();
      return data.country_code;
    };

    const getTrendingVideos = async () => {
      setLoading(true);
      const country = await getCountryCode();
      const response = await fetch(`https://clipsurf-main.onrender.com/api/videos/${country}`, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const json = await response.json();
      setLoading(false);
      setTotalVideos(json.data);
      setVideoList(json.data.slice(0, fetchingNumber));
    };

    if (isLoaded && !isSignedIn) {
      router.push('/sign-in');
    } else {
      getTrendingVideos();
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


  // const getTrendingVideos = async () => {
  //   try {
  //     const response = await axios.post(
  //       'https://clipsurfmainbackend-production.up.railway.app/api/search/',
  //       {
  //         headers: {
  //           'Content-Type': 'application/json',

  //         },
  //       }
  //     );
  //     console.log(response);
  //     return response.data;
  //   } catch (error) {
  //     console.error(error);
  //     return error;
  //   }
  // };

  // const getTrendingVideos = async () => {
  //   const response = await fetch(
  //     'https://clipsurf-main.onrender.com/api/search/',
  //     {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({
  //         query: 'breaking bad trailer',
  //       }),
  //     }
  //   );
  //   const data = await response.json();
  //   console.log(data);
  // };
