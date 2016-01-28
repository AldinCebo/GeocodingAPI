    var map;
    var gameTimer;
    var gameSeconds = 0;
    var gameTime = 60;
    var gameBounds;
    var currentLatLng;
    var geocoder;
    var currentIcon;
    var userIcon;

    function initialize() {
      if (GBrowserIsCompatible()) {
        map = new GMap2(document.getElementById("map_canvas"), {draggableCursor: 'crosshair'});
        map.setCenter(new GLatLng(39.707187,-98.613281), 5);
        map.addControl(new GSmallMapControl());
        geocoder = new GClientGeocoder();
        gameBounds = map.getBounds();
        GEvent.addListener(map, "click", onMapClick);
        currentIcon = MapIconMaker.createLabeledMarkerIcon({addStar: true, primaryColor: "#00ff00"});
        userIcon = MapIconMaker.createLabeledMarkerIcon({addStar: false, primaryColor: "#ff0000"});
      }
    }   
 
    function getRandomLocation() {
      var bounds = gameBounds;
      var southWest = bounds.getSouthWest();
      var northEast = bounds.getNorthEast();
      var lngSpan = northEast.lng() - southWest.lng();
      var latSpan = northEast.lat() - southWest.lat();
      var point = new GLatLng(southWest.lat() + latSpan * Math.random(),
                                  southWest.lng() + lngSpan * Math.random());
      getReverseGeo(point);
    }

    function getReverseGeo(latlng) {
      geocoder.getLocations(latlng, function(addresses) {
        if(addresses.Status.code != 200) {
          getRandomLocation();
        }
        else {
          address = addresses.Placemark[0];
          var myHtml = address.address;
          document.getElementById("state").innerHTML = myHtml;
          currentLatLng = latlng;
        }
      });
    }
 
    function onMapClick(overlay, latlng) {
      if (!latlng || !inGame()) return;
      var dist = latlng.distanceFrom(currentLatLng);
      map.clearOverlays();
      
      var currentMarker = new GMarker(currentLatLng, {icon:currentIcon});
      var userMarker = new GMarker(latlng, {icon:userIcon});
      map.addOverlay(currentMarker);
      map.addOverlay(userMarker);
      currentDistance += Math.floor(dist/1000);
      drawLine(currentLatLng, latlng);
      document.getElementById("score").innerHTML = currentDistance;
      getRandomLocation();
    }

    function drawLine(latlngStart, latlngEnd) {
      var line = new GPolyline([latlngStart, latlngEnd], "#ff0000", 4, 1.0);
      map.addOverlay(line);
    }

    function startGame() {
      gameSeconds = 0;
      var area = document.getElementById("area").value;
      if (area=="usa") map.setCenter(new GLatLng(39.707187,-98.613281), 5);
      else if (area=="svijet") map.setCenter(new GLatLng(22.917923,16.523438), 2);
      else if (area=="europa") map.setCenter(new GLatLng(46.437857,9.887695), 5);

      gameBounds = map.getBounds();
      currentDistance = 0;
      clearInterval(gameTimer);
      map.clearOverlays();

      getRandomLocation();
      gameTimer = setInterval(updateTime, 1000);
      updateTime();
    }

    function endGame() {
      map.openInfoWindow(map.getCenter(), "Game Over!");
      clearInterval(gameTimer);
    }

    function updateTime() {
      gameSeconds++;
      document.getElementById("time").innerHTML = gameSeconds;
      if(gameSeconds >= gameTime) {
        endGame(); 
      }
    }

    function inGame() { 
      return gameSeconds > 0 && gameSeconds < gameTime;
    }