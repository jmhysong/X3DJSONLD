from jnius import autoclass
from X3Dautoclass import *
X3D0 =  X3DObject().setProfile("Immersive").setVersion("3.3")
head1 = headObject()
meta2 = metaObject().setName("title").setContent("pp3.x3d")
head1.addMeta(meta2)
meta3 = metaObject().setName("creator").setContent("John Carlson")
head1.addMeta(meta3)
meta4 = metaObject().setName("translator").setContent("John Carlson")
head1.addMeta(meta4)
meta5 = metaObject().setName("created").setContent("5 May 2015")
head1.addMeta(meta5)
meta6 = metaObject().setName("modified").setContent("05 May 2017")
head1.addMeta(meta6)
meta7 = metaObject().setName("description").setContent("A process pipeline between three spheres (try typing on spheres and blue")
head1.addMeta(meta7)
meta8 = metaObject().setName("identifier").setContent("http://coderextreme.net/x3d/pp3.x3d")
head1.addMeta(meta8)
meta9 = metaObject().setName("generator").setContent("manual")
head1.addMeta(meta9)
meta10 = metaObject().setName("translated").setContent("10 May 2017")
head1.addMeta(meta10)
meta11 = metaObject().setName("generator").setContent("X3dToJson.xslt, http://www.web3d.org/x3d/stylesheets/X3dToJson.html")
head1.addMeta(meta11)
meta12 = metaObject().setName("reference").setContent("X3D JSON encoding: http://www.web3d.org/wiki/index.php/X3D_JSON_Encoding")
head1.addMeta(meta12)
meta13 = metaObject().setName("translated").setContent("12 May 2017")
head1.addMeta(meta13)
meta14 = metaObject().setName("generator").setContent("X3DJSONLD: https://github.com/coderextreme/X3DJSONLD")
head1.addMeta(meta14)
X3D0.setHead(head1)
Scene15 = SceneObject()
ProtoDeclare16 = ProtoDeclareObject().setName("Process")
ProtoBody17 = ProtoBodyObject()
Group18 = GroupObject()

Group18.addComments(CommentsBlock("left"))
Transform19 = TransformObject().setScale([0.5,0.5,0.5])
Shape20 = ShapeObject()
Appearance21 = AppearanceObject()
Material22 = MaterialObject().setDiffuseColor([0.7,1,0]).setTransparency(0.5)
Appearance21.setMaterial(Material22)
Shape20.setAppearance(Appearance21)
Extrusion23 = ExtrusionObject().setCreaseAngle(0.785).setCrossSection([1,0,0.92,-0.38,0.71,-0.71,0.38,-0.92,0,-1,-0.38,-0.92,-0.71,-0.71,-0.92,-0.38,-1,0,-0.92,0.38,-0.71,0.71,-0.38,0.92,0,1,0.38,0.92,0.71,0.71,0.92,0.38,1,0]).setSpine([-2.5,0,0,-1.5,0,0])
Shape20.setGeometry(Extrusion23)
Transform19.addChild(Shape20)

Transform19.addComments(CommentsBlock("<Transform translation=\"-2.5 0 0\"> <Shape> <Text DEF=\"LeftString\" string='\"l\"'/> </Shape> </Transform> <StringSensor DEF=\"LeftSensor\" enabled=\"false\"/> <TouchSensor DEF=\"LeftTouch\" enabled=\"true\"/>"))
Group18.addChild(Transform19)

Group18.addComments(CommentsBlock("right"))
Transform24 = TransformObject().setScale([0.5,0.5,0.5])
Shape25 = ShapeObject()
Appearance26 = AppearanceObject()
Material27 = MaterialObject().setDiffuseColor([0,0.7,1]).setTransparency(0.5)
Appearance26.setMaterial(Material27)
Shape25.setAppearance(Appearance26)
Extrusion28 = ExtrusionObject().setCreaseAngle(0.785).setCrossSection([1,0,0.92,-0.38,0.71,-0.71,0.38,-0.92,0,-1,-0.38,-0.92,-0.71,-0.71,-0.92,-0.38,-1,0,-0.92,0.38,-0.71,0.71,-0.38,0.92,0,1,0.38,0.92,0.71,0.71,0.92,0.38,1,0]).setSpine([1.5,0,0,2.5,0,0])
Shape25.setGeometry(Extrusion28)
Transform24.addChild(Shape25)
Transform29 = TransformObject().setTranslation([2,0,0])
Shape30 = ShapeObject()
Appearance31 = AppearanceObject()
Material32 = MaterialObject().setDEF("MaterialLightBlue").setDiffuseColor([1,1,1])
Appearance31.setMaterial(Material32)
Shape30.setAppearance(Appearance31)
Text33 = TextObject().setDEF("RightString").setString(["r"])
Shape30.setGeometry(Text33)
Transform29.addChild(Shape30)
Transform24.addChild(Transform29)
StringSensor34 = StringSensorObject().setDEF("RightSensor").setEnabled(False)
Transform24.addChild(StringSensor34)
TouchSensor35 = TouchSensorObject().setDescription("touch to activate").setDEF("RightTouch")
Transform24.addChild(TouchSensor35)
Group18.addChild(Transform24)

