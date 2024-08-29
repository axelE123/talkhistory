function initMap() {
  // Initialize the map centered on Vancouver, Canada
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 14, // Adjusted zoom level for better visibility
    center: { lat: 49.275, lng: -123.1207 } // Adjusted center of the map for better positioning
  });
  
    // Define the locations and corresponding audio files
    const locations = [
      { 
        lat: 49.2764, 
        lng: -123.1444, 
        audio: 'audio/museum_of_vancouver.mp3', 
        name: 'Museum of Vancouver'
      },
      { 
        lat: 49.2805, 
        lng: -123.1022, 
        audio: 'audio/chinatown.mp3', 
        name: 'Chinatown'
      },
      { 
        lat: 49.2713, 
        lng: -123.1394, 
        audio: 'audio/greenpeace.mp3', 
        name: 'Greenpeace'
      }
    ];
  
    // Add markers for the locations and attach click events for audio
    locations.forEach(location => {
      const marker = new google.maps.Marker({
        position: { lat: location.lat, lng: location.lng },
        map: map,
        title: location.name // Add the location's name as a marker title
      });
  
      // Play the associated audio file when the marker is clicked
      marker.addListener('click', () => {
        const audio = new Audio(location.audio);
        audio.play();
      });
    });
  }
  
  // Initialize the map when the page loads
  window.onload = initMap;