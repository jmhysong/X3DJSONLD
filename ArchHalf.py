from jnius import autoclass
from X3Dautoclass import *
X3D0 =  X3DObject().setProfile("Interchange").setVersion("3.3")
head1 = headObject()
meta2 = metaObject().setName("title").setContent("ArchHalf.x3d")
head1.addMeta(meta2)
meta3 = metaObject().setName("description").setContent("Create a half arch with parameters clearSpanWidth=4; riseHeight=2; depth=3; topAbutmentHeight=0.5; pierWidth=0.5; pierHeight=1. Parameter clearSpanWidth measure refers to a full arc, consider clearSpanWidth/2 for the archHalf width. Modify them with Transform > scale or editing the IndexedFileSet node. See the reference file ArchModelingDiagrams.pdf and the ArchScript_more_readable.js script to find further information.")
head1.addMeta(meta3)
meta4 = metaObject().setName("creator").setContent("Michele Foti, Don Brutzman")
head1.addMeta(meta4)
meta5 = metaObject().setName("created").setContent("15 December 2014")
head1.addMeta(meta5)
meta6 = metaObject().setName("modified").setContent("16 February 2016")
head1.addMeta(meta6)
meta7 = metaObject().setName("reference").setContent("ArchModelingDiagrams.pdf")
head1.addMeta(meta7)
meta8 = metaObject().setName("reference").setContent("https://en.wikipedia.org/wiki/Arch")
head1.addMeta(meta8)
meta9 = metaObject().setName("identifier").setContent("http://X3dGraphics.com/examples/X3dForAdvancedModeling/Buildings/ArchHalf.x3d")
head1.addMeta(meta9)
meta10 = metaObject().setName("generator").setContent("X3D-Edit 3.3, https://savage.nps.edu/X3D-Edit")
head1.addMeta(meta10)
meta11 = metaObject().setName("license").setContent("../license.html")
head1.addMeta(meta11)
meta12 = metaObject().setName("translated").setContent("08 May 2017")
head1.addMeta(meta12)
meta13 = metaObject().setName("generator").setContent("X3dToJson.xslt, http://www.web3d.org/x3d/stylesheets/X3dToJson.html")
head1.addMeta(meta13)
meta14 = metaObject().setName("reference").setContent("X3D JSON encoding: http://www.web3d.org/wiki/index.php/X3D_JSON_Encoding")
head1.addMeta(meta14)
meta15 = metaObject().setName("translated").setContent("8 May 2017")
head1.addMeta(meta15)
meta16 = metaObject().setName("generator").setContent("X3DJSONLD: https://github.com/coderextreme/X3DJSONLD")
head1.addMeta(meta16)
X3D0.setHead(head1)
Scene17 = SceneObject()
Shape18 = ShapeObject().setDEF("Arch")

