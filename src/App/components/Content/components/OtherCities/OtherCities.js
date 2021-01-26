import './OtherCities.scss'
import CityButton from './components/CityButton/CityButton'
const cityData = [{
    cityName : 'Melbourne',
    temp : 17,
    weatherIcon: "http://openweathermap.org/img/wn/01d.png"
} ,{
    cityName : 'Sydney',
    temp : 33,
    weatherIcon: "http://openweathermap.org/img/wn/01d.png"
}, {
    cityName : 'Brisbane',
    temp : 29,
    weatherIcon: "http://openweathermap.org/img/wn/01d.png"
}]
const OtherCities = () => (
    <div className='weather__content--otherCites'>
        <h2>Other Cities</h2>
        {cityData.map(({cityName, temp, weatherIcon}, index)=> (
            <CityButton cityName={cityName}
                        temp={temp}
                        weatherIcon={weatherIcon}
                        key={index}/>
        ))}
    </div>
)

export default OtherCities;