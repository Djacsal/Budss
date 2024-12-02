import img from '../../assets/img/img'
import './workBudss.scss'

function WorkBudss() {
    return ( 
        <div className="work-budss">
            <div className="work-budss_container">
                <div className="work-budss_img">
                    <img src={img.fone} alt="" />
                </div>
                <div className="work-budss_moving-text">
                    <div className="moving-text"><span className="color-green">How Budss Works</span> <span>How Budss Works</span></div>
                    <div className="moving-text"><span>How Budss Works</span> <span className="color-purple">How Budss Works</span></div>
                    <div className="moving-text"><span className="color-orange">How Budss Works</span> <span>How Budss Works</span></div>
                </div>
            </div>
        </div>
     );
}

export default WorkBudss;
