import OtherCities from './components/OtherCities/OtherCities'
import Forecast from './components/Forecast/Forecast'
import './Content.scss'
const Content = () => (
    <div className="weather__content">
        <OtherCities />
        <div className="weather__content--divider"></div>
        <Forecast />
    </div>

)

export default Content;