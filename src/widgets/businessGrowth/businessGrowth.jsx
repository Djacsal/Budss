import Button from '../../shared/button/button'
import img from '../../assets/img/img';
import './businessGrowth.scss'

function BusinessGrowth () {

    const arrSocialNetwork = [img.facebook ,img.instagram ,img.twiter, img.tik_tok]
    const socialNetworks = arrSocialNetwork.map(item => {return <img className="social-network" key={item} src={item}/>});
    
    const arrImg = [img.woo_commerce ,img.shopify ,img.square ,img.squarespace ,img.clover];
    const images = arrImg.map(item => {return <img key={item} src={item}/>});
    return ( 
        <div className="business-growth">
            <div className="business-growth_container">
                <div className="business-growth_header">
                    <h2 className="business-growth_title">Let  Your Business Grow</h2>
                    <Button/>
                </div>
                <div className="business-growth_social-networks">
                    <div className="social-networks_header">
                        <h3 className="social-networks_title">Your Brand Awareness Maters</h3>
                        <div className="social-networks_description">Budss is a husle free solution to put your brand on any digital surface including Instagram, Facebook, Twitter and TikTok</div>
                    </div>
                    <div className="social-networks">
                        {socialNetworks}
                    </div>
                </div>
                <div className="business-growth_icons">
                    {images}
                </div>
            </div>
        </div>
     );
}

export default BusinessGrowth ;