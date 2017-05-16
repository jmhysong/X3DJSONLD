load('X3Dautoclass.js');
var ConfigurationProperties = Packages.org.web3d.x3d.jsail.ConfigurationProperties;
ConfigurationProperties.showDefaultAttributes = false;
ConfigurationProperties.xsltEngine = ConfigurationProperties.XSLT_ENGINE_nativeJava;
ConfigurationProperties.deleteIntermediateFiles = false;
ConfigurationProperties.setStripTrailingZeroes(true);
      var X3D0 =  new X3DObject().setProfile("Immersive").setVersion("3.3")
      .setHead(new headObject()
        .addMeta(new metaObject().setName("title").setContent("PixelTextureComponentExamples.x3d"))
        .addMeta(new metaObject().setName("description").setContent("This example shows the five PixelTexture components, with 0 to 4 components each, shown in Table 5-18."))
        .addMeta(new metaObject().setName("creator").setContent("Leonard Daly and Don Brutzman"))
        .addMeta(new metaObject().setName("created").setContent("25 August 2008"))
        .addMeta(new metaObject().setName("modified").setContent("7 January 2014"))
        .addMeta(new metaObject().setName("reference").setContent("http://X3dGraphics.com"))
        .addMeta(new metaObject().setName("reference").setContent("X3D for Web Authors, Table 5.18"))
        .addMeta(new metaObject().setName("reference").setContent("http://www.web3d.org/x3d/content/examples/X3dResources.html"))
        .addMeta(new metaObject().setName("rights").setContent("Copyright (c) 2006, Daly Realism and Don Brutzman"))
        .addMeta(new metaObject().setName("subject").setContent("X3D book, X3D graphics, X3D-Edit, http://www.x3dGraphics.com"))
        .addMeta(new metaObject().setName("identifier").setContent("http://X3dGraphics.com/examples/X3dForWebAuthors/Chapter05AppearanceMaterialTextures/PixelTextureComponentExamples.x3d"))
        .addMeta(new metaObject().setName("generator").setContent("X3D-Edit 3.3, https://savage.nps.edu/X3D-Edit"))
        .addMeta(new metaObject().setName("license").setContent("../license.html")))
      .setScene(new SceneObject()
        .addChild(new BackgroundObject().setSkyColor(Java.to([0.1,0.1,0.4], Java.type("float[]"))))
        .addChild(new ViewpointObject().setDescription("Table 5.18 SFImage component examples").setPosition(Java.to([0,0,14], Java.type("float[]"))))
        .addChild(new TransformObject().setTranslation(Java.to([-6,0,0], Java.type("float[]")))
          .addChild(new ShapeObject()
            .setAppearance(new AppearanceObject()
              .setTexture(new PixelTextureObject().setDEF("ZeroComponents")))
            .setGeometry(new BoxObject()))
          .addChild(new TransformObject().setTranslation(Java.to([0,-2,0], Java.type("float[]")))
            .addChild(new ShapeObject()
              .setGeometry(new TextObject().setString(Java.to(["0"], Java.type("java.lang.String[]")))
                .setFontStyle(new FontStyleObject().setDEF("CenterJustify").setJustify(Java.to(["MIDDLE","MIDDLE"], Java.type("java.lang.String[]")))))
              .setAppearance(new AppearanceObject().setDEF("TextMaterial")
                .setMaterial(new MaterialObject().setDiffuseColor(Java.to([1,1,1], Java.type("float[]"))))))))
        .addChild(new TransformObject().setTranslation(Java.to([-3,0,0], Java.type("float[]")))
          .addChild(new ShapeObject()
            .setAppearance(new AppearanceObject()
              .setTexture(new PixelTextureObject().setDEF("OneComponent").setImage(Java.to([1,2,1,255,0], Java.type("int[]")))))
            .setGeometry(new BoxObject()))
          .addChild(new TransformObject().setTranslation(Java.to([0,-2,0], Java.type("float[]")))
            .addChild(new ShapeObject()
              .setGeometry(new TextObject().setString(Java.to(["1"], Java.type("java.lang.String[]")))
                .setFontStyle(new FontStyleObject().setUSE("CenterJustify")))
              .setAppearance(new AppearanceObject().setUSE("TextMaterial")))))
        .addChild(new TransformObject()
          .addChild(new ShapeObject()
            .setAppearance(new AppearanceObject()
              .setTexture(new PixelTextureObject().setDEF("TwoComponents").setImage(Java.to([2,1,2,52479,8823], Java.type("int[]")))))
            .setGeometry(new BoxObject()))
          .addChild(new TransformObject().setTranslation(Java.to([0,-2,0], Java.type("float[]")))
            .addChild(new ShapeObject()
              .setGeometry(new TextObject().setString(Java.to(["2"], Java.type("java.lang.String[]")))
                .setFontStyle(new FontStyleObject().setUSE("CenterJustify")))
              .setAppearance(new AppearanceObject().setUSE("TextMaterial")))))
        .addChild(new TransformObject().setTranslation(Java.to([3,0,0], Java.type("float[]")))
          .addChild(new ShapeObject()
            .setAppearance(new AppearanceObject()
              .addComments(new CommentsBlock("note 0x000000 = 0"))
              .setTexture(new PixelTextureObject().setDEF("ThreeComponents").setImage(Java.to([2,4,3,16711680,65280,0,0,0,0,16777215,16776960], Java.type("int[]")))))
            .setGeometry(new BoxObject()))
          .addChild(new TransformObject().setTranslation(Java.to([0,-2,0], Java.type("float[]")))
            .addChild(new ShapeObject()
              .setGeometry(new TextObject().setString(Java.to(["3"], Java.type("java.lang.String[]")))
                .setFontStyle(new FontStyleObject().setUSE("CenterJustify")))
              .setAppearance(new AppearanceObject().setUSE("TextMaterial")))))
        .addChild(new TransformObject().setTranslation(Java.to([6,0,0], Java.type("float[]")))
          .addChild(new ShapeObject()
            .setAppearance(new AppearanceObject()
              .addComments(new CommentsBlock("Erroneous value in book: 1 0 0 255, 0 1 0 255, 0 0 1 255, 1 0 0 127, 0 1 0 127, 0 0 1 127"))
              .setTexture(new PixelTextureObject().setDEF("FourComponents").setImage(Java.to([3,2,4,4278190335,16711935,65535,4278190207,16711807,65407], Java.type("int[]")))))
            .setGeometry(new BoxObject()))
          .addChild(new TransformObject().setTranslation(Java.to([0,-2,0], Java.type("float[]")))
            .addChild(new ShapeObject()
              .setGeometry(new TextObject().setString(Java.to(["4"], Java.type("java.lang.String[]")))
                .setFontStyle(new FontStyleObject().setUSE("CenterJustify")))
              .setAppearance(new AppearanceObject().setUSE("TextMaterial")))))
        .addComments(new CommentsBlock("Background from PixelTextureBW.x3d"))
        .addChild(new TransformObject().setTranslation(Java.to([0,6,-2], Java.type("float[]")))
          .addChild(new ShapeObject()
            .setAppearance(new AppearanceObject()
              .setTexture(new PixelTextureObject().setImage(Java.to([8,8,1,204,0,204,0,204,0,204,0,0,204,0,204,0,204,0,204,204,0,204,0,204,0,204,0,0,204,0,204,0,204,0,204,204,0,204,0,204,0,204,0,0,204,0,204,0,204,0,204,204,0,204,0,204,0,204,0,0,204,0,204,0,204,0,204], Java.type("int[]")))))
            .setGeometry(new BoxObject().setSize(Java.to([16,16,0.1], Java.type("float[]")))))))      ;
    X3D0.toFileX3D("PixelTextureComponentExamples.new.x3d");
