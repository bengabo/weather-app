window.addEventListener('load', () => {
  const temperatureDegree = document.querySelector('.temperature-degree');
  const timezone = document.querySelector('.location-timezone');
  const description = document.querySelector('.temperature-description');
  const icon = document.querySelector('.icon');

  let long;
  let lat;

  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(position => {
      long = position.coords.longitude;
      lat = position.coords.latitude;
      
      const api = `http://api.weatherapi.com/v1/current.json?key=2e7a7af76c1b4fbd8c8215131210805&q=${lat},${long}&aqi=no`;
      
      fetch(api)
        .then(res => {
          return res.json();
        })
        .then(data => {
          console.log(data);
          const {temp_c, condition} = data.current;
          const {name} = data.location;

          temperatureDegree.textContent = temp_c;
          timezone.textContent = name;
          description.textContent = condition.text;
          icon.src = condition.icon;
        })

    });
  }
})