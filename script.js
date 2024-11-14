function initMap() {
  // Create a map centered on Vancouver
  const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 14,
      center: { lat: 49.275, lng: -123.1207 } // Coordinates for Vancouver
  });
  const customIcon = {
    url: 'https://www.iconarchive.com/download/i107260/iconarchive/blue-election/Election-Mic-Outline.1024.png',
    scaledSize: new google.maps.Size(40, 40), // Scale the image
    anchor: new google.maps.Point(20, 40), // Center the icon
};
  // Define locations for markers
  const locations = [
      {
          lat: 49.2764, 
          lng: -123.1444, 
          name: 'Sharon Fortney',
          image: 'https://images.squarespace-cdn.com/content/v1/58d29e6ccd0f6829bdf2f58f/0fb21d0e-d159-46d2-809d-d91fa9d5f0c0/Sharon+-0073.jpg?format=500w',
          audio: 'audio/sharon_fortney.mp3'
      },
      {
          lat: 49.2805, 
          lng: -123.1022, 
          name: 'Tsitsayxemaat - Rebecca Duncan',
          image: 'https://images.squarespace-cdn.com/content/v1/58d29e6ccd0f6829bdf2f58f/e4d2d469-efb5-4037-8933-d7fd3c554cdd/Rebecca-Duncan-1-1024x683.jpg?format=500w',
          audio: 'audio/rebecca_duncan.mp3'
      },
      {
          lat: 49.2713, 
          lng: -123.1394, 
          name: 'Bill Darnell',
          image: 'https://historyofsocialchange.ca/wp-content/uploads/2015/07/bill-darnell.jpeg',
          audio: 'audio/bill_darnell.mp3'
      },
      {
        lat: 49.280390, 
        lng: -123.086920, 
        name: 'Marie Kishchuk',
        image: 'https://mail.google.com/mail/u/0?ui=2&ik=a33659397c&attid=0.2&permmsgid=msg-f:1797919248712795360&th=18f37e07ea5d04e0&view=att&disp=safe&realattid=18f37dfc9087bea04d62',
        audio: 'audio/marie_kishchuk.mp3'
    }
      
  ];

  // Create markers and InfoWindows for each location
  locations.forEach(location => {
      const marker = new google.maps.Marker({
          position: { lat: location.lat, lng: location.lng },
          map: map,
          title: location.name,
          icon: customIcon, // Use the custom icon
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
