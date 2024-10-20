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
          name: 'Museum of Vancouver',
          image: 'https://museumofvancouver.ca/sites/default/files/styles/featured_image/public/2021-10/museum-of-vancouver-exterior.jpg',
          audio: 'audio/museum_of_vancouver.mp3'
      },
      {
          lat: 49.2805, 
          lng: -123.1022, 
          name: 'Chinatown',
          image: 'https://www.vancouverchinatown.com/wp-content/uploads/2021/05/Chinatown-Header-2.jpg',
          audio: 'audio/chinatown.mp3'
      },
      {
          lat: 49.2713, 
          lng: -123.1394, 
          name: 'Greenpeace',
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
