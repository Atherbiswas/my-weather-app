const API_KEY =`9df7b0272cdca510c0089d147552c975`;
//temparature load data from api link
const loadTemperature = city => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayTemperature(data))
}
//display temperature and city and weateher data
const displayTemperature = data => {
    setInnerTextById('temperature', data.main.temp);
    setInnerTextById('condition', data.weather[0].main);
    console.log(data.weather[0].main);
}
const setInnerTextById = (id,text) => {
    const temperature = document.getElementById(id);
    temperature.innerText = text;
}
// search city by search button 
document.getElementById('btn-search').addEventListener('click', function(){
    const searchField = document.getElementById('search-field');
    const city = searchField.value;
    document.getElementById('city').innerText = city;
    loadTemperature(city);
    
})
loadTemperature('dhaka');