Group18.addComments(CommentsBlock("up"))
Transform36 = TransformObject().setScale([0.5,0.5,0.5])
Shape37 = ShapeObject()
Appearance38 = AppearanceObject()
Material39 = MaterialObject().setDiffuseColor([0,0.7,1]).setTransparency(0.5)
Appearance38.setMaterial(Material39)
Shape37.setAppearance(Appearance38)
Extrusion40 = ExtrusionObject().setCreaseAngle(0.785).setCrossSection([1,0,0.92,-0.38,0.71,-0.71,0.38,-0.92,0,-1,-0.38,-0.92,-0.71,-0.71,-0.92,-0.38,-1,0,-0.92,0.38,-0.71,0.71,-0.38,0.92,0,1,0.38,0.92,0.71,0.71,0.92,0.38,1,0]).setSpine([0,1.5,0,0,2.5,0])
Shape37.setGeometry(Extrusion40)
Transform36.addChild(Shape37)
Transform41 = TransformObject().setTranslation([-0.5,2,0])
Shape42 = ShapeObject()
Appearance43 = AppearanceObject()
Material44 = MaterialObject().setUSE("MaterialLightBlue")
Appearance43.setMaterial(Material44)
Shape42.setAppearance(Appearance43)
Text45 = TextObject().setDEF("UpString").setString(["u"])
Shape42.setGeometry(Text45)
Transform41.addChild(Shape42)
Transform36.addChild(Transform41)
StringSensor46 = StringSensorObject().setDEF("UpSensor").setEnabled(False)
Transform36.addChild(StringSensor46)
TouchSensor47 = TouchSensorObject().setDescription("touch to activate").setDEF("UpTouch")
Transform36.addChild(TouchSensor47)
Group18.addChild(Transform36)

Group18.addComments(CommentsBlock("down"))
Transform48 = TransformObject().setScale([0.5,0.5,0.5])
Shape49 = ShapeObject()
Appearance50 = AppearanceObject()
Material51 = MaterialObject().setDiffuseColor([0.7,1,0]).setTransparency(0.5)
Appearance50.setMaterial(Material51)
Shape49.setAppearance(Appearance50)
Extrusion52 = ExtrusionObject().setCreaseAngle(0.785).setCrossSection([1,0,0.92,-0.38,0.71,-0.71,0.38,-0.92,0,-1,-0.38,-0.92,-0.71,-0.71,-0.92,-0.38,-1,0,-0.92,0.38,-0.71,0.71,-0.38,0.92,0,1,0.38,0.92,0.71,0.71,0.92,0.38,1,0]).setSpine([0,-2.5,0,0,-1.5,0])
Shape49.setGeometry(Extrusion52)
Transform48.addChild(Shape49)

Transform48.addComments(CommentsBlock("<Transform translation=\"-0.5 -2.5 0\"> <Shape> <Text DEF=\"DownString\" string='\"d\"'/> </Shape> </Transform> <StringSensor DEF=\"DownSensor\" enabled=\"false\"/> <TouchSensor description='touch to activate' DEF=\"DownTouch\" enabled=\"true\"/>"))
Group18.addChild(Transform48)

Group18.addComments(CommentsBlock("center"))
Transform53 = TransformObject()
Shape54 = ShapeObject()
Appearance55 = AppearanceObject()
Material56 = MaterialObject().setDiffuseColor([1,0,0.7])
Appearance55.setMaterial(Material56)
Shape54.setAppearance(Appearance55)
Sphere57 = SphereObject()
Shape54.setGeometry(Sphere57)
Transform53.addChild(Shape54)
Transform58 = TransformObject().setScale([0.5,0.5,0.5]).setTranslation([-0.5,0,1])
Shape59 = ShapeObject()
Appearance60 = AppearanceObject()
Material61 = MaterialObject().setUSE("MaterialLightBlue")
Appearance60.setMaterial(Material61)
Shape59.setAppearance(Appearance60)
Text62 = TextObject().setDEF("CenterString")
Shape59.setGeometry(Text62)
Transform58.addChild(Shape59)
Transform53.addChild(Transform58)
StringSensor63 = StringSensorObject().setDEF("CenterSensor").setEnabled(False)
Transform53.addChild(StringSensor63)
TouchSensor64 = TouchSensorObject().setDescription("touch to activate").setDEF("CenterTouch")
Transform53.addChild(TouchSensor64)
Group18.addChild(Transform53)
ProtoBody17.addChild(Group18)
Script65 = ScriptObject().setDEF("RightSingleToMultiString")
field66 = fieldObject().setType(fieldObject.TYPE_SFSTRING).setName("set_rightstring").setAccessType(fieldObject.ACCESSTYPE_INPUTONLY)
Script65.addField(field66)
field67 = fieldObject().setType(fieldObject.TYPE_MFSTRING).setName("rightlines").setAccessType(fieldObject.ACCESSTYPE_OUTPUTONLY)
Script65.addField(field67)

