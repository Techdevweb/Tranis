var a = fetch('http://api.openweathermap.org/data/2.5/weather?q=Mumbai&units=metric&appid=2ced114c7603d90c2b3d8d6b979240ec')
    .then(res => res.json())
    .then(data => console.log(data))


document.getElementsByClassName('weather').innerHTML = a.main;