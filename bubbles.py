from jnius import autoclass
from X3Dautoclass import *
X3D0 =  X3DObject().setProfile("Immersive").setVersion("3.3")
head1 = headObject()
component2 = componentObject().setName("EnvironmentalEffects").setLevel(1)
head1.addComponent(component2)
component3 = componentObject().setName("EnvironmentalEffects").setLevel(3)
head1.addComponent(component3)
meta4 = metaObject().setName("title").setContent("bubbles.x3d")
head1.addMeta(meta4)
meta5 = metaObject().setName("creator").setContent("John Carlson")
head1.addMeta(meta5)
meta6 = metaObject().setName("generator").setContent("manual")
head1.addMeta(meta6)
meta7 = metaObject().setName("identifier").setContent("http://coderextreme.net/X3DJSONLD/bubbles.x3d")
head1.addMeta(meta7)
meta8 = metaObject().setName("description").setContent("not sure what this is")
head1.addMeta(meta8)
meta9 = metaObject().setName("translated").setContent("08 May 2017")
head1.addMeta(meta9)
meta10 = metaObject().setName("generator").setContent("X3dToJson.xslt, http://www.web3d.org/x3d/stylesheets/X3dToJson.html")
head1.addMeta(meta10)
meta11 = metaObject().setName("reference").setContent("X3D JSON encoding: http://www.web3d.org/wiki/index.php/X3D_JSON_Encoding")
head1.addMeta(meta11)
meta12 = metaObject().setName("translated").setContent("8 May 2017")
head1.addMeta(meta12)
meta13 = metaObject().setName("generator").setContent("X3DJSONLD: https://github.com/coderextreme/X3DJSONLD")
head1.addMeta(meta13)
X3D0.setHead(head1)
Scene14 = SceneObject()
NavigationInfo15 = NavigationInfoObject().setType(["EXAMINE"])
Scene14.addChild(NavigationInfo15)
Viewpoint16 = ViewpointObject().setDEF("Tour").setDescription("Tour Views")
Scene14.addChild(Viewpoint16)
Viewpoint17 = ViewpointObject().setPosition([0,0,4]).setDescription("sphere in road")
Scene14.addChild(Viewpoint17)
Background18 = BackgroundObject().setBackUrl(["cubemap/all_probes/uffizi_cross/uffizi_back.png","http://coderextreme.net/X3DJSONLD/cubemap/all_probes/uffizi_cross/uffizi_back.png"]).setBottomUrl(["cubemap/all_probes/uffizi_cross/uffizi_bottom.png","http://coderextreme.net/X3DJSONLD/cubemap/all_probes/uffizi_cross/uffizi_bottom.png"]).setFrontUrl(["cubemap/all_probes/uffizi_cross/uffizi_front.png","http://coderextreme.net/X3DJSONLD/cubemap/all_probes/uffizi_cross/uffizi_front.png"]).setLeftUrl(["cubemap/all_probes/uffizi_cross/uffizi_left.png","http://coderextreme.net/X3DJSONLD/cubemap/all_probes/uffizi_cross/uffizi_left.png"]).setRightUrl(["cubemap/all_probes/uffizi_cross/uffizi_right.png","http://coderextreme.net/X3DJSONLD/cubemap/all_probes/uffizi_cross/uffizi_right.png"]).setTopUrl(["cubemap/all_probes/uffizi_cross/uffizi_top.png","http://coderextreme.net/X3DJSONLD/cubemap/all_probes/uffizi_cross/uffizi_top.png"])
Scene14.addChild(Background18)
Transform19 = TransformObject().setDEF("Rose01")
Shape20 = ShapeObject()
Sphere21 = SphereObject()
Shape20.setGeometry(Sphere21)
Appearance22 = AppearanceObject().setDEF("_01_-_Default")
Material23 = MaterialObject().setDiffuseColor([0.7,0.7,0.7]).setSpecularColor([0.5,0.5,0.5])
Appearance22.setMaterial(Material23)
ComposedCubeMapTexture24 = ComposedCubeMapTextureObject()
ImageTexture25 = ImageTextureObject().setUrl(["cubemap/all_probes/uffizi_cross/uffizi_back.png","http://coderextreme.net/X3DJSONLD/cubemap/all_probes/uffizi_cross/uffizi_back.png"])
ComposedCubeMapTexture24.setBack(ImageTexture25)
ImageTexture26 = ImageTextureObject().setUrl(["cubemap/all_probes/uffizi_cross/uffizi_bottom.png","http://coderextreme.net/X3DJSONLD/cubemap/all_probes/uffizi_cross/uffizi_bottom.png"])
ComposedCubeMapTexture24.setBottom(ImageTexture26)
ImageTexture27 = ImageTextureObject().setUrl(["cubemap/all_probes/uffizi_cross/uffizi_front.png","http://coderextreme.net/X3DJSONLD/cubemap/all_probes/uffizi_cross/uffizi_front.png"])
ComposedCubeMapTexture24.setFront(ImageTexture27)
ImageTexture28 = ImageTextureObject().setUrl(["cubemap/all_probes/uffizi_cross/uffizi_left.png","http://coderextreme.net/X3DJSONLD/cubemap/all_probes/uffizi_cross/uffizi_left.png"])
ComposedCubeMapTexture24.setLeft(ImageTexture28)
ImageTexture29 = ImageTextureObject().setUrl(["cubemap/all_probes/uffizi_cross/uffizi_right.png","http://coderextreme.net/X3DJSONLD/cubemap/all_probes/uffizi_cross/uffizi_right.png"])
ComposedCubeMapTexture24.setRight(ImageTexture29)
ImageTexture30 = ImageTextureObject().setUrl(["cubemap/all_probes/uffizi_cross/uffizi_top.png","http://coderextreme.net/X3DJSONLD/cubemap/all_probes/uffizi_cross/uffizi_top.png"])
ComposedCubeMapTexture24.setTop(ImageTexture30)
Appearance22.setTexture(ComposedCubeMapTexture24)
ComposedShader31 = ComposedShaderObject().setDEF("cobweb").setLanguage("GLSL")
field32 = fieldObject().setType(fieldObject.TYPE_SFINT32).setName("cube").setAccessType(fieldObject.ACCESSTYPE_INPUTOUTPUT).setValue("0")
ComposedShader31.addField(field32)
field33 = fieldObject().setType(fieldObject.TYPE_SFVEC3F).setName("chromaticDispertion").setAccessType(fieldObject.ACCESSTYPE_INPUTOUTPUT).setValue("0.98 1 1.033")
ComposedShader31.addField(field33)
field34 = fieldObject().setType(fieldObject.TYPE_SFFLOAT).setName("bias").setAccessType(fieldObject.ACCESSTYPE_INPUTOUTPUT).setValue("0.5")
ComposedShader31.addField(field34)
field35 = fieldObject().setType(fieldObject.TYPE_SFFLOAT).setName("scale").setAccessType(fieldObject.ACCESSTYPE_INPUTOUTPUT).setValue("0.5")
ComposedShader31.addField(field35)
field36 = fieldObject().setType(fieldObject.TYPE_SFFLOAT).setName("power").setAccessType(fieldObject.ACCESSTYPE_INPUTOUTPUT).setValue("2")
ComposedShader31.addField(field36)
ShaderPart37 = ShaderPartObject().setType("VERTEX").setUrl(["cobweb.vs","http://coderextreme.net/X3DJSONLD/cobweb.vs"])
ComposedShader31.addParts(ShaderPart37)
ShaderPart38 = ShaderPartObject().setType("FRAGMENT").setUrl(["pc_bubbles.fs","http://coderextreme.net/X3DJSONLD/pc_bubbles.fs"])
ComposedShader31.addParts(ShaderPart38)
Appearance22.addShaders(ComposedShader31)
ComposedShader39 = ComposedShaderObject().setDEF("x3dom").setLanguage("GLSL")
field40 = fieldObject().setType(fieldObject.TYPE_SFINT32).setName("cube").setAccessType(fieldObject.ACCESSTYPE_INPUTOUTPUT).setValue("0")
ComposedShader39.addField(field40)
field41 = fieldObject().setType(fieldObject.TYPE_SFVEC3F).setName("chromaticDispertion").setAccessType(fieldObject.ACCESSTYPE_INPUTOUTPUT).setValue("0.98 1 1.033")
ComposedShader39.addField(field41)
field42 = fieldObject().setType(fieldObject.TYPE_SFFLOAT).setName("bias").setAccessType(fieldObject.ACCESSTYPE_INPUTOUTPUT).setValue("0.5")
ComposedShader39.addField(field42)
field43 = fieldObject().setType(fieldObject.TYPE_SFFLOAT).setName("scale").setAccessType(fieldObject.ACCESSTYPE_INPUTOUTPUT).setValue("0.5")
ComposedShader39.addField(field43)
field44 = fieldObject().setType(fieldObject.TYPE_SFFLOAT).setName("power").setAccessType(fieldObject.ACCESSTYPE_INPUTOUTPUT).setValue("2")
ComposedShader39.addField(field44)
ShaderPart45 = ShaderPartObject().setType("VERTEX").setUrl(["x3dom.vs","http://coderextreme.net/X3DJSONLD/x3dom.vs"])
ComposedShader39.addParts(ShaderPart45)
ShaderPart46 = ShaderPartObject().setType("FRAGMENT").setUrl(["pc_bubbles.fs","http://coderextreme.net/X3DJSONLD/pc_bubbles.fs"])
ComposedShader39.addParts(ShaderPart46)
Appearance22.addShaders(ComposedShader39)
Shape20.setAppearance(Appearance22)
Transform19.addChild(Shape20)
Scene14.addChild(Transform19)
TimeSensor47 = TimeSensorObject().setDEF("TourTime").setCycleInterval(5).setLoop(True)
Scene14.addChild(TimeSensor47)
PositionInterpolator48 = PositionInterpolatorObject().setDEF("TourPosition").setKey([0,1]).setKeyValue([0,0,10,0,0,-10])
Scene14.addChild(PositionInterpolator48)
OrientationInterpolator49 = OrientationInterpolatorObject().setDEF("TourOrientation").setKey([0,1]).setKeyValue([0,1,0,0,0,1,0,3.1416])
Scene14.addChild(OrientationInterpolator49)
Script50 = ScriptObject().setDEF("RandomTourTime")
field51 = fieldObject().setType(fieldObject.TYPE_SFTIME).setName("set_cycle").setAccessType(fieldObject.ACCESSTYPE_INPUTONLY)
Script50.addField(field51)
field52 = fieldObject().setType(fieldObject.TYPE_SFFLOAT).setName("lastKey").setAccessType(fieldObject.ACCESSTYPE_INPUTOUTPUT).setValue("0")
Script50.addField(field52)
field53 = fieldObject().setType(fieldObject.TYPE_MFROTATION).setName("orientations").setAccessType(fieldObject.ACCESSTYPE_INPUTOUTPUT).setValue("0 1 0 0 0 1 0 -1.57 0 1 0 3.14 0 1 0 1.57 0 1 0 0 1 0 0 -1.57 0 1 0 0 1 0 0 1.57 0 1 0 0")
Script50.addField(field53)
field54 = fieldObject().setType(fieldObject.TYPE_MFVEC3F).setName("positions").setAccessType(fieldObject.ACCESSTYPE_INPUTOUTPUT).setValue("0 0 10 -10 0 0 0 0 -10 10 0 0 0 0 10 0 10 0 0 0 10 0 -10 0 0 0 10")
Script50.addField(field54)
field55 = fieldObject().setType(fieldObject.TYPE_MFVEC3F).setName("position").setAccessType(fieldObject.ACCESSTYPE_OUTPUTONLY)
Script50.addField(field55)
field56 = fieldObject().setType(fieldObject.TYPE_MFROTATION).setName("orientation").setAccessType(fieldObject.ACCESSTYPE_OUTPUTONLY)
Script50.addField(field56)

