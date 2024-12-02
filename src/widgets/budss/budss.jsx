import Button from '../../shared/button/button'
import img from '../../assets/img/img';
import './budss.scss'

function Budds () {
    return ( 
        <section className="budss">
            <div className="budss_container">
                <header className="budss_header">
                    <h2 className="budss_title">Everyone is an Influencer</h2>
                    <div className="budss_description">Budss is a payments as a service and WOM engine dedicated 
                        to acquisition and retention of customers to your business.</div>
                    <Button />
                </header>
                <div className="budss_img">
                    <img src={img.budss} alt="" />
                </div>
            </div>
        </section>
     );
}

export default Budds ;