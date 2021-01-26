import './CurrentWeather.scss'
const CurrentWeather = () => (
    <div className="current__weather">
        <div className="current__weather--temp">
            19.58 °
        </div>
        <div className="current__weather--weather">
            Clouds
        </div>
        <div className="current__weather--detail">
            <div className="weather__detail--humidity">
                <h4>HUMIDITY</h4>
                <div className="detail__humidity--value">94%</div>
            </div>
            <div className="weather__detail--divider"></div>
            <div className="weather__detail--wind">
                <h4>WIND</h4>
                <div className="detail__wind--speed">7.2K/M</div>
            </div>
        </div>
    </div>
)
export default CurrentWeather;