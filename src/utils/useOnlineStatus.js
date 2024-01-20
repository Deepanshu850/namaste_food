import { useEffect, useState } from "react";

const useOnlineStatus = () => {
    const [onlineStatus, setonlineStatus] = useState(true);
    //check if online or not
    useEffect(() => {
        window.addEventListener("offline", () => {
            setonlineStatus(false);
        });
        window.addEventListener("online", () => {
            setonlineStatus(true);
        });
    }, [])


    //bollean value
    return onlineStatus;
}
export default useOnlineStatus;