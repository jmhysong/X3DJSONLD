from jnius import autoclass
from X3Dautoclass import *
X3D0 =  X3DObject().setProfile("Immersive").setVersion("3.3")
head1 = headObject()
meta2 = metaObject().setName("title").setContent("rubikOnFire.x3d")
head1.addMeta(meta2)
meta3 = metaObject().setName("creator").setContent("John Carlson")
head1.addMeta(meta3)
meta4 = metaObject().setName("generator").setContent("manual")
head1.addMeta(meta4)
meta5 = metaObject().setName("identifier").setContent("http://coderextreme.net/X3DJSONLD/rubikOnFire.x3d")
head1.addMeta(meta5)
meta6 = metaObject().setName("description").setContent("a white rubik cube")
head1.addMeta(meta6)
meta7 = metaObject().setName("translated").setContent("15 May 2017")
head1.addMeta(meta7)
meta8 = metaObject().setName("generator").setContent("X3dToJson.xslt, http://www.web3d.org/x3d/stylesheets/X3dToJson.html")
head1.addMeta(meta8)
meta9 = metaObject().setName("reference").setContent("X3D JSON encoding: http://www.web3d.org/wiki/index.php/X3D_JSON_Encoding")
head1.addMeta(meta9)
meta10 = metaObject().setName("translated").setContent("15 May 2017")
head1.addMeta(meta10)
meta11 = metaObject().setName("generator").setContent("X3DJSONLD: https://github.com/coderextreme/X3DJSONLD")
head1.addMeta(meta11)
X3D0.setHead(head1)
Scene12 = SceneObject()
NavigationInfo13 = NavigationInfoObject().setType(["EXAMINE"])
Scene12.addChild(NavigationInfo13)
Viewpoint14 = ViewpointObject().setDescription("Rubiks Cube on Fire").setPosition([0,0,12])
Scene12.addChild(Viewpoint14)
ProtoDeclare15 = ProtoDeclareObject().setName("anyShape")
ProtoInterface16 = ProtoInterfaceObject()
field17 = fieldObject().setType(fieldObject.TYPE_SFVEC3F).setName("xtranslation").setAccessType(fieldObject.ACCESSTYPE_INPUTOUTPUT).setValue("0 0 0")
ProtoInterface16.addField(field17)
field18 = fieldObject().setType(fieldObject.TYPE_SFNODE).setName("myShape").setAccessType(fieldObject.ACCESSTYPE_INPUTOUTPUT)
Sphere19 = SphereObject()
field18.addChild(Sphere19)
ProtoInterface16.addField(field18)
ProtoDeclare15.setProtoInterface(ProtoInterface16)
ProtoBody20 = ProtoBodyObject()
Transform21 = TransformObject()
IS22 = ISObject()
connect23 = connectObject().setNodeField("translation").setProtoField("xtranslation")
IS22.addConnect(connect23)
Transform21.setIS(IS22)
Shape24 = ShapeObject()
IS25 = ISObject()
connect26 = connectObject().setNodeField("geometry").setProtoField("myShape")
IS25.addConnect(connect26)
Shape24.setIS(IS25)
Appearance27 = AppearanceObject()
Material28 = MaterialObject().setDiffuseColor([1,1,1])
Appearance27.setMaterial(Material28)
Shape24.setAppearance(Appearance27)
Transform21.addChild(Shape24)
ProtoBody20.addChild(Transform21)
ProtoDeclare15.setProtoBody(ProtoBody20)
Scene12.addChild(ProtoDeclare15)
ProtoDeclare29 = ProtoDeclareObject().setName("three")
ProtoInterface30 = ProtoInterfaceObject()
field31 = fieldObject().setType(fieldObject.TYPE_SFVEC3F).setName("ytranslation").setAccessType(fieldObject.ACCESSTYPE_INPUTOUTPUT).setValue("0 0 0")
ProtoInterface30.addField(field31)
field32 = fieldObject().setType(fieldObject.TYPE_SFNODE).setName("myShape").setAccessType(fieldObject.ACCESSTYPE_INPUTOUTPUT)
Sphere33 = SphereObject()
field32.addChild(Sphere33)
ProtoInterface30.addField(field32)
ProtoDeclare29.setProtoInterface(ProtoInterface30)
ProtoBody34 = ProtoBodyObject()
Transform35 = TransformObject()
IS36 = ISObject()
connect37 = connectObject().setNodeField("translation").setProtoField("ytranslation")
IS36.addConnect(connect37)
Transform35.setIS(IS36)
ProtoInstance38 = ProtoInstanceObject().setName("anyShape")
fieldValue39 = fieldValueObject().setName("xtranslation").setValue("0 0 0")
ProtoInstance38.addFieldValue(fieldValue39)
IS40 = ISObject()
connect41 = connectObject().setNodeField("myShape").setProtoField("myShape")
IS40.addConnect(connect41)
ProtoInstance38.setIS(IS40)
Transform35.addChild(ProtoInstance38)
ProtoInstance42 = ProtoInstanceObject().setName("anyShape")
fieldValue43 = fieldValueObject().setName("xtranslation").setValue("2 0 0")
ProtoInstance42.addFieldValue(fieldValue43)
IS44 = ISObject()
connect45 = connectObject().setNodeField("myShape").setProtoField("myShape")
IS44.addConnect(connect45)
ProtoInstance42.setIS(IS44)
Transform35.addChild(ProtoInstance42)
ProtoInstance46 = ProtoInstanceObject().setName("anyShape")
fieldValue47 = fieldValueObject().setName("xtranslation").setValue("-2 0 0")
ProtoInstance46.addFieldValue(fieldValue47)
IS48 = ISObject()
connect49 = connectObject().setNodeField("myShape").setProtoField("myShape")
IS48.addConnect(connect49)
ProtoInstance46.setIS(IS48)
Transform35.addChild(ProtoInstance46)
ProtoBody34.addChild(Transform35)
ProtoDeclare29.setProtoBody(ProtoBody34)
Scene12.addChild(ProtoDeclare29)
ProtoDeclare50 = ProtoDeclareObject().setName("nine")
ProtoInterface51 = ProtoInterfaceObject()
field52 = fieldObject().setType(fieldObject.TYPE_SFVEC3F).setName("ztranslation").setAccessType(fieldObject.ACCESSTYPE_INPUTOUTPUT).setValue("0 0 0")
ProtoInterface51.addField(field52)
field53 = fieldObject().setType(fieldObject.TYPE_SFNODE).setName("myShape").setAccessType(fieldObject.ACCESSTYPE_INPUTOUTPUT)
Sphere54 = SphereObject()
field53.addChild(Sphere54)
ProtoInterface51.addField(field53)
ProtoDeclare50.setProtoInterface(ProtoInterface51)
ProtoBody55 = ProtoBodyObject()
Transform56 = TransformObject()
IS57 = ISObject()
connect58 = connectObject().setNodeField("translation").setProtoField("ztranslation")
IS57.addConnect(connect58)
Transform56.setIS(IS57)
ProtoInstance59 = ProtoInstanceObject().setName("three")
fieldValue60 = fieldValueObject().setName("ytranslation").setValue("0 0 0")
ProtoInstance59.addFieldValue(fieldValue60)
IS61 = ISObject()
connect62 = connectObject().setNodeField("myShape").setProtoField("myShape")
IS61.addConnect(connect62)
ProtoInstance59.setIS(IS61)
Transform56.addChild(ProtoInstance59)
ProtoInstance63 = ProtoInstanceObject().setName("three")
fieldValue64 = fieldValueObject().setName("ytranslation").setValue("0 2 0")
ProtoInstance63.addFieldValue(fieldValue64)
IS65 = ISObject()
connect66 = connectObject().setNodeField("myShape").setProtoField("myShape")
IS65.addConnect(connect66)
ProtoInstance63.setIS(IS65)
Transform56.addChild(ProtoInstance63)
ProtoInstance67 = ProtoInstanceObject().setName("three")
fieldValue68 = fieldValueObject().setName("ytranslation").setValue("0 -2 0")
ProtoInstance67.addFieldValue(fieldValue68)
IS69 = ISObject()
connect70 = connectObject().setNodeField("myShape").setProtoField("myShape")
IS69.addConnect(connect70)
ProtoInstance67.setIS(IS69)
Transform56.addChild(ProtoInstance67)
ProtoBody55.addChild(Transform56)
ProtoDeclare50.setProtoBody(ProtoBody55)
Scene12.addChild(ProtoDeclare50)
ProtoDeclare71 = ProtoDeclareObject().setName("twentyseven")
ProtoInterface72 = ProtoInterfaceObject()
field73 = fieldObject().setType(fieldObject.TYPE_SFVEC3F).setName("ttranslation").setAccessType(fieldObject.ACCESSTYPE_INPUTOUTPUT).setValue("0 0 0")
ProtoInterface72.addField(field73)
field74 = fieldObject().setType(fieldObject.TYPE_SFNODE).setName("myShape").setAccessType(fieldObject.ACCESSTYPE_INPUTOUTPUT)
Sphere75 = SphereObject()
field74.addChild(Sphere75)
ProtoInterface72.addField(field74)
ProtoDeclare71.setProtoInterface(ProtoInterface72)
ProtoBody76 = ProtoBodyObject()
Transform77 = TransformObject()
IS78 = ISObject()
connect79 = connectObject().setNodeField("translation").setProtoField("ttranslation")
IS78.addConnect(connect79)
Transform77.setIS(IS78)
ProtoInstance80 = ProtoInstanceObject().setName("nine")
fieldValue81 = fieldValueObject().setName("ztranslation").setValue("0 0 0")
ProtoInstance80.addFieldValue(fieldValue81)
IS82 = ISObject()
connect83 = connectObject().setNodeField("myShape").setProtoField("myShape")
IS82.addConnect(connect83)
ProtoInstance80.setIS(IS82)
Transform77.addChild(ProtoInstance80)
ProtoInstance84 = ProtoInstanceObject().setName("nine")
fieldValue85 = fieldValueObject().setName("ztranslation").setValue("0 0 2")
ProtoInstance84.addFieldValue(fieldValue85)
IS86 = ISObject()
connect87 = connectObject().setNodeField("myShape").setProtoField("myShape")
IS86.addConnect(connect87)
ProtoInstance84.setIS(IS86)
Transform77.addChild(ProtoInstance84)
ProtoInstance88 = ProtoInstanceObject().setName("nine")
fieldValue89 = fieldValueObject().setName("ztranslation").setValue("0 0 -2")
ProtoInstance88.addFieldValue(fieldValue89)
IS90 = ISObject()
connect91 = connectObject().setNodeField("myShape").setProtoField("myShape")
IS90.addConnect(connect91)
ProtoInstance88.setIS(IS90)
Transform77.addChild(ProtoInstance88)
ProtoBody76.addChild(Transform77)
ProtoDeclare71.setProtoBody(ProtoBody76)
Scene12.addChild(ProtoDeclare71)
ProtoInstance92 = ProtoInstanceObject().setName("twentyseven")
fieldValue93 = fieldValueObject().setName("ttranslation").setValue("0 0 0")
ProtoInstance92.addFieldValue(fieldValue93)
fieldValue94 = fieldValueObject().setName("myShape")
Box95 = BoxObject().setSize([1,1,1])
fieldValue94.addChild(Box95)
ProtoInstance92.addFieldValue(fieldValue94)
Scene12.addChild(ProtoInstance92)
X3D0.setScene(Scene12)

X3D0.toFileX3D("rubikOnFire.new.x3d")
