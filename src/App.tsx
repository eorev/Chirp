import './App.css'
import Landing from './components/Landing'
import Learn from './components/Learn'
import NavBar from './components/NavBar'
import { BiUserCircle } from "react-icons/bi"
import { FaGraduationCap } from "react-icons/fa"
import { Link, Route, Routes } from "react-router-dom";

function App() {

  return (
    <div>
      <NavBar>
      <Link to="/" className='flex text-4xl justify-center'>Chirp</Link>
        <ul className='flex flex-1 justify-between'>
          <div>Logo</div>
          <div className=' flex space-x-2'>
            <Link to="/learn" className='flex place-items-center p-2 hover:bg-udblue rounded-lg transition-all duration-300'><FaGraduationCap size={30}></FaGraduationCap>Learn</Link>
            <button className='flex place-items-center p-2 hover:bg-udblue rounded-lg transition-all duration-300'><BiUserCircle size={30}></BiUserCircle>Login</button>
          </div>
        </ul>
      </NavBar>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/learn" element={<Learn />} />
      </Routes>
    </div>
  )
}

export default App
