from jnius import autoclass
from X3Dautoclass import *
X3D0 =  X3DObject().setProfile("Immersive").setVersion("3.3")
head1 = headObject()
meta2 = metaObject().setName("title").setContent("ObliqueStrategies.x3d")
head1.addMeta(meta2)
meta3 = metaObject().setName("description").setContent("Text scripting and animation example using Oblique Strategies card set by Brian Eno.")
head1.addMeta(meta3)
meta4 = metaObject().setName("creator").setContent("Don Brutzman, John Kelly, Ben Cheng")
head1.addMeta(meta4)
meta5 = metaObject().setName("created").setContent("3 November 2013")
head1.addMeta(meta5)
meta6 = metaObject().setName("modified").setContent("18 October 2015")
head1.addMeta(meta6)
meta7 = metaObject().setName("reference").setContent("oblique.html")
head1.addMeta(meta7)
meta8 = metaObject().setName("reference").setContent("ObliqueStrategies.txt")
head1.addMeta(meta8)
meta9 = metaObject().setName("reference").setContent("ObliqueStrategiesScript.js")
head1.addMeta(meta9)
meta10 = metaObject().setName("reference").setContent("http://music.hyperreal.org/artists/brian_eno/oblique/oblique.html")
head1.addMeta(meta10)
meta11 = metaObject().setName("reference").setContent("http://www.eno-web.co.uk/obliques.html")
head1.addMeta(meta11)
meta12 = metaObject().setName("reference").setContent("http://gothpunk.com/haiku-intro.html")
head1.addMeta(meta12)
meta13 = metaObject().setName("reference").setContent("http://www.rtqe.net/ObliqueStrategies/OSintro.html")
head1.addMeta(meta13)
meta14 = metaObject().setName("reference").setContent("https://en.wikipedia.org/wiki/Oblique_Strategies")
head1.addMeta(meta14)
meta15 = metaObject().setName("subject").setContent("Brian Eno, Oblique Strategies")
head1.addMeta(meta15)
meta16 = metaObject().setName("Image").setContent("images/ObliqueStrategiesEntryScreen.png")
head1.addMeta(meta16)
meta17 = metaObject().setName("audio").setContent("http://translate.google.com/translate_tts?tl=en&q=hello%20X3D")
head1.addMeta(meta17)
meta18 = metaObject().setName("audio").setContent("translate_tts_HelloX3D.mp3")
head1.addMeta(meta18)
meta19 = metaObject().setName("audio").setContent("translate_tts_HelloX3D.wav")
head1.addMeta(meta19)
meta20 = metaObject().setName("TODO").setContent("multiliingual translation parameter")
head1.addMeta(meta20)
meta21 = metaObject().setName("reference").setContent("http://stackoverflow.com/questions/9163988/download-mp3-from-google-translate-text-to-speech")
head1.addMeta(meta21)
meta22 = metaObject().setName("reference").setContent("http://www.greenbot.com/article/2105862/how-to-get-started-with-google-text-to-speech.html")
head1.addMeta(meta22)
meta23 = metaObject().setName("warning").setContent("under development, scene Sound/AudioClip triggering (or retrieved file format) not working")
head1.addMeta(meta23)
meta24 = metaObject().setName("warning").setContent("BSContact error: Script node TextScript: parse error: line 15 \" var strategy = [];")
head1.addMeta(meta24)
meta25 = metaObject().setName("identifier").setContent("http://X3dGraphics.com/examples/X3dForAdvancedModeling/Inspiration/ObliqueStrategies.x3d")
head1.addMeta(meta25)
meta26 = metaObject().setName("generator").setContent("X3D-Edit 3.3, https://savage.nps.edu/X3D-Edit")
head1.addMeta(meta26)
meta27 = metaObject().setName("license").setContent("../license.html")
head1.addMeta(meta27)
X3D0.setHead(head1)
Scene28 = SceneObject()
NavigationInfo29 = NavigationInfoObject()
Scene28.addChild(NavigationInfo29)
Background30 = BackgroundObject().setSkyColor([0.419608,0.427451,1])
Scene28.addChild(Background30)
Transform31 = TransformObject().setScale([0.4,0.4,0.4]).setTranslation([0,1,0])
TouchSensor32 = TouchSensorObject().setDEF("RandomTextClickedSensor").setDescription("Select to see a new strategy")
Transform31.addChild(TouchSensor32)
Shape33 = ShapeObject()
Text34 = TextObject().setString(["Oblique Strategies","","(Over One Hundred Worthwhile Dilemmas)","","by Brian Eno and Peter Schmidt"])
FontStyle35 = FontStyleObject().setDEF("MessageFont").setFamily(["SANS"]).setJustify(["MIDDLE","MIDDLE"]).setStyle("BOLD")
Text34.setFontStyle(FontStyle35)
Shape33.setGeometry(Text34)
Appearance36 = AppearanceObject()
Material37 = MaterialObject().setDiffuseColor([1,1,1])
Appearance36.setMaterial(Material37)
Shape33.setAppearance(Appearance36)
Transform31.addChild(Shape33)
Transform38 = TransformObject().setScale([10,3,1])
Shape39 = ShapeObject().setDEF("HeadlineClickSurface")
IndexedFaceSet40 = IndexedFaceSetObject().setCoordIndex([0,1,2,3,-1]).setSolid(False)
Coordinate41 = CoordinateObject().setPoint([1,1,0,1,-1,0,-1,-1,0,-1,1,0])
IndexedFaceSet40.setCoord(Coordinate41)
Shape39.setGeometry(IndexedFaceSet40)
Appearance42 = AppearanceObject()
Material43 = MaterialObject().setAmbientIntensity(0.245763).setDiffuseColor([0.34773,0.090909,0.005289]).setShininess(0.07).setSpecularColor([0.336735,0.051091,0.051091]).setTransparency(0.8)
Appearance42.setMaterial(Material43)
Shape39.setAppearance(Appearance42)
Transform38.addChild(Shape39)
Transform31.addChild(Transform38)
Scene28.addChild(Transform31)
Script44 = ScriptObject().setDEF("TextScript").setUrl(["./ObliqueStrategiesScript.js"])

