import React from 'react'
import "../navbar/navbar.css"
import { useState, useEffect  } from 'react'
import burgerMenu from '../assets/text.png'
import closeMenu from '../assets/close.png'
import { Link } from 'react-router-dom'

function Navbar() {

  const [click, setClick] = useState(false);
  const [screensWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);

      // Close the menu if it was open and screen width becomes larger
      if (click && window.innerWidth >= 1050) {
        setClick(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [click]);

  const linkStyles = {
    color: 'white',
    textDecoration: 'none',
  };

  function handleClick() {
    setClick(!click);
  }
  function closeMobile() {
    setClick(false);
  }

  const screenWidth = window.innerWidth;


  return (
    <div>
      <header className='header'>
        <div className="left-header">
          <p>GPT-3</p>
          <nav>
            <ul>
              <li>< a href="#home" style={linkStyles}>Home</a></li>
              <li><a href="#info" style={linkStyles}>What is GPT3</a></li>
              <li><a href="#openai" style={linkStyles}>Open AI</a></li>
              <li><a href="#cases" style={linkStyles}>Case Studies</a></li>
              <li><a href="#library" style={linkStyles}>Library</a></li>
            </ul>
          </nav>
        </div>
        <div className="right-header">
          <p className='sign-in'>Sign In</p>
          <p className='sign-up'>Sign up</p>
          <img className='burgers-menu' onClick={handleClick} src={click ? closeMenu : burgerMenu} alt="" />
        </div>

        <div className="mobile-menu" style={{
        display: screensWidth < 1050 ? (click ? 'block' : 'none') : 'none',
        transform: click ? 'scale(1)' : 'scale(0)'
      }}>
          <nav className='mobile-nav'>
            <ul>
              <li onClick={closeMobile}>< a href="#home" style={linkStyles}>Home</a></li>
              <li onClick={closeMobile}>< a href="#info" style={linkStyles}>What is GPT3</a></li>
              <li onClick={closeMobile}>< a href="#openai" style={linkStyles}>Open AI</a></li>
              <li onClick={closeMobile}>< a href="#cases" style={linkStyles}>Case Studies</a></li>
              <li onClick={closeMobile}>< a href="#library" style={linkStyles}>Library</a></li>
              <p onClick={closeMobile} id='sign-in'>Sign In</p>
              <p onClick={closeMobile} id='sign-up'>Sign up</p>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  )
}

export default Navbar