function initMap() {
  // Create a map centered on Vancouver
  const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 14,
      center: { lat: 49.275, lng: -123.1207 } // Coordinates for Vancouver
  });

  // Define locations for markers
  const locations = [
      {
          lat: 49.2764, 
          lng: -123.1444, 
          name: 'Sharon Fortney',
          image: 'https://images.squarespace-cdn.com/content/v1/58d29e6ccd0f6829bdf2f58f/0fb21d0e-d159-46d2-809d-d91fa9d5f0c0/Sharon+-0073.jpg?format=500w',
          audio: 'audio/museum_of_vancouver.mp3'
      },
      {
          lat: 49.2805, 
          lng: -123.1022, 
          name: 'Tsitsayxemaat - Rebecca Duncan',
          image: 'https://images.squarespace-cdn.com/content/v1/58d29e6ccd0f6829bdf2f58f/e4d2d469-efb5-4037-8933-d7fd3c554cdd/Rebecca-Duncan-1-1024x683.jpg?format=500w',
          audio: 'audio/chinatown.mp3'
      },
      {
          lat: 49.2713, 
          lng: -123.1394, 
          name: 'Bill Darnell',
          image: 'https://historyofsocialchange.ca/wp-content/uploads/2015/07/bill-darnell.jpeg',
          audio: 'audio/greenpeace.mp3'
      }
  ];

  // Create markers and InfoWindows for each location
  locations.forEach(location => {
      const marker = new google.maps.Marker({
          position: { lat: location.lat, lng: location.lng },
          map: map,
          title: location.name,
          icon: {
              url: 'https://maps.google.com/mapfiles/ms/icons/blue-dot.png',
              scaledSize: new google.maps.Size(32, 32)
          }
      });

      // Define content for the InfoWindow
      const infoWindowContent = `
          <div class="info-window">
              <h3>${location.name}</h3>
              <img src="${location.image}" alt="${location.name}">
              <audio controls>
                  <source src="${location.audio}" type="audio/mpeg">
                  Your browser does not support the audio element.
              </audio>
          </div>
      `;

      // Create an InfoWindow
      const infoWindow = new google.maps.InfoWindow({
          content: infoWindowContent
      });

      // Add click listener to open the InfoWindow
      marker.addListener('click', () => {
          infoWindow.open(map, marker);
      });
  });
}

// Initialize the map when the page loads
window.onload = initMap;
