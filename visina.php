<?php include 'header.php'; ?>

<style>
      #map {
        height: 500px;
      }
      #form_visina, #form_visina2, #form_visina3, #form_visina4{
        margin: 50px;
        background: #B7BFC7;
        display: none;
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
                    <img alt="" src="assets/img/about_us_featured.png" style="width:100%; height:100%;">
                </div>
                <div class="main-heading">
                    <h1>Pogodi visinu</h1>
                </div>
            </div>
            
            <!--( b ) Profile Page Content -->
            
            <div class="content-container col-md-9 col-sm-12">
                
                <!--( A ) Story of Glory -->
                
                <div class="clearfix">
                    <h2 class="small-heading">Pogodi nadmorsku visinu</h2>
                    <div class="row">
                        <div class="col-lg-10 col-lg-offset-1 col-xs-10 col-xs-offset-1">
                             <div id="map"></div>
                        </div>
                    </div>
                </div>
                
                <!--PITANJA -->
                
                <div class="col-md-10 col-md-offset-1 col-xs-10 col-xs-offset-1">
                    <input type="submit" id="pitanje1" class="filter" value="1 Pitanje">
                    <form id="form_visina" action="#">
                        <label for="unesenaVisina">Unesi visinu:</label>
                        <input  name="name" type="text" class="form-control" id="unesenaVisina" placeholder="Nakon unošenja pritisnite enter">
                        <div id="rezultat"></div>
                     </form>
                 </div>

                <div class="col-md-10 col-md-offset-1 col-xs-10 col-xs-offset-1">
                    <input id="pitanje2" type="button" class="filter" value="2 Pitanje"/>
                      <form id="form_visina2" action="#">
                        <label for="unesenaVisina2">Unesi visinu:</label>
                        <input  name="name" type="text" class="form-control" id="unesenaVisina2" placeholder="Nakon unošenja pritisnite enter">
                        <div id="rezultat2"></div>
                     </form>
                </div>

                <div class="col-md-10 col-md-offset-1 col-xs-10 col-xs-offset-1">
                    <input id="pitanje3" type="button" class="filter" value="3 Pitanje"/>
                      <form id="form_visina3" action="#">
                        <label for="unesenaVisina3">Unesi visinu:</label>
                        <input  name="name" type="text" class="form-control" id="unesenaVisina3" placeholder="Nakon unošenja pritisnite enter">
                        <div id="rezultat3"></div>
                     </form>
                </div>

                <div class="col-md-10 col-md-offset-1 col-xs-10 col-xs-offset-1">
                    <input id="pitanje4" type="button" class="filter" value="4 Pitanje"/>
                      <form id="form_visina4" action="#">
                        <label for="unesenaVisina4">Unesi visinu:</label>
                        <input  name="name" type="text" class="form-control" id="unesenaVisina4" placeholder="Nakon unošenja pritisnite enter">
                        <div id="rezultat4"></div>
                     </form>
                </div>
                
            </div>
        </div>
    <script type="text/javascript" src="assets/geocodingJS/visina.js"></script>

    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAdi-twH-Z8XC6_-609ZQ60AmKAOQpEt2c&signed_in=true&callback=initMap"
        async defer></script>

<?php include 'footer.php'; ?>