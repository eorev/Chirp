import './App.css'
import Landing from './components/Landing'
import NavBar from './components/NavBar'
import { BiUserCircle } from "react-icons/bi"

function App() {

  return (
    <div>
      <NavBar>
        <ul className='flex justify-around'>
          <div>Logo</div>
          <div className=''>Blue Hen Shuffle</div>
          <div className='flex space-x-2'>
            <button className='justify-end'>Learn</button>
            <button className='flex justify-center self-end'><BiUserCircle size={30}></BiUserCircle>Login</button>
          </div>
        </ul>
      </NavBar>
      <Landing></Landing>
    </div>
  )
}

export default App
