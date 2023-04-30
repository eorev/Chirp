import "./Footer.css"

const Footer = () => {
    return (
        <footer>
            <div className="footer-row">
                <div className="footer-left__container">
                    <h1 className="footer-title">Chirp</h1>
                    <h2 className="footer-subtitle">Learning Site by Students.</h2>
                    <h2 className="footer-subtitle">For Students.</h2>
                </div>
                <div className="footer-right__container">
                    <h1 className="footer-title">Contact Us</h1>
                    <h2 className="footer-subtitle">Email:
                        <a href="mailto: eorev@udel.edu">The Team</a>
                    </h2>
                </div>
            </div>
        </footer>
    )
}

export default Footer