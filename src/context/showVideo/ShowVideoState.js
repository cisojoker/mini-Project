import { useState } from "react";
import ShowVideoContext from "./showVideoContext";

const ShowVideoState = (props) => {
    
        const [videoList, setVideoList] = useState([]);
    
        return (
            <ShowVideoContext.Provider value={{ videoList, setVideoList }}>
                {props.children}
            </ShowVideoContext.Provider>
        );
    }

export default ShowVideoState;