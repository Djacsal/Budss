import Header from '../../widgets/header/header'
import Budss from '../../widgets/budss/budss'
import AboutBudss from '../../widgets/aboutBudss/aboutBudss'
import WorkBudss from '../../widgets/workBudss/workBudss'
import IndicatorsBudss from '../../widgets/indicatorsBudss/indicatorsBudss'
import WhyBudss from '../../widgets/whyBudss/whyBudss'
import BusinessGrowth from '../../widgets/businessGrowth/businessGrowth'
import Footer from '../../widgets/footer/footer'

function Home () {
    return ( 
        <> 
            <Header/>
            <Budss/>
            <AboutBudss/>
            <WorkBudss/>
            <IndicatorsBudss/>
            <WhyBudss/>
            <BusinessGrowth/>
            <Footer/>
        </> 
     );
}

export default Home ;