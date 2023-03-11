import axios from 'axios'

navigator.geolocation.getCurrentPosition(positionSuccess, positionError)

function positionSuccess({ coords }) {
    getWeather(coords.latitude, coords.longitude)
}

function positionError() {
alert(
    "There was an error getting your location. Please allow us to use your location and refresh the page"
)
}

function getWeather(lat, lon) {
        axios.get('http://localhost:3001/weather', {
            params: { lat, lon }, 
        })
        .then(res => {
            renderWeather(res.data)
        }).catch(e => {
            console.log(e)
            alert('Error getting weather, please try again.')
        })
}

function renderWeather({ current, daily, hourly }) {
    document.body.classList.remove('blurred')
    renderCurrentWeather(current)
    renderDailyWeather(daily)
    renderHourlyWeather(hourly)
}

function setValue (selector, value) {
    document.querySelector(`[data-${selector}]`).textContent = value
}

const currentIcon = document.querySelector('[data-current-icon]')

function renderCurrentWeather(current) {
    currentIcon.src = 'http://openweathermap.org/img/wn/10d@2x.png'
    setValue('current-temp', current.currentTemp)
    setValue('current-high', current.highTemp)
    setValue('current-low', current.lowTemp)
    setValue('current-fl-high', current.highFeelsLike)
    setValue('current-fl-low', current.lowFeelsLow)
    setValue('current-wind', current.windSpeed)
    setValue('current-precip', current.precip)
    setValue('current-description', current.description)
}
function renderDailyWeather(daily) {}
function renderHourlyWeather(hourly) {}