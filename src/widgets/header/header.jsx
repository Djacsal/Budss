import Button from '../../shared/button/button'
import img from '../../assets/img/img'
import './header.scss'

function Header () {
    return ( 
        <>
            <div className="nav">
                <nav className="nav-container">
                    <ul className="nav-list">
                        <li className="nav-item nav-item_activ">For Business</li>
                        <li className="nav-item">For Customers</li>
                    </ul>
                </nav>
            </div>
            <div className="header">
                <div className="header-container">
                    <div className="haeder-container">
                        <div className="logo-container">
                            <a href="#"><img src={img.logo} alt="Логотип"/></a>
                            <div className="logo-title">budss</div>
                        </div>
                        <Button />
                    </div>
                </div>
            </div>
        </>
     );
}

export default Header;