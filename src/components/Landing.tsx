import './Landing.css'
import LandingImage from '../assets/LandingImage'

const Landing = () => {
    return (
        <header>
            <div className='header-left__container'>
                <h1>Blue Hen Shuffle</h1>
                <h2>Learning Site by Students.</h2>
                <h2>For Students.</h2>
            </div>
            <div className='header-right__container'>
                  <LandingImage></LandingImage>
            </div>
        </header>
    )
}

export default Landing