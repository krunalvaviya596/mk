import React, {
  useContext,
  useEffect,
  useRef,
  useState,
  forwardRef,
  useImperativeHandle
} from "react";
import "./Addvideo.css";
import ThemeContext from "../context/ThemeContext";
// import VideoContext from "../context/VideoContext";
// import VideoDispatch from "../context/VideoDispatch";
import useVideoDispatch from "../hooks/VideoDispatch";

const inValue = {
  time: "1 month ago",
  channel: "Mayank",
  verified: true,
  title: "",
  views: "",
};

const Addvideo = forwardRef(function Addvideo({ editform, updateVideo }, ref) {
  // dispatch props

  const [video, setvideo] = useState(inValue);

  const theme = useContext(ThemeContext);
  const iRef = useRef(null);

  useImperativeHandle(ref,() => {
    return {
      jump(){
        iRef.current.focus()  
      }
    }
  });

  // const dispatch = useContext(VideoDispatch);
  const dispatch = useVideoDispatch();

  function handleSubmit(e) {
    e.preventDefault();

    if (editform) {
      // updateVideo(video)
      dispatch({ type: "UPDATE", payload: video });
    } else {
      // addVideo(video);
      dispatch({ type: "ADD", payload: video });
    }

    setvideo(inValue);
  }

  useEffect(() => {
    if (editform) setvideo(editform);
    // inputRef.current.value = "Mayank"
    // inputRef.current.focus()
  }, [editform]);

  function handleChange(e) {
    setvideo({ ...video, [e.target.name]: e.target.value });
  }
  return (
    <div>
      <form>
        <input
          ref={iRef}
          type="text"
          name="title"
          onChange={handleChange}
          placeholder="Video title"
          value={video.title}
        ></input>
        <input
          type="text"
          name="views"
          onChange={handleChange}
          placeholder="Views"
          value={video.views}
        ></input>
        <div>
          <button
            className={theme}
            onClick={handleSubmit}
            // onClick={() => {
            //
            // }}
          >
            {editform ? "Edit" : "Add"} video
          </button>
        </div>
      </form>
    </div>
  );
});

export default Addvideo;
