import './CityButton.scss'
const CityButton = ({cityName, temp, weatherIcon}) => (
        <button className="otherCities__cityButton">
            <h3>{cityName}</h3>
            <div>{temp} °</div>
            <img src={weatherIcon} alt="Weather Icon"/>
        </button>
)
export default CityButton;