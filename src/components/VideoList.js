import React, { useContext, useState, useEffect, useCallback, useMemo } from "react";
import Video from "./video";
import PlayButton from "./PlayButton";
// import VideoContext from "../context/VideoContext";
import useVideo from "../hooks/Video";
import axios from "axios";
import useVideoDispatch from "../hooks/VideoDispatch";

const VideoList = ({ editVideo }) => {
  // you can pass props obj,dispatch
  // const videos = useContext(VideoContext)
  const videos = useVideo();
  const url = "https://my.api.mockaroo.com/react_app_test.json?key=a546be40";
  // const [videos, setVideo] = useState([])
  const dispatch = useVideoDispatch();

  async function handleclick() {
    const res = await axios.get(url);
    console.log(res.data);
    dispatch({ type: "LOAD", payload: res.data });
  }

  useEffect(() => {
    // handleclick()
    async function getVideos() {
      const res = await axios.get(url);
      console.log(res.data);
      dispatch({ type: "LOAD", payload: res.data });
    }
    getVideos();
  }, []);

  const play = useCallback(() => console.log("playing.."));
  const pause = useCallback(() => console.log("paused.."));
  const memoButton = useMemo(() => (
    <PlayButton onPlay={play} onPause={pause}>
      play
    </PlayButton>
  ),[]);

  return (
    <div>
      {videos.map(
        (
          e //obj.map
        ) => (
          <Video
            key={e.id}
            title={e.title}
            views={e.views}
            time={e.time}
            channel={e.channel}
            verified={e.verified}
            id={e.id}
            // deleteVideo={deleteVideo}
            // dispatch={dispatch}
            editVideo={editVideo}
          >
            {memoButton}
          </Video>
        )
      )}
      <button onClick={handleclick}>Click Me</button>
    </div>
  );
};

export default VideoList;
