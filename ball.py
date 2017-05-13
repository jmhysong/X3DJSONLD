from jnius import autoclass
from X3Dautoclass import *
X3D0 =  X3DObject().setProfile("Immersive").setVersion("3.3")
head1 = headObject()
component2 = componentObject().setName("EnvironmentalEffects").setLevel(1)
head1.addComponent(component2)
component3 = componentObject().setName("EnvironmentalEffects").setLevel(3)
head1.addComponent(component3)
meta4 = metaObject().setName("title").setContent("ball.x3d")
head1.addMeta(meta4)
meta5 = metaObject().setName("creator").setContent("John Carlson")
head1.addMeta(meta5)
meta6 = metaObject().setName("generator").setContent("manual")
head1.addMeta(meta6)
meta7 = metaObject().setName("identifier").setContent("http://coderextreme.net/X3DJSONLD/ball.x3d")
head1.addMeta(meta7)
meta8 = metaObject().setName("description").setContent("a prismatic sphere")
head1.addMeta(meta8)
meta9 = metaObject().setName("translated").setContent("10 May 2017")
head1.addMeta(meta9)
meta10 = metaObject().setName("generator").setContent("X3dToJson.xslt, http://www.web3d.org/x3d/stylesheets/X3dToJson.html")
head1.addMeta(meta10)
meta11 = metaObject().setName("reference").setContent("X3D JSON encoding: http://www.web3d.org/wiki/index.php/X3D_JSON_Encoding")
head1.addMeta(meta11)
meta12 = metaObject().setName("translated").setContent("12 May 2017")
head1.addMeta(meta12)
meta13 = metaObject().setName("generator").setContent("X3DJSONLD: https://github.com/coderextreme/X3DJSONLD")
head1.addMeta(meta13)
X3D0.setHead(head1)
Scene14 = SceneObject()
NavigationInfo15 = NavigationInfoObject().setType(["ANY","EXAMINE","FLY","LOOKAT"])
Scene14.addChild(NavigationInfo15)
Viewpoint16 = ViewpointObject().setDescription("Tour Views")
Scene14.addChild(Viewpoint16)
Background17 = BackgroundObject().setBackUrl(["cubemap/all_probes/stpeters_cross/stpeters_back.png","http://coderextreme.net/X3DJSONLD/cubemap/all_probes/stpeters_cross/stpeters_back.png"]).setBottomUrl(["cubemap/all_probes/stpeters_cross/stpeters_bottom.png","http://coderextreme.net/X3DJSONLD/cubemap/all_probes/stpeters_cross/stpeters_bottom.png"]).setFrontUrl(["cubemap/all_probes/stpeters_cross/stpeters_front.png","http://coderextreme.net/X3DJSONLD/cubemap/all_probes/stpeters_cross/stpeters_front.png"]).setLeftUrl(["cubemap/all_probes/stpeters_cross/stpeters_left.png","http://coderextreme.net/X3DJSONLD/cubemap/all_probes/stpeters_cross/stpeters_left.png"]).setRightUrl(["cubemap/all_probes/stpeters_cross/stpeters_right.png","http://coderextreme.net/X3DJSONLD/cubemap/all_probes/stpeters_cross/stpeters_right.png"]).setTopUrl(["cubemap/all_probes/stpeters_cross/stpeters_top.png","http://coderextreme.net/X3DJSONLD/cubemap/all_probes/stpeters_cross/stpeters_top.png"])
Scene14.addChild(Background17)
Transform18 = TransformObject()
Shape19 = ShapeObject()
Sphere20 = SphereObject()
Shape19.setGeometry(Sphere20)
Appearance21 = AppearanceObject()
Material22 = MaterialObject()
Appearance21.setMaterial(Material22)
ComposedCubeMapTexture23 = ComposedCubeMapTextureObject().setDEF("texture")
ImageTexture24 = ImageTextureObject().setUrl(["cubemap/all_probes/stpeters_cross/stpeters_back.png","http://coderextreme.net/X3DJSONLD/cubemap/all_probes/stpeters_cross/stpeters_back.png"])
ComposedCubeMapTexture23.setBack(ImageTexture24)
ImageTexture25 = ImageTextureObject().setUrl(["cubemap/all_probes/stpeters_cross/stpeters_bottom.png","http://coderextreme.net/X3DJSONLD/cubemap/all_probes/stpeters_cross/stpeters_bottom.png"])
ComposedCubeMapTexture23.setBottom(ImageTexture25)
ImageTexture26 = ImageTextureObject().setUrl(["cubemap/all_probes/stpeters_cross/stpeters_front.png","http://coderextreme.net/X3DJSONLD/cubemap/all_probes/stpeters_cross/stpeters_front.png"])
ComposedCubeMapTexture23.setFront(ImageTexture26)
ImageTexture27 = ImageTextureObject().setUrl(["cubemap/all_probes/stpeters_cross/stpeters_left.png","http://coderextreme.net/X3DJSONLD/cubemap/all_probes/stpeters_cross/stpeters_left.png"])
ComposedCubeMapTexture23.setLeft(ImageTexture27)
ImageTexture28 = ImageTextureObject().setUrl(["cubemap/all_probes/stpeters_cross/stpeters_right.png","http://coderextreme.net/X3DJSONLD/cubemap/all_probes/stpeters_cross/stpeters_right.png"])
ComposedCubeMapTexture23.setRight(ImageTexture28)
ImageTexture29 = ImageTextureObject().setUrl(["cubemap/all_probes/stpeters_cross/stpeters_top.png","http://coderextreme.net/X3DJSONLD/cubemap/all_probes/stpeters_cross/stpeters_top.png"])
ComposedCubeMapTexture23.setTop(ImageTexture29)
Appearance21.setTexture(ComposedCubeMapTexture23)

