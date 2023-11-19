const WEEK_DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const Forecast = ({ data }) => {
  const dayInAWeek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInAWeek)
  );
  return (
    <>
     {data.list.splice(0, 7).map((item, idx) => (
      <div key={idx} className="forecast">

     
        <div className="forecast-header">
          <div className="day">{forecastDays[idx]}</div>
        </div>
        {/*    <!-- .forecast-header --> */}
        <div className="forecast-content">
          <div className="forecast-icon">
            <img src={`/icons/${item.weather[0].icon}.png`}  alt="" width="48" />
          </div>
          <div className="degree">
          {Math.round(item.main.temp_max)}°C
          </div>
          <small>
          {Math.round(item.main.temp_min)}°C
          </small>
        </div>
      </div>

      ))}

  
    </>
  );
};

export default Forecast;
