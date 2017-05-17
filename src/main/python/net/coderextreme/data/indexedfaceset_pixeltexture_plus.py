from jnius import autoclass
from X3Dautoclass import *
X3D0 =  X3DObject().setProfile("Interchange").setVersion("3.0")
head1 = headObject()
meta2 = metaObject().setName("title").setContent("indexedfaceset_pixeltexture_plus.x3d")
head1.addMeta(meta2)
meta3 = metaObject().setName("Image").setContent("indexedfaceset_pixeltexture_plus-front.jpg")
head1.addMeta(meta3)
meta4 = metaObject().setName("Image").setContent("indexedfaceset_pixeltexture_plus-rear.jpg")
head1.addMeta(meta4)
meta5 = metaObject().setName("Image").setContent("indexedfaceset_pixeltexture_plus-top.jpg")
head1.addMeta(meta5)
meta6 = metaObject().setName("Image").setContent("indexedfaceset_pixeltexture_plus-bottom.jpg")
head1.addMeta(meta6)
meta7 = metaObject().setName("Image").setContent("indexedfaceset_pixeltexture_plus-left.jpg")
head1.addMeta(meta7)
meta8 = metaObject().setName("Image").setContent("indexedfaceset_pixeltexture_plus-right.jpg")
head1.addMeta(meta8)
meta9 = metaObject().setName("reference").setContent("http://www.nist.gov/vrml.html")
head1.addMeta(meta9)
meta10 = metaObject().setName("reference").setContent("http://www.itl.nist.gov/div897/ctg/vrml/vrml.html")
head1.addMeta(meta10)
meta11 = metaObject().setName("creator").setContent("http://www.itl.nist.gov/div897/ctg/vrml/members.html")
head1.addMeta(meta11)
meta12 = metaObject().setName("disclaimer").setContent("This file was provided by the National Institute of Standards and Technology, and is part of the X3D Conformance Test Suite, available at http://www.nist.gov/vrml.html The information contained within this file is provided for use in establishing conformance to the ISO VRML97 Specification. Conformance to this test does not imply recommendation or endorsement by the National Institute of Standards and Technology. This software can be redistributed and/or modified freely provided that any derivative works bear some notice that they are derived from it, and any modified versions bear some notice that they have been modified.")
head1.addMeta(meta12)
meta13 = metaObject().setName("info").setContent("Correct definition and compliance of this conformance scene is maintained by the X3D Working Group, http://www.web3d.org/working-groups/x3d")
head1.addMeta(meta13)
meta14 = metaObject().setName("translator").setContent("Michael Kass NIST, Don Brutzman NPS")
head1.addMeta(meta14)
meta15 = metaObject().setName("translated").setContent("21 January 2001")
head1.addMeta(meta15)
meta16 = metaObject().setName("modified").setContent("13 January 2014")
head1.addMeta(meta16)
meta17 = metaObject().setName("description").setContent("Test of browser ability to map a 3 times multiple of an PixelTexture onto an IndexedFaceSet geometry. A 3 by 3 matrix of four equal sized red, green, white and yellow squares in the pixel texture map all the faces of the cube.")
head1.addMeta(meta17)
meta18 = metaObject().setName("identifier").setContent("http://www.web3d.org/x3d/content/examples/ConformanceNist/GeometricProperties/TextureCoordinate/indexedfaceset_pixeltexture_plus.x3d")
head1.addMeta(meta18)
meta19 = metaObject().setName("generator").setContent("Vrml97ToX3dNist, http://ovrt.nist.gov/v2_x3d.html")
head1.addMeta(meta19)
meta20 = metaObject().setName("generator").setContent("X3D-Edit 3.3, https://savage.nps.edu/X3D-Edit")
head1.addMeta(meta20)
meta21 = metaObject().setName("license").setContent("../../license.html")
head1.addMeta(meta21)
X3D0.setHead(head1)
Scene22 = SceneObject()
Viewpoint23 = ViewpointObject().setDescription("Front View")
Scene22.addChild(Viewpoint23)
Viewpoint24 = ViewpointObject().setDescription("Rear View").setOrientation([0,1,0,3.14]).setPosition([0,0,-10])
Scene22.addChild(Viewpoint24)
Viewpoint25 = ViewpointObject().setDescription("Top View").setOrientation([1,0,0,-1.57]).setPosition([0,10,0])
Scene22.addChild(Viewpoint25)
Viewpoint26 = ViewpointObject().setDescription("Bottom View").setOrientation([1,0,0,1.57]).setPosition([0,-10,0])
Scene22.addChild(Viewpoint26)
Viewpoint27 = ViewpointObject().setDescription("Right View").setOrientation([0,1,0,1.57]).setPosition([10,0,0])
Scene22.addChild(Viewpoint27)
Viewpoint28 = ViewpointObject().setDescription("Left View").setOrientation([0,1,0,-1.57]).setPosition([-10,0,0])
Scene22.addChild(Viewpoint28)
NavigationInfo29 = NavigationInfoObject().setType(["EXAMINE","WALK","FLY","ANY"])
Scene22.addChild(NavigationInfo29)
Shape30 = ShapeObject()
Appearance31 = AppearanceObject()
Material32 = MaterialObject()
Appearance31.setMaterial(Material32)
PixelTexture33 = PixelTextureObject().setImage([2,2,4,4278190335,16711935,4294967295,4294902015])
Appearance31.setTexture(PixelTexture33)
Shape30.setAppearance(Appearance31)
IndexedFaceSet34 = IndexedFaceSetObject().setColorPerVertex(False).setCoordIndex([0,1,3,2,-1,4,5,7,6,-1,6,7,1,0,-1,2,3,5,4,-1,6,0,2,4,-1,1,7,5,3,-1]).setCreaseAngle(0.5).setTexCoordIndex([0,1,3,2,-1,0,1,3,2,-1,0,1,3,2,-1,0,1,3,2,-1,0,1,3,2,-1,0,1,3,2,-1])
Color35 = ColorObject().setColor([0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0])
IndexedFaceSet34.setColor(Color35)
Coordinate36 = CoordinateObject().setPoint([-2,1,1,-2,-1,1,2,1,1,2,-1,1,2,1,-1,2,-1,-1,-2,1,-1,-2,-1,-1])
IndexedFaceSet34.setCoord(Coordinate36)
TextureCoordinate37 = TextureCoordinateObject().setPoint([-1,2,-1,-1,2,2,2,-1])
IndexedFaceSet34.setTexCoord(TextureCoordinate37)
Shape30.setGeometry(IndexedFaceSet34)
Scene22.addChild(Shape30)
X3D0.setScene(Scene22)

X3D0.toFileX3D("../data/indexedfaceset_pixeltexture_plus.new.x3d")