Appearance21.addComments(CommentsBlock("<ProgramShader DEF='ProgramShader' containerField='shaders' language='GLSL'> <ShaderProgram url='\"freewrl.vs\" \"http://coderextreme.net/X3DJSONLD/freewrl.vs\"' containerField='programs' type='VERTEX'> <field name='chromaticDispertion' accessType='initializeOnly' type='SFVec3f' value='0.98 1 1.033'/> <field name='bias' accessType='initializeOnly' type='SFFloat' value='0.5'/> <field name='scale' accessType='initializeOnly' type='SFFloat' value='0.5'/> <field name='power' accessType='initializeOnly' type='SFFloat' value='2'/> </ShaderProgram> <ShaderProgram url='\"freewrl.fs\" \"http://coderextreme.net/X3DJSONLD/freewrl.fs\"' containerField='programs' type='FRAGMENT'/> </ProgramShader>"))

Appearance21.addComments(CommentsBlock("<ComposedShader language='GLSL'> <field name='chromaticDispertion' accessType='initializeOnly' type='SFVec3f' value='0.98 1 1.033'></field> <field name='fw_Texture_unit0' type='SFNode' accessType=\"initializeOnly\"> <ComposedCubeMapTexture USE=\"texture\"></ComposedCubeMapTexture> </field> <field name='bias' accessType='initializeOnly' type='SFFloat' value='0.5'></field> <field name='scale' accessType='initializeOnly' type='SFFloat' value='0.5'></field> <field name='power' accessType='initializeOnly' type='SFFloat' value='2'></field> <ShaderPart url='\"contact.vs\" \"http://coderextreme.net/X3DJSONLD/contact.vs\"' type=\"VERTEX\" containerField='parts'></ShaderPart> <ShaderPart url='\"common.fs\" \"http://coderextreme.net/X3DJSONLD/common.fs\"' containerField='parts' type='FRAGMENT'></ShaderPart> </ComposedShader>"))

Appearance21.addComments(CommentsBlock("<ComposedShader language='GLSL'> <field name='chromaticDispertion' accessType='inputOutput' type='SFVec3f' value='0.98 1 1.033'></field> <field name='cube' type='SFNode' accessType=\"inputOutput\"> <ComposedCubeMapTexture USE=\"texture\"></ComposedCubeMapTexture> </field> <field name='bias' accessType='inputOutput' type='SFFloat' value='0.5'></field> <field name='scale' accessType='inputOutput' type='SFFloat' value='0.5'></field> <field name='power' accessType='inputOutput' type='SFFloat' value='2'></field> <ShaderPart url='\"octaga.vs\" \"http://coderextreme.net/X3DJSONLD/octaga.vs\"' type=\"VERTEX\" containerField='parts'></ShaderPart> <ShaderPart url='\"common.fs\" \"http://coderextreme.net/X3DJSONLD/common.fs\"' containerField='parts' type='FRAGMENT'></ShaderPart> </ComposedShader>"))

