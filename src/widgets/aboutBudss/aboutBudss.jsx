import AboutBudssCatd from '../../entities/aboutBudssCatd/aboutBudssCatd'
import img from '../../assets/img/img'
import './aboutBudss.scss'
function AboutBudss () {
    return ( 
        <div className="about-budss">
            <div className="about-budss_container">
                <div className="about-budss_header">
                    <h2 className="about-budss_title">About Budss</h2>
                </div>
                <div className="about-budss_info">
                    <div className="">
                        <div className="about-budss_description">Payment as a service, powered seamlessly by our <span className="bg-purple">network of shoppers</span></div>
                        <img src={img.svg} alt="" />
                    </div>
                    <AboutBudssCatd/>
                </div>
            </div>
        </div>
     );
}

export default AboutBudss;