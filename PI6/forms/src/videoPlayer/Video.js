import React, { useRef, useState} from 'react'
import './Video.css';
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import PauseCircleIcon from "@mui/icons-material/PauseCircle";
import { IconButton } from '@mui/material';


const Video = ({ video }) => {
  
  const [play, setPlay] = useState(false);
  const [focus, setFocus] = useState(false);
  const videoRef = useRef();

  const togglePlay = () => { 

    if (play) {
      videoRef.current.pause();
      setPlay(false)
    } else { 
      videoRef.current.play();
      setPlay(true)
    }
  }

  return (
		<div className="Video">
      <video src={ video.url }
        onClick={ togglePlay }
        ref={ videoRef }
        onMouseEnter={ () => setFocus(true) }
        onMouseLeave ={ ()=>setFocus(false)}
      ></video>

      { focus && play && <PauseCircleIcon sx={ {fontSize:100}}/>}
      { focus && !play && <PlayCircleIcon sx={ {fontSize:100}}/>}

		</div>
	);
}

export default Video