Appearance21.addComments(CommentsBlock("<ComposedShader language='GLSL'> <field name='chromaticDispertion' accessType='initializeOnly' type='SFVec3f' value='0.98 1 1.033'></field> <field name='cube' accessType='initializeOnly' type='SFInt32' value='0'></field> <field name='bias' accessType='initializeOnly' type='SFFloat' value='0.5'></field> <field name='scale' accessType='initializeOnly' type='SFFloat' value='0.5'></field> <field name='power' accessType='initializeOnly' type='SFFloat' value='2'></field> <ShaderPart url='\"instant.vs\" \"http://coderextreme.net/X3DJSONLD/instant.vs\"' type=\"VERTEX\" containerField='parts'></ShaderPart> <ShaderPart url='\"common.fs\" \"http://coderextreme.net/X3DJSONLD/common.fs\"' containerField='parts' type='FRAGMENT'></ShaderPart> </ComposedShader>"))

Appearance21.addComments(CommentsBlock(""))
ComposedShader30 = ComposedShaderObject().setLanguage("GLSL")
field31 = fieldObject().setType(fieldObject.TYPE_SFVEC3F).setName("chromaticDispertion").setAccessType(fieldObject.ACCESSTYPE_INPUTOUTPUT).setValue("0.98 1 1.033")
ComposedShader30.addField(field31)
field32 = fieldObject().setType(fieldObject.TYPE_SFNODE).setName("cube").setAccessType(fieldObject.ACCESSTYPE_INPUTOUTPUT)
ComposedCubeMapTexture33 = ComposedCubeMapTextureObject().setUSE("texture")
field32.addChild(ComposedCubeMapTexture33)
ComposedShader30.addField(field32)
field34 = fieldObject().setType(fieldObject.TYPE_SFFLOAT).setName("bias").setAccessType(fieldObject.ACCESSTYPE_INPUTOUTPUT).setValue("0.5")
ComposedShader30.addField(field34)
field35 = fieldObject().setType(fieldObject.TYPE_SFFLOAT).setName("scale").setAccessType(fieldObject.ACCESSTYPE_INPUTOUTPUT).setValue("0.5")
ComposedShader30.addField(field35)
field36 = fieldObject().setType(fieldObject.TYPE_SFFLOAT).setName("power").setAccessType(fieldObject.ACCESSTYPE_INPUTOUTPUT).setValue("2")
ComposedShader30.addField(field36)
ShaderPart37 = ShaderPartObject().setType("VERTEX").setUrl(["x3dom.vs","http://coderextreme.net/X3DJSONLD/x3dom.vs"])
ComposedShader30.addParts(ShaderPart37)
ShaderPart38 = ShaderPartObject().setType("FRAGMENT").setDEF("common").setUrl(["common.fs","http://coderextreme.net/X3DJSONLD/common.fs"])
ComposedShader30.addParts(ShaderPart38)
Appearance21.addShaders(ComposedShader30)
ComposedShader39 = ComposedShaderObject().setLanguage("GLSL")
field40 = fieldObject().setType(fieldObject.TYPE_SFVEC3F).setName("chromaticDispertion").setAccessType(fieldObject.ACCESSTYPE_INITIALIZEONLY).setValue("0.98 1 1.033")
ComposedShader39.addField(field40)
field41 = fieldObject().setType(fieldObject.TYPE_SFNODE).setName("cube").setAccessType(fieldObject.ACCESSTYPE_INITIALIZEONLY)
ComposedCubeMapTexture42 = ComposedCubeMapTextureObject().setUSE("texture")
field41.addChild(ComposedCubeMapTexture42)
ComposedShader39.addField(field41)
field43 = fieldObject().setType(fieldObject.TYPE_SFFLOAT).setName("bias").setAccessType(fieldObject.ACCESSTYPE_INITIALIZEONLY).setValue("0.5")
ComposedShader39.addField(field43)
field44 = fieldObject().setType(fieldObject.TYPE_SFFLOAT).setName("scale").setAccessType(fieldObject.ACCESSTYPE_INITIALIZEONLY).setValue("0.5")
ComposedShader39.addField(field44)
field45 = fieldObject().setType(fieldObject.TYPE_SFFLOAT).setName("power").setAccessType(fieldObject.ACCESSTYPE_INITIALIZEONLY).setValue("2")
ComposedShader39.addField(field45)
ShaderPart46 = ShaderPartObject().setType("VERTEX").setUrl(["cobweb.vs","http://coderextreme.net/X3DJSONLD/cobweb.vs"])
ComposedShader39.addParts(ShaderPart46)
ShaderPart47 = ShaderPartObject().setUSE("common")
ComposedShader39.addParts(ShaderPart47)
Appearance21.addShaders(ComposedShader39)
Shape19.setAppearance(Appearance21)
Transform18.addChild(Shape19)
Scene14.addChild(Transform18)
X3D0.setScene(Scene14)

X3D0.toFileX3D("ball.new.x3d")
