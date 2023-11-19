import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import { AiOutlinePlus } from "react-icons/ai";
const WEEK_DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
const DetailsForecast = ({ data }) => {
  const dayInAWeek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInAWeek)
  );

  return (

      <div className="container">
        <label className="title">Daily</label>
        <Accordion allowZeroExpanded>
          {data.list.splice(0, 7).map((item, idx) => {
            console.log(item);
            return (
              <AccordionItem key={idx}>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    <div className="daily-item">
                      <img
                        src={`icons/${item.weather[0].icon}.png`}
                        className="icon-small"
                        alt="weather"
                      />
                      <label className="day">{forecastDays[idx]}</label>
                      <label className="description font-medium">
                        {item.weather[0].description}
                      </label>
                      <label className="min-max font-medium">
                        {Math.round(item.main.temp_max)}°C /
                        {Math.round(item.main.temp_min)}°C
                      </label>
                      <label className="ml-2">
                        <AiOutlinePlus color="#1e202b" />
                      </label>
                    </div>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <div className="space-y-1 grid grid-cols-2 md:grid-cols-6 px-3">
                    <div className="">
                      <label>Pressure:</label>
                      <label>{item.main.pressure}</label>
                    </div>
                    <div className="">
                      <label>Humidity:</label>
                      <label>{item.main.humidity}</label>
                    </div>
                    <div className="">
                      <label>Clouds: </label>
                      <label>{item.clouds.all}%</label>
                    </div>
                    <div className="">
                      <label>Wind speed:</label>
                      <label>{item.wind.speed} m/s </label>
                    </div>
                    <div className="">
                      <label>Sea level:</label>
                      <label>{item.main.sea_level}m</label>
                    </div>
                    <div className="">
                      <label>Feels like:</label>
                      <label>{item.main.feels_like}°C</label>
                    </div>
                  </div>
                </AccordionItemPanel>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
   
  );
};

export default DetailsForecast;
