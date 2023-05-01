// import Video from "./components/video";
import "./App.css";
import objDB from "./data/data";
// import PlayButton from "./components/PlayButton";
// import Counter from "./components/counter";
import { useReducer, useState, useCallback, useRef } from "react";
import Addvideo from "./components/Addvideo";
import VideoList from "./components/VideoList";
import ThemeContext from "./context/ThemeContext";
import VideoContext from "./context/VideoContext";
import VideoDispatch from "./context/VideoDispatch";
import Counter from "./components/counter";

function App() {
  const [editform, setEditform] = useState(null);
  const [mode, setMode] = useState("light");
  const inputref = useRef(null);

  const url = "https://my.api.mockaroo.com/react_app_test.json?key=a546be40"

  function videoReducer(obj, action) {
    switch (action.type) {

      case "LOAD":
        return action.payload;

      case "ADD":
        return [...obj, { ...action.payload, id: obj.length + 1 }];

      case "DELETE":
        return obj.filter((e) => e.id !== action.payload);

      case "UPDATE":
        const index = obj.findIndex((e) => e.id === action.payload.id);
        const newObj = [...obj];
        newObj.splice(index, 1, action.payload);
        setEditform(null);
        return newObj;

      default:
        return obj;
    }
  }
  const [obj, dispatch] = useReducer(videoReducer, []);

  // const themeContext = useContext(ThemeContext);

  // const [obj, setObj] = useState(objDB);

  // function addvideos(video) {
  //   dispatch({ type: "ADD", payload: video });
  //   // setObj([...obj, { ...video, id: obj.length + 1 }]);
  // }

  // function deleteVideo(id) {
  //   // console.log(id);
  //   dispatch({ type: "DELETE", payload: id });

  //   // setObj(obj.filter((e) => e.id !== id));
  // }

  // function editVideo(id) {
  //   console.log(id);
  //   setEditform(obj.find((e) => e.id === id));
  // }
  const editVideo = useCallback(function editVideo(id) {
    console.log(id);
    setEditform(obj.find((e) => e.id === id));
  },[obj])
  

  // function updateVideo(video) {
  //   dispatch({ type: "UPDATE", payload: video});

  //   // const index = obj.findIndex((e) => e.id === video.id);
  //   // const newObj = [...obj]
  //   // newObj.splice(index, 1, video);
  //   // setObj(newObj);
  // }
  return (
    <ThemeContext.Provider value={mode}>
      <VideoContext.Provider value={obj}>
        <VideoDispatch.Provider value={dispatch}>
          
          <div className={`App ${mode}`} onClick={() => console.log("App")}>
            <button onClick={() => {inputref.current.jump()}}>Focus</button>
            <br></br>
          <Counter></Counter>
          <br></br>
            <button
              onClick={() => setMode(mode === "light" ? "dark" : "light")}
            >{`${mode} mode`}</button>

            <Addvideo 
            // dispatch={dispatch} 
            ref = {inputref}
            editform={editform}></Addvideo>
            <div className="setlist">
              <VideoList
                // dispatch={dispatch}
                
                editVideo={editVideo}
              ></VideoList>
            </div>
            {/* <PlayButton message="World" onClick={()=> alert("pause")}>pause</PlayButton> */}
          </div>
        </VideoDispatch.Provider>
      </VideoContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
