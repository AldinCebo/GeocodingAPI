function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 2,
    center: {lat: 63.333, lng: -150.5},  // Denali.
    mapTypeId: 'terrain'
  });
  var elevator = new google.maps.ElevationService;
  var infowindow = new google.maps.InfoWindow({map: map});

  // Add a listener for the click event. Display the elevation for the LatLng of
  // the click inside the infowindow.
 $( "#pitanje1" ).click(function(event) {
    displayLocationElevation(event.latLng, elevator, infowindow);
    $( "#form_visina" ).slideDown();
  });


  $( "#pitanje2" ).click(function(event) {
    displayLocationElevation2(event.latLng, elevator, infowindow);
    $( "#form_visina2" ).slideDown();
  });
}

function displayLocationElevation(location, elevator, infowindow) {
  // Initiate the location request
  location={lat: 62.96051059985366, lng: -151.39894008636475};

  elevator.getElevationForLocations({
    'locations': [location]
  }, function(results, status) {
    infowindow.setPosition(location);
    if (status === google.maps.ElevationStatus.OK) {
      // Retrieve the first result
      if (results[0]) {
        // Open the infowindow indicating the elevation at the clicked position.
        infowindow.setContent('Koliko je visok Mt Foraker');
		    var visina = parseInt(results[0].elevation, 10);
		    
        

        document.forms.form_visina.onsubmit = function(e) {
          e.preventDefault();
          var unesenaVisina = parseInt(document.getElementById('unesenaVisina').value, 10);
          var rezultat = visina-unesenaVisina

          if (unesenaVisina==visina) {
            document.getElementById("rezultat").innerHTML = "Pogodili ste visinu";
          }else{
            document.getElementById("rezultat").innerHTML = "Promašili ste visinu za: "+rezultat+" metara";
          }
          
        }
			
      } else {
        infowindow.setContent('No results found');
      }
    } else {
      infowindow.setContent('Elevation service failed due to: ' + status);
    }
  });
}

function displayLocationElevation2(location, elevator, infowindow) {
  // Initiate the location request
  location={lat: 70.96051059985366, lng: -141.39894008636475};

  elevator.getElevationForLocations({
    'locations': [location]
  }, function(results, status) {
    infowindow.setPosition(location);
    if (status === google.maps.ElevationStatus.OK) {
      // Retrieve the first result
      if (results[0]) {
        // Open the infowindow indicating the elevation at the clicked position.
        infowindow.setContent('Koliko je visok Mt Foraker');
        var visina = parseInt(results[0].elevation, 10);
        
        

        document.forms.form_visina2.onsubmit = function(e) {
          e.preventDefault();
          var unesenaVisina = parseInt(document.getElementById('unesenaVisina2').value, 10);
          var rezultat = visina-unesenaVisina

          if (unesenaVisina==visina) {
            document.getElementById("rezultat2").innerHTML = "Pogodili ste visinu";
          }else{
            document.getElementById("rezultat2").innerHTML = "Promašili ste visinu za: "+rezultat+" metara";
          }
          
        }
      
      } else {
        infowindow.setContent('No results found');
      }
    } else {
      infowindow.setContent('Elevation service failed due to: ' + status);
    }
  });
}