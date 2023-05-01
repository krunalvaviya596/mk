import { useContext } from "react";
import VideoDispatch from "../context/VideoDispatch"

function useVideoDispatch(){

    const dispatch = useContext(VideoDispatch)
    return dispatch
}

export default useVideoDispatch;
