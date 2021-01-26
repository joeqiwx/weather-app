import './Day.scss'
const Day = ({dayName,weatherIcon,temp}) => (
    <div className="forecast__day">
        <h3>{dayName}</h3>
        <img src={weatherIcon} alt="weatherIcon"/>
        <div className="forecast__day--temp">{temp} °</div>
    </div>

)

export default Day;