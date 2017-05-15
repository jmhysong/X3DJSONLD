load('X3Dautoclass.js');
var ConfigurationProperties = Packages.org.web3d.x3d.jsail.ConfigurationProperties;
ConfigurationProperties.showDefaultAttributes = false;
ConfigurationProperties.xsltEngine = ConfigurationProperties.XSLT_ENGINE_nativeJava;
ConfigurationProperties.deleteIntermediateFiles = false;
ConfigurationProperties.setStripTrailingZeroes(true);
      var X3D0 =  new X3DObject().setProfile("Immersive").setVersion("3.3")
      .setHead(new headObject()
        .addMeta(new metaObject().setName("title").setContent("ObliqueStrategies.x3d"))
        .addMeta(new metaObject().setName("description").setContent("Text scripting and animation example using Oblique Strategies card set by Brian Eno."))
        .addMeta(new metaObject().setName("creator").setContent("Don Brutzman, John Kelly, Ben Cheng"))
        .addMeta(new metaObject().setName("created").setContent("3 November 2013"))
        .addMeta(new metaObject().setName("modified").setContent("18 October 2015"))
        .addMeta(new metaObject().setName("reference").setContent("oblique.html"))
        .addMeta(new metaObject().setName("reference").setContent("ObliqueStrategies.txt"))
        .addMeta(new metaObject().setName("reference").setContent("ObliqueStrategiesScript.js"))
        .addMeta(new metaObject().setName("reference").setContent("http://music.hyperreal.org/artists/brian_eno/oblique/oblique.html"))
        .addMeta(new metaObject().setName("reference").setContent("http://www.eno-web.co.uk/obliques.html"))
        .addMeta(new metaObject().setName("reference").setContent("http://gothpunk.com/haiku-intro.html"))
        .addMeta(new metaObject().setName("reference").setContent("http://www.rtqe.net/ObliqueStrategies/OSintro.html"))
        .addMeta(new metaObject().setName("reference").setContent("https://en.wikipedia.org/wiki/Oblique_Strategies"))
        .addMeta(new metaObject().setName("subject").setContent("Brian Eno, Oblique Strategies"))
        .addMeta(new metaObject().setName("Image").setContent("images/ObliqueStrategiesEntryScreen.png"))
        .addMeta(new metaObject().setName("audio").setContent("http://translate.google.com/translate_tts?tl=en&q=hello%20X3D"))
        .addMeta(new metaObject().setName("audio").setContent("translate_tts_HelloX3D.mp3"))
        .addMeta(new metaObject().setName("audio").setContent("translate_tts_HelloX3D.wav"))
        .addMeta(new metaObject().setName("TODO").setContent("multiliingual translation parameter"))
        .addMeta(new metaObject().setName("reference").setContent("http://stackoverflow.com/questions/9163988/download-mp3-from-google-translate-text-to-speech"))
        .addMeta(new metaObject().setName("reference").setContent("http://www.greenbot.com/article/2105862/how-to-get-started-with-google-text-to-speech.html"))
        .addMeta(new metaObject().setName("warning").setContent("under development, scene Sound/AudioClip triggering (or retrieved file format) not working"))
        .addMeta(new metaObject().setName("warning").setContent("BSContact error: Script node TextScript: parse error: line 15 \" var strategy = [];"))
        .addMeta(new metaObject().setName("identifier").setContent("http://X3dGraphics.com/examples/X3dForAdvancedModeling/Inspiration/ObliqueStrategies.x3d"))
        .addMeta(new metaObject().setName("generator").setContent("X3D-Edit 3.3, https://savage.nps.edu/X3D-Edit"))
        .addMeta(new metaObject().setName("license").setContent("../license.html"))
        .addMeta(new metaObject().setName("translated").setContent("15 May 2017"))
        .addMeta(new metaObject().setName("generator").setContent("X3dToJson.xslt, http://www.web3d.org/x3d/stylesheets/X3dToJson.html"))
        .addMeta(new metaObject().setName("reference").setContent("X3D JSON encoding: http://www.web3d.org/wiki/index.php/X3D_JSON_Encoding"))
        .addMeta(new metaObject().setName("translated").setContent("15 May 2017"))
        .addMeta(new metaObject().setName("generator").setContent("X3DJSONLD: https://github.com/coderextreme/X3DJSONLD")))
      .setScene(new SceneObject()
        .addChild(new NavigationInfoObject())
        .addChild(new BackgroundObject().setSkyColor(Java.to([0.419608,0.427451,1], Java.type("float[]"))))
        .addChild(new TransformObject().setScale(Java.to([0.4,0.4,0.4], Java.type("float[]"))).setTranslation(Java.to([0,1,0], Java.type("float[]")))
          .addChild(new TouchSensorObject().setDEF("RandomTextClickedSensor").setDescription("Select to see a new strategy"))
          .addChild(new ShapeObject()
            .setGeometry(new TextObject().setString(Java.to(["Oblique Strategies","","(Over One Hundred Worthwhile Dilemmas)","","by Brian Eno and Peter Schmidt"], Java.type("java.lang.String[]")))
              .setFontStyle(new FontStyleObject().setDEF("MessageFont").setFamily(Java.to(["SANS"], Java.type("java.lang.String[]"))).setJustify(Java.to(["MIDDLE","MIDDLE"], Java.type("java.lang.String[]"))).setStyle("BOLD")))
            .setAppearance(new AppearanceObject()
              .setMaterial(new MaterialObject().setDiffuseColor(Java.to([1,1,1], Java.type("float[]"))))))
          .addChild(new TransformObject().setScale(Java.to([10,3,1], Java.type("float[]")))
            .addChild(new ShapeObject().setDEF("HeadlineClickSurface")
              .setGeometry(new IndexedFaceSetObject().setCoordIndex(Java.to([0,1,2,3,-1], Java.type("int[]"))).setSolid(false)
                .setCoord(new CoordinateObject().setPoint(Java.to([1,1,0,1,-1,0,-1,-1,0,-1,1,0], Java.type("float[]")))))
              .setAppearance(new AppearanceObject()
                .setMaterial(new MaterialObject().setAmbientIntensity(0.245763).setDiffuseColor(Java.to([0.34773,0.090909,0.005289], Java.type("float[]"))).setShininess(0.07).setSpecularColor(Java.to([0.336735,0.051091,0.051091], Java.type("float[]"))).setTransparency(0.8))))))
        .addChild(new ScriptObject().setDEF("TextScript").setUrl(Java.to(["./ObliqueStrategiesScript.js"], Java.type("java.lang.String[]")))
          .addComments(new CommentsBlock("initialize() method includes unit test to printAllStrategies() to console"))
          .addComments(new CommentsBlock("TODO insert field definitions here (index string_changed previous next random) and then animate!"))
          .addField(new fieldObject().setType(fieldObject.TYPE_SFINT32).setName("index").setAccessType(fieldObject.ACCESSTYPE_INITIALIZEONLY).setAppinfo("index for active strategy card, -1 means no selection").setValue("0"))
          .addField(new fieldObject().setType(fieldObject.TYPE_MFSTRING).setName("string_changed").setAccessType(fieldObject.ACCESSTYPE_OUTPUTONLY).setAppinfo("latest strategy card value"))
          .addField(new fieldObject().setType(fieldObject.TYPE_MFSTRING).setName("textToSpeechUrl").setAccessType(fieldObject.ACCESSTYPE_OUTPUTONLY).setAppinfo("url to invoke Google Translate"))
          .addField(new fieldObject().setType(fieldObject.TYPE_SFTIME).setName("newCardTime").setAccessType(fieldObject.ACCESSTYPE_OUTPUTONLY).setAppinfo("activate Sound node"))
          .addField(new fieldObject().setType(fieldObject.TYPE_SFBOOL).setName("selectPreviousCard").setAccessType(fieldObject.ACCESSTYPE_INPUTONLY))
          .addField(new fieldObject().setType(fieldObject.TYPE_SFBOOL).setName("selectNextCard").setAccessType(fieldObject.ACCESSTYPE_INPUTONLY))
          .addField(new fieldObject().setType(fieldObject.TYPE_SFBOOL).setName("selectRandomCard").setAccessType(fieldObject.ACCESSTYPE_INPUTONLY))
          .addField(new fieldObject().setType(fieldObject.TYPE_SFBOOL).setName("traceEnabled").setAccessType(fieldObject.ACCESSTYPE_INITIALIZEONLY).setAppinfo("controls console tracing").setValue("true")))
        .addChild(new TransformObject().setDEF("CardTransform").setScale(Java.to([0.4,0.4,0.4], Java.type("float[]"))).setTranslation(Java.to([0,-1.5,0], Java.type("float[]")))
          .addChild(new ShapeObject()
            .setGeometry(new TextObject().setDEF("CardText")
              .setFontStyle(new FontStyleObject().setFamily(Java.to(["SANS"], Java.type("java.lang.String[]"))).setJustify(Java.to(["MIDDLE","MIDDLE"], Java.type("java.lang.String[]"))).setStyle("BOLD")))
            .setAppearance(new AppearanceObject()
              .setMaterial(new MaterialObject().setDiffuseColor(Java.to([1,1,1], Java.type("float[]"))))))
          .addChild(new ROUTEObject().setFromField("string_changed").setFromNode("TextScript").setToField("string").setToNode("CardText"))
          .addChild(new SoundObject().setDEF("CardSoundSpatialization").setMaxBack(100).setMaxFront(100).setMinBack(20).setMinFront(20)
            .addComments(new CommentsBlock("Make sure the sound source AudioClip is audible at the user location"))
            .addComments(new CommentsBlock("Not all X3D players seem to use the .mp3"))
            .addComments(new CommentsBlock("&#38; is ampersand character, avoids escaping problems and inconsistencies in browsers and X3D players"))
            .addComments(new CommentsBlock("%20 is space character used in uri/url encoding"))
            .setSource(new AudioClipObject().setDEF("TextToSpeechAudioClip").setDescription("sends strategy text google translate").setUrl(Java.to(["http://translate.google.com/translate_tts?tl=en&amp;q=Feed%20the%20recording%20back%20out%20of%20the%20medium","translate_tts_mp3FileFormatNotSupported.wav"], Java.type("java.lang.String[]")))))
          .addChild(new ROUTEObject().setFromField("textToSpeechUrl").setFromNode("TextScript").setToField("url").setToNode("TextToSpeechAudioClip"))
          .addChild(new ROUTEObject().setFromField("newCardTime").setFromNode("TextScript").setToField("startTime").setToNode("TextToSpeechAudioClip")))
        .addChild(new TransformObject().setScale(Java.to([0.4,0.4,0.4], Java.type("float[]"))).setTranslation(Java.to([-3.2,2.5,0], Java.type("float[]")))
          .addChild(new TouchSensorObject().setDEF("PreviousTextClickedSensor").setDescription("Select to see previous strategy"))
          .addChild(new ROUTEObject().setFromField("isActive").setFromNode("PreviousTextClickedSensor").setToField("selectPreviousCard").setToNode("TextScript"))
          .addChild(new ShapeObject()
            .setGeometry(new TextObject().setString(Java.to(["previous"], Java.type("java.lang.String[]")))
              .setFontStyle(new FontStyleObject().setUSE("MessageFont")))
            .setAppearance(new AppearanceObject().setDEF("InterfaceAppearance")
              .setMaterial(new MaterialObject().setDiffuseColor(Java.to([1,0,0.6], Java.type("float[]"))))))
          .addChild(new TransformObject().setScale(Java.to([2,0.6,1], Java.type("float[]")))
            .addChild(new ShapeObject().setDEF("TransparentClickSurface")
              .addComments(new CommentsBlock("support Selectable Text with a scalable IFS"))
              .setGeometry(new IndexedFaceSetObject().setCoordIndex(Java.to([0,1,2,3,-1], Java.type("int[]"))).setSolid(false)
                .setCoord(new CoordinateObject().setPoint(Java.to([1,1,0,1,-1,0,-1,-1,0,-1,1,0], Java.type("float[]")))))
              .setAppearance(new AppearanceObject()
                .setMaterial(new MaterialObject().setTransparency(1))))))
        .addChild(new TransformObject().setScale(Java.to([0.4,0.4,0.4], Java.type("float[]"))).setTranslation(Java.to([3.5,2.5,0], Java.type("float[]")))
          .addChild(new TouchSensorObject().setDEF("NextTextClickedSensor").setDescription("Select to see next strategy"))
          .addChild(new ROUTEObject().setFromField("isActive").setFromNode("NextTextClickedSensor").setToField("selectNextCard").setToNode("TextScript"))
          .addChild(new ShapeObject()
            .setGeometry(new TextObject().setString(Java.to(["next"], Java.type("java.lang.String[]")))
              .setFontStyle(new FontStyleObject().setUSE("MessageFont")))
            .setAppearance(new AppearanceObject().setUSE("InterfaceAppearance")))
          .addChild(new TransformObject().setScale(Java.to([1.2,0.6,1], Java.type("float[]")))
            .addChild(new ShapeObject().setUSE("TransparentClickSurface"))))
        .addChild(new TransformObject().setScale(Java.to([0.4,0.4,0.4], Java.type("float[]"))).setTranslation(Java.to([-3.3,-0.5,0], Java.type("float[]")))
          .addChild(new TouchSensorObject().setUSE("RandomTextClickedSensor"))
          .addChild(new ROUTEObject().setFromField("isActive").setFromNode("RandomTextClickedSensor").setToField("selectRandomCard").setToNode("TextScript"))
          .addChild(new ShapeObject()
            .setGeometry(new TextObject().setString(Java.to(["random"], Java.type("java.lang.String[]")))
              .setFontStyle(new FontStyleObject().setUSE("MessageFont")))
            .setAppearance(new AppearanceObject().setUSE("InterfaceAppearance")))
          .addChild(new TransformObject().setScale(Java.to([1.8,0.6,1], Java.type("float[]")))
            .addChild(new ShapeObject().setUSE("TransparentClickSurface"))))
        .addChild(new TransformObject().setScale(Java.to([0.4,0.4,0.4], Java.type("float[]"))).setTranslation(Java.to([3.3,-0.5,0], Java.type("float[]")))
          .addChild(new AnchorObject().setDEF("TextToSpeechAnchor").setDescription("text to speech in browser").setParameter(Java.to(["target=_blank"], Java.type("java.lang.String[]"))).setUrl(Java.to(["http://translate.google.com/translate_tts?tl=en&amp;q=Overtly%20resist%20change"], Java.type("java.lang.String[]")))
            .addChild(new ROUTEObject().setFromField("textToSpeechUrl").setFromNode("TextScript").setToField("url").setToNode("TextToSpeechAnchor"))
            .addChild(new ShapeObject()
              .setGeometry(new TextObject().setString(Java.to(["speech"], Java.type("java.lang.String[]")))
                .setFontStyle(new FontStyleObject().setUSE("MessageFont")))
              .setAppearance(new AppearanceObject().setUSE("InterfaceAppearance")))
            .addChild(new TransformObject().setScale(Java.to([1.8,0.6,1], Java.type("float[]")))
              .addChild(new ShapeObject().setUSE("TransparentClickSurface"))))))      ;
    X3D0.toFileX3D("ObliqueStrategies.new.x3d");