Script50.setSourceCode("ecmascript:\n"+
"               function set_cycle(value) {\n"+
"                        //var positions = [[0, 0, 10], [-10, 0, 0], [0, 0, -10], [10, 0, 0], [0, 0, 10], [0, 10, 0], [0, 0, 10], [0, -10, 0], [0, 0, 10]];\n"+
"                        //var orientations = [[0, 1, 0, 0], [0, 1, 0, -1.57], [0, 1, 0, 3.14], [0, 1, 0, 1.57], [0, 1, 0, 0] [1, 0, 0, -1.57], [0, 1, 0, 0], [1, 0, 0, 1.57], [0, 1, 0, 0]];\n"+
"                        //Browser.println(lastKey);\n"+
"                        var ov = lastKey;\n"+
"                        // Browser.println(ov);      \n"+
"                        //Browser.println(positions.length);                  \n"+
"                        do {\n"+
"                            lastKey = Math.round(Math.random()*(positions.length-1));\n"+
"                        } while (lastKey === ov);\n"+
"                        // Browser.println(lastKey);\n"+
"                        var vc = lastKey;\n"+
"                        \n"+
"                        // Browser.println(orientations[ov]);\n"+
"                        // Browser.println(orientations[vc]);\n"+
"                        orientation = new MFRotation();\n"+
"                        orientation[0] = new SFRotation(orientations[ov][0], orientations[ov][1], orientations[ov][2], orientations[ov][3]);\n"+
"                        orientation[1] = new SFRotation(orientations[vc][0], orientations[vc][1], orientations[vc][2], orientations[vc][3]);\n"+
"                        // Browser.println(positions[ov]);\n"+
"                        // Browser.println(positions[vc]);\n"+
"                        position = new MFVec3f();\n"+
"                        position[0] = new SFVec3f(positions[ov][0],positions[ov][1],positions[ov][2]);\n"+
"                        position[1] = new SFVec3f(positions[vc][0],positions[vc][1],positions[vc][2]);\n"+
"                    // }\n"+
"               }\n"+
"")
Scene14.addChild(Script50)
ROUTE57 = ROUTEObject().setFromNode("TourTime").setFromField("cycleTime").setToNode("RandomTourTime").setToField("set_cycle")
Scene14.addChild(ROUTE57)
ROUTE58 = ROUTEObject().setFromNode("RandomTourTime").setFromField("orientation").setToNode("TourOrientation").setToField("keyValue")
Scene14.addChild(ROUTE58)
ROUTE59 = ROUTEObject().setFromNode("RandomTourTime").setFromField("position").setToNode("TourPosition").setToField("keyValue")
Scene14.addChild(ROUTE59)
ROUTE60 = ROUTEObject().setFromNode("TourTime").setFromField("fraction_changed").setToNode("TourOrientation").setToField("set_fraction")
Scene14.addChild(ROUTE60)
ROUTE61 = ROUTEObject().setFromNode("TourOrientation").setFromField("value_changed").setToNode("Tour").setToField("set_orientation")
Scene14.addChild(ROUTE61)
ROUTE62 = ROUTEObject().setFromNode("TourTime").setFromField("fraction_changed").setToNode("TourPosition").setToField("set_fraction")
Scene14.addChild(ROUTE62)
ROUTE63 = ROUTEObject().setFromNode("TourPosition").setFromField("value_changed").setToNode("Tour").setToField("set_position")
Scene14.addChild(ROUTE63)
X3D0.setScene(Scene14)

X3D0.toFileX3D("bubbles.new.x3d")
