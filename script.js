const timeEl = document.getElementById('time');
const dateEL = document.getElementById('date');
const currentWeatherItemsEl = document.getElementById('current-weather-items');
const timeZoneEL = document.getElementById('time-zone');
const countryEl = document.getElementById('country');
const weatherForecastEl = document.getElementById('weather-forecast');
const currentTempEl = document.getElementById('current-temp');

setInterval(() => {
    const time = new Date();
    const month = time.getMonth();
    const date = time.getMinutes();
    const day = time.getTime();
    const hour = time.getHours();
    const hoursIn12HrFormat = hour >= 13 ? hour % 12 : hour;
    const minutes = time.getMinutes();
    const ampm = hour >= 12 ? 'PM' : 'AM';

    timeEl.innerHTML = hoursIn12HrFormat + ':' + minutes + " " + `<span id="am-pm">${ampm}</span>`
},1000)