Script44.addComments(CommentsBlock("initialize() method includes unit test to printAllStrategies() to console"))

Script44.addComments(CommentsBlock("TODO insert field definitions here (index string_changed previous next random) and then animate!"))
field45 = fieldObject().setType(fieldObject.TYPE_SFINT32).setName("index").setAccessType(fieldObject.ACCESSTYPE_INITIALIZEONLY).setAppinfo("index for active strategy card, -1 means no selection").setValue("0")
Script44.addField(field45)
field46 = fieldObject().setType(fieldObject.TYPE_MFSTRING).setName("string_changed").setAccessType(fieldObject.ACCESSTYPE_OUTPUTONLY).setAppinfo("latest strategy card value")
Script44.addField(field46)
field47 = fieldObject().setType(fieldObject.TYPE_MFSTRING).setName("textToSpeechUrl").setAccessType(fieldObject.ACCESSTYPE_OUTPUTONLY).setAppinfo("url to invoke Google Translate")
Script44.addField(field47)
field48 = fieldObject().setType(fieldObject.TYPE_SFTIME).setName("newCardTime").setAccessType(fieldObject.ACCESSTYPE_OUTPUTONLY).setAppinfo("activate Sound node")
Script44.addField(field48)
field49 = fieldObject().setType(fieldObject.TYPE_SFBOOL).setName("selectPreviousCard").setAccessType(fieldObject.ACCESSTYPE_INPUTONLY)
Script44.addField(field49)
field50 = fieldObject().setType(fieldObject.TYPE_SFBOOL).setName("selectNextCard").setAccessType(fieldObject.ACCESSTYPE_INPUTONLY)
Script44.addField(field50)
field51 = fieldObject().setType(fieldObject.TYPE_SFBOOL).setName("selectRandomCard").setAccessType(fieldObject.ACCESSTYPE_INPUTONLY)
Script44.addField(field51)
field52 = fieldObject().setType(fieldObject.TYPE_SFBOOL).setName("traceEnabled").setAccessType(fieldObject.ACCESSTYPE_INITIALIZEONLY).setAppinfo("controls console tracing").setValue("true")
Script44.addField(field52)
Scene28.addChild(Script44)
Transform53 = TransformObject().setDEF("CardTransform").setScale([0.4,0.4,0.4]).setTranslation([0,-1.5,0])
Shape54 = ShapeObject()
Text55 = TextObject().setDEF("CardText")
FontStyle56 = FontStyleObject().setFamily(["SANS"]).setJustify(["MIDDLE","MIDDLE"]).setStyle("BOLD")
Text55.setFontStyle(FontStyle56)
Shape54.setGeometry(Text55)
Appearance57 = AppearanceObject()
Material58 = MaterialObject().setDiffuseColor([1,1,1])
Appearance57.setMaterial(Material58)
Shape54.setAppearance(Appearance57)
Transform53.addChild(Shape54)
ROUTE59 = ROUTEObject().setFromField("string_changed").setFromNode("TextScript").setToField("string").setToNode("CardText")
Transform53.addChild(ROUTE59)
Sound60 = SoundObject().setDEF("CardSoundSpatialization").setMaxBack(100).setMaxFront(100).setMinBack(20).setMinFront(20)

