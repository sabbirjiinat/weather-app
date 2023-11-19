import moment from "moment/moment";
import { FaLocationCrosshairs } from "react-icons/fa6";

const CurrentWeather = ({ data }) => {
  return (
    <div className="today forecast">
      <div className="forecast-header">
        <div className="day">{moment().format("dddd")}</div>
        <button>
          <FaLocationCrosshairs />
        </button>
        <div className="date">{moment().format("MMM Do")}</div>
      </div>
      {/*   <!-- .forecast-header --> */}
      <div className="forecast-content">
        <div className="location">{data.city}</div>
        <div className="location">{data.weather[0].description}</div>
        <div className="degree">
          <div className="num">
            {Math.round(data.main.temp)}
            <sup>o</sup>C
          </div>
          {/*   ="/images/icons/icon-1.svg" */}
          <div className="forecast-icon">
            <img src={`icons/${data.weather[0].icon}.png`} alt="" width="90" />
          </div>
        </div>
        <div className="mt-5 flex items-center justify-between flex-wrap">
          <span>Humidity: {data.main.humidity}%</span>

          <span>Wind: {data.wind.speed}km/h</span>

          <span>Feels Like: {Math.round(data.main.feels_like)}°C</span>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
