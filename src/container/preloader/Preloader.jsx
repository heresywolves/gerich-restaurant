import React, { useRef, useState } from 'react'
import './preloader.css'
import logo from '../../assets/logo.png'


function Preloader() {
  const [activeLoader, setActiveLoader] = useState(true);

  const handleLoadContent = () => {
    setActiveLoader(false);
  }

  window.addEventListener ("load", handleLoadContent);

  return (
    (activeLoader && (
      <div className='preloader app__bg'>
        <img src={logo} alt="loader spinner" className='preloader__image'/>
      </div>
    ))
  )
}

export default Preloader
