window.addEventListener("load", () => {
  let longitude;
  let latitude;
  let temperatureDescription = document.querySelector(
    `.temperature-description`
  );
  let temperatureDegree = document.querySelector(`.temperature-degree`);
  let locationTimezone = document.querySelector(`.location-timezone`);
  const degreeSection = document.querySelector(`.degree-section`);

  let icon = document.querySelector(`.icon`);
  let iconURL = `http://openweathermap.org/img/w/10d.png`;

  const APIkey = "f899a1f04efeb02ff20de62dd8cac693";
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position);
      longitude = position.coords.longitude;
      latitude = position.coords.latitude;
      const APIcall = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&lang=ru&appid=${APIkey}`;

      fetch(APIcall)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          const { temp } = data.main;
          const { name } = data;
          const description = data.weather[0].description;
          const iconR = data.weather[0].icon;
          const temperatureCelsius = 1.8 * temp;
          //Set DOM element from API
          temperatureDegree.textContent = Math.floor(temp - 273);
          console.log(typeof description);
          temperatureDescription.textContent =
            description[0].toUpperCase() + description.slice(1);
          locationTimezone.textContent = name;
          icon.setAttribute(
            "src",
            `http://openweathermap.org/img/w/${iconR}.png`
          );
        });
    });
  } else {
    h1.textContent = "This is not working!";
  }

  // Changing to Farhehheits
  //   degreeSection.
});
