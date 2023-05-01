import React, { useContext } from 'react'
import VideoContext from '../context/VideoContext'

const useVideo = () => {
    return useContext(VideoContext)
}

export default useVideo