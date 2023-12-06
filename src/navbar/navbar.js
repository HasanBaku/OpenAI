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
              <li><Link style={linkStyles} to="/">Home</Link></li>
              <li><Link style={linkStyles} to="/info">What is GPT3</Link></li>
              <li><Link style={linkStyles} to="/openai">Open AI</Link></li>
              <li><Link style={linkStyles} to="/cases">Case Studies</Link></li>
              <li><Link style={linkStyles} to="/library">Library</Link></li>
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
              <li onClick={closeMobile}><Link style={linkStyles} to="/">Home</Link></li>
              <li onClick={closeMobile}><Link style={linkStyles} to="/info">What is GPT3</Link></li>
              <li onClick={closeMobile}><Link style={linkStyles} to="/openai">Open AI</Link></li>
              <li onClick={closeMobile}><Link style={linkStyles} to="/cases">Case Studies</Link></li>
              <li onClick={closeMobile}><Link style={linkStyles} to="/library">Library</Link></li>
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