Shape18.addComments(CommentsBlock("note that convex='false' (meaning concave geometry) is crucial for this IFS of a geometric chord to render properly"))
IndexedFaceSet19 = IndexedFaceSetObject().setDEF("ArchIndex").setConvex(False).setCoordIndex([31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,144,-1,149,31,144,147,-1,134,147,144,145,-1,145,144,62,141,-1,132,133,141,62,-1,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,143,-1,148,94,143,146,-1,142,128,146,143,-1,140,125,143,142,-1,125,126,127,140,-1,31,94,95,32,-1,32,95,96,33,-1,33,96,97,34,-1,34,97,98,35,-1,35,98,99,36,-1,36,99,100,37,-1,37,100,101,38,-1,38,101,102,39,-1,39,102,103,40,-1,40,103,104,41,-1,41,104,105,42,-1,42,105,106,43,-1,43,106,107,44,-1,44,107,108,45,-1,45,108,109,46,-1,46,109,110,47,-1,47,110,111,48,-1,48,111,112,49,-1,49,112,113,50,-1,50,113,114,51,-1,51,114,115,52,-1,52,115,116,53,-1,53,116,117,54,-1,54,117,118,55,-1,55,118,119,56,-1,56,119,120,57,-1,57,120,121,58,-1,58,121,122,59,-1,59,122,123,60,-1,60,123,124,61,-1,61,124,125,62,-1,148,149,147,146,-1,146,147,134,128,-1,128,134,145,142,-1,140,141,145,142,-1,127,133,141,140,-1,127,126,132,133,-1,126,132,62,125,-1,31,94,143,144,-1,142,143,144,145,-1,140,125,62,141,-1,31,94,148,149,-1]).setSolid(False)
Coordinate20 = CoordinateObject().setDEF("ArchChord").setPoint([2,0,0,1.997498435543818,0.1,0,1.98997487421324,0.2,0,1.977371993328519,0.3,0,1.9595917942265424,0.4,0,1.9364916731037085,0.5,0,1.907878402833891,0.6,0,1.8734993995195193,0.7,0,1.833030277982336,0.8,0,1.786057109949175,0.9,0,1.7320508075688774,1,0,1.6703293088490068,1.1,0,1.6,1.2,0,1.5198684153570663,1.3,0,1.42828568570857,1.4,0,1.3228756555322954,1.5,0,1.2,1.6,0,1.0535653752852738,1.7,0,0.9020947843768965,1.785,0,0.7599342076785331,1.85,0,0.6244997998398398,1.9,0,0.5425633603552678,1.925,0,0.4444097208657794,1.95,0,0.36181625170796194,1.967,0,0.2821347195933173,1.98,0,0.19974984355438344,1.99,0,0.16718552568927703,1.993,0,0.14133294025102577,1.995,0,0.10950342460398416,1.997,0,0.08942035562443253,1.998,0,0.06323764701505419,1.999,0,0,2,0,-0.06323764701505419,1.999,0,-0.08942035562443253,1.998,0,-0.10950342460398416,1.997,0,-0.14133294025102577,1.995,0,-0.16718552568927703,1.993,0,-0.19974984355438344,1.99,0,-0.2821347195933173,1.98,0,-0.36181625170796194,1.967,0,-0.4444097208657794,1.95,0,-0.5425633603552678,1.925,0,-0.6244997998398398,1.9,0,-0.7599342076785331,1.85,0,-0.9020947843768965,1.785,0,-1.0535653752852738,1.7,0,-1.2,1.6,0,-1.3228756555322954,1.5,0,-1.42828568570857,1.4,0,-1.5198684153570663,1.3,0,-1.6,1.2,0,-1.6703293088490068,1.1,0,-1.7320508075688774,1,0,-1.786057109949175,0.9,0,-1.833030277982336,0.8,0,-1.8734993995195193,0.7,0,-1.907878402833891,0.6,0,-1.9364916731037085,0.5,0,-1.9595917942265424,0.4,0,-1.977371993328519,0.3,0,-1.98997487421324,0.2,0,-1.997498435543818,0.1,0,-2,0,0,2,0,3,1.997498435543818,0.1,3,1.98997487421324,0.2,3,1.977371993328519,0.3,3,1.9595917942265424,0.4,3,1.9364916731037085,0.5,3,1.907878402833891,0.6,3,1.8734993995195193,0.7,3,1.833030277982336,0.8,3,1.786057109949175,0.9,3,1.7320508075688774,1,3,1.6703293088490068,1.1,3,1.6,1.2,3,1.5198684153570663,1.3,3,1.42828568570857,1.4,3,1.3228756555322954,1.5,3,1.2,1.6,3,1.0535653752852738,1.7,3,0.9020947843768965,1.785,3,0.7599342076785331,1.85,3,0.6244997998398398,1.9,3,0.5425633603552678,1.925,3,0.4444097208657794,1.95,3,0.36181625170796194,1.967,3,0.2821347195933173,1.98,3,0.19974984355438344,1.99,3,0.16718552568927703,1.993,3,0.14133294025102577,1.995,3,0.10950342460398416,1.997,3,0.08942035562443253,1.998,3,0.06323764701505419,1.999,3,0,2,3,-0.06323764701505419,1.999,3,-0.08942035562443253,1.998,3,-0.10950342460398416,1.997,3,-0.14133294025102577,1.995,3,-0.16718552568927703,1.993,3,-0.19974984355438344,1.99,3,-0.2821347195933173,1.98,3,-0.36181625170796194,1.967,3,-0.4444097208657794,1.95,3,-0.5425633603552678,1.925,3,-0.6244997998398398,1.9,3,-0.7599342076785331,1.85,3,-0.9020947843768965,1.785,3,-1.0535653752852738,1.7,3,-1.2,1.6,3,-1.3228756555322954,1.5,3,-1.42828568570857,1.4,3,-1.5198684153570663,1.3,3,-1.6,1.2,3,-1.6703293088490068,1.1,3,-1.7320508075688774,1,3,-1.786057109949175,0.9,3,-1.833030277982336,0.8,3,-1.8734993995195193,0.7,3,-1.907878402833891,0.6,3,-1.9364916731037085,0.5,3,-1.9595917942265424,0.4,3,-1.977371993328519,0.3,3,-1.98997487421324,0.2,3,-1.997498435543818,0.1,3,-2,0,3,-2,-1,3,-2.5,-1,3,-2.5,2.5,3,2.5,2.5,3,2.5,-1,3,2,-1,3,-2,-1,0,-2.5,-1,0,-2.5,2.5,0,2.5,2.5,0,2.5,-1,0,2,-1,0,2.5,0,3,2.5,0,0,-2.5,0,3,-2.5,0,0,-2.5,2,3,-2,2,3,-2,2,0,-2.5,2,0,-2,2.5,3,-2,2.5,0,0,2.5,3,0,2.5,0,2,2,3,2.5,2,3,2.5,2,0,2,2,0,2,2.5,3,2,2.5,0])
IndexedFaceSet19.setCoord(Coordinate20)
Shape18.setGeometry(IndexedFaceSet19)
Appearance21 = AppearanceObject()
Material22 = MaterialObject().setDEF("MaterialNode").setDiffuseColor([1,0.75,0.25])
Appearance21.setMaterial(Material22)
Shape18.setAppearance(Appearance21)
Scene17.addChild(Shape18)
X3D0.setScene(Scene17)

X3D0.toFileX3D("ArchHalf.new.x3d")
