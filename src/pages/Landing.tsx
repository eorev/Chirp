import { Link } from 'react-router-dom'
import './Landing.css'
import LandingImage from '../assets/LandingImage'

const Landing = () => {
    return (
        <header>
            <div className="header-row">
                <div className='header-left__container'>
                    <h1 className='header-title'>Chirp</h1>
                    <h2 className='header-subtitle'>Learning Site by Students.</h2>
                    <h2 className='header-subtitle'>For Students.</h2>
                    <Link to='/learn' className='header-button hover:brightness-110'>
                        <h1>Learn Now</h1>
                    </Link>
                </div>
                <div className='header-right__container'>
                    <LandingImage />
                </div>
            </div>
        </header>
    )
}

export default Landing
