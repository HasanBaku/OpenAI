import React from 'react'
import '../footer/footer.css'

function Footer(props) {

  return (
    <footer>
        <h3>Do you want to step in to the future before others</h3>
        <button className='request'>Request Early Access</button>
        <div className="down-section-footer">
            <div>
                <h4>GPT-3</h4>
                <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
            </div>

            <div>
                <h5>Links</h5>
                <p>Overons</p>
                <p>Social Media</p>
                <p>Counters</p>
                <p>Contact</p>
            </div>

            <div>
                <h5>Company</h5>
                <p>Terms&Conditions</p>
                <p>PrivacyPolicy</p>
                <p>Contact</p>
            </div>

            <div>
                <h5>Get in touch</h5>
                <p>Address</p>
                <p>050-555-55-55</p>
                <p>qasanliqasn@gmail.com</p>
            </div>
        </div>

        <p className='pro'>@{props.prop} GPT-3. All rights reserved.</p>
    </footer>
  )
}

export default Footer