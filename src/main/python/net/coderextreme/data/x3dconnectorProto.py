from jnius import autoclass
from X3Dautoclass import *
X3D0 =  X3DObject().setProfile("Immersive").setVersion("3.3")
head1 = headObject()
meta2 = metaObject().setName("title").setContent("x3dconnectorProto")
head1.addMeta(meta2)
meta3 = metaObject().setName("creator").setContent("Lost, Doug Sanden I think")
head1.addMeta(meta3)
meta4 = metaObject().setName("generator").setContent("manual")
head1.addMeta(meta4)
meta5 = metaObject().setName("identifier").setContent("https://coderextreme.net/X3DJSONLD/x3dconnectorProto.x3d")
head1.addMeta(meta5)
meta6 = metaObject().setName("description").setContent("a generic proto to connect two objects")
head1.addMeta(meta6)
X3D0.setHead(head1)
Scene7 = SceneObject()
Viewpoint8 = ViewpointObject().setPosition([0,0,5]).setDescription("Only Viewpoint")
Scene7.addChild(Viewpoint8)
Background9 = BackgroundObject().setSkyColor([0.4,0.4,0.4])
Scene7.addChild(Background9)
Transform10 = TransformObject().setDEF("G1")
Shape11 = ShapeObject()
Appearance12 = AppearanceObject()
Material13 = MaterialObject().setDiffuseColor([0.7,0.2,0.2])
Appearance12.setMaterial(Material13)
Shape11.setAppearance(Appearance12)
Sphere14 = SphereObject().setRadius(0.1)
Shape11.setGeometry(Sphere14)
Transform10.addChild(Shape11)
PlaneSensor15 = PlaneSensorObject().setDescription("Grab to move").setDEF("PS1")
Transform10.addChild(PlaneSensor15)
ROUTE16 = ROUTEObject().setFromNode("PS1").setFromField("translation_changed").setToNode("G1").setToField("set_translation")
Transform10.addChild(ROUTE16)
Scene7.addChild(Transform10)
Transform17 = TransformObject().setDEF("G2").setTranslation([1,-1,0.01])
Shape18 = ShapeObject()
Appearance19 = AppearanceObject()
Material20 = MaterialObject().setDiffuseColor([0.2,0.7,0.2])
Appearance19.setMaterial(Material20)
Shape18.setAppearance(Appearance19)
Sphere21 = SphereObject().setRadius(0.1)
Shape18.setGeometry(Sphere21)
Transform17.addChild(Shape18)
PlaneSensor22 = PlaneSensorObject().setDescription("Grab to move").setOffset([1,-1,0.01]).setDEF("PS2")
Transform17.addChild(PlaneSensor22)
ROUTE23 = ROUTEObject().setFromNode("PS2").setFromField("translation_changed").setToNode("G2").setToField("set_translation")
Transform17.addChild(ROUTE23)
Scene7.addChild(Transform17)
Transform24 = TransformObject().setDEF("G3").setTranslation([1,1,0.01])
Shape25 = ShapeObject()
Appearance26 = AppearanceObject()
Material27 = MaterialObject().setDiffuseColor([0.2,0.7,0.2])
Appearance26.setMaterial(Material27)
Shape25.setAppearance(Appearance26)
Sphere28 = SphereObject().setRadius(0.1)
Shape25.setGeometry(Sphere28)
Transform24.addChild(Shape25)
PlaneSensor29 = PlaneSensorObject().setDescription("Grab to move").setOffset([1,1,0.01]).setDEF("PS3")
Transform24.addChild(PlaneSensor29)
ROUTE30 = ROUTEObject().setFromNode("PS3").setFromField("translation_changed").setToNode("G3").setToField("set_translation")
Transform24.addChild(ROUTE30)
Scene7.addChild(Transform24)
Transform31 = TransformObject().setDEF("G4").setTranslation([-1,1,0.01])
Shape32 = ShapeObject()
Appearance33 = AppearanceObject()
Material34 = MaterialObject().setDiffuseColor([0.2,0.7,0.2])
Appearance33.setMaterial(Material34)
Shape32.setAppearance(Appearance33)
Sphere35 = SphereObject().setRadius(0.1)
Shape32.setGeometry(Sphere35)
Transform31.addChild(Shape32)
PlaneSensor36 = PlaneSensorObject().setDescription("Grab to move").setOffset([-1,1,0.01]).setDEF("PS4")
Transform31.addChild(PlaneSensor36)
ROUTE37 = ROUTEObject().setFromNode("PS4").setFromField("translation_changed").setToNode("G4").setToField("set_translation")
Transform31.addChild(ROUTE37)
Scene7.addChild(Transform31)
Transform38 = TransformObject().setDEF("transC1")
Transform39 = TransformObject().setDEF("rotscaleC1")
Shape40 = ShapeObject()
Appearance41 = AppearanceObject()
Material42 = MaterialObject().setDiffuseColor([0.2,0.7,0.7]).setTransparency(0.5)
Appearance41.setMaterial(Material42)
Shape40.setAppearance(Appearance41)
Cylinder43 = CylinderObject().setRadius(0.05)
Shape40.setGeometry(Cylinder43)
Transform39.addChild(Shape40)
Transform38.addChild(Transform39)
Scene7.addChild(Transform38)
Transform44 = TransformObject().setDEF("transC2")
Transform45 = TransformObject().setDEF("rotscaleC2")
Shape46 = ShapeObject()
Appearance47 = AppearanceObject()
Material48 = MaterialObject().setDiffuseColor([0.2,0.7,0.7]).setTransparency(0.5)
Appearance47.setMaterial(Material48)
Shape46.setAppearance(Appearance47)
Cylinder49 = CylinderObject().setRadius(0.05)
Shape46.setGeometry(Cylinder49)
Transform45.addChild(Shape46)
Transform44.addChild(Transform45)
Scene7.addChild(Transform44)
Transform50 = TransformObject().setDEF("transC3")
Transform51 = TransformObject().setDEF("rotscaleC3")
Shape52 = ShapeObject()
Appearance53 = AppearanceObject()
Material54 = MaterialObject().setDiffuseColor([0.2,0.7,0.7]).setTransparency(0.5)
Appearance53.setMaterial(Material54)
Shape52.setAppearance(Appearance53)
Cylinder55 = CylinderObject().setRadius(0.05)
Shape52.setGeometry(Cylinder55)
Transform51.addChild(Shape52)
Transform50.addChild(Transform51)
Scene7.addChild(Transform50)
ProtoDeclare56 = ProtoDeclareObject().setName("x3dconnector")
ProtoInterface57 = ProtoInterfaceObject()
field58 = fieldObject().setType(fieldObject.TYPE_SFNODE).setName("startnode").setAccessType(fieldObject.ACCESSTYPE_INITIALIZEONLY)
ProtoInterface57.addField(field58)
field59 = fieldObject().setType(fieldObject.TYPE_SFNODE).setName("endnode").setAccessType(fieldObject.ACCESSTYPE_INITIALIZEONLY)
ProtoInterface57.addField(field59)
field60 = fieldObject().setType(fieldObject.TYPE_SFNODE).setName("transnode").setAccessType(fieldObject.ACCESSTYPE_INITIALIZEONLY)
ProtoInterface57.addField(field60)
field61 = fieldObject().setType(fieldObject.TYPE_SFNODE).setName("rotscalenode").setAccessType(fieldObject.ACCESSTYPE_INITIALIZEONLY)
ProtoInterface57.addField(field61)
field62 = fieldObject().setType(fieldObject.TYPE_SFVEC3F).setName("set_startpoint").setAccessType(fieldObject.ACCESSTYPE_INPUTONLY)
ProtoInterface57.addField(field62)
field63 = fieldObject().setType(fieldObject.TYPE_SFVEC3F).setName("set_endpoint").setAccessType(fieldObject.ACCESSTYPE_INPUTONLY)
ProtoInterface57.addField(field63)
ProtoDeclare56.setProtoInterface(ProtoInterface57)
ProtoBody64 = ProtoBodyObject()
Script65 = ScriptObject().setDEF("S1")
field66 = fieldObject().setType(fieldObject.TYPE_SFNODE).setName("startnode").setAccessType(fieldObject.ACCESSTYPE_INITIALIZEONLY)
Script65.addField(field66)
field67 = fieldObject().setType(fieldObject.TYPE_SFNODE).setName("endnode").setAccessType(fieldObject.ACCESSTYPE_INITIALIZEONLY)
Script65.addField(field67)
field68 = fieldObject().setType(fieldObject.TYPE_SFNODE).setName("transnode").setAccessType(fieldObject.ACCESSTYPE_INITIALIZEONLY)
Script65.addField(field68)
field69 = fieldObject().setType(fieldObject.TYPE_SFNODE).setName("rotscalenode").setAccessType(fieldObject.ACCESSTYPE_INITIALIZEONLY)
Script65.addField(field69)
field70 = fieldObject().setType(fieldObject.TYPE_SFVEC3F).setName("set_startpoint").setAccessType(fieldObject.ACCESSTYPE_INPUTONLY)
Script65.addField(field70)
field71 = fieldObject().setType(fieldObject.TYPE_SFVEC3F).setName("set_endpoint").setAccessType(fieldObject.ACCESSTYPE_INPUTONLY)
Script65.addField(field71)
IS72 = ISObject()
connect73 = connectObject().setNodeField("startnode").setProtoField("startnode")
IS72.addConnect(connect73)
connect74 = connectObject().setNodeField("endnode").setProtoField("endnode")
IS72.addConnect(connect74)
connect75 = connectObject().setNodeField("transnode").setProtoField("transnode")
IS72.addConnect(connect75)
connect76 = connectObject().setNodeField("rotscalenode").setProtoField("rotscalenode")
IS72.addConnect(connect76)
connect77 = connectObject().setNodeField("set_startpoint").setProtoField("set_startpoint")
IS72.addConnect(connect77)
connect78 = connectObject().setNodeField("set_endpoint").setProtoField("set_endpoint")
IS72.addConnect(connect78)
Script65.setIS(IS72)

