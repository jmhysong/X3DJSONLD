load('X3Dautoclass.js');
var ConfigurationProperties = Packages.org.web3d.x3d.jsail.ConfigurationProperties;
ConfigurationProperties.showDefaultAttributes = false;
ConfigurationProperties.xsltEngine = ConfigurationProperties.XSLT_ENGINE_nativeJava;
ConfigurationProperties.deleteIntermediateFiles = false;
ConfigurationProperties.setStripTrailingZeroes(true);
      var X3D0 =  new X3DObject().setProfile("Immersive").setVersion("3.3")
      .setHead(new headObject()
        .addMeta(new metaObject().setName("title").setContent("bub.x3d"))
        .addMeta(new metaObject().setName("creator").setContent("John Carlson"))
        .addMeta(new metaObject().setName("description").setContent("3 prismatic spheres"))
        .addMeta(new metaObject().setName("generator").setContent("X3D-Edit, https://savage.nps.edu/X3D-Edit"))
        .addMeta(new metaObject().setName("identifier").setContent("http://coderextreme.net/X3DJSONLD/bub.x3d"))
        .addMeta(new metaObject().setName("translated").setContent("08 May 2017"))
        .addMeta(new metaObject().setName("generator").setContent("X3dToJson.xslt, http://www.web3d.org/x3d/stylesheets/X3dToJson.html"))
        .addMeta(new metaObject().setName("reference").setContent("X3D JSON encoding: http://www.web3d.org/wiki/index.php/X3D_JSON_Encoding"))
        .addMeta(new metaObject().setName("translated").setContent("8 May 2017"))
        .addMeta(new metaObject().setName("generator").setContent("X3DJSONLD: https://github.com/coderextreme/X3DJSONLD")))
      .setScene(new SceneObject()
        .addChild(new NavigationInfoObject())
        .addChild(new BackgroundObject().setBackUrl(Java.to(["cubemap/all_probes/stpeters_cross/stpeters_back.png","http://coderextreme.net/X3DJSONLD/cubemap/all_probes/stpeters_cross/stpeters_back.png"], Java.type("java.lang.String[]"))).setBottomUrl(Java.to(["cubemap/all_probes/stpeters_cross/stpeters_bottom.png","http://coderextreme.net/X3DJSONLD/cubemap/all_probes/stpeters_cross/stpeters_bottom.png"], Java.type("java.lang.String[]"))).setFrontUrl(Java.to(["cubemap/all_probes/stpeters_cross/stpeters_front.png","http://coderextreme.net/X3DJSONLD/cubemap/all_probes/stpeters_cross/stpeters_front.png"], Java.type("java.lang.String[]"))).setLeftUrl(Java.to(["cubemap/all_probes/stpeters_cross/stpeters_left.png","http://coderextreme.net/X3DJSONLD/cubemap/all_probes/stpeters_cross/stpeters_left.png"], Java.type("java.lang.String[]"))).setRightUrl(Java.to(["cubemap/all_probes/stpeters_cross/stpeters_right.png","http://coderextreme.net/X3DJSONLD/cubemap/all_probes/stpeters_cross/stpeters_right.png"], Java.type("java.lang.String[]"))).setTopUrl(Java.to(["cubemap/all_probes/stpeters_cross/stpeters_top.png","http://coderextreme.net/X3DJSONLD/cubemap/all_probes/stpeters_cross/stpeters_top.png"], Java.type("java.lang.String[]"))))
        .addChild(new TransformObject()
          .addChild(new ShapeObject()
            .setAppearance(new AppearanceObject()
              .setMaterial(new MaterialObject().setDiffuseColor(Java.to([0.7,0.7,0.7], Java.type("float[]"))).setSpecularColor(Java.to([0.5,0.5,0.5], Java.type("float[]"))))
              .setTexture(new ComposedCubeMapTextureObject().setDEF("texture")
                .setBack(new ImageTextureObject().setUrl(Java.to(["cubemap/all_probes/stpeters_cross/stpeters_back.png","http://coderextreme.net/X3DJSONLD/cubemap/all_probes/stpeters_cross/stpeters_back.png"], Java.type("java.lang.String[]"))))
                .setBottom(new ImageTextureObject().setUrl(Java.to(["cubemap/all_probes/stpeters_cross/stpeters_bottom.png","http://coderextreme.net/X3DJSONLD/cubemap/all_probes/stpeters_cross/stpeters_bottom.png"], Java.type("java.lang.String[]"))))
                .setFront(new ImageTextureObject().setUrl(Java.to(["cubemap/all_probes/stpeters_cross/stpeters_front.png","http://coderextreme.net/X3DJSONLD/cubemap/all_probes/stpeters_cross/stpeters_front.png"], Java.type("java.lang.String[]"))))
                .setLeft(new ImageTextureObject().setUrl(Java.to(["cubemap/all_probes/stpeters_cross/stpeters_left.png","http://coderextreme.net/X3DJSONLD/cubemap/all_probes/stpeters_cross/stpeters_left.png"], Java.type("java.lang.String[]"))))
                .setRight(new ImageTextureObject().setUrl(Java.to(["cubemap/all_probes/stpeters_cross/stpeters_right.png","http://coderextreme.net/X3DJSONLD/cubemap/all_probes/stpeters_cross/stpeters_right.png"], Java.type("java.lang.String[]"))))
                .setTop(new ImageTextureObject().setUrl(Java.to(["cubemap/all_probes/stpeters_cross/stpeters_top.png","http://coderextreme.net/X3DJSONLD/cubemap/all_probes/stpeters_cross/stpeters_top.png"], Java.type("java.lang.String[]")))))
              .addShaders(new ComposedShaderObject().setLanguage("GLSL")
                .addField(new fieldObject().setType(fieldObject.TYPE_SFINT32).setName("xxxcube").setAccessType(fieldObject.ACCESSTYPE_INPUTOUTPUT).setValue("0"))
                .addField(new fieldObject().setType(fieldObject.TYPE_SFNODE).setName("cube").setAccessType(fieldObject.ACCESSTYPE_INPUTOUTPUT)
                  .addChild(new ComposedCubeMapTextureObject().setUSE("texture")))
                .addField(new fieldObject().setType(fieldObject.TYPE_SFVEC3F).setName("chromaticDispertion").setAccessType(fieldObject.ACCESSTYPE_INPUTOUTPUT).setValue("0.98 1 1.033"))
                .addField(new fieldObject().setType(fieldObject.TYPE_SFFLOAT).setName("bias").setAccessType(fieldObject.ACCESSTYPE_INPUTOUTPUT).setValue("0.5"))
                .addField(new fieldObject().setType(fieldObject.TYPE_SFFLOAT).setName("scale").setAccessType(fieldObject.ACCESSTYPE_INPUTOUTPUT).setValue("0.5"))
                .addField(new fieldObject().setType(fieldObject.TYPE_SFFLOAT).setName("power").setAccessType(fieldObject.ACCESSTYPE_INPUTOUTPUT).setValue("2"))
                .addField(new fieldObject().setType(fieldObject.TYPE_SFFLOAT).setName("a").setAccessType(fieldObject.ACCESSTYPE_INPUTONLY).setValue("0.5"))
                .addField(new fieldObject().setType(fieldObject.TYPE_SFFLOAT).setName("b").setAccessType(fieldObject.ACCESSTYPE_INPUTONLY).setValue("0.5"))
                .addField(new fieldObject().setType(fieldObject.TYPE_SFFLOAT).setName("c").setAccessType(fieldObject.ACCESSTYPE_INPUTONLY).setValue("3"))
                .addField(new fieldObject().setType(fieldObject.TYPE_SFFLOAT).setName("d").setAccessType(fieldObject.ACCESSTYPE_INPUTONLY).setValue("3"))
                .addField(new fieldObject().setType(fieldObject.TYPE_SFFLOAT).setName("tdelta").setAccessType(fieldObject.ACCESSTYPE_INPUTONLY).setValue("0.5"))
                .addField(new fieldObject().setType(fieldObject.TYPE_SFFLOAT).setName("pdelta").setAccessType(fieldObject.ACCESSTYPE_INPUTONLY).setValue("0.5"))
                .addParts(new ShaderPartObject().setType("VERTEX").setUrl(Java.to(["x3dom_flowers_chromatic.vs","http://coderextreme.net/X3DJSONLD/x3dom.vs"], Java.type("java.lang.String[]"))))
                .addParts(new ShaderPartObject().setType("FRAGMENT").setUrl(Java.to(["pc_bubbles.fs","http://coderextreme.net/X3DJSONLD/pc_bubbles.fs"], Java.type("java.lang.String[]"))))))
            .setGeometry(new SphereObject().setRadius(20))))
        .addChild(new TransformObject().setTranslation(Java.to([-2,0,0], Java.type("float[]")))
          .addChild(new ShapeObject()
            .setAppearance(new AppearanceObject()
              .setMaterial(new MaterialObject().setDiffuseColor(Java.to([0.7,0.7,0.7], Java.type("float[]"))).setSpecularColor(Java.to([0.5,0.5,0.5], Java.type("float[]"))))
              .setTexture(new ComposedCubeMapTextureObject()
                .setBack(new ImageTextureObject().setUrl(Java.to(["cubemap/all_probes/stpeters_cross/stpeters_back.png","http://coderextreme.net/X3DJSONLD/cubemap/all_probes/stpeters_cross/stpeters_back.png"], Java.type("java.lang.String[]"))))
                .setBottom(new ImageTextureObject().setUrl(Java.to(["cubemap/all_probes/stpeters_cross/stpeters_bottom.png","http://coderextreme.net/X3DJSONLD/cubemap/all_probes/stpeters_cross/stpeters_bottom.png"], Java.type("java.lang.String[]"))))
                .setFront(new ImageTextureObject().setUrl(Java.to(["cubemap/all_probes/stpeters_cross/stpeters_front.png","http://coderextreme.net/X3DJSONLD/cubemap/all_probes/stpeters_cross/stpeters_front.png"], Java.type("java.lang.String[]"))))
                .setLeft(new ImageTextureObject().setUrl(Java.to(["cubemap/all_probes/stpeters_cross/stpeters_left.png","http://coderextreme.net/X3DJSONLD/cubemap/all_probes/stpeters_cross/stpeters_left.png"], Java.type("java.lang.String[]"))))
                .setRight(new ImageTextureObject().setUrl(Java.to(["cubemap/all_probes/stpeters_cross/stpeters_right.png","http://coderextreme.net/X3DJSONLD/cubemap/all_probes/stpeters_cross/stpeters_right.png"], Java.type("java.lang.String[]"))))
                .setTop(new ImageTextureObject().setUrl(Java.to(["cubemap/all_probes/stpeters_cross/stpeters_top.png","http://coderextreme.net/X3DJSONLD/cubemap/all_probes/stpeters_cross/stpeters_top.png"], Java.type("java.lang.String[]")))))
              .addShaders(new ComposedShaderObject().setLanguage("GLSL")
                .addField(new fieldObject().setType(fieldObject.TYPE_SFINT32).setName("xxxcube").setAccessType(fieldObject.ACCESSTYPE_INPUTOUTPUT).setValue("0"))
                .addField(new fieldObject().setType(fieldObject.TYPE_SFNODE).setName("cube").setAccessType(fieldObject.ACCESSTYPE_INPUTOUTPUT)
                  .addChild(new ComposedCubeMapTextureObject().setUSE("texture")))
                .addField(new fieldObject().setType(fieldObject.TYPE_SFVEC3F).setName("chromaticDispertion").setAccessType(fieldObject.ACCESSTYPE_INPUTOUTPUT).setValue("0.98 1 1.033"))
                .addField(new fieldObject().setType(fieldObject.TYPE_SFFLOAT).setName("bias").setAccessType(fieldObject.ACCESSTYPE_INPUTOUTPUT).setValue("0.5"))
                .addField(new fieldObject().setType(fieldObject.TYPE_SFFLOAT).setName("scale").setAccessType(fieldObject.ACCESSTYPE_INPUTOUTPUT).setValue("0.5"))
                .addField(new fieldObject().setType(fieldObject.TYPE_SFFLOAT).setName("power").setAccessType(fieldObject.ACCESSTYPE_INPUTOUTPUT).setValue("2"))
                .addField(new fieldObject().setType(fieldObject.TYPE_SFFLOAT).setName("a").setAccessType(fieldObject.ACCESSTYPE_INPUTONLY).setValue("0.5"))
                .addField(new fieldObject().setType(fieldObject.TYPE_SFFLOAT).setName("b").setAccessType(fieldObject.ACCESSTYPE_INPUTONLY).setValue("0.5"))
                .addField(new fieldObject().setType(fieldObject.TYPE_SFFLOAT).setName("c").setAccessType(fieldObject.ACCESSTYPE_INPUTONLY).setValue("3"))
                .addField(new fieldObject().setType(fieldObject.TYPE_SFFLOAT).setName("d").setAccessType(fieldObject.ACCESSTYPE_INPUTONLY).setValue("3"))
                .addField(new fieldObject().setType(fieldObject.TYPE_SFFLOAT).setName("tdelta").setAccessType(fieldObject.ACCESSTYPE_INPUTONLY).setValue("0.5"))
                .addField(new fieldObject().setType(fieldObject.TYPE_SFFLOAT).setName("pdelta").setAccessType(fieldObject.ACCESSTYPE_INPUTONLY).setValue("0.5"))
                .addParts(new ShaderPartObject().setType("VERTEX").setUrl(Java.to(["x3dom_flowers_chromatic.vs","http://coderextreme.net/X3DJSONLD/x3dom.vs"], Java.type("java.lang.String[]"))))
                .addParts(new ShaderPartObject().setType("FRAGMENT").setUrl(Java.to(["pc_bubbles.fs","http://coderextreme.net/X3DJSONLD/pc_bubbles.fs"], Java.type("java.lang.String[]"))))))
            .setGeometry(new SphereObject().setRadius(20))))
        .addChild(new TransformObject().setTranslation(Java.to([2,0,0], Java.type("float[]")))
          .addChild(new ShapeObject()
            .setAppearance(new AppearanceObject()
              .setMaterial(new MaterialObject().setDiffuseColor(Java.to([0.7,0.7,0.7], Java.type("float[]"))).setSpecularColor(Java.to([0.5,0.5,0.5], Java.type("float[]"))))
              .setTexture(new ComposedCubeMapTextureObject()
                .setBack(new ImageTextureObject().setUrl(Java.to(["cubemap/all_probes/stpeters_cross/stpeters_back.png","http://coderextreme.net/X3DJSONLD/cubemap/all_probes/stpeters_cross/stpeters_back.png"], Java.type("java.lang.String[]"))))
                .setBottom(new ImageTextureObject().setUrl(Java.to(["cubemap/all_probes/stpeters_cross/stpeters_bottom.png","http://coderextreme.net/X3DJSONLD/cubemap/all_probes/stpeters_cross/stpeters_bottom.png"], Java.type("java.lang.String[]"))))
                .setFront(new ImageTextureObject().setUrl(Java.to(["cubemap/all_probes/stpeters_cross/stpeters_front.png","http://coderextreme.net/X3DJSONLD/cubemap/all_probes/stpeters_cross/stpeters_front.png"], Java.type("java.lang.String[]"))))
                .setLeft(new ImageTextureObject().setUrl(Java.to(["cubemap/all_probes/stpeters_cross/stpeters_left.png","http://coderextreme.net/X3DJSONLD/cubemap/all_probes/stpeters_cross/stpeters_left.png"], Java.type("java.lang.String[]"))))
                .setRight(new ImageTextureObject().setUrl(Java.to(["cubemap/all_probes/stpeters_cross/stpeters_right.png","http://coderextreme.net/X3DJSONLD/cubemap/all_probes/stpeters_cross/stpeters_right.png"], Java.type("java.lang.String[]"))))
                .setTop(new ImageTextureObject().setUrl(Java.to(["cubemap/all_probes/stpeters_cross/stpeters_top.png","http://coderextreme.net/X3DJSONLD/cubemap/all_probes/stpeters_cross/stpeters_top.png"], Java.type("java.lang.String[]")))))
              .addShaders(new ComposedShaderObject().setLanguage("GLSL")
                .addField(new fieldObject().setType(fieldObject.TYPE_SFINT32).setName("xxxcube").setAccessType(fieldObject.ACCESSTYPE_INPUTOUTPUT).setValue("0"))
                .addField(new fieldObject().setType(fieldObject.TYPE_SFNODE).setName("cube").setAccessType(fieldObject.ACCESSTYPE_INPUTOUTPUT)
                  .addChild(new ComposedCubeMapTextureObject().setUSE("texture")))
                .addField(new fieldObject().setType(fieldObject.TYPE_SFVEC3F).setName("chromaticDispertion").setAccessType(fieldObject.ACCESSTYPE_INPUTOUTPUT).setValue("0.98 1 1.033"))
                .addField(new fieldObject().setType(fieldObject.TYPE_SFFLOAT).setName("bias").setAccessType(fieldObject.ACCESSTYPE_INPUTOUTPUT).setValue("0.5"))
                .addField(new fieldObject().setType(fieldObject.TYPE_SFFLOAT).setName("scale").setAccessType(fieldObject.ACCESSTYPE_INPUTOUTPUT).setValue("0.5"))
                .addField(new fieldObject().setType(fieldObject.TYPE_SFFLOAT).setName("power").setAccessType(fieldObject.ACCESSTYPE_INPUTOUTPUT).setValue("2"))
                .addField(new fieldObject().setType(fieldObject.TYPE_SFFLOAT).setName("a").setAccessType(fieldObject.ACCESSTYPE_INPUTONLY).setValue("0.5"))
                .addField(new fieldObject().setType(fieldObject.TYPE_SFFLOAT).setName("b").setAccessType(fieldObject.ACCESSTYPE_INPUTONLY).setValue("0.5"))
                .addField(new fieldObject().setType(fieldObject.TYPE_SFFLOAT).setName("c").setAccessType(fieldObject.ACCESSTYPE_INPUTONLY).setValue("3"))
                .addField(new fieldObject().setType(fieldObject.TYPE_SFFLOAT).setName("d").setAccessType(fieldObject.ACCESSTYPE_INPUTONLY).setValue("3"))
                .addField(new fieldObject().setType(fieldObject.TYPE_SFFLOAT).setName("tdelta").setAccessType(fieldObject.ACCESSTYPE_INPUTONLY).setValue("0.5"))
                .addField(new fieldObject().setType(fieldObject.TYPE_SFFLOAT).setName("pdelta").setAccessType(fieldObject.ACCESSTYPE_INPUTONLY).setValue("0.5"))
                .addParts(new ShaderPartObject().setType("VERTEX").setUrl(Java.to(["x3dom_flowers_plain.vs","http://coderextreme.net/X3DJSONLD/x3dom_flowers_plain.vs"], Java.type("java.lang.String[]"))))
                .addParts(new ShaderPartObject().setType("FRAGMENT").setUrl(Java.to(["plain.fs","http://coderextreme.net/X3DJSONLD/pc_bubbles.fs"], Java.type("java.lang.String[]"))))))
            .setGeometry(new SphereObject().setRadius(20)))))      ;
    X3D0.toFileX3D("x3domflower.new.x3d");
