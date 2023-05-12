import React, { useContext, useState } from "react";
import VideoContext from "./videoContext";
import loadingContext from "../loading/loadingContext";
import showVideoContext from "../showVideo/showVideoContext";
import savedContext from "../saved/savedContext";

const VideoState = (props) => {

    const [totalVideos, setTotalVideos] = useState([]);
    const LoadingContext = useContext(loadingContext);
    const { setLoading } = LoadingContext;
    const ShowVideoContext = useContext(showVideoContext);
    const { setVideoList } = ShowVideoContext;
    const SavedContext = useContext(savedContext);
    const { saved, fetchSavedVideos } = SavedContext;

    const getCountryCode = async () => {
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        return data.country_code;
    };

    const getTrendingVideos = async () => {
        setLoading(true);
        if (saved.length === 0) {
            await fetchSavedVideos();
        }
        const country = await getCountryCode();
        const response = await fetch(`https://clipsurfmainbackend-production.up.railway.app/api/videos/${country}`, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const json = await response.json();
        setLoading(false);
        setTotalVideos(json.data);
        setVideoList(json.data.slice(0, 3));
    };

    return (
        <VideoContext.Provider value={{ totalVideos, setTotalVideos, getTrendingVideos, getCountryCode }}>
            {props.children}
        </VideoContext.Provider>
    );
}

export default VideoState;