Script65.setSourceCode("ecmascript:\n"+
"        function recompute(startpoint,endpoint){\n"+
"	    if (typeof endpoint === 'undefined') {\n"+
"		return;\n"+
"	    }\n"+
"            var dif = endpoint.subtract(startpoint);\n"+
"            var dist = dif.length()*0.5;\n"+
"            var dif2 = dif.multiply(0.5);\n"+
"            var norm = dif.normalize();\n"+
"            var transl = startpoint.add(dif2);\n"+
"	    if (typeof Quaternion !== 'undefined') {\n"+
"		    return {\n"+
"			    scale : new SFVec3f(1.0,dist,1.0),\n"+
"			    translation : transl,\n"+
"			    rotation : new Quaternion.rotateFromTo(new SFVec3f(0.0,1.0,0.0), norm)\n"+
"		    };\n"+
"	    } else {\n"+
"		    return {\n"+
"			    scale : new SFVec3f(1.0,dist,1.0),\n"+
"			    translation : transl,\n"+
"			    rotation : new SFRotation(new SFVec3f(0.0,1.0,0.0),norm)\n"+
"		    };\n"+
"	    }\n"+
"	}\n"+
"	function recompute_and_route(startpoint, endpoint) {\n"+
"	      var trafo = recompute(startpoint, endpoint);\n"+
"	      transnode.translation = trafo.translation;\n"+
"	      rotscalenode.rotation = trafo.rotation;\n"+
"	      rotscalenode.scale = trafo.scale;\n"+
"	}\n"+
"        function initialize(){\n"+
"            recompute_and_route(startnode.translation,endnode.translation);\n"+
"        }\n"+
"        function set_startpoint(val,t){\n"+
"            recompute_and_route(val,endnode.translation);\n"+
"        }\n"+
"        function set_endpoint(val,t){\n"+
"            recompute_and_route(startnode.translation,val);\n"+
"        }\n"+
"")
ProtoBody64.addChild(Script65)
ProtoDeclare56.setProtoBody(ProtoBody64)
Scene7.addChild(ProtoDeclare56)
ProtoInstance79 = ProtoInstanceObject().setName("x3dconnector").setDEF("connector1")
fieldValue80 = fieldValueObject().setName("startnode")
Transform81 = TransformObject().setUSE("G1")
fieldValue80.addChild(Transform81)
ProtoInstance79.addFieldValue(fieldValue80)
fieldValue82 = fieldValueObject().setName("endnode")
Transform83 = TransformObject().setUSE("G2")
fieldValue82.addChild(Transform83)
ProtoInstance79.addFieldValue(fieldValue82)
fieldValue84 = fieldValueObject().setName("transnode")
Transform85 = TransformObject().setUSE("transC1")
fieldValue84.addChild(Transform85)
ProtoInstance79.addFieldValue(fieldValue84)
fieldValue86 = fieldValueObject().setName("rotscalenode")
Transform87 = TransformObject().setUSE("rotscaleC1")
fieldValue86.addChild(Transform87)
ProtoInstance79.addFieldValue(fieldValue86)
fieldValue88 = fieldValueObject().setName("set_startpoint")
ProtoInstance79.addFieldValue(fieldValue88)
fieldValue89 = fieldValueObject().setName("set_endpoint")
ProtoInstance79.addFieldValue(fieldValue89)
Scene7.addChild(ProtoInstance79)
ProtoInstance90 = ProtoInstanceObject().setName("x3dconnector").setDEF("connector2")
fieldValue91 = fieldValueObject().setName("startnode")
Transform92 = TransformObject().setUSE("G1")
fieldValue91.addChild(Transform92)
ProtoInstance90.addFieldValue(fieldValue91)
fieldValue93 = fieldValueObject().setName("endnode")
Transform94 = TransformObject().setUSE("G3")
fieldValue93.addChild(Transform94)
ProtoInstance90.addFieldValue(fieldValue93)
fieldValue95 = fieldValueObject().setName("transnode")
Transform96 = TransformObject().setUSE("transC2")
fieldValue95.addChild(Transform96)
ProtoInstance90.addFieldValue(fieldValue95)
fieldValue97 = fieldValueObject().setName("rotscalenode")
Transform98 = TransformObject().setUSE("rotscaleC2")
fieldValue97.addChild(Transform98)
ProtoInstance90.addFieldValue(fieldValue97)
fieldValue99 = fieldValueObject().setName("set_startpoint")
ProtoInstance90.addFieldValue(fieldValue99)
fieldValue100 = fieldValueObject().setName("set_endpoint")
ProtoInstance90.addFieldValue(fieldValue100)
Scene7.addChild(ProtoInstance90)
ProtoInstance101 = ProtoInstanceObject().setName("x3dconnector").setDEF("connector3")
fieldValue102 = fieldValueObject().setName("startnode")
Transform103 = TransformObject().setUSE("G1")
fieldValue102.addChild(Transform103)
ProtoInstance101.addFieldValue(fieldValue102)
fieldValue104 = fieldValueObject().setName("endnode")
Transform105 = TransformObject().setUSE("G4")
fieldValue104.addChild(Transform105)
ProtoInstance101.addFieldValue(fieldValue104)
fieldValue106 = fieldValueObject().setName("transnode")
Transform107 = TransformObject().setUSE("transC3")
fieldValue106.addChild(Transform107)
ProtoInstance101.addFieldValue(fieldValue106)
fieldValue108 = fieldValueObject().setName("rotscalenode")
Transform109 = TransformObject().setUSE("rotscaleC3")
fieldValue108.addChild(Transform109)
ProtoInstance101.addFieldValue(fieldValue108)
fieldValue110 = fieldValueObject().setName("set_startpoint")
ProtoInstance101.addFieldValue(fieldValue110)
fieldValue111 = fieldValueObject().setName("set_endpoint")
ProtoInstance101.addFieldValue(fieldValue111)
Scene7.addChild(ProtoInstance101)
ROUTE112 = ROUTEObject().setFromNode("G1").setFromField("translation_changed").setToNode("connector1").setToField("set_startpoint")
Scene7.addChild(ROUTE112)
ROUTE113 = ROUTEObject().setFromNode("G2").setFromField("translation_changed").setToNode("connector1").setToField("set_endpoint")
Scene7.addChild(ROUTE113)
ROUTE114 = ROUTEObject().setFromNode("G1").setFromField("translation_changed").setToNode("connector2").setToField("set_startpoint")
Scene7.addChild(ROUTE114)
ROUTE115 = ROUTEObject().setFromNode("G3").setFromField("translation_changed").setToNode("connector2").setToField("set_endpoint")
Scene7.addChild(ROUTE115)
ROUTE116 = ROUTEObject().setFromNode("G1").setFromField("translation_changed").setToNode("connector3").setToField("set_startpoint")
Scene7.addChild(ROUTE116)
ROUTE117 = ROUTEObject().setFromNode("G4").setFromField("translation_changed").setToNode("connector3").setToField("set_endpoint")
Scene7.addChild(ROUTE117)
X3D0.setScene(Scene7)

X3D0.toFileX3D("../data/x3dconnectorProto.new.x3d")
