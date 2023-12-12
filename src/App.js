import './App.css';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import {Routes, Route} from 'react-router-dom'
import Navbar from './navbar/navbar';
import Home from './home/home';
import Info from './info/info';
import Openai from './openai/openai';
import Cases from './cases/cases';
import Library from './library/library';
import Footer from './footer/footer'



function App() {

  var date = new Date();
  var currentDate = date.getFullYear();



  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/home' element={Home}></Route>
        <Route path='/info' element={<Info />} />
        <Route path='/openai' element={Openai}></Route>
        <Route path='/cases' element={Cases}></Route>
        <Route path='/library' element={Library}></Route>
      </Routes>
      <Home />
      <Info />
      <Openai />
      <Library />
      <Footer prop = {currentDate}/>
    </div>
  )
}

export default App;
