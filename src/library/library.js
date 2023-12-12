import React from 'react'
import "../library/library.css"
import First from '../assets/blog01.png'
import Second from '../assets/blog02.png'
import Third from '../assets/blog03.png'
import Fourth from '../assets/blog04.png'
import Fifth from '../assets/blog05.png'
import Footer from '../footer/footer'



function Library() {

  var date = new Date();

  var months= ["January","February","March","April","May","June","July",
            "August","September","October","November","December"];

  var currentDate = date.getFullYear();
  var currentMonth = date.getMonth();
  var day = date.getDate();

  return (
    <section className='library'>
      <h3>A lot is happening, <br/>
          We are blogging about it.</h3>
          <div className="card-section">
            <div className="library-left-part">
            <div className="big-one">
              <img src={First} alt="" />
              <div className="text-area">
              <p>{months[currentMonth]},{day}, {currentDate}</p>
              <h4>GPT-3 and Open AI is the future. Let us exlore how it is?</h4>
              <button>Read Full Article</button>
              </div>
            </div>
            </div>
            <div className="library-right-part">
            <div className="upper-first">
              <img src={Second} alt="" />
              <div className="text-area">
              <p>{months[currentMonth]},{day}, {currentDate}</p>
              <h4>GPT-3 and Open AI is the future. Let us exlore how it is?</h4>
              <button>Read Full Article</button>
              </div>
            </div>
            <div className="upper-second">
              <img src={Third} alt="" />
              <div className="text-area">
              <p>{months[currentMonth]},{day}, {currentDate}</p>
              <h4>GPT-3 and Open AI is the future. Let us exlore how it is?</h4>
              <button>Read Full Article</button>
              </div>
            </div>
            <div className="down-first">
              <img src={Fourth} alt="" />
              <div className="text-area">
              <p>{months[currentMonth]},{day}, {currentDate}</p>
              <h4>GPT-3 and Open AI is the future. Let us exlore how it is?</h4>
              <button>Read Full Article</button>
              </div>
            </div>
            <div className="down-second">
              <img src={Fifth} alt="" />
              <div className="text-area">
              <p>{months[currentMonth]},{day}, {currentDate}</p>
              <h4>GPT-3 and Open AI is the future. Let us exlore how it is?</h4>
              <button>Read Full Article</button>
              </div>
            </div>
            </div>
          </div>

    </section>
  )
}
export default Library
