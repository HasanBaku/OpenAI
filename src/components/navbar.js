import React, { useState } from 'react'
import {Header} from "../components/styles"
import Logo from "../components/assets/logo.svg"
import Burger from "../components/assets/text.png"
import Close from "../components/assets/close.png"



function Navbar() {

    const [click, setClick] = useState(false)

    function handleClick () {
        setClick(!click);
    }
    function closeMobile() {
        setClick(false);
    }

  return (
    <Header>
        <div className="left-header">
            <img src={Logo} alt="" />
        </div>

        <div className='right-header'>
            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Features</a></li>
                    <li><a href="#">Product</a></li>
                    <li><a href="#">Clients</a></li>
                    <img onClick={handleClick} src={click ? Close : Burger} alt="" />
                </ul>
            </nav>
        </div>
        <div style={{ display: window.innerWidth < 820 && (click ? 'block' : 'none') }} className="right-header-mobile">
            <nav>
                <ul>
                    <li onClick={closeMobile}><a href="#">Homies</a></li>
                    <li onClick={closeMobile}><a href="#">Features</a></li>
                    <li onClick={closeMobile}><a href="#">Product</a></li>
                    <li onClick={closeMobile}><a href="#">Clients</a></li>
                </ul>
            </nav>
        </div>

    </Header>
  )
}

export default Navbar