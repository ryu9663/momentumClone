
const API_KEY = '2e5d1c23c4f2d35c630ddc7f3df8b1df'
function onGeoOk(position){
  
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  console.log(lat);
  console.log(lon)

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;

console.log(url)

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      
      const weather = document.querySelector("#right span:first-child");
      const temp = document.querySelector("#right span:nth-child(2)");
      const city = document.querySelector("#right span:last-child");

      weather.textContent= `${data.weather[0].main}
      `;
      temp.textContent = `Temperature : ${data.main.temp}
      `;
      city.textContent = data.name;

    }).catch(err=>console.log(err));
}

function nothing(){
  const weather = document.querySelector("#right span:first-child");
  const city = document.querySelector("#right span:last-child");

  weather.innerText = `

  `;
  city.innerText = `
  `;
}
function onGeoError(){
  alert("Can't find you. No weather for you.");

  nothing();
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);
//navigator.geolocation.getCurrentPosition(위치받는함수, 에러났을때 함수)



nothing();









//API는 다른서버와 이야기할 수 있는 방법. 여기서는 open weather map 서버와 이야기한다.
