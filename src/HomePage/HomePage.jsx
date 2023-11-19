import Search from "../components/Search/Search";
import { Weather_Api_Key, Weather_Api_Url } from "../Api/Api";
import CurrentWeather from "../components/CurrentWeather/CurrentWeather";
import { useState } from "react";
import Forecast from "../components/Forcast/Forcast";
import DetailsForecast from "../components/DetailsForecast/DetailsForecast";

const HomePage = () => {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleOnSearchData = (searchData) => {
    console.log(searchData);
    const [lat, lon] = searchData.value.split(" ");
    const currentWeatherFetch = fetch(
      `${Weather_Api_Url}/weather?lat=${lat}&lon=${lon}&appid=${Weather_Api_Key}&units=metric`
    );
    const forecastFetch = fetch(
      `${Weather_Api_Url}/forecast?lat=${lat}&lon=${lon}&appid=${Weather_Api_Key}&units=metric`
    );

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forcastResponse = await response[1].json();

        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...forcastResponse });
      })
      .catch(console.log);
  };

  console.log(currentWeather);
  console.log(forecast);
  return (
    <div>
      <div
        className="hero background-image "
        style={{
          backgroundImage: "url('/images/banner1.jpg')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container">
          <Search onSearchChange={handleOnSearchData} />
        </div>
      </div>

      <div className="forecast-table">
        <div className="container">
          <div className="forecast-container">
            {currentWeather && <CurrentWeather data={currentWeather} />}
            {forecast && <Forecast data={forecast} />}
          </div>
        </div>
      </div>


      {forecast &&  <DetailsForecast data={forecast}/>}

      <main className="main-content mt-12">
        <div className="fullwidth-block">
          <div className="container">
            <h2 className="section-title">Live cameras</h2>
            <div className="row">

              <div className="col-md-3 col-sm-6">
                <div className="live-camera">
                  <figure className="live-camera-cover">
                    <img src="/images/new-york.webp" alt="" />
                  </figure>
                  <h3 className="location">New York</h3>
                  <small className="date">8 oct, 8:00AM</small>
                </div>
              </div>

              <div className="col-md-3 col-sm-6">
                <div className="live-camera">
                  <figure className="live-camera-cover">
                    <img src="/images/los.jpg" alt="" />
                  </figure>
                  <h3 className="location">Los Angeles</h3>
                  <small className="date">8 oct, 8:00AM</small>
                </div>
              </div>

              <div className="col-md-3 col-sm-6">
                <div className="live-camera">
                  <figure className="live-camera-cover">
                    <img src="/images/los.jpg" alt="" />
                  </figure>
                  <h3 className="location">Chicago</h3>
                  <small className="date">8 oct, 8:00AM</small>
                </div>
              </div>

              <div className="col-md-3 col-sm-6">
                <div className="live-camera">
                  <figure className="live-camera-cover">
                    <img src="/images/london.webp" alt="" />
                  </figure>
                  <h3 className="location">London</h3>
                  <small className="date">8 oct, 8:00AM</small>
                </div>
              </div>


            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
