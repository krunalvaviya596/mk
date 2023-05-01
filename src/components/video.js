import React, { useContext, useEffect,memo } from "react";
import "./video.css";
import ThemeContext from "../context/ThemeContext";
// import VideoDispatch from "../context/VideoDispatch";
import useVideoDispatch from "../hooks/VideoDispatch";

const Video = memo(function Video({ title, channel, views, time, verified,id,children,editVideo}){  // dispatch props
  //   let verified = true;
//   let channeljsx;
  //   if (verified) {
  //     channeljsx = <div className="channel">{channel} ✅</div>;
  //   } else {
  //     channeljsx = <div className="channel">{channel}</div>;
  console.log(id)

   useEffect(() => {
    console.log(id)
   },[id])
  //   }
    const theme = useContext(ThemeContext);
    // const dispatch = useContext(VideoDispatch)

    const dispatch = useVideoDispatch()

  return (
    <div className={`Container ${theme}`}>
      <div className="btn">
      <button className={`close ${theme}`} onClick={()=> dispatch({type:'DELETE',payload:id})}>X</button>
      <button className={`edit ${theme}`} onClick={()=>editVideo(id)}>Edit</button>
      </div>
      <img src={`https://picsum.photos/id/${id}/200/300`} alt=""></img>
      <div>
        <div className="title">{title} </div>
        {/* <div className="channel">{channel} ✅</div> */}
        {/* {verified ? (
          <div className="channel">{channel} ✅</div>
        ) : (
          <div className="channel">{channel}</div>
        )} */}
        {/* <div className="channel">{channel} {verified ? '✅' : null}</div> */}
        <div className="channel">{channel} {verified && '✅'}</div>
        
        <div className="views">
          {views} views <span>.</span> {time}
        </div>
        <div>
          {children}
        </div>
      </div>
    </div>
  );
});

export default Video;
