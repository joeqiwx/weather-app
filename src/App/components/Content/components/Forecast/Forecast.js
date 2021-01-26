import Day from './components/Day/Day'
import './Forecast.scss';
const forecastData = [{
    dayName: 'Mon',
    weatherIcon: "http://openweathermap.org/img/wn/01d.png",
    temp: '9'
}, {
    dayName: 'Mon',
    weatherIcon: "http://openweathermap.org/img/wn/01d.png",
    temp: '9'
},{
    dayName: 'Mon',
    weatherIcon: "http://openweathermap.org/img/wn/01d.png",
    temp: '9'
},{
    dayName: 'Mon',
    weatherIcon: "http://openweathermap.org/img/wn/01d.png",
    temp: '9'
},{
    dayName: 'Mon',
    weatherIcon: "http://openweathermap.org/img/wn/01d.png",
    temp: '9'
},]

const Forecast = () => (
    <div className="weather__content--forecast">
        <h2>Forecast</h2>
        <div className="forecast__week">
        {
            forecastData.map(({dayName, weatherIcon, temp}, index) => (
                <Day key={index}
                     dayName={dayName}
                     weatherIcon={weatherIcon}
                     temp={temp}/>
            ))
        }
        </div>
    </div>
)

export default Forecast;