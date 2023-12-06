import React from 'react'
import "../home/home.css"
import People from "../assets/people.png"
import Face from "../assets/ai.png"
import Google from "../assets/google.png"
import Slack from "../assets/slack.png"
import Atlassian from "../assets/atlassian.png"
import Dropbox from "../assets/dropbox.png"
import Shopify from "../assets/shopify.png"



function Home() {
  return (
    <main>
      <section className='main-section'>
        <div className="upper-section">
        <div className="left-side">
          <h1>Let's Build Something amazing with GPT-3 OpenAI</h1>
          <p className='abstract'>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
          <div className="form-part">
            <input className='email-input' type="text" placeholder='Your Email Address'/>
            <p className='get-started'>Get Started</p>
          </div>
          <div className="images-part">
            <img className='people-gallery' src={People} alt="" />
            <p>1,600 people requested access a visit in last 24 hours</p>
          </div>
        </div>
        <div className="right-side">
          <img src={Face} alt="" />
        </div>
        </div>

        <div className="down-section">
          <img src={Google} alt="" />
          <img src={Slack} alt="" />
          <img src={Atlassian} alt="" />
          <img src={Dropbox} alt="" />
          <img src={Shopify} alt="" />
        </div>
      </section>
    </main>
  )
}

export default Home
