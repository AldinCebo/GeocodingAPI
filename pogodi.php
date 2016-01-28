<?php include 'header.php'; ?>
   
    <script src="http://maps.google.com/maps?file=api&amp;v=2.133d&amp;key=ABQIAAAAjU0EJWnWPMv7oQ-jjS7dYxSPW5CJgpdgO_s4yyMovOaVh_KvvhSfpvagV18eOyDWu7VytS6Bi1CWxw"
      type="text/javascript"></script>
    <script src="http://gmaps-utility-library.googlecode.com/svn/trunk/mapiconmaker/1.1/src/mapiconmaker.js" type="text/javascript"></script>

    <script type="text/javascript" src="assets/geocodingJS/pogodi.js"></script>

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
                </div>
                <div class="main-heading">
                    <h1>Pogodi lokaciju</h1>
                </div>
            </div>
            
            <!--( b ) Profile Page Content -->
            
            <div class="content-container col-md-9 col-sm-12">
                
                <!--( A ) Story of Glory -->
                <div class="clearfix">
                    <h2 class="small-heading">Pogodi lokaciju</h2>
                    <div class="row">
                        <div class="col-lg-10 col-lg-offset-1 col-xs-10 col-xs-offset-1">
                             <table style="width:900px;">
                                 <tr>
                                 <td>
                                   <select id="area">
                                    <option value="usa">USA</option>
                                    <option value="world">Svijet</option>
                                    <option value="europe">Europa</option>
                                   </select>
                                 </td>
                                 <td style="border-bottom: 1px solid grey">Kazneni Bodovi</td>
                                 <td style="border-bottom: 1px solid grey">Vrijeme</td>
                                 </td>
                                 <td style="border-bottom: 1px solid grey">Lokacija</td>
                                 <td style="border-bottom: 1px solid grey">Vrijeme</td>
                                 <td style="border-bottom: 1px solid grey">Nadi</td>
                                 </tr>
                                 <tr>
                                 <td>
                                 <input type="button" onclick="startGame()" value="Nova igra" />
                                 </td><td>
                                 <span id="score" style="color: #00ff00">0</span>
                                 </td><td>
                                 <span id="time" style="color: #ff0000"></span>
                                 </td><td>
                                 <span id="state"></span>
                                 </td>
                                 </tr>
                            </table>
                        </div>
                    </div>
                </div>


                <div class="clearfix">
                    <div class="row">
                        <div class="col-lg-10 col-lg-offset-1 col-xs-10 col-xs-offset-1">
                             <div id="map_canvas" style="width: 900px; height: 600px"></div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
<?php include 'footer.php'; ?>