import './CurrentWeather.scss'
const CurrentWeather = () => (
    <div className="header__current">
        <div className="header__current--temp">
            19.58 °
        </div>
        <div className="header__current--weather">
            Clouds
        </div>
        <div className="header__current--detail">
            <div className="current__detail--humidity">
                <h4>HUMIDITY</h4>
                <div className="detail__humidity--value">94%</div>
            </div>
            <div className="current__detail--divider"></div>
            <div className="current__detail--wind">
                <h4>WIND</h4>
                <div className="detail__wind--speed">7.2K/M</div>
            </div>
        </div>
    </div>
)
export default CurrentWeather;