Sound60.addComments(CommentsBlock("Make sure the sound source AudioClip is audible at the user location"))

Sound60.addComments(CommentsBlock("Not all X3D players seem to use the .mp3"))

Sound60.addComments(CommentsBlock("&#38; is ampersand character, avoids escaping problems and inconsistencies in browsers and X3D players"))

Sound60.addComments(CommentsBlock("%20 is space character used in uri/url encoding"))
AudioClip61 = AudioClipObject().setDEF("TextToSpeechAudioClip").setDescription("sends strategy text google translate").setUrl(["http://translate.google.com/translate_tts?tl=en&amp;q=Feed%20the%20recording%20back%20out%20of%20the%20medium","translate_tts_mp3FileFormatNotSupported.wav"])
Sound60.setSource(AudioClip61)
Transform53.addChild(Sound60)
ROUTE62 = ROUTEObject().setFromField("textToSpeechUrl").setFromNode("TextScript").setToField("url").setToNode("TextToSpeechAudioClip")
Transform53.addChild(ROUTE62)
ROUTE63 = ROUTEObject().setFromField("newCardTime").setFromNode("TextScript").setToField("startTime").setToNode("TextToSpeechAudioClip")
Transform53.addChild(ROUTE63)
Scene28.addChild(Transform53)
Transform64 = TransformObject().setScale([0.4,0.4,0.4]).setTranslation([-3.2,2.5,0])
TouchSensor65 = TouchSensorObject().setDEF("PreviousTextClickedSensor").setDescription("Select to see previous strategy")
Transform64.addChild(TouchSensor65)
ROUTE66 = ROUTEObject().setFromField("isActive").setFromNode("PreviousTextClickedSensor").setToField("selectPreviousCard").setToNode("TextScript")
Transform64.addChild(ROUTE66)
Shape67 = ShapeObject()
Text68 = TextObject().setString(["previous"])
FontStyle69 = FontStyleObject().setUSE("MessageFont")
Text68.setFontStyle(FontStyle69)
Shape67.setGeometry(Text68)
Appearance70 = AppearanceObject().setDEF("InterfaceAppearance")
Material71 = MaterialObject().setDiffuseColor([1,0,0.6])
Appearance70.setMaterial(Material71)
Shape67.setAppearance(Appearance70)
Transform64.addChild(Shape67)
Transform72 = TransformObject().setScale([2,0.6,1])
Shape73 = ShapeObject().setDEF("TransparentClickSurface")

