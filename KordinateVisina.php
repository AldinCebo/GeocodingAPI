<?php include 'header.php'; ?>

<style>
      #map {
        height: 500px;
      }
    </style>
    <!--
    4 ) Close Button
    -->
    
    <a href="http://localhost/GeocodingAPI/index.php"><div class="close-btn"></div></a>

    <!--
    5 ) visina Page
    -->
        <div class="row">
            <!--( a ) Profile Page Fixed Image Portion -->
            
            <div class="image-container col-md-3 col-sm-12">
                <div class="mask">
                <img alt="" src="assets/img/contact_featured.png" style="width:100%; height:100%;">
                </div>
                <div class="main-heading">
                    <h1>Kordinate</h1>
                </div>
            </div>
            
            <!--( b ) Profile Page Content -->
            
            <div class="content-container col-md-9 col-sm-12">
                
                <!--( A ) Story of Glory -->
                
                <div class="clearfix">
                    <h2 class="small-heading">Kordinate i visna</h2>
                    <div class="row">
                        <div class="col-lg-10 col-lg-offset-1 col-xs-10 col-xs-offset-1">
                             <div id="map"></div>
                        </div>
                    </div>
                </div>
                
                
            </div>
        </div>
    <script type="text/javascript" src="assets/geocodingJS/KordinateVisina.js"></script>

    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAdi-twH-Z8XC6_-609ZQ60AmKAOQpEt2c&signed_in=true&callback=initMap"
        async defer></script>

<?php include 'footer.php'; ?>