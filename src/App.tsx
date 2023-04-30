import './App.css'
import Landing from './pages/Landing'
import Learn from './pages/Learn'
import NavBar from './components/NavBar'
import { BiUserCircle } from "react-icons/bi"
import { FaGraduationCap } from "react-icons/fa"
import { Link, Route, Routes } from "react-router-dom";
import Level1 from './pages/Level1'

function App() {
  return (
    <div>
      <NavBar>
        <ul className='flex flex-1 justify-between'>
        <Link to="/" className='flex text-4xl justify-center'>Chirp</Link>
          <div className=' flex space-x-2'>
            <Link to="/learn" className='flex place-items-center p-2 hover:bg-udblue rounded-lg transition-all duration-300'><FaGraduationCap size={30}></FaGraduationCap>Learn</Link>
            <button className='flex place-items-center p-2 hover:bg-udblue rounded-lg transition-all duration-300'><BiUserCircle size={30}></BiUserCircle>Login</button>
          </div>
        </ul>
      </NavBar>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/Lesson1" element={<Level1 />} />
      </Routes>
    </div>
  )
}

export default App
