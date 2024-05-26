import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { useUser } from "@clerk/nextjs";
import savedContext from "@/context/saved/savedContext";
import Spinner from "../Layout/Spinner";
import loadingContext from "@/context/loading/loadingContext";
import InfiniteScroll from "react-infinite-scroll-component";

const Saved = () => {
  const router = useRouter();
  const { isLoaded, isSignedIn } = useUser();
  if (isLoaded && !isSignedIn) {
    router.push("/sign-in");
  }

  const [fetchingNumber, setFetchingNumber] = useState(3);
  const SavedContext = useContext(savedContext);
  const { saved, fetchSavedVideos } = SavedContext;
  const LoadingContext = useContext(loadingContext);
  const { loading, setLoading } = LoadingContext;
  const [showSaved, setShowSaved] = useState([]);

  const fetchMoreVideos = () => {
    setTimeout(() => {
      const currentLength = showSaved.length;
      const newFetchingNumber = currentLength + 3;
      setShowSaved(saved.slice(0, newFetchingNumber));
      setFetchingNumber(newFetchingNumber);
    }, 1000);
  };

  useEffect(() => {
    setShowSaved(saved.slice(0, fetchingNumber));
  }, [saved, fetchingNumber]);

  useEffect(() => {
    if (saved.length === 0) {
      setLoading(true);
      fetchSavedVideos();
      setLoading(false);
    }
  }, [isLoaded]);

  return (
    <>
      {loading ? (
        <div className="my-32">
          <Spinner />
        </div>
      ) : saved.length === 0 ? (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="my-20"
        >
          <Image
            className="h-[60vh] w-full animate-up-down"
            src="/assets/nothing.svg"
            width={1920}
            height={1080}
            alt="nothing"
          />
          <p className="text-white text-center text-4xl lg:text-8xl lg:ml-32 mt-4 font-jost">
            No saved videos found!
          </p>
          <p className="text-white text-center mb-20 lg:ml-32 mt-2 font-jost">
            Click on heart icon to save videos!
          </p>
        </motion.div>
      ) : (
        <InfiniteScroll
          dataLength={saved.length}
          next={fetchMoreVideos}
          hasMore={fetchingNumber < saved.length}
          loader={<Spinner />}
        >
          <h1 className="text-white text-4xl lg:text-6xl text-center my-36 font-jost px-2">
            Saved Videos
          </h1>
          <div className="bg-[rgba(255,255,255,0.2) flex flex-wrap mb-40">
            {showSaved.map((ID) => (
              <VideoItem key={ID} ID={ID} />
            ))}
          </div>
        </InfiniteScroll>
      )}
    </>
  );
};

export default Saved;
