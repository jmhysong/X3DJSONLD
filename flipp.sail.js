load('X3Dautoclass.js');
var ConfigurationProperties = Packages.org.web3d.x3d.jsail.ConfigurationProperties;
ConfigurationProperties.showDefaultAttributes = false;
ConfigurationProperties.xsltEngine = ConfigurationProperties.XSLT_ENGINE_nativeJava;
ConfigurationProperties.deleteIntermediateFiles = false;
ConfigurationProperties.setStripTrailingZeroes(true);
      var X3D0 =  new X3DObject().setProfile("Immersive").setVersion("3.3")
      .setHead(new headObject()
        .addMeta(new metaObject().setName("generator").setContent("hand conversion from http://www.x3dom.org/x3dom/test/functional/flipper.html"))
        .addMeta(new metaObject().setName("title").setContent("flipp.x3d"))
        .addMeta(new metaObject().setName("description").setContent("flipper flopping around"))
        .addMeta(new metaObject().setName("identifier").setContent("http://www.x3dom.org/x3dom/test/functional/flipp.x3d"))
        .addMeta(new metaObject().setName("creator").setContent("Yvonne Jung, metadata by John Carlson"))
        .addMeta(new metaObject().setName("translated").setContent("13 March 2016"))
        .addMeta(new metaObject().setName("generator").setContent("X3dToJson.xslt, http://www.web3d.org/x3d/stylesheets/X3dToJson.html"))
        .addMeta(new metaObject().setName("translated").setContent("15 May 2017"))
        .addMeta(new metaObject().setName("generator").setContent("X3dToJson.xslt, http://www.web3d.org/x3d/stylesheets/X3dToJson.html"))
        .addMeta(new metaObject().setName("reference").setContent("X3D JSON encoding: http://www.web3d.org/wiki/index.php/X3D_JSON_Encoding"))
        .addMeta(new metaObject().setName("translated").setContent("15 May 2017"))
        .addMeta(new metaObject().setName("generator").setContent("X3DJSONLD: https://github.com/coderextreme/X3DJSONLD")))
      .setScene(new SceneObject()
        .addChild(new ViewpointObject().setDEF("cam0").setDescription("cam0 description").setPosition(Java.to([0,0,800], Java.type("float[]"))))
        .addChild(new ViewpointObject().setDEF("cam1").setDescription("cam1 description").setPosition(Java.to([0,0,2000], Java.type("float[]"))))
        .addChild(new ViewpointObject().setDEF("cam2").setDescription("cam2 description").setPosition(Java.to([0,200,1000], Java.type("float[]"))))
        .addChild(new BackgroundObject().setGroundAngle(Java.to([0.9,1.5,1.57], Java.type("float[]"))).setGroundColor(Java.to([0.21,0.18,0.66,0.2,0.44,0.85,0.51,0.81,0.95,0.51,0.81,0.95], Java.type("float[]"))).setSkyAngle(Java.to([0.9,1.5,1.57], Java.type("float[]"))).setSkyColor(Java.to([0.21,0.18,0.66,0.2,0.44,0.85,0.51,0.81,0.95,0.51,0.81,0.95], Java.type("float[]"))))
        .addChild(new NavigationInfoObject().setDEF("user01").setSpeed(50))
        .addChild(new FogObject())
        .addChild(new TransformObject().setDEF("trans").setRotation(Java.to([1,0,0,0.78], Java.type("float[]")))
          .addChild(new ShapeObject()
            .setAppearance(new AppearanceObject()
              .setMaterial(new MaterialObject().setDEF("mat").setAmbientIntensity(0.508497).setDiffuseColor(Java.to([0.337255,0.4,0.788235], Java.type("float[]"))).setSpecularColor(Java.to([1,1,1], Java.type("float[]")))))
            .setGeometry(new IndexedFaceSetObject().setCreaseAngle(2).setCoordIndex(Java.to([0,1,2,-1,2,3,0,-1,3,2,4,-1,4,5,3,-1,5,4,6,-1,6,7,5,-1,7,6,8,-1,9,10,11,-1,12,0,3,-1,3,13,12,-1,13,3,5,-1,5,14,13,-1,14,5,7,-1,15,16,17,-1,16,15,18,-1,18,19,16,-1,20,21,22,-1,22,23,20,-1,24,20,23,-1,23,22,25,-1,25,26,23,-1,26,25,1,-1,1,0,26,-1,26,0,27,-1,27,0,12,-1,12,28,27,-1,28,12,9,-1,9,29,28,-1,29,9,11,-1,30,29,11,-1,11,31,30,-1,30,31,32,-1,32,33,30,-1,33,32,34,-1,34,35,33,-1,35,34,36,-1,36,37,35,-1,37,36,38,-1,38,39,37,-1,39,38,40,-1,40,41,39,-1,42,19,24,-1,43,42,24,-1,44,43,24,-1,24,23,44,-1,44,23,26,-1,26,45,44,-1,45,26,27,-1,27,46,45,-1,46,27,28,-1,28,47,46,-1,47,28,29,-1,29,48,47,-1,48,29,30,-1,30,49,48,-1,49,30,33,-1,43,50,51,-1,51,42,43,-1,42,51,52,-1,52,19,42,-1,19,52,53,-1,53,16,19,-1,16,53,54,-1,50,55,56,-1,56,51,50,-1,51,56,52,-1,53,57,54,-1,58,59,60,-1,60,57,58,-1,61,62,63,-1,63,64,61,-1,16,54,64,-1,64,17,16,-1,17,64,63,-1,65,52,66,-1,66,67,65,-1,68,53,52,-1,52,65,68,-1,68,65,67,-1,67,69,68,-1,57,68,69,-1,69,58,57,-1,59,58,70,-1,70,71,59,-1,70,58,69,-1,69,72,70,-1,69,67,73,-1,72,73,74,-1,74,75,72,-1,64,54,57,-1,76,67,66,-1,76,66,77,-1,76,77,55,-1,76,55,78,-1,76,78,73,-1,76,73,67,-1,79,80,71,-1,71,70,79,-1,75,79,70,-1,70,72,75,-1,81,75,82,-1,82,74,81,-1,83,81,74,-1,75,81,84,-1,84,85,75,-1,83,74,86,-1,86,87,83,-1,86,74,88,-1,88,89,86,-1,74,78,88,-1,88,78,55,-1,55,90,88,-1,55,50,43,-1,43,91,55,-1,90,55,91,-1,88,90,92,-1,92,89,88,-1,89,92,93,-1,93,94,89,-1,94,93,95,-1,95,96,94,-1,96,95,97,-1,97,98,96,-1,98,97,99,-1,99,100,98,-1,100,99,101,-1,101,102,100,-1,102,101,103,-1,103,104,102,-1,104,103,105,-1,105,106,104,-1,106,105,107,-1,107,108,106,-1,92,90,91,-1,92,91,44,-1,44,91,43,-1,92,44,45,-1,45,93,92,-1,93,45,46,-1,46,95,93,-1,95,46,47,-1,47,97,95,-1,97,47,48,-1,48,99,97,-1,99,48,49,-1,49,101,99,-1,101,49,33,-1,33,103,101,-1,103,33,35,-1,35,105,103,-1,105,35,37,-1,37,107,105,-1,107,37,39,-1,39,109,107,-1,109,39,41,-1,86,89,94,-1,94,110,86,-1,110,94,96,-1,96,111,110,-1,111,96,98,-1,98,112,111,-1,112,98,100,-1,100,113,112,-1,113,100,102,-1,102,114,113,-1,114,102,104,-1,104,115,114,-1,115,104,106,-1,106,116,115,-1,116,106,108,-1,108,117,116,-1,117,108,118,-1,87,86,119,-1,119,120,87,-1,119,86,110,-1,110,121,119,-1,119,121,122,-1,122,123,119,-1,124,119,123,-1,110,111,125,-1,125,126,110,-1,127,113,114,-1,114,128,127,-1,129,116,117,-1,117,130,129,-1,131,83,87,-1,87,132,131,-1,132,87,110,-1,110,126,132,-1,133,81,83,-1,83,131,133,-1,134,84,81,-1,81,133,134,-1,135,136,84,-1,84,134,135,-1,136,85,84,-1,135,137,138,-1,138,136,135,-1,139,140,141,-1,142,143,41,-1,41,144,142,-1,145,142,144,-1,144,146,145,-1,107,109,147,-1,147,108,107,-1,108,147,118,-1,64,57,60,-1,60,61,64,-1,61,148,149,-1,149,62,61,-1,148,61,60,-1,60,59,148,-1,85,79,75,-1,85,136,80,-1,80,79,85,-1,138,80,136,-1,80,138,150,-1,150,71,80,-1,71,150,148,-1,148,59,71,-1,150,138,137,-1,137,151,150,-1,151,149,148,-1,148,150,151,-1,66,52,56,-1,56,55,77,-1,73,78,74,-1,53,68,57,-1,56,77,66,-1,123,152,153,-1,153,124,123,-1,120,119,124,-1,124,153,120,-1,152,123,122,-1,87,120,121,-1,121,110,87,-1,153,152,122,-1,122,121,153,-1,120,153,121,-1,12,13,10,-1,10,9,12,-1,14,154,10,-1,10,13,14,-1,8,155,154,-1,154,14,8,-1,7,8,14,-1,156,112,113,-1,113,127,156,-1,111,112,156,-1,156,125,111,-1,115,116,129,-1,129,157,115,-1,115,157,128,-1,128,114,115,-1,158,130,117,-1,117,118,158,-1,140,159,160,-1,160,161,140,-1,118,147,161,-1,161,160,118,-1,159,140,139,-1,40,144,41,-1,146,158,118,-1,162,145,146,-1,146,118,162,-1,160,162,118,-1,159,141,162,-1,162,160,159,-1,139,141,159,-1,162,141,140,-1,140,161,162,-1,142,145,162,-1,162,161,142,-1,143,142,161,-1,147,143,161,-1,109,41,143,-1,143,147,109,-1,20,163,21,-1,163,20,19,-1,19,18,163,-1,20,24,19,-1,164,2,1,-1,1,165,164,-1,166,4,2,-1,2,164,166,-1,167,6,4,-1,4,166,167,-1,8,6,167,-1,11,10,168,-1,169,164,165,-1,165,170,169,-1,171,166,164,-1,164,169,171,-1,167,166,171,-1,17,172,15,-1,173,18,15,-1,15,172,173,-1,22,21,174,-1,174,175,22,-1,176,22,175,-1,177,25,22,-1,22,176,177,-1,165,1,25,-1,25,177,165,-1,178,165,177,-1,179,170,165,-1,165,178,179,-1,180,168,170,-1,170,179,180,-1,11,168,180,-1,31,11,180,-1,180,181,31,-1,182,32,31,-1,31,181,182,-1,183,34,32,-1,32,182,183,-1,184,36,34,-1,34,183,184,-1,185,38,36,-1,36,184,185,-1,186,40,38,-1,38,185,186,-1,175,173,187,-1,175,187,188,-1,176,175,188,-1,188,189,176,-1,190,177,176,-1,176,189,190,-1,191,178,177,-1,177,190,191,-1,192,179,178,-1,178,191,192,-1,193,180,179,-1,179,192,193,-1,194,181,180,-1,180,193,194,-1,182,181,194,-1,187,195,196,-1,196,188,187,-1,173,197,195,-1,195,187,173,-1,198,197,173,-1,173,172,198,-1,199,198,172,-1,195,200,201,-1,201,196,195,-1,197,200,195,-1,199,202,198,-1,202,203,204,-1,204,205,202,-1,206,63,62,-1,62,207,206,-1,17,206,199,-1,199,172,17,-1,63,206,17,-1,208,209,197,-1,197,210,208,-1,210,197,198,-1,198,211,210,-1,212,208,210,-1,210,211,212,-1,205,212,211,-1,211,202,205,-1,213,214,205,-1,205,204,213,-1,215,212,205,-1,205,214,215,-1,216,208,212,-1,217,218,216,-1,216,215,217,-1,202,199,206,-1,209,208,219,-1,220,209,219,-1,201,220,219,-1,221,201,219,-1,216,221,219,-1,208,216,219,-1,214,213,222,-1,222,223,214,-1,215,214,223,-1,223,217,215,-1,224,217,225,-1,225,226,224,-1,218,224,226,-1,227,228,225,-1,225,217,227,-1,229,230,218,-1,218,226,229,-1,231,232,218,-1,218,230,231,-1,232,221,218,-1,233,201,221,-1,221,232,233,-1,188,196,201,-1,201,233,188,-1,234,188,233,-1,231,235,233,-1,233,232,231,-1,236,237,235,-1,235,231,236,-1,238,239,237,-1,237,236,238,-1,240,241,239,-1,239,238,240,-1,242,243,241,-1,241,240,242,-1,244,245,243,-1,243,242,244,-1,246,247,245,-1,245,244,246,-1,248,249,247,-1,247,246,248,-1,250,251,249,-1,249,248,250,-1,234,233,235,-1,189,234,235,-1,188,234,189,-1,237,190,189,-1,189,235,237,-1,239,191,190,-1,190,237,239,-1,241,192,191,-1,191,239,241,-1,243,193,192,-1,192,241,243,-1,245,194,193,-1,193,243,245,-1,247,182,194,-1,194,245,247,-1,249,183,182,-1,182,247,249,-1,251,184,183,-1,183,249,251,-1,252,185,184,-1,184,251,252,-1,186,185,252,-1,253,236,231,-1,231,230,253,-1,254,238,236,-1,236,253,254,-1,255,240,238,-1,238,254,255,-1,256,242,240,-1,240,255,256,-1,257,244,242,-1,242,256,257,-1,258,246,244,-1,244,257,258,-1,259,248,246,-1,246,258,259,-1,260,250,248,-1,248,259,260,-1,261,250,260,-1,262,263,230,-1,230,229,262,-1,264,253,230,-1,230,263,264,-1,265,264,263,-1,263,266,265,-1,267,265,266,-1,126,125,254,-1,254,253,126,-1,128,257,256,-1,256,127,128,-1,130,260,259,-1,259,129,130,-1,132,229,226,-1,226,131,132,-1,126,253,229,-1,229,132,126,-1,131,226,225,-1,225,133,131,-1,133,225,228,-1,228,134,133,-1,134,228,268,-1,268,135,134,-1,228,227,268,-1,268,269,137,-1,137,135,268,-1,270,271,272,-1,144,186,273,-1,273,274,144,-1,146,144,274,-1,274,275,146,-1,250,276,252,-1,252,251,250,-1,261,276,250,-1,207,203,202,-1,202,206,207,-1,62,149,277,-1,277,207,62,-1,204,203,207,-1,207,277,204,-1,217,223,227,-1,223,222,268,-1,268,227,223,-1,268,222,269,-1,213,278,269,-1,269,222,213,-1,204,277,278,-1,278,213,204,-1,151,137,269,-1,269,278,151,-1,278,277,149,-1,149,151,278,-1,200,197,209,-1,220,201,200,-1,218,221,216,-1,202,211,198,-1,209,220,200,-1,266,279,280,-1,280,267,266,-1,279,266,263,-1,263,262,279,-1,265,267,280,-1,253,264,262,-1,262,229,253,-1,265,280,279,-1,279,262,265,-1,264,265,262,-1,168,10,169,-1,169,170,168,-1,169,10,154,-1,154,171,169,-1,154,155,8,-1,8,167,154,-1,171,154,167,-1,127,256,255,-1,255,156,127,-1,125,156,255,-1,255,254,125,-1,157,129,259,-1,259,258,157,-1,257,128,157,-1,157,258,257,-1,261,260,130,-1,130,158,261,-1,281,282,283,-1,283,271,281,-1,282,281,276,-1,276,261,282,-1,272,271,283,-1,186,144,40,-1,261,158,146,-1,146,275,284,-1,284,282,146,-1,261,146,282,-1,282,284,270,-1,270,283,282,-1,283,270,272,-1,281,271,270,-1,270,284,281,-1,281,284,275,-1,275,274,281,-1,281,274,273,-1,281,273,276,-1,276,273,186,-1,186,252,276,-1,21,163,174,-1,18,173,174,-1,174,163,18,-1,173,175,174,-1,212,215,216,-1,73,72,69,-1], Java.type("int[]")))
              .setCoord(new CoordinateObject().setDEF("pointList").setPoint(Java.to([-23.495,90.55,-8.13,-28.825,91.31,0,9.77497,126.11,0,17.395,124.84,-6.1,42.795,142.11,0,46.105,139.07,-3.56,74.295,144.4,0,76.075,140.08,-1.27,92.325,139.57,0,74.805,80.9,-9.91,74.295,98.93,0,84.965,74.04,0,35.175,88.77,-11.68,50.165,110.11,-6.1,60.835,121.79,-3.56,-194.695,-8,0,-200.025,-15.87,-7.62,-205.105,-19.68,0,-177.165,7.75,0,-180.975,1.39999,-13.97,-156.335,22.23,-5.33,-151.515,27.05,0,-117.475,50.67,0,-118.495,44.58,-18.29,-155.325,20.19,-13.97,-74.805,71.25,0,-75.565,65.91,-22.35,-26.545,75.57,-24.64,31.625,74.04,-26.67,87.755,62.1,-20.32,154.055,26.04,-11.68,155.325,30.1,0,195.965,-4.95001,0,188.345,-14.1,-14.73,213.995,-28.57,0,204.085,-41.02,-11.94,226.445,-52.45,0,217.045,-63.88,-7.87,232.535,-72.52,0,226.945,-79.88,-9.65,228.725,-91.31,0,224.665,-87.5,-7.37,-157.865,13.84,-22.35,-141.605,12.57,-32.77,-112.145,30.61,-29.97,-75.055,47.12,-32,-26.545,57.79,-35.81,24.005,56.52,-34.04,84.455,48.64,-28.45,150.745,19.18,-18.29,-153.285,-0.380005,-36.58,-163.445,1.14001,-31.75,-171.065,-5.97,-27.43,-187.325,-22.99,-20.83,-201.545,-37.21,-10.16,-151.005,-10.29,-35.81,-161.925,-5.97,-30.99,-203.325,-44.83,-13.97,-196.465,-54.48,-14.99,-223.135,-77.6,-7.37,-228.215,-75.31,-7.37,-233.045,-79.12,-4.06,-234.315,-77.6,0,-210.695,-46.1,0,-207.895,-43.81,-5.08,-171.835,-19.68,-30.48,-164.465,-11.81,-30.73,-170.815,-22.48,-30.73,-184.275,-27.05,-26.42,-180.975,-32.38,-25.91,-192.655,-58.29,-16.26,-216.785,-78.61,-8.38,-174.375,-43.31,-25.91,-165.485,-28.07,-34.54,-142.625,-35.94,-34.8,-171.835,-48.89,-27.43,-160.405,-22.73,-34.8,-158.365,-13.59,-34.54,-144.655,-24.26,-38.61,-191.135,-63.37,-18.29,-212.975,-81.41,-10.92,-167.765,-70.48,-17.02,-154.555,-41.02,-31.75,-132.205,-61.09,-22.35,-185.295,-71.25,-10.16,-190.625,-66.93,-17.27,-103.755,-39.75,-43.18,-101.985,-49.66,-35.05,-140.335,-23.24,-40.39,-100.715,-9.51999,-49.28,-135.255,-5.45999,-40.13,-134.235,7.48999,-36.58,-104.015,14.1,-42.67,-72.515,23.75,-46.23,-60.575,-1.39999,-51.05,-21.975,26.04,-48.01,-16.895,7.23999,-51.05,26.035,31.12,-46.23,28.065,7.48999,-49.02,81.915,25.02,-43.94,81.405,-1.89999,-44.7,141.095,0.130005,-33.02,130.935,-22.22,-28.45,176.405,-24.76,-23.37,161.675,-44.58,-21.84,194.185,-48.89,-13.97,183.515,-59.82,-14.22,206.125,-65.4,-9.91,195.455,-72.26,-10.67,220.345,-83.69,-18.29,-64.895,-34.16,-41.15,-15.365,-26.8,-37.59,22.475,-24.76,-38.1,70.735,-27.3,-30.99,120.525,-40.77,-17.27,154.055,-60.83,-9.65,174.875,-69.21,-7.11,195.965,-86.23,-5.59,205.355,-94.36,-11.94,-75.565,-64.9,-73.66,-76.325,-67.69,-71.37,-53.465,-53.72,-64.52,-29.845,-68.96,-77.22,-44.065,-71.75,-80.77,-64.385,-69.21,-80.01,-18.925,-40,0,-62.355,-49.91,0,68.455,-38.23,0,123.825,-45.08,0,171.325,-71.75,0,195.705,-88.26,0,-127.635,-63.63,0,-92.835,-56.51,0,-159.895,-73.28,0,-182.495,-73.28,0,-207.395,-85.72,0,-210.435,-84.45,-7.87,-226.185,-93.85,0,-223.905,-91.57,-4.57,232.285,-144.4,-86.61,217.555,-117.73,-73.15,231.015,-135.76,-63.25,229.745,-112.14,-9.65,224.155,-97.92,-16.51,228.215,-104.01,0,234.315,-121.03,-5.84,230.505,-113.92,0,218.565,-86.23,-24.13,-230.505,-84.45,-3.81,-231.015,-84.2,0,-228.725,-89.53,-4.83,-230.505,-90.3,0,-43.815,-73.02,-79.25,-63.885,-72.01,-78.23,83.695,119.76,0,95.375,131.45,0,24.255,-36.45,0,151.005,-61.59,0,205.615,-96.9,0,215.775,-119.51,-73.15,210.695,-104.52,-52.32,213.745,-101.47,-52.32,232.535,-127.89,-21.59,-154.815,25.02,0,17.395,124.84,6.1,-23.495,90.55,8.13,46.105,139.07,3.56,76.075,140.08,1.27,74.805,80.9,9.91,50.165,110.11,6.1,35.175,88.77,11.68,60.835,121.79,3.56,-200.025,-15.87,7.62,-180.975,1.39999,13.97,-156.335,22.23,5.33,-155.325,20.19,13.97,-118.495,44.58,18.29,-75.565,65.91,22.35,-26.545,75.57,24.64,31.625,74.04,26.67,87.755,62.1,20.32,154.055,26.04,11.68,188.345,-14.1,14.73,204.085,-41.02,11.94,217.045,-63.88,7.87,226.945,-79.88,9.65,224.665,-87.5,7.37,-157.865,13.84,22.35,-141.605,12.57,32.77,-112.145,30.61,29.97,-75.055,47.12,32,-26.545,57.79,35.81,24.005,56.52,34.04,84.455,48.64,28.45,150.745,19.18,18.29,-163.445,1.14001,31.75,-153.285,-0.380005,36.58,-171.065,-5.97,27.43,-187.325,-22.99,20.83,-201.545,-37.21,10.16,-161.925,-5.97,30.99,-151.005,-10.29,35.81,-203.325,-44.83,13.97,-228.215,-75.31,7.37,-223.135,-77.6,7.37,-196.465,-54.48,14.99,-207.895,-43.81,5.08,-233.045,-79.12,4.06,-170.815,-22.48,30.73,-164.465,-11.81,30.73,-171.835,-19.68,30.48,-184.275,-27.05,26.42,-180.975,-32.38,25.91,-216.785,-78.61,8.38,-192.655,-58.29,16.26,-174.375,-43.31,25.91,-165.485,-28.07,34.54,-171.835,-48.89,27.43,-142.625,-35.94,34.8,-160.405,-22.73,34.8,-158.365,-13.59,34.54,-144.655,-24.26,38.61,-212.975,-81.41,10.92,-191.135,-63.37,18.29,-154.555,-41.02,31.75,-167.765,-70.48,17.02,-132.205,-61.09,22.35,-190.625,-66.93,17.27,-185.295,-71.25,10.16,-101.985,-49.66,35.05,-103.755,-39.75,43.18,-100.715,-9.51999,49.28,-140.335,-23.24,40.39,-135.255,-5.45999,40.13,-134.235,7.48999,36.58,-104.015,14.1,42.67,-60.575,-1.39999,51.05,-72.515,23.75,46.23,-16.895,7.23999,51.05,-21.975,26.04,48.01,28.065,7.48999,49.02,26.035,31.12,46.23,81.405,-1.89999,44.7,81.915,25.02,43.94,130.935,-22.22,28.45,141.095,0.130005,33.02,161.675,-44.58,21.84,176.405,-24.76,23.37,183.515,-59.82,14.22,194.185,-48.89,13.97,195.455,-72.26,10.67,206.125,-65.4,9.91,220.345,-83.69,18.29,-64.895,-34.16,41.15,-15.365,-26.8,37.59,22.475,-24.76,38.1,70.735,-27.3,30.99,120.525,-40.77,17.27,154.055,-60.83,9.65,174.875,-69.21,7.11,195.965,-86.23,5.59,205.355,-94.36,11.94,-76.325,-67.69,71.37,-75.565,-64.9,73.66,-53.465,-53.72,64.52,-29.845,-68.96,77.22,-64.385,-69.21,80.01,-44.065,-71.75,80.77,-210.435,-84.45,7.87,-223.905,-91.57,4.57,231.015,-135.76,63.25,217.555,-117.73,73.15,232.285,-144.4,86.61,224.155,-97.92,16.51,229.745,-112.14,9.65,234.315,-121.03,5.84,218.565,-86.23,24.13,-230.505,-84.45,3.81,-228.725,-89.53,4.83,-63.885,-72.01,78.23,-43.815,-73.02,79.25,213.745,-101.47,52.32,210.695,-104.52,52.32,215.775,-119.51,73.15,232.535,-127.89,21.59], Java.type("float[]")))))))
        .addChild(new TimeSensorObject().setDEF("ts").setCycleInterval(2).setLoop(true))
        .addChild(new ScalarInterpolatorObject().setDEF("si").setKey(Java.to([0,0.5,1], Java.type("float[]"))).setKeyValue(Java.to([0,1,0], Java.type("float[]"))))
        .addChild(new CoordinateInterpolatorObject().setDEF("ci").setKey(Java.to([0,0.5,1], Java.type("float[]"))).setKeyValue(Java.to([-23.495,90.55,-8.13,-28.825,91.31,0,9.77497,126.11,0,17.395,124.84,-6.1,42.795,142.11,0,46.105,139.07,-3.56,74.295,144.4,0,76.075,140.08,-1.27,92.325,139.57,0,74.805,80.9,-9.91,74.295,98.93,0,84.965,74.04,0,35.175,88.77,-11.68,50.165,110.11,-6.1,60.835,121.79,-3.56,-194.695,-8,0,-200.025,-15.87,-7.62,-205.105,-19.68,0,-177.165,7.75,0,-180.975,1.39999,-13.97,-156.335,22.23,-5.33,-151.515,27.05,0,-117.475,50.67,0,-118.495,44.58,-18.29,-155.325,20.19,-13.97,-74.805,71.25,0,-75.565,65.91,-22.35,-26.545,75.57,-24.64,31.625,74.04,-26.67,87.755,62.1,-20.32,154.055,26.04,-11.68,155.325,30.1,0,195.965,-4.95001,0,188.345,-14.1,-14.73,213.995,-28.57,0,204.085,-41.02,-11.94,226.445,-52.45,0,217.045,-63.88,-7.87,232.535,-72.52,0,226.945,-79.88,-9.65,228.725,-91.31,0,224.665,-87.5,-7.37,-157.865,13.84,-22.35,-141.605,12.57,-32.77,-112.145,30.61,-29.97,-75.055,47.12,-32,-26.545,57.79,-35.81,24.005,56.52,-34.04,84.455,48.64,-28.45,150.745,19.18,-18.29,-153.285,-0.380005,-36.58,-163.445,1.14001,-31.75,-171.065,-5.97,-27.43,-187.325,-22.99,-20.83,-201.545,-37.21,-10.16,-151.005,-10.29,-35.81,-161.925,-5.97,-30.99,-203.325,-44.83,-13.97,-196.465,-54.48,-14.99,-223.135,-77.6,-7.37,-228.215,-75.31,-7.37,-233.045,-79.12,-4.06,-234.315,-77.6,0,-210.695,-46.1,0,-207.895,-43.81,-5.08,-171.835,-19.68,-30.48,-164.465,-11.81,-30.73,-170.815,-22.48,-30.73,-184.275,-27.05,-26.42,-180.975,-32.38,-25.91,-192.655,-58.29,-16.26,-216.785,-78.61,-8.38,-174.375,-43.31,-25.91,-165.485,-28.07,-34.54,-142.625,-35.94,-34.8,-171.835,-48.89,-27.43,-160.405,-22.73,-34.8,-158.365,-13.59,-34.54,-144.655,-24.26,-38.61,-191.135,-63.37,-18.29,-212.975,-81.41,-10.92,-167.765,-70.48,-17.02,-154.555,-41.02,-31.75,-132.205,-61.09,-22.35,-185.295,-71.25,-10.16,-190.625,-66.93,-17.27,-103.755,-39.75,-43.18,-101.985,-49.66,-35.05,-140.335,-23.24,-40.39,-100.715,-9.51999,-49.28,-135.255,-5.45999,-40.13,-134.235,7.48999,-36.58,-104.015,14.1,-42.67,-72.515,23.75,-46.23,-60.575,-1.39999,-51.05,-21.975,26.04,-48.01,-16.895,7.23999,-51.05,26.035,31.12,-46.23,28.065,7.48999,-49.02,81.915,25.02,-43.94,81.405,-1.89999,-44.7,141.095,0.130005,-33.02,130.935,-22.22,-28.45,176.405,-24.76,-23.37,161.675,-44.58,-21.84,194.185,-48.89,-13.97,183.515,-59.82,-14.22,206.125,-65.4,-9.91,195.455,-72.26,-10.67,220.345,-83.69,-18.29,-64.895,-34.16,-41.15,-15.365,-26.8,-37.59,22.475,-24.76,-38.1,70.735,-27.3,-30.99,120.525,-40.77,-17.27,154.055,-60.83,-9.65,174.875,-69.21,-7.11,195.965,-86.23,-5.59,205.355,-94.36,-11.94,-75.565,-64.9,-73.66,-76.325,-67.69,-71.37,-53.465,-53.72,-64.52,-29.845,-68.96,-77.22,-44.065,-71.75,-80.77,-64.385,-69.21,-80.01,-18.925,-40,0,-62.355,-49.91,0,68.455,-38.23,0,123.825,-45.08,0,171.325,-71.75,0,195.705,-88.26,0,-127.635,-63.63,0,-92.835,-56.51,0,-159.895,-73.28,0,-182.495,-73.28,0,-207.395,-85.72,0,-210.435,-84.45,-7.87,-226.185,-93.85,0,-223.905,-91.57,-4.57,232.285,-144.4,-86.61,217.555,-117.73,-73.15,231.015,-135.76,-63.25,229.745,-112.14,-9.65,224.155,-97.92,-16.51,228.215,-104.01,0,234.315,-121.03,-5.84,230.505,-113.92,0,218.565,-86.23,-24.13,-230.505,-84.45,-3.81,-231.015,-84.2,0,-228.725,-89.53,-4.83,-230.505,-90.3,0,-43.815,-73.02,-79.25,-63.885,-72.01,-78.23,83.695,119.76,0,95.375,131.45,0,24.255,-36.45,0,151.005,-61.59,0,205.615,-96.9,0,215.775,-119.51,-73.15,210.695,-104.52,-52.32,213.745,-101.47,-52.32,232.535,-127.89,-21.59,-154.815,25.02,0,17.395,124.84,6.1,-23.495,90.55,8.13,46.105,139.07,3.56,76.075,140.08,1.27,74.805,80.9,9.91,50.165,110.11,6.1,35.175,88.77,11.68,60.835,121.79,3.56,-200.025,-15.87,7.62,-180.975,1.39999,13.97,-156.335,22.23,5.33,-155.325,20.19,13.97,-118.495,44.58,18.29,-75.565,65.91,22.35,-26.545,75.57,24.64,31.625,74.04,26.67,87.755,62.1,20.32,154.055,26.04,11.68,188.345,-14.1,14.73,204.085,-41.02,11.94,217.045,-63.88,7.87,226.945,-79.88,9.65,224.665,-87.5,7.37,-157.865,13.84,22.35,-141.605,12.57,32.77,-112.145,30.61,29.97,-75.055,47.12,32,-26.545,57.79,35.81,24.005,56.52,34.04,84.455,48.64,28.45,150.745,19.18,18.29,-163.445,1.14001,31.75,-153.285,-0.380005,36.58,-171.065,-5.97,27.43,-187.325,-22.99,20.83,-201.545,-37.21,10.16,-161.925,-5.97,30.99,-151.005,-10.29,35.81,-203.325,-44.83,13.97,-228.215,-75.31,7.37,-223.135,-77.6,7.37,-196.465,-54.48,14.99,-207.895,-43.81,5.08,-233.045,-79.12,4.06,-170.815,-22.48,30.73,-164.465,-11.81,30.73,-171.835,-19.68,30.48,-184.275,-27.05,26.42,-180.975,-32.38,25.91,-216.785,-78.61,8.38,-192.655,-58.29,16.26,-174.375,-43.31,25.91,-165.485,-28.07,34.54,-171.835,-48.89,27.43,-142.625,-35.94,34.8,-160.405,-22.73,34.8,-158.365,-13.59,34.54,-144.655,-24.26,38.61,-212.975,-81.41,10.92,-191.135,-63.37,18.29,-154.555,-41.02,31.75,-167.765,-70.48,17.02,-132.205,-61.09,22.35,-190.625,-66.93,17.27,-185.295,-71.25,10.16,-101.985,-49.66,35.05,-103.755,-39.75,43.18,-100.715,-9.51999,49.28,-140.335,-23.24,40.39,-135.255,-5.45999,40.13,-134.235,7.48999,36.58,-104.015,14.1,42.67,-60.575,-1.39999,51.05,-72.515,23.75,46.23,-16.895,7.23999,51.05,-21.975,26.04,48.01,28.065,7.48999,49.02,26.035,31.12,46.23,81.405,-1.89999,44.7,81.915,25.02,43.94,130.935,-22.22,28.45,141.095,0.130005,33.02,161.675,-44.58,21.84,176.405,-24.76,23.37,183.515,-59.82,14.22,194.185,-48.89,13.97,195.455,-72.26,10.67,206.125,-65.4,9.91,220.345,-83.69,18.29,-64.895,-34.16,41.15,-15.365,-26.8,37.59,22.475,-24.76,38.1,70.735,-27.3,30.99,120.525,-40.77,17.27,154.055,-60.83,9.65,174.875,-69.21,7.11,195.965,-86.23,5.59,205.355,-94.36,11.94,-76.325,-67.69,71.37,-75.565,-64.9,73.66,-53.465,-53.72,64.52,-29.845,-68.96,77.22,-64.385,-69.21,80.01,-44.065,-71.75,80.77,-210.435,-84.45,7.87,-223.905,-91.57,4.57,231.015,-135.76,63.25,217.555,-117.73,73.15,232.285,-144.4,86.61,224.155,-97.92,16.51,229.745,-112.14,9.65,234.315,-121.03,5.84,218.565,-86.23,24.13,-230.505,-84.45,3.81,-228.725,-89.53,4.83,-63.885,-72.01,78.23,-43.815,-73.02,79.25,213.745,-101.47,52.32,210.695,-104.52,52.32,215.775,-119.51,73.15,232.535,-127.89,21.59,-59.809,52.365,-8.13,-65.138,53.125,0,-26.539,87.925,0,-18.918,86.655,-6.1,6.48099,103.925,0,9.791,100.885,-3.56,37.981,106.215,0,39.761,101.895,-1.27,56.011,101.385,0,38.491,42.715,-9.91,37.981,60.745,0,48.651,35.855,0,-1.138,50.585,-11.68,13.851,71.925,-6.1,24.522,83.605,-3.56,-231.682,-23.267,0,-237.645,-30.669,-7.62,-243.023,-34.045,0,-212.908,-9.02301,0,-217.23,-15.036,-13.97,-190.95,3.68199,-5.33,-185.747,8.08699,0,-149.868,28.807,0,-151.389,22.822,-18.29,-190.112,1.56599,-13.97,-105.641,45.783,0,-106.84,40.524,-22.35,-62.859,37.385,-24.64,-4.68901,35.855,-26.67,51.441,23.915,-20.32,106.312,12.011,-11.68,106.024,16.252,0,147.052,3.38199,0,146.393,-8.34801,-14.73,171.674,-5.229,0,172.586,-21.01,-11.94,195.158,-14.477,0,196.995,-29.125,-7.87,213.773,-23.372,0,215.823,-32.396,-9.65,226.225,-38.058,0,220.317,-38.998,-7.37,-193.17,-4.552,-22.35,-177.07,-7.164,-32.77,-146.218,8.37399,-29.97,-107.888,21.756,-32,-62.859,19.605,-35.81,-12.309,18.335,-34.04,48.141,10.455,-28.45,105.971,4.41499,-18.29,-189.783,-19.103,-36.58,-199.782,-16.746,-31.75,-207.965,-23.201,-27.43,-225.578,-38.816,-20.83,-240.927,-51.8097,-10.16,-188.331,-29.167,-35.81,-198.856,-23.958,-30.99,-243.332,-59.2561,-13.97,-237.294,-69.441,-14.99,-265.787,-90.2731,-7.37,-270.66,-87.5703,-7.37,-275.789,-90.9673,-4.06,-276.929,-89.3473,0,-250.782,-59.9115,0,-247.801,-57.8612,-5.08,-209.867,-36.8,-30.48,-201.871,-29.567,-30.73,-209.083,-39.675,-30.73,-222.875,-43.115,-26.42,-220.028,-48.6996,-25.91,-233.813,-73.5535,-16.26,-259.543,-91.8055,-8.38,-214.355,-60.1386,-25.91,-204.234,-45.6871,-34.54,-182.104,-55.4231,-34.8,-212.286,-65.9098,-27.43,-198.729,-40.786,-34.8,-195.939,-31.846,-34.54,-183.16,-43.615,-38.61,-232.719,-78.7419,-18.29,-255.978,-94.9114,-10.92,-210.018,-87.7627,-17.02,-194.414,-59.4977,-31.75,-173.802,-81.3496,-22.35,-227.551,-87.0784,-10.16,-232.505,-82.3319,-17.27,-143.683,-62.4388,-43.18,-142.74,-72.4613,-35.05,-178.77,-42.956,-40.39,-138.15,-32.564,-49.28,-172.235,-25.658,-40.13,-170.146,-12.837,-36.58,-139.483,-8.75201,-42.67,-107.292,-1.744,-46.23,-97.476,-27.796,-51.05,-58.289,-12.145,-48.01,-53.209,-30.945,-51.05,-10.278,-7.065,-46.23,-8.248,-30.695,-49.02,45.601,-13.165,-43.94,45.091,-40.085,-44.7,104.428,-16.842,-33.02,103.132,-41.349,-28.45,142.888,-23.631,-23.37,140.785,-48.174,-21.84,170.176,-33.299,-13.97,168.47,-48.4858,-14.22,190.176,-37.899,-9.91,186.651,-50.2548,-10.67,214.231,-39.981,-18.29,-104.494,-60.0859,-41.15,-51.679,-64.9852,-37.59,-13.839,-62.9452,-38.1,34.421,-65.4852,-30.99,99.745,-62.3666,-17.27,142.447,-66.0489,-9.65,166.932,-61.2393,-7.11,197.22,-60.0188,-5.59,211.268,-58.5942,-11.94,-117.672,-75.6501,-73.66,-118.661,-77.4442,-71.37,-94.723,-69.5026,-64.52,-72.446,-80.8209,-77.22,-86.848,-81.8791,-80.77,-106.888,-79.097,-80.01,-55.239,-78.1852,0,-103.267,-75.9921,0,32.141,-76.4152,0,104.771,-65.2363,0,165.318,-65.4299,0,198.53,-61.6453,0,-169.458,-84.2593,0,-134.188,-80.0455,0,-202.407,-91.2048,0,-224.929,-89.3333,0,-250.774,-99.6686,0,-253.698,-98.1512,-7.87,-270.172,-106.215,0,-267.711,-104.131,-4.57,276.929,-62.7435,-86.61,240.739,-63.0053,-73.15,267.577,-60.039,-63.25,244.778,-49.169,-9.65,228.522,-45.796,-16.51,236.579,-45.9526,0,256.002,-49.7235,-5.84,246.9,-49.46,0,214.954,-43.007,-24.13,-273.699,-96.4893,-3.81,-274.187,-96.1979,0,-272.346,-101.699,-4.83,-274.184,-102.319,0,-86.704,-82.7284,-79.25,-106.621,-80.9666,-78.23,47.381,81.575,0,59.061,93.265,0,-12.059,-74.6352,0,139.891,-68.2642,0,213.513,-60.0741,0,240.934,-65.579,-73.15,223.876,-60.9112,-52.32,223.725,-56.5192,-52.32,261.158,-54.7995,-21.59,-189.204,6.33699,0,-18.918,86.655,6.1,-59.809,52.365,8.13,9.791,100.885,3.56,39.761,101.895,1.27,38.491,42.715,9.91,13.851,71.925,6.1,-1.138,50.585,11.68,24.522,83.605,3.56,-237.645,-30.669,7.62,-217.23,-15.036,13.97,-190.95,3.68199,5.33,-190.112,1.56599,13.97,-151.389,22.822,18.29,-106.84,40.524,22.35,-62.859,37.385,24.64,-4.68901,35.855,26.67,51.441,23.915,20.32,106.312,12.011,11.68,146.393,-8.34801,14.73,172.586,-21.01,11.94,196.995,-29.125,7.87,215.823,-32.396,9.65,220.317,-38.998,7.37,-193.17,-4.552,22.35,-177.07,-7.164,32.77,-146.218,8.37399,29.97,-107.888,21.756,32,-62.859,19.605,35.81,-12.309,18.335,34.04,48.141,10.455,28.45,105.971,4.41499,18.29,-199.782,-16.746,31.75,-189.783,-19.103,36.58,-207.965,-23.201,27.43,-225.578,-38.816,20.83,-240.927,-51.8097,10.16,-198.856,-23.958,30.99,-188.331,-29.167,35.81,-243.332,-59.2561,13.97,-270.66,-87.5703,7.37,-265.787,-90.2731,7.37,-237.294,-69.441,14.99,-247.801,-57.8612,5.08,-275.789,-90.9673,4.06,-209.083,-39.675,30.73,-201.871,-29.567,30.73,-209.867,-36.8,30.48,-222.875,-43.115,26.42,-220.028,-48.6996,25.91,-259.543,-91.8055,8.38,-233.813,-73.5535,16.26,-214.355,-60.1386,25.91,-204.234,-45.6871,34.54,-212.286,-65.9098,27.43,-182.104,-55.4231,34.8,-198.729,-40.786,34.8,-195.939,-31.846,34.54,-183.16,-43.615,38.61,-255.978,-94.9114,10.92,-232.719,-78.7419,18.29,-194.414,-59.4977,31.75,-210.018,-87.7627,17.02,-173.802,-81.3496,22.35,-232.505,-82.3319,17.27,-227.551,-87.0784,10.16,-142.74,-72.4613,35.05,-143.683,-62.4388,43.18,-138.15,-32.564,49.28,-178.77,-42.956,40.39,-172.235,-25.658,40.13,-170.146,-12.837,36.58,-139.483,-8.75201,42.67,-97.476,-27.796,51.05,-107.292,-1.744,46.23,-53.209,-30.945,51.05,-58.289,-12.145,48.01,-8.248,-30.695,49.02,-10.278,-7.065,46.23,45.091,-40.085,44.7,45.601,-13.165,43.94,103.132,-41.349,28.45,104.428,-16.842,33.02,140.785,-48.174,21.84,142.888,-23.631,23.37,168.47,-48.4858,14.22,170.176,-33.299,13.97,186.651,-50.2548,10.67,190.176,-37.899,9.91,214.231,-39.981,18.29,-104.494,-60.0859,41.15,-51.679,-64.9852,37.59,-13.839,-62.9452,38.1,34.421,-65.4852,30.99,99.745,-62.3666,17.27,142.447,-66.0489,9.65,166.932,-61.2393,7.11,197.22,-60.0188,5.59,211.268,-58.5942,11.94,-118.661,-77.4442,71.37,-117.672,-75.6501,73.66,-94.723,-69.5026,64.52,-72.446,-80.8209,77.22,-106.888,-79.097,80.01,-86.848,-81.8791,80.77,-253.698,-98.1512,7.87,-267.711,-104.131,4.57,267.577,-60.039,63.25,240.739,-63.0053,73.15,276.929,-62.7435,86.61,228.522,-45.796,16.51,244.778,-49.169,9.65,256.002,-49.7235,5.84,214.954,-43.007,24.13,-273.699,-96.4893,3.81,-272.346,-101.699,4.83,-106.621,-80.9666,78.23,-86.704,-82.7284,79.25,223.725,-56.5192,52.32,223.876,-60.9112,52.32,240.934,-65.579,73.15,261.158,-54.7995,21.59,-44.9192,38.3501,-8.13,-50.2492,39.11,0,-11.6492,73.9101,0,-4.0292,72.64,-6.1,21.3708,89.91,0,24.6808,86.8701,-3.56,52.8709,92.2,0,54.6509,87.88,-1.27,70.9009,87.3701,0,53.3809,28.7,-9.91,52.8709,46.7301,0,63.5409,21.84,0,13.7508,36.57,-11.68,28.7409,57.9101,-6.1,39.4109,69.59,-3.56,-214.37,-9.709,0,-221.846,-15.5239,-7.62,-227.869,-17.5109,0,-193.31,0.150703,0,-198.687,-4.8381,-13.97,-170.04,8.4533,-5.33,-164.363,11.8894,0,-127.722,27.055,0,-129.905,21.3163,-18.29,-169.621,6.2233,-13.97,-85.1861,39.428,0,-86.6881,34.2794,-22.35,-47.9692,23.37,-24.64,10.2008,21.84,-26.67,66.3309,9.9,-20.32,114.118,6.9605,-11.68,113.16,11.0842,0,148.859,8.9437,0,152.678,-2.121,-14.73,171.384,11.0823,0,179.82,-2.1085,-11.94,193.495,15.4768,0,203.488,4.9549,-7.87,211.83,20.1639,0,219.173,14.9779,-9.65,230.069,18.5903,0,226.759,13.5161,-7.37,-173.623,0.75,-22.35,-158.647,-4.5872,-32.77,-126.869,6.3294,-29.97,-89.1395,15.6575,-32,-47.9692,5.59,-35.81,2.5808,4.32,-34.04,63.0309,-3.56,-28.45,115.172,-0.560097,-18.29,-172.989,-14.1689,-36.58,-182.241,-10.0034,-31.75,-191.431,-14.7299,-27.43,-211.956,-26.2349,-20.83,-230.148,-35.2539,-10.16,-173.382,-24.3299,-35.81,-182.72,-17.2579,-30.99,-234.379,-41.8749,-13.97,-230.824,-53.2509,-14.99,-265.323,-65.7619,-7.37,-269.53,-61.7589,-7.37,-275.743,-63.4989,-4.06,-276.428,-61.6079,0,-241.975,-40.6069,0,-238.483,-39.3919,-5.08,-196.064,-27.6559,-30.48,-186.752,-22.1789,-30.73,-195.882,-30.6309,-30.73,-210.254,-31.0309,-26.42,-208.666,-37.1109,-25.91,-228.288,-58.0969,-16.26,-259.342,-69.0049,-8.38,-205.474,-49.5209,-25.91,-192.292,-37.5079,-34.54,-171.859,-51.2809,-34.8,-204.62,-55.6069,-27.43,-185.84,-33.7959,-34.8,-181.365,-25.5569,-34.54,-170.829,-39.4709,-38.61,-228.423,-63.4019,-18.29,-256.516,-72.9869,-10.92,-207.002,-77.4509,-17.02,-185.127,-52.9949,-31.75,-167.84,-78.2769,-22.35,-225.091,-72.7539,-10.16,-229.071,-66.9399,-17.27,-133.553,-64.2139,-43.18,-133.918,-74.2739,-35.05,-166.314,-39.5879,-40.39,-124.082,-35.2919,-49.28,-156.943,-23.6179,-40.13,-152.864,-11.2916,-36.58,-122.497,-11.4953,-42.67,-90.4839,-7.8107,-46.23,-82.8456,-34.5569,-51.05,-43.3992,-26.1599,-48.01,-38.3192,-44.9599,-51.05,4.6108,-21.0799,-46.23,6.6408,-44.7099,-49.02,60.4909,-27.1799,-43.94,59.9809,-54.0999,-44.7,117.636,-21.7149,-33.02,120.947,-46.0389,-28.45,155.384,-17.5349,-23.37,162.792,-41.0489,-21.84,183.998,-13.9029,-13.97,190.265,-27.8559,-14.22,203.392,-6.2522,-9.91,207.767,-18.3949,-10.67,223.159,8.3645,-18.29,-92.6284,-66.1809,-41.15,-36.7892,-78.9999,-37.59,1.0508,-76.9599,-38.1,49.3109,-79.4999,-30.99,121.1,-67.3769,-17.27,171.837,-56.7449,-9.65,195.473,-39.6469,-7.11,223.047,-18.8189,-5.59,233.698,-7.2368,-11.94,-107.939,-68.9429,-73.66,-109.174,-70.6239,-71.37,-83.1762,-64.8699,-64.52,-60.2597,-77.5359,-77.22,-75.7239,-77.7709,-80.77,-96.8564,-73.4239,-80.01,-40.3492,-92.1999,0,-92.7342,-82.1339,0,47.0309,-90.4299,0,127.717,-69.1159,0,196.054,-44.1779,0,225.241,-19.1009,0,-163.77,-81.8899,0,-125.906,-82.9039,0,-199.76,-82.4539,0,-222.9,-75.5739,0,-252.398,-79.0009,0,-255.032,-76.7379,-7.87,-274.414,-79.7719,0,-271.253,-78.5029,-4.57,277.433,48.8188,-86.61,258.132,14.5177,-73.15,270.88,41.0393,-63.25,249.887,26.3978,-9.65,237.134,15.1495,-16.51,242.456,21.535,0,256.63,35.8549,-5.84,251.355,28.045,0,225.737,6.7142,-24.13,-275.222,-69.4079,-3.81,-275.637,-68.9829,0,-275.351,-74.7999,-4.83,-277.432,-74.8429,0,-75.6284,-78.6279,-79.25,-96.7464,-75.3099,-78.23,62.2709,67.56,0,73.9509,79.25,0,2.8308,-88.6499,0,169.884,-59.9439,0,236.499,-6.5329,0,260.278,13.1461,-73.15,244.946,1.2884,-52.32,241.616,4.1116,-52.32,263.392,37.7359,-21.59,-167.924,10.7602,0,-4.0292,72.64,6.1,-44.9192,38.3501,8.13,24.6808,86.8701,3.56,54.6509,87.88,1.27,53.3809,28.7,9.91,28.7409,57.9101,6.1,13.7508,36.57,11.68,39.4109,69.59,3.56,-221.846,-15.5239,7.62,-198.687,-4.8381,13.97,-170.04,8.4533,5.33,-169.621,6.2233,13.97,-129.905,21.3163,18.29,-86.6881,34.2794,22.35,-47.9692,23.37,24.64,10.2008,21.84,26.67,66.3309,9.9,20.32,114.118,6.9605,11.68,152.678,-2.121,14.73,179.82,-2.1085,11.94,203.488,4.9549,7.87,219.173,14.9779,9.65,226.759,13.5161,7.37,-173.623,0.75,22.35,-158.647,-4.5872,32.77,-126.869,6.3294,29.97,-89.1395,15.6575,32,-47.9692,5.59,35.81,2.5808,4.32,34.04,63.0309,-3.56,28.45,115.172,-0.560097,18.29,-182.241,-10.0034,31.75,-172.989,-14.1689,36.58,-191.431,-14.7299,27.43,-211.956,-26.2349,20.83,-230.148,-35.2539,10.16,-182.72,-17.2579,30.99,-173.382,-24.3299,35.81,-234.379,-41.8749,13.97,-269.53,-61.7589,7.37,-265.323,-65.7619,7.37,-230.824,-53.2509,14.99,-238.483,-39.3919,5.08,-275.743,-63.4989,4.06,-195.882,-30.6309,30.73,-186.752,-22.1789,30.73,-196.064,-27.6559,30.48,-210.254,-31.0309,26.42,-208.666,-37.1109,25.91,-259.342,-69.0049,8.38,-228.288,-58.0969,16.26,-205.474,-49.5209,25.91,-192.292,-37.5079,34.54,-204.62,-55.6069,27.43,-171.859,-51.2809,34.8,-185.84,-33.7959,34.8,-181.365,-25.5569,34.54,-170.829,-39.4709,38.61,-256.516,-72.9869,10.92,-228.423,-63.4019,18.29,-185.127,-52.9949,31.75,-207.002,-77.4509,17.02,-167.84,-78.2769,22.35,-229.071,-66.9399,17.27,-225.091,-72.7539,10.16,-133.918,-74.2739,35.05,-133.553,-64.2139,43.18,-124.082,-35.2919,49.28,-166.314,-39.5879,40.39,-156.943,-23.6179,40.13,-152.864,-11.2916,36.58,-122.497,-11.4953,42.67,-82.8456,-34.5569,51.05,-90.4839,-7.8107,46.23,-38.3192,-44.9599,51.05,-43.3992,-26.1599,48.01,6.6408,-44.7099,49.02,4.6108,-21.0799,46.23,59.9809,-54.0999,44.7,60.4909,-27.1799,43.94,120.947,-46.0389,28.45,117.636,-21.7149,33.02,162.792,-41.0489,21.84,155.384,-17.5349,23.37,190.265,-27.8559,14.22,183.998,-13.9029,13.97,207.767,-18.3949,10.67,203.392,-6.2522,9.91,223.159,8.3645,18.29,-92.6284,-66.1809,41.15,-36.7892,-78.9999,37.59,1.0508,-76.9599,38.1,49.3109,-79.4999,30.99,121.1,-67.3769,17.27,171.837,-56.7449,9.65,195.473,-39.6469,7.11,223.047,-18.8189,5.59,233.698,-7.2368,11.94,-109.174,-70.6239,71.37,-107.939,-68.9429,73.66,-83.1762,-64.8699,64.52,-60.2597,-77.5359,77.22,-96.8564,-73.4239,80.01,-75.7239,-77.7709,80.77,-255.032,-76.7379,7.87,-271.253,-78.5029,4.57,270.88,41.0393,63.25,258.132,14.5177,73.15,277.433,48.8188,86.61,237.134,15.1495,16.51,249.887,26.3978,9.65,256.63,35.8549,5.84,225.737,6.7142,24.13,-275.222,-69.4079,3.81,-275.351,-74.7999,4.83,-96.7464,-75.3099,78.23,-75.6284,-78.6279,79.25,241.616,4.1116,52.32,244.946,1.2884,52.32,260.278,13.1461,73.15,263.392,37.7359,21.59], Java.type("float[]"))))
        .addChild(new ROUTEObject().setFromNode("ci").setFromField("value_changed").setToNode("pointList").setToField("set_point"))
        .addChild(new ROUTEObject().setFromNode("si").setFromField("value_changed").setToNode("ci").setToField("set_fraction"))
        .addChild(new ROUTEObject().setFromNode("ts").setFromField("fraction_changed").setToNode("si").setToField("set_fraction")))      ;
    X3D0.toFileX3D("flipp.new.x3d");
