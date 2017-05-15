from jnius import autoclass
from X3Dautoclass import *
X3D0 =  X3DObject().setProfile("Immersive").setVersion("3.3")
head1 = headObject()
meta2 = metaObject().setName("title").setContent("box.x3d")
head1.addMeta(meta2)
meta3 = metaObject().setName("creator").setContent("John Carlson")
head1.addMeta(meta3)
meta4 = metaObject().setName("generator").setContent("manual")
head1.addMeta(meta4)
meta5 = metaObject().setName("identifier").setContent("http://coderextreme.net/X3DJSONLD/box.x3d")
head1.addMeta(meta5)
meta6 = metaObject().setName("description").setContent("3 boxes")
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
Viewpoint14 = ViewpointObject().setDescription("Cubes on Fire").setPosition([0,0,12])
Scene12.addChild(Viewpoint14)
ProtoDeclare15 = ProtoDeclareObject().setName("anyShape")
ProtoInterface16 = ProtoInterfaceObject()
field17 = fieldObject().setType(fieldObject.TYPE_SFVEC3F).setName("xtranslation").setAccessType(fieldObject.ACCESSTYPE_INPUTOUTPUT).setValue("0 0 0")
ProtoInterface16.addField(field17)
field18 = fieldObject().setType(fieldObject.TYPE_MFNODE).setName("myShape").setAccessType(fieldObject.ACCESSTYPE_INPUTOUTPUT)
Shape19 = ShapeObject()
Sphere20 = SphereObject()
Shape19.setGeometry(Sphere20)
Appearance21 = AppearanceObject()
Material22 = MaterialObject().setDiffuseColor([1,1,1])
Appearance21.setMaterial(Material22)
Shape19.setAppearance(Appearance21)
field18.addChild(Shape19)
ProtoInterface16.addField(field18)
ProtoDeclare15.setProtoInterface(ProtoInterface16)
ProtoBody23 = ProtoBodyObject()
Transform24 = TransformObject()
IS25 = ISObject()
connect26 = connectObject().setNodeField("translation").setProtoField("xtranslation")
IS25.addConnect(connect26)
connect27 = connectObject().setNodeField("children").setProtoField("myShape")
IS25.addConnect(connect27)
Transform24.setIS(IS25)
ProtoBody23.addChild(Transform24)
ProtoDeclare15.setProtoBody(ProtoBody23)
Scene12.addChild(ProtoDeclare15)
ProtoDeclare28 = ProtoDeclareObject().setName("three")
ProtoInterface29 = ProtoInterfaceObject()
field30 = fieldObject().setType(fieldObject.TYPE_SFVEC3F).setName("ytranslation").setAccessType(fieldObject.ACCESSTYPE_INPUTOUTPUT).setValue("0 0 0")
ProtoInterface29.addField(field30)
field31 = fieldObject().setType(fieldObject.TYPE_MFNODE).setName("myShape").setAccessType(fieldObject.ACCESSTYPE_INPUTOUTPUT)
Shape32 = ShapeObject()
Cylinder33 = CylinderObject()
Shape32.setGeometry(Cylinder33)
Appearance34 = AppearanceObject()
Material35 = MaterialObject().setDiffuseColor([1,1,1])
Appearance34.setMaterial(Material35)
Shape32.setAppearance(Appearance34)
field31.addChild(Shape32)
ProtoInterface29.addField(field31)
ProtoDeclare28.setProtoInterface(ProtoInterface29)
ProtoBody36 = ProtoBodyObject()
Transform37 = TransformObject()
IS38 = ISObject()
connect39 = connectObject().setNodeField("translation").setProtoField("ytranslation")
IS38.addConnect(connect39)
Transform37.setIS(IS38)
ProtoInstance40 = ProtoInstanceObject().setName("anyShape")
fieldValue41 = fieldValueObject().setName("xtranslation").setValue("0 0 0")
ProtoInstance40.addFieldValue(fieldValue41)
IS42 = ISObject()
connect43 = connectObject().setNodeField("myShape").setProtoField("myShape")
IS42.addConnect(connect43)
ProtoInstance40.setIS(IS42)
Transform37.addChild(ProtoInstance40)
ProtoInstance44 = ProtoInstanceObject().setName("anyShape")
fieldValue45 = fieldValueObject().setName("xtranslation").setValue("2 0 0")
ProtoInstance44.addFieldValue(fieldValue45)
IS46 = ISObject()
connect47 = connectObject().setNodeField("myShape").setProtoField("myShape")
IS46.addConnect(connect47)
ProtoInstance44.setIS(IS46)
Transform37.addChild(ProtoInstance44)
ProtoInstance48 = ProtoInstanceObject().setName("anyShape")
fieldValue49 = fieldValueObject().setName("xtranslation").setValue("-2 0 0")
ProtoInstance48.addFieldValue(fieldValue49)
IS50 = ISObject()
connect51 = connectObject().setNodeField("myShape").setProtoField("myShape")
IS50.addConnect(connect51)
ProtoInstance48.setIS(IS50)
Transform37.addChild(ProtoInstance48)
ProtoBody36.addChild(Transform37)
ProtoDeclare28.setProtoBody(ProtoBody36)
Scene12.addChild(ProtoDeclare28)
ProtoInstance52 = ProtoInstanceObject().setName("three")
fieldValue53 = fieldValueObject().setName("ytranslation").setValue("0 0 0")
ProtoInstance52.addFieldValue(fieldValue53)
fieldValue54 = fieldValueObject().setName("myShape")
Shape55 = ShapeObject()
Box56 = BoxObject().setSize([1,1,1])
Shape55.setGeometry(Box56)
Appearance57 = AppearanceObject()
Material58 = MaterialObject().setDiffuseColor([0,1,0])
Appearance57.setMaterial(Material58)
Shape55.setAppearance(Appearance57)
fieldValue54.addChild(Shape55)
ProtoInstance52.addFieldValue(fieldValue54)
Scene12.addChild(ProtoInstance52)
X3D0.setScene(Scene12)

X3D0.toFileX3D("Box.new.x3d")
