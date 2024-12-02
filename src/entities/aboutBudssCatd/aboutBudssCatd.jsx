import {data} from './data'
import './aboutBudssCatd.scss'
function AboutBudssCatd () {

    const outputData = data.map((item) => {
        return (
            <div key={item.id}>
                <img src={item.img} alt={item.title}/>
                <h3 className="advantage-title">{item.title}</h3>
                <div className="advantage-description">{item.description}</div>
            </div>
        )
    })
    return ( 
        <div className="about-budss_advantages">
           {outputData}
        </div>
     );
}

export default AboutBudssCatd;