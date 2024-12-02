import img from '../../assets/img/img'
import './whyBudss.scss'

function WhyBudss () {
    return ( 
        <div className="why-budss">
            <div className="why-budss_container">
                <div className="why-budss_header">
                    <h2 className="why-budss_title">Why Budss</h2>
                    <div className="why-budss_description">We Provide Advanced Payment Solutions <span className="bg-purple">To Grow Your Business</span></div>
                </div>
                <div className="why-budss_cards">
                    <div className="why-budss_card card-big">
                        <img src={img.about5} alt="" />
                        <div className="card-header">
                            <h3 className="card-title">Turn your customers into loyal influencers</h3>
                            <div className="card-description">Budss helps businesses harness the exponential power of loyal customers for acquisition and retention.</div>
                        </div>
                    </div>
                    <div className="why-budss_card card-relative">
                        <div className="card-header" >
                            <h3 className="card-title">Harness the power of buying in bulk</h3>
                            <div className="card-description">Get at least 2X more sales with Budss Buying Groups. Your customer base will grow exponentially as your customers add their friends & family to your personalized group.</div>
                        </div>
                        <img className="img-green" src={img.about6_grin} alt="" />
                        <img className="img-orange" src={img.about6_orange} alt="" />
                        <img className="img-purple" src={img.about6_purple} alt="" />
                    </div>
                    <div className="why-budss_card card-relative">
                        <div className="card-header" >
                            <h3 className="card-title">Supercharge Loyalty With Instant Cash Back</h3>
                            <div className="card-description">Budss allows for shoppers to earn immediate cash back at their favorite stores.</div>
                        </div>
                        <img className="img-absolute" src={img.about7} alt="" />
                    </div>
                    <div className="why-budss_card card-big">
                        <div className="card-header" >
                            <h3 className="card-title">Seasoned with AI and Gamification</h3>
                            <div className="card-description">AI programming creates a personalized customer journey, offering recommendations for their next purchase and optimizing rewards for after purchase.</div>
                        </div>
                        <div className="card-img">
                            <img className="card-img" src={img.about8} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default WhyBudss;