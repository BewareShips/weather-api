import Axios from "axios";


const api = {
  key: "30dbd0628bbb7fb3d48a3503d344bee7",
  url: "http://api.openweathermap.org/data/2.5/",
};



export const sendQuery = (city) => {
   return Axios.get(`${api.url}weather?q=${city}&appid=${api.key}`).then(res=>res.data)
};

