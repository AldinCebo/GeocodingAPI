function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 2,
    center: {lat: 63.333, lng: -150.5},  // Denali.
    mapTypeId: 'terrain'
  });
  var elevator = new google.maps.ElevationService;
  var infowindow = new google.maps.InfoWindow({map: map});

//na klik event
 $( "#pitanje1" ).click(function(event) {
    displayLocationElevation(event.latLng, elevator, infowindow);
    $( "#form_visina" ).slideDown();
  });

  $( "#pitanje2" ).click(function(event) {
    displayLocationElevation2(event.latLng, elevator, infowindow);
    $( "#form_visina2" ).slideDown();
  });

  $( "#pitanje3" ).click(function(event) {
    displayLocationElevation3(event.latLng, elevator, infowindow);
    $( "#form_visina3" ).slideDown();
  });

  $( "#pitanje4" ).click(function(event) {
    displayLocationElevation4(event.latLng, elevator, infowindow);
    $( "#form_visina4" ).slideDown();
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
          $('#unesenaVisina').hide('slow');
          var unesenaVisina = parseInt(document.getElementById('unesenaVisina').value, 10);
          var rezultat = visina-unesenaVisina

          if (unesenaVisina==visina) {
            document.getElementById("rezultat").innerHTML = "Pogodili ste visinu";
            return visina;
          }else{
            document.getElementById("rezultat").innerHTML = "Promašili ste visinu za: "+rezultat+" metara";
            return visina;
          }
          
        }
			
      } else {
        infowindow.setContent('Greska kod dohvacanja rezultata');
      }
    } else {
      infowindow.setContent('error: ' + status);
    }
  });
}

function displayLocationElevation2(location, elevator, infowindow) {
  // Initiate the location request

  //kordinate za Biokovo, vrh sveti Jure 43.34177647746614, 17.054144740104675
  location={lat: 43.34177647746614, lng: 17.054144740104675};

  elevator.getElevationForLocations({
    'locations': [location]
  }, function(results, status) {
    infowindow.setPosition(location);
    if (status === google.maps.ElevationStatus.OK) {
      // Retrieve the first result
      if (results[0]) {
        // Open the infowindow indicating the elevation at the clicked position.
        infowindow.setContent('Na kojoj visini se nalazi vrh Sveti Jure, Biokovo');
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
        infowindow.setContent('Greska kod dohvacanja rezultata');
      }
    } else {
      infowindow.setContent('error: ' + status);
    }
  });
}

//Kordinate Mount Everest 27.98833820558025, 86.92511558532715
function displayLocationElevation3(location, elevator, infowindow) {

  location={lat: 27.98833820558025, lng: 86.92511558532715};

  elevator.getElevationForLocations({
    'locations': [location]
  }, function(results, status) {
    infowindow.setPosition(location);
    if (status === google.maps.ElevationStatus.OK) {
      // Retrieve the first result
      if (results[0]) {
        // Open the infowindow indicating the elevation at the clicked position.
        infowindow.setContent('Na kojoj visini se nalazi vrh Mount Everest');
        var visina = parseInt(results[0].elevation, 10);
        
        

        document.forms.form_visina3.onsubmit = function(e) {
          e.preventDefault();
          var unesenaVisina = parseInt(document.getElementById('unesenaVisina3').value, 10);
          var rezultat = visina-unesenaVisina

          if (unesenaVisina==visina) {
            document.getElementById("rezultat3").innerHTML = "Pogodili ste visinu";
          }else{
            document.getElementById("rezultat3").innerHTML = "Promašili ste visinu za: "+rezultat+" metara";
          }
          
        }
      
      } else {
        infowindow.setContent('Greska kod dohvacanja rezultata');
      }
    } else {
      infowindow.setContent('error: ' + status);
    }
  });
}

//Kordinate Mont Blanc 45.832922059741044, 6.8650563061237335
function displayLocationElevation4(location, elevator, infowindow) {

  location={lat: 45.832922059741044, lng: 6.8650563061237335};

  elevator.getElevationForLocations({
    'locations': [location]
  }, function(results, status) {
    infowindow.setPosition(location);
    if (status === google.maps.ElevationStatus.OK) {
      // Retrieve the first result
      if (results[0]) {
        // Open the infowindow indicating the elevation at the clicked position.
        infowindow.setContent('Na kojoj visini se nalazi vrh Mont Blanc');
        var visina = parseInt(results[0].elevation, 10);
        
        

        document.forms.form_visina4.onsubmit = function(e) {
          e.preventDefault();
          var unesenaVisina = parseInt(document.getElementById('unesenaVisina4').value, 10);
          var rezultat = visina-unesenaVisina

          if (unesenaVisina==visina) {
            document.getElementById("rezultat4").innerHTML = "Pogodili ste visinu";
          }else{
            document.getElementById("rezultat4").innerHTML = "Promašili ste visinu za: "+rezultat+" metara";
          }
          
        }
      
      } else {
        infowindow.setContent('Greska kod dohvacanja rezultata');
      }
    } else {
      infowindow.setContent('error: ' + status);
    }
  });
}