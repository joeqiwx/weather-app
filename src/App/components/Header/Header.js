import CurrentWeather from './Components/CurrentWeather/CurrentWeather'
import CurrentCity from './Components/CurrentCity/CurrentCity'
import './Header.scss'
const Header = () => (
    <div className="header__current">
        <CurrentWeather />
        <CurrentCity />
        <div className="header__current--bottom"></div>
    </div>
)
export default Header;