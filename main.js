function getlocation() {
    const output = document.getElementById('output');
    
    if (!navigator.geolocation) {
      output.innerHTML = 'Geolocation is not supported by your browser';
      return;
    }
  
    output.innerHTML = 'Loading...';
  
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        output.innerHTML = `<b>Latitude:</b> ${latitude} <b>Longitude:</b> ${longitude}<br /><br />
          <a href="https://google.com/maps?q=${latitude},${longitude}" target="_blank">View on Google Maps</a>`;
      },
      (error) => {
        output.innerHTML = `Error: ${error.message}`;
      }
    );
  }
function getlocation() {
  const output = document.getElementById('output');
  
  if (!navigator.geolocation) {
    output.innerHTML = 'Geolocation is not supported by your browser';
    return;
  }

  output.innerHTML = 'Loading...';

  navigator.geolocation.getCurrentPosition(
    (position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      output.innerHTML = `<b>Latitude:</b> ${latitude} <b>Longitude:</b> ${longitude}<br /><br />
        <a href="https://google.com/maps?q=${latitude},${longitude}" target="_blank">View on Google Maps</a>`;
    },
    (error) => {
      output.innerHTML = `Error: ${error.message}`;
    }
  );
}
  