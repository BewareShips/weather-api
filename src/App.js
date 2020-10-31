import React, { useState } from "react";
import "./app.css";
import Moment from "react-moment";
import { sendQuery } from "./api/Api";


function App() {
  const [query, setQuery] = useState();
  const [data, setData] = useState({});
  const [prevData, setPrevData] = useState();
  const [buttonClick, setbuttonClick] = useState(false);


    const search = async (e) => {
      if (e.key === "Enter" ) {
        console.log("hiiiii")
      }
      // {
      //   const res = await sendQuery(query);
      //   setData(res);
      //   setQuery(null)
      //   console.log(data)
      // }
    };
    
    
  // const search = async (e) => {
  //   if (e.key === "Enter" || buttonClick === true) {
  //     // if (query !== "" || query !==prevData) {
  //     const res = await sendQuery(query);
  //     setData(res);
  //     // setbuttonClick(false);
  //     // setPrevData(query);
  //     // setQuery("");

  //     // }else return
  //   }
  // };
  return (
    <div className="app">
      <main>
        <form className="search">
          <input
            type="text"
            className="search__bar"
            placeholder="Type please location..."
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
          <p  className="button">
            Search
          </p>
        </form>
        <div className="location">
          <div className="location__place">Vorkuta</div>
          <div className="location__date">
            <Moment format=" dddd Do MMMM YYYY ">{new Date()}</Moment>
          </div>
          <div className="weather">
            <div className="weather__temperature">15°C</div>
            <div className="weather__type">Sunny</div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
