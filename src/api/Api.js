import Axios from "axios";


const api = {
  url: "http://api.openweathermap.org/data/2.5/",
};



export const sendQuery = (city) => {
   return Axios.get(`${api.url}weather?q=${city}&lang=ru&appid=30dbd0628bbb7fb3d48a3503d344bee7`).then(res=>res.data)
};