Shape73.addComments(CommentsBlock("support Selectable Text with a scalable IFS"))
IndexedFaceSet74 = IndexedFaceSetObject().setCoordIndex([0,1,2,3,-1]).setSolid(False)
Coordinate75 = CoordinateObject().setPoint([1,1,0,1,-1,0,-1,-1,0,-1,1,0])
IndexedFaceSet74.setCoord(Coordinate75)
Shape73.setGeometry(IndexedFaceSet74)
Appearance76 = AppearanceObject()
Material77 = MaterialObject().setTransparency(1)
Appearance76.setMaterial(Material77)
Shape73.setAppearance(Appearance76)
Transform72.addChild(Shape73)
Transform64.addChild(Transform72)
Scene28.addChild(Transform64)
Transform78 = TransformObject().setScale([0.4,0.4,0.4]).setTranslation([3.5,2.5,0])
TouchSensor79 = TouchSensorObject().setDEF("NextTextClickedSensor").setDescription("Select to see next strategy")
Transform78.addChild(TouchSensor79)
ROUTE80 = ROUTEObject().setFromField("isActive").setFromNode("NextTextClickedSensor").setToField("selectNextCard").setToNode("TextScript")
Transform78.addChild(ROUTE80)
Shape81 = ShapeObject()
Text82 = TextObject().setString(["next"])
FontStyle83 = FontStyleObject().setUSE("MessageFont")
Text82.setFontStyle(FontStyle83)
Shape81.setGeometry(Text82)
Appearance84 = AppearanceObject().setUSE("InterfaceAppearance")
Shape81.setAppearance(Appearance84)
Transform78.addChild(Shape81)
Transform85 = TransformObject().setScale([1.2,0.6,1])
Shape86 = ShapeObject().setUSE("TransparentClickSurface")
Transform85.addChild(Shape86)
Transform78.addChild(Transform85)
Scene28.addChild(Transform78)
Transform87 = TransformObject().setScale([0.4,0.4,0.4]).setTranslation([-3.3,-0.5,0])
TouchSensor88 = TouchSensorObject().setUSE("RandomTextClickedSensor")
Transform87.addChild(TouchSensor88)
ROUTE89 = ROUTEObject().setFromField("isActive").setFromNode("RandomTextClickedSensor").setToField("selectRandomCard").setToNode("TextScript")
Transform87.addChild(ROUTE89)
Shape90 = ShapeObject()
Text91 = TextObject().setString(["random"])
FontStyle92 = FontStyleObject().setUSE("MessageFont")
Text91.setFontStyle(FontStyle92)
Shape90.setGeometry(Text91)
Appearance93 = AppearanceObject().setUSE("InterfaceAppearance")
Shape90.setAppearance(Appearance93)
Transform87.addChild(Shape90)
Transform94 = TransformObject().setScale([1.8,0.6,1])
Shape95 = ShapeObject().setUSE("TransparentClickSurface")
Transform94.addChild(Shape95)
Transform87.addChild(Transform94)
Scene28.addChild(Transform87)
Transform96 = TransformObject().setScale([0.4,0.4,0.4]).setTranslation([3.3,-0.5,0])
Anchor97 = AnchorObject().setDEF("TextToSpeechAnchor").setDescription("text to speech in browser").setParameter(["target=_blank"]).setUrl(["http://translate.google.com/translate_tts?tl=en&amp;q=Overtly%20resist%20change"])
ROUTE98 = ROUTEObject().setFromField("textToSpeechUrl").setFromNode("TextScript").setToField("url").setToNode("TextToSpeechAnchor")
Anchor97.addChild(ROUTE98)
Shape99 = ShapeObject()
Text100 = TextObject().setString(["speech"])
FontStyle101 = FontStyleObject().setUSE("MessageFont")
Text100.setFontStyle(FontStyle101)
Shape99.setGeometry(Text100)
Appearance102 = AppearanceObject().setUSE("InterfaceAppearance")
Shape99.setAppearance(Appearance102)
Anchor97.addChild(Shape99)
Transform103 = TransformObject().setScale([1.8,0.6,1])
Shape104 = ShapeObject().setUSE("TransparentClickSurface")
Transform103.addChild(Shape104)
Anchor97.addChild(Transform103)
Transform96.addChild(Anchor97)
Scene28.addChild(Transform96)
X3D0.setScene(Scene28)

X3D0.toFileX3D("../data/ObliqueStrategies.new.x3d")
