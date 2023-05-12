import { useState } from "react";
import AlertContext from "./alertContext";

const AlertState = (props) => {

    const [alert, setAlert] = useState(null);

    const showAlert = ( type , msg) => {
        setAlert({ type, msg });
        setTimeout(() => setAlert(null), 5000);
    }

    return (
        <AlertContext.Provider value={{
            alert,
            showAlert
        }}>
            {props.children}
        </AlertContext.Provider>
    )
}

export default AlertState;