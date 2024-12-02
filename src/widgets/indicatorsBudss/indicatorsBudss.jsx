import {data} from './data'

import './indicatorsBudss.scss'
function IndicatorsBudss() {

    const outputData = data.map((item) => {
        return(
            <div key={item.id}>
                <div className="indicators-budss_value">{item.value}</div>
                <div className="indicators-budss_text">{item.text}</div>
            </div>
        )
    })
    return ( 
        <div className="indicators-budss">
            <div className="indicators-budss_container">   
                {outputData}
            </div>
        </div>
     );
}

export default IndicatorsBudss;