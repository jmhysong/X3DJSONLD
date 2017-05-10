load('X3Dautoclass.js');
var ConfigurationProperties = Packages.org.web3d.x3d.jsail.ConfigurationProperties;
ConfigurationProperties.showDefaultAttributes = false;
ConfigurationProperties.xsltEngine = ConfigurationProperties.XSLT_ENGINE_nativeJava;
ConfigurationProperties.deleteIntermediateFiles = false;
ConfigurationProperties.setStripTrailingZeroes(true);
      var X3D0 =  new X3DObject().setProfile("Interchange").setVersion("3.3")
      .setHead(new headObject()
        .addMeta(new metaObject().setName("title").setContent("Table5_18PixelTexture"))
        .addMeta(new metaObject().setName("description").setContent("PixelTexture example for Table 5.18"))
        .addMeta(new metaObject().setName("creator").setContent("Leonard Daly and Don Brutzman"))
        .addMeta(new metaObject().setName("created").setContent("18 December 2006"))
        .addMeta(new metaObject().setName("modified").setContent("2 April 2017"))
        .addMeta(new metaObject().setName("reference").setContent("http://X3dGraphics.com"))
        .addMeta(new metaObject().setName("reference").setContent("http://www.web3d.org/x3d/content/examples/X3dResources.html"))
        .addMeta(new metaObject().setName("rights").setContent("Copyright 2006, Daly Realism and Don Brutzman"))
        .addMeta(new metaObject().setName("subject").setContent("X3D, PixelTexture"))
        .addMeta(new metaObject().setName("identifier").setContent("http://X3dGraphics.com/examples/X3dForWebAuthors/Chapter05AppearanceMaterialTextures/Table5_18PixelTexture"))
        .addMeta(new metaObject().setName("generator").setContent("X3D-Edit 3.3, https://savage.nps.edu/X3D-Edit"))
        .addMeta(new metaObject().setName("license").setContent("../license.html"))
        .addMeta(new metaObject().setName("translated").setContent("10 May 2017"))
        .addMeta(new metaObject().setName("generator").setContent("X3dToJson.xslt, http://www.web3d.org/x3d/stylesheets/X3dToJson.html"))
        .addMeta(new metaObject().setName("reference").setContent("X3D JSON encoding: http://www.web3d.org/wiki/index.php/X3D_JSON_Encoding"))
        .addMeta(new metaObject().setName("translated").setContent("10 May 2017"))
        .addMeta(new metaObject().setName("generator").setContent("X3DJSONLD: https://github.com/coderextreme/X3DJSONLD")))
      .setScene(new SceneObject()
        .addChild(new BackgroundObject().setSkyColor(Java.to([0,0,1], Java.type("float[]"))))
        .addChild(new TransformObject().setDEF("Checkerboard").setTranslation(Java.to([0,0,-10], Java.type("float[]")))
          .addChild(new ShapeObject()
            .setAppearance(new AppearanceObject()
              .setTextureTransform(new TextureTransformObject().setScale(Java.to([500,500], Java.type("float[]"))))
              .setTexture(new PixelTextureObject().setImage(Java.to([2,2,3,15119869,16767927,16767927,15119869], Java.type("int[]")))))
            .setGeometry(new BoxObject().setSize(Java.to([1000,1000,0.01], Java.type("float[]"))))))
        .addChild(new ViewpointObject().setDescription("View All").setPosition(Java.to([0,0,20], Java.type("float[]"))))
        .addChild(new ViewpointObject().setDescription("Empty Image").setPosition(Java.to([0,5,5], Java.type("float[]"))))
        .addChild(new TransformObject().setDEF("EmptyImage").setRotation(Java.to([1,1,0,1], Java.type("float[]"))).setTranslation(Java.to([0,5,0], Java.type("float[]")))
          .addChild(new ShapeObject()
            .setAppearance(new AppearanceObject()
              .setTexture(new PixelTextureObject()))
            .setGeometry(new BoxObject().setDEF("StandardBox"))))
        .addChild(new ViewpointObject().setDescription("Black and white PixelTexture").setPosition(Java.to([-5,0,5], Java.type("float[]"))))
        .addChild(new TransformObject().setDEF("BW").setRotation(Java.to([1,1,0,1], Java.type("float[]"))).setTranslation(Java.to([-5,0,0], Java.type("float[]")))
          .addChild(new ShapeObject()
            .setAppearance(new AppearanceObject()
              .setTexture(new PixelTextureObject().setImage(Java.to([1,2,1,255,0], Java.type("int[]")))))
            .setGeometry(new BoxObject().setUSE("StandardBox"))))
        .addChild(new ViewpointObject().setDescription("Black and white with Alpha PixelTexture").setPosition(Java.to([5,0,5], Java.type("float[]"))))
        .addChild(new TransformObject().setDEF("AlphaBW").setRotation(Java.to([1,1,0,1], Java.type("float[]"))).setTranslation(Java.to([5,0,0], Java.type("float[]")))
          .addChild(new ShapeObject()
            .setAppearance(new AppearanceObject()
              .setTexture(new PixelTextureObject().setImage(Java.to([2,1,2,52479,8823], Java.type("int[]")))))
            .setGeometry(new BoxObject().setUSE("StandardBox"))))
        .addChild(new ViewpointObject().setDescription("RGB PixelTexture").setPosition(Java.to([-5,-5,5], Java.type("float[]"))))
        .addChild(new TransformObject().setDEF("RGB").setRotation(Java.to([1,1,0,1], Java.type("float[]"))).setTranslation(Java.to([-5,-5,0], Java.type("float[]")))
          .addChild(new ShapeObject()
            .setAppearance(new AppearanceObject()
              .setTexture(new PixelTextureObject().setImage(Java.to([2,4,3,16711680,65280,0,0,0,0,16777215,16776960], Java.type("int[]")))))
            .setGeometry(new BoxObject().setUSE("StandardBox"))))
        .addChild(new ViewpointObject().setDescription("RGB with Alpha PixelTexture").setPosition(Java.to([5,-5,5], Java.type("float[]"))))
        .addChild(new TransformObject().setDEF("AlphaRGB").setRotation(Java.to([1,1,0,1], Java.type("float[]"))).setTranslation(Java.to([5,-5,0], Java.type("float[]")))
          .addChild(new ShapeObject()
            .setAppearance(new AppearanceObject()
              .setTexture(new PixelTextureObject().setImage(Java.to([3,2,4,4278190335,16711935,65535,4278190207,16711807,65407], Java.type("int[]")))))
            .setGeometry(new BoxObject().setUSE("StandardBox")))))      ;
    X3D0.toFileX3D("Table5_18PixelTexture.new.x3d");
