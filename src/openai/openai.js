import React from 'react'
import "../openai/openai.css"
import vrimage from '../assets/possibility.png'

function Openai() {
  return (
    <div>
        <section className='section-ai'>
        <div className="open-ai">
            <div className="left-part">
                <img className='vr' src={vrimage} alt="" />
            </div>
            <div className="right-part">
                <p id='upper'>Request Early Access to Get Started</p>
                <h3 id='upper-middle'>The possibilities are beyond your imagination</h3>
                <p id='bottom-middle'>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
                <p id='bottom'>Request Early Access to Get Started</p>
            </div>
        </div>

        <div className="early-access">
            <div className="early-left-part">
                <p>Request Early Access to Get Started</p>
                <h3>Register Today & start exploring the endless possibilities.</h3>
            </div>

            <div className="early-right-part">
                <button>Get Started</button>
            </div>
        </div>
        </section>
    </div>
  )
}

export default Openai