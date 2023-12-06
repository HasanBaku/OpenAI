import './App.css';
import {Routes, Route} from 'react-router-dom'
import Navbar from './navbar/navbar';
import Home from './home/home';
import Info from './info/info';
import Openai from './openai/openai';
import Cases from './cases/cases';
import Library from './library/library';



function App() {
  return (
    <div>

      <Navbar />
      <Routes>
        <Route path='/home' element={Home}></Route>
        <Route path='/info' element={Info}></Route>
        <Route path='/openai' element={Openai}></Route>
        <Route path='/cases' element={Cases}></Route>
        <Route path='/library' element={Library}></Route>
      </Routes>
      <Home />

    </div>
  )
}

export default App;
