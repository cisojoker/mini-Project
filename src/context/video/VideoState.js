import React, { useState } from "react";
import VideoContext from "./videoContext";

const VideoState = (props) => {

    const [totalVideos, setTotalVideos] = useState([]);

    return (
        <VideoContext.Provider value={{ totalVideos, setTotalVideos }}>
            {props.children}
        </VideoContext.Provider>
    );
}

export default VideoState;