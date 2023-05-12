import { useContext, useState } from "react";
import SavedContext from "./savedContext";
import { useUser } from '@clerk/nextjs'
import loadingContext from "../loading/loadingContext";

const SavedState = (props) => {
    const [saved, setSaved] = useState([]);
    const { isLoaded, user } = useUser();
    const LoadingContext = useContext(loadingContext);
    const { setLoading } = LoadingContext;

    const fetchSavedVideos = async () => {
        // setLoading(true);
        if (isLoaded) {
            const emailAddress = user?.primaryEmailAddress?.emailAddress;
            const response = await fetch(`https://clipsurfmainbackend-production.up.railway.app/api/saved/${emailAddress}`, {
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            const json = await response.json();
            if (json.code === 404) {
                setSaved([])
            }
            else {
                setSaved(json.data)
            }
            // setLoading(false);
        }
    }

    return (
        <SavedContext.Provider value={{ saved, setSaved, fetchSavedVideos }}>
            {props.children}
        </SavedContext.Provider>
    );
}

export default SavedState;