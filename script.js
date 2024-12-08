function initMap() {
    // Create a map centered on Vancouver
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 14,
        center: { lat: 49.275, lng: -123.1207 } // Coordinates for Vancouver
    });

    const customIcon = {
        url: 'https://www.iconarchive.com/download/i107260/iconarchive/blue-election/Election-Mic-Outline.1024.png',
        scaledSize: new google.maps.Size(40, 40), // Scale the image
        anchor: new google.maps.Point(20, 40) // Center the icon
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
        }
    ];

    // Create markers and InfoWindows for each location
    locations.forEach(location => {
        const marker = new google.maps.Marker({
            position: { lat: location.lat, lng: location.lng },
            map: map,
            title: location.name,
            icon: customIcon // Use the custom icon
        });

        // Define content for the InfoWindow
        const infoWindowContent = `
            <div class="info-window">
                <h3>${location.name}</h3>
                <img src="${location.image}" alt="${location.name}" style="max-width: 100%; height: auto;">
                <button id="playAudio" data-audio="${location.audio}">Play Audio</button>
            </div>
        `;

        // Create an InfoWindow
        const infoWindow = new google.maps.InfoWindow({
            content: infoWindowContent
        });

        // Add click listener to open the InfoWindow
        marker.addListener('click', () => {
            infoWindow.open(map, marker);

            // Add listener to play button AFTER the InfoWindow loads
            google.maps.event.addListenerOnce(infoWindow, 'domready', () => {
                const playButton = document.getElementById('playAudio');
                if (playButton) {
                    playButton.addEventListener('click', () => {
                        const audioSrc = playButton.getAttribute('data-audio');
                        playAudio(audioSrc);
                    });
                }
            });
        });
    });
}

// Function to play audio
function playAudio(audioSrc) {
    const audio = new Audio(audioSrc);

    audio.addEventListener('canplaythrough', () => {
        audio.play();
    });

    audio.addEventListener('error', (e) => {
        console.error('Audio playback error:', e);
        alert('Audio could not be played. Please try again.');
    });
}

// Initialize the map when the page loads
window.onload = initMap;
