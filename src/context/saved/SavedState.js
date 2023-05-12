import { useState } from "react";
import SavedContext from "./savedContext";

const SavedState = (props) => {
    const [saved, setSaved] = useState([]);

    return (
        <SavedContext.Provider value={{ saved, setSaved }}>
            {props.children}
        </SavedContext.Provider>
    );
}

export default SavedState;