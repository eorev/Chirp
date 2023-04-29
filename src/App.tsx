import './App.css'
import Landing from './components/Landing'
import NavBar from './components/NavBar'
import { BiUserCircle } from "react-icons/bi"
import { FaGraduationCap } from "react-icons/fa"

function App() {

  return (
    <div>
      <NavBar>
      <div className='text-4xl'>Blue Hen Shuffle</div>
        <ul className='flex flex-1 justify-between'>
          <div>Logo</div>
          <div className=' flex space-x-2'>
            <button className='flex place-items-center rounded-lg'><FaGraduationCap size={30}></FaGraduationCap>Learn</button>
            <button className='flex place-items-center'><BiUserCircle size={30}></BiUserCircle>Login</button>
          </div>
        </ul>
      </NavBar>
      <Landing></Landing>
    </div>
  )
}

export default App
