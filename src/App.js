import React, { useEffect, useState } from "react";
import "./app.css";
import Moment from "react-moment";
import { sendQuery} from "./api/Api";

function App() {
  const [queryTarget, setQueryTarget] = useState();
  const [x, setX] = useState({});

  const search = async (e) => {
    if (queryTarget !== undefined) {
      if (e.key === "Enter") {
        e.preventDefault();
        const res = await sendQuery(queryTarget);
        setX(res);
        setQueryTarget("");
      }
    }
  };

  const sendSubmit = async () => {
    if (queryTarget !== undefined) {
      const res = await sendQuery(queryTarget);
      setX(res);
      setQueryTarget("");
    }
  };

  useEffect(() => {
    sendQuery("Kerch").then((res) => setX(res));
  }, []);

  const iconImage = (value) =>{
    const a =`http://openweathermap.org/img/wn/${value}@2x.png`
    return <img src={a} className="image"/>
  }
  
  const temp= (t) => Math.round(
    t - 273.15
  )

 const handleChange = (e) => setQueryTarget(e.target.value)

  return (
      <div className={typeof x.main !="undefined" && (temp(x.main.temp)> 20 ? "warm": (temp(x.main.temp) <0 ? "cold" : "app")) }>
      <main>
        <form className="search">
          <input
            type="text"
            className="search__bar"
            placeholder="Type please location..."
            onChange={handleChange}
            value={queryTarget}
            onKeyPress={search}
          />
          <p className="button" onClick={sendSubmit}>
            Search
          </p>
        </form>
        {typeof x.main != "undefined" ? (
          <div className="location">
            <div className="location__place">{x.name} {x.sys.country}</div>
            <div className="location__date">
              <Moment format=" dddd Do MMMM YYYY ">{new Date()}</Moment>
            </div>
            <div className="weather">
              <div className="weather__temperature">{`${temp(
                x.main.feels_like)+  " / " + temp(x.main.temp_max)}°C`}</div>
              <div className="weather__type">{x.weather[0].description} {iconImage(x.weather[0].icon)}</div>
              
            </div>
          </div>
        ) : (
          ""
        )}
      </main>
    </div>
  );
}

export default App;
