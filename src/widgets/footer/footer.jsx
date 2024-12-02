import Button from '../../shared/button/button'
import img from '../../assets/img/img'
import './footer.scss'

function Footer() {
    return ( 
        <div className="footer-page">
            <div className="page-container footer-page_container">
                <div className="footer-page_top">
                    <div className="footer-logo-container">
                        <a href=""><img src={img.logo} alt="логотип" /></a>
                        <div className="logo-title">budss</div>
                    </div>
                    <nav className="footer-nav">
                        <ul className="fooret-list">
                            <li className="footer-item">For Business</li>
                            <li className="footer-item">For Customers</li>
                        </ul>
                    </nav>
                    <div className="footer-links">
                        <Button/>
                        <a href="/"><img src={img.appstore} alt="" /></a>
                        <a href="/"><img src={img.googleplay} alt="" /></a>
                    </div>
                </div>
                <div className="footer-page_bottom">
                    <div className="right-page">© Copyright 2023, All Rights Reserved by Buds</div>
                    <div className="right-pages">
                        <div className="right-page">Privacy Policy</div>
                        <div className="right-page">Terms Of Use - Seller</div>
                        <div className="right-page">Terms of Use - Sellers & Customers</div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Footer;