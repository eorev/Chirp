import './Landing.css'

const Landing = () => {
    return (
        <header>
            <div className="header-row">
                <div className='header-left__container'>
                    <h1 className='header-title'>Blue Hen Shuffle</h1>
                    <h2 className='header-subtitle'>Learning Site by Students.</h2>
                    <h2 className='header-subtitle'>For Students.</h2>
                    <button className='header-button hover:brightness-110'>
                        <h1>Learn Now</h1>
                    </button>
                </div>
                <div className='header-right__container'>
                    <img src="https://picsum.photos/500" alt="" />
                </div>
            </div>
        </header>
    )
}

export default Landing
