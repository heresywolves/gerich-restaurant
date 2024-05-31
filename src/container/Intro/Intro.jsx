import React, { useRef, useState } from 'react';
import {BsFillPlayFill, BsPauseFill} from 'react-icons/bs'
import {meal} from '../../constants'

import './Intro.css';

const Intro = () => { 
  const [playVideo, setPlayVideo] = useState(false);
  const vidRef = useRef();
  const overlayRef = useRef();

  const handleVideo = () => {
    setPlayVideo((prevPlayVideo) => !prevPlayVideo);

    if(playVideo) {
      vidRef.current.pause();
      overlayRef.current.classList.remove('app__video-overlay-brightened');
    } else {
      vidRef.current.play();
      overlayRef.current.classList.add('app__video-overlay-brightened');
    }
  }

  return (
  <div className='app__video'>
    <video 
      src="https://user74.cloud-ru.vejio.su/uploads/files/634m3bregch0n3de0r1l0400_meal.webm"
      ref={vidRef}
      type="video/mp4"
      loop
      controls={false}
      muted
    />
    <div ref={overlayRef} className="app__video-overlay flex__center">
      <div 
        onClick={handleVideo} 
        className='app__video-overlay_circle flex__center'>
      </div>
      {playVideo 
        ? <BsPauseFill color="#fff" fontSize={30} />
        : <BsFillPlayFill color="#fff" fontSize={30}/>
      }
    </div>
  </div>
  )
};

export default Intro;