Script65.setSourceCode("ecmascript:\n"+
"\n"+
"function initialize() {\n"+
"	rightlines = new MFString(\"\");\n"+
"}\n"+
"\n"+
"function set_rightstring(rightstr) {\n"+
"	rightlines = new MFString(rightstr);\n"+
"}\n"+
"")
ProtoBody17.addChild(Script65)
Script68 = ScriptObject().setDEF("UpSingleToMultiString")
field69 = fieldObject().setType(fieldObject.TYPE_SFSTRING).setName("set_upstring").setAccessType(fieldObject.ACCESSTYPE_INPUTONLY)
Script68.addField(field69)
field70 = fieldObject().setType(fieldObject.TYPE_MFSTRING).setName("uplines").setAccessType(fieldObject.ACCESSTYPE_OUTPUTONLY)
Script68.addField(field70)

Script68.setSourceCode("ecmascript:\n"+
"\n"+
"function initialize() {\n"+
"	uplines = new MFString(\"\");\n"+
"}\n"+
"\n"+
"function set_upstring(upstr) {\n"+
"	uplines = new MFString(upstr);\n"+
"}\n"+
"")
ProtoBody17.addChild(Script68)
Script71 = ScriptObject().setDEF("CenterSingleToMultiString")
field72 = fieldObject().setType(fieldObject.TYPE_SFSTRING).setName("set_centerstring").setAccessType(fieldObject.ACCESSTYPE_INPUTONLY)
Script71.addField(field72)
field73 = fieldObject().setType(fieldObject.TYPE_MFSTRING).setName("centerlines").setAccessType(fieldObject.ACCESSTYPE_OUTPUTONLY)
Script71.addField(field73)

Script71.setSourceCode("ecmascript:\n"+
"\n"+
"function initialize() {\n"+
"	centerlines = new MFString(\"\");\n"+
"}\n"+
"\n"+
"function set_centerstring(centerstr) {\n"+
"	centerlines = new MFString(centerstr);\n"+
"}\n"+
"")
ProtoBody17.addChild(Script71)
ROUTE74 = ROUTEObject().setFromField("enteredText").setFromNode("CenterSensor").setToField("set_centerstring").setToNode("CenterSingleToMultiString")
ProtoBody17.addChild(ROUTE74)
ROUTE75 = ROUTEObject().setFromField("centerlines").setFromNode("CenterSingleToMultiString").setToField("set_string").setToNode("CenterString")
ProtoBody17.addChild(ROUTE75)
ROUTE76 = ROUTEObject().setFromField("isOver").setFromNode("CenterTouch").setToField("set_enabled").setToNode("CenterSensor")
ProtoBody17.addChild(ROUTE76)
ROUTE77 = ROUTEObject().setFromField("enteredText").setFromNode("RightSensor").setToField("set_rightstring").setToNode("RightSingleToMultiString")
ProtoBody17.addChild(ROUTE77)
ROUTE78 = ROUTEObject().setFromField("rightlines").setFromNode("RightSingleToMultiString").setToField("set_string").setToNode("RightString")
ProtoBody17.addChild(ROUTE78)
ROUTE79 = ROUTEObject().setFromField("isOver").setFromNode("RightTouch").setToField("set_enabled").setToNode("RightSensor")
ProtoBody17.addChild(ROUTE79)
ROUTE80 = ROUTEObject().setFromField("enteredText").setFromNode("UpSensor").setToField("set_upstring").setToNode("UpSingleToMultiString")
ProtoBody17.addChild(ROUTE80)
ROUTE81 = ROUTEObject().setFromField("uplines").setFromNode("UpSingleToMultiString").setToField("set_string").setToNode("UpString")
ProtoBody17.addChild(ROUTE81)
ROUTE82 = ROUTEObject().setFromField("isOver").setFromNode("UpTouch").setToField("set_enabled").setToNode("UpSensor")
ProtoBody17.addChild(ROUTE82)
ProtoDeclare16.setProtoBody(ProtoBody17)
Scene15.addChild(ProtoDeclare16)
NavigationInfo83 = NavigationInfoObject()
Scene15.addChild(NavigationInfo83)
Viewpoint84 = ViewpointObject().setDescription("Process pipes").setOrientation([1,0,0,-0.4]).setPosition([0,5,12])
Scene15.addChild(Viewpoint84)
Transform85 = TransformObject().setTranslation([0,-2.5,0])
ProtoInstance86 = ProtoInstanceObject().setName("Process")
Transform85.addChild(ProtoInstance86)
Scene15.addChild(Transform85)
Transform87 = TransformObject()
ProtoInstance88 = ProtoInstanceObject().setName("Process")
Transform87.addChild(ProtoInstance88)
Scene15.addChild(Transform87)
Transform89 = TransformObject().setTranslation([0,2.5,0])
ProtoInstance90 = ProtoInstanceObject().setName("Process")
Transform89.addChild(ProtoInstance90)
Scene15.addChild(Transform89)
X3D0.setScene(Scene15)

X3D0.toFileX3D("pp3.new.x3d")
