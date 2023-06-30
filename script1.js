
// const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle';

// key='c4004edbb6msh019f467e2df769bp137a42jsn94a92a30532d'

const options = {
    method: 'GET',
    url: 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather',
    // params: { city: 'Seattle' },
    headers: {
        'X-RapidAPI-Key': 'c4004edbb6msh019f467e2df769bp137a42jsn94a92a30532d',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};
// /* <!-- Aarsh Saxena 21bec001 --> */
const weather = (city) => {
    cityname.innerHTML = city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then((response) => {

            console.log(response)

            cloud_pct.innerHTML = response.cloud_pct

            feels_like.innerHTML = response.feels_like

            humidity.innerHTML = response.humidity

            max_temp.innerHTML = response.max_temp

            min_temp.innerHTML = response.min_temp

            // /* <!-- Aarsh Saxena 21bec001 --> */
            temp.innerHTML = response.temp

            wind_degrees.innerHTML = response.wind_degrees

            wind_speed.innerHTML = response.wind_speed

        })
        .catch(err => console.error(err));
}
// /* <!-- Aarsh Saxena 21bec001 --> */

submit.addEventListener("click", (e) => {
    e.preventDefault()
    weather(city.value)
})
weather("Delhi")