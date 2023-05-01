import React, { useContext, useState, memo } from 'react'
import "./playbutton.css"
import ThemeContext from '../context/ThemeContext'

const PlayButton = memo(function PlayButton({message,children,onPause,onPlay}){

    const [playing, setPlaying] = useState(false)  // don't use this approach
    const theme = useContext(ThemeContext)
    function handleClick(e) {

        e.stopPropagation();
        if(playing){
            onPause();
        }else{
            onPlay();
        }
        setPlaying(!playing)
    }
  return (
    <button className={`${theme}`}onClick={handleClick}>{children}: {playing? '>' : '||'}</button>
  )
})

export default PlayButton