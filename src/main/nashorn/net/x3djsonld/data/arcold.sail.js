load('X3Dautoclass.js');

// Javadoc annotations follow, see below for source.
/**
 * <p> an attempt to implement an arc in a graph. </p>
 <p> Related links: arcold_sail.java source, <a href="http://www.web3d.org/x3d/content/examples/X3dResources.html" target="_blank">X3D Resources</a>, <a href="http://www.web3d.org/x3d/content/examples/X3dSceneAuthoringHints.html" target="_blank">X3D Scene Authoring Hints</a> and <a href="http://www.web3d.org/x3d/content/X3dTooltips.html" target="_blank">X3D Tooltips</a>. </p>
	<table style="color:black; border:0px solid; border-spacing:10px 0px;" summary="Scene Metadata">
		<tr style="background-color:silver; border-color:silver;">
			<td style="text-align:center; padding:10px 0px;"><i>meta tags</i></td>
			<td style="text-align:left;   padding:10px 0px;">net.x3djsonld.data.arcold_sail&nbsp; Document Metadata </td>
		</tr>

		<tr>
			<td style="text-align:right; vertical-align: text-top;"> <i> title </i> </td>
			<td> <a href="https://coderextreme.net/X3DJSONLD/arc.x3d">arc.x3d</a> </td>
		</tr>
		<tr>
			<td style="text-align:right; vertical-align: text-top;"> <i> creator </i> </td>
			<td> John Carlson </td>
		</tr>
		<tr>
			<td style="text-align:right; vertical-align: text-top;"> <i> generator </i> </td>
			<td> manual </td>
		</tr>
		<tr>
			<td style="text-align:right; vertical-align: text-top;"> <i> identifier </i> </td>
			<td> <a href="https://coderextreme.net/X3DJSONLD/arc.x3d" target="_blank">https://coderextreme.net/X3DJSONLD/arc.x3d</a> </td>
		</tr>
		<tr>
			<td style="text-align:right; vertical-align: text-top;"> <i> description </i> </td>
			<td> an attempt to implement an arc in a graph </td>
		</tr>
		<tr style="background-color:silver; border-color:silver;">
			<td style="text-align:center;" colspan="2">  &nbsp; </td>
		</tr>
	</table>

	<p>
		This program uses the
		<a href="http://www.web3d.org/specifications/java/X3DJSAIL.html" target="_blank">X3D Java Scene Access Interface Library (X3DJSAIL)</a>.
		It has been produced using the 
		<a href="http://www.web3d.org/x3d/stylesheets/X3dToES5.xslt" target="_blank">X3dToES5.xslt</a>
		stylesheet to create ES5 source code from an <code>.x3d</code> scene.
	</p>

	* @author John Carlson
 */

function arcold_sail
  /** Default constructor to create this object. */
  ()
  {
    /** The initialized model object, created within initialize() method. */
    this.x3dModel = {};
    this.initialize();
    return this;
  }
arcold_sail.prototype = {
  /** Create and initialize the X3D model. */
  initialize : function ()
  {
  this.x3dModel = new X3DObject().setProfile("Immersive").setVersion("3.3")
  .setHead(new headObject()
    .addMeta(new metaObject().setName("title").setContent("arc.x3d"))
    .addMeta(new metaObject().setName("creator").setContent("John Carlson"))
    .addMeta(new metaObject().setName("generator").setContent("manual"))
    .addMeta(new metaObject().setName("identifier").setContent("https://coderextreme.net/X3DJSONLD/arc.x3d"))
    .addMeta(new metaObject().setName("description").setContent("an attempt to implement an arc in a graph")))
  .setScene(new SceneObject()
    .addChild(new ViewpointObject().setDescription("a moving graph").setPosition(0.0,0.0,5.0))
    .addChild(new BackgroundObject().setSkyColor(new MFColorObject(Java.to([0.4,0.4,0.4], Java.type("float[]")))))
    .addChild(new TransformObject("trans1")
      .addChild(new TransformObject("rotscale1")
        .addChild(new ShapeObject()
          .setAppearance(new AppearanceObject()
            .setMaterial(new MaterialObject().setDiffuseColor(0.2,0.7,0.7)))
          .setGeometry(new CylinderObject().setRadius(0.1)))))
    .addChild(new TransformObject("trans2")
      .addChild(new TransformObject("rotscale2")
        .addChild(new ShapeObject()
          .setAppearance(new AppearanceObject()
            .setMaterial(new MaterialObject().setDiffuseColor(0.2,0.7,0.7)))
          .setGeometry(new CylinderObject().setRadius(0.1)))))
    .addChild(new TransformObject("trans3")
      .addChild(new TransformObject("rotscale3")
        .addChild(new ShapeObject()
          .setAppearance(new AppearanceObject()
            .setMaterial(new MaterialObject().setDiffuseColor(0.2,0.7,0.7)))
          .setGeometry(new CylinderObject().setRadius(0.1)))))
    .addChild(new ProtoDeclareObject().setName("point")
      .setProtoInterface(new ProtoInterfaceObject()
        .addField(new fieldObject().setAccessType("inputOutput").setName("translation").setType("SFVec3f").setValue("0 0 0")))
      .setProtoBody(new ProtoBodyObject()
        .addChild(new TransformObject("node")
          .setIS(new ISObject()
            .addConnect(new connectObject().setNodeField("translation").setProtoField("translation")))
          .addChild(new ShapeObject()
            .setGeometry(new SphereObject().setRadius(0.1))
            .setAppearance(new AppearanceObject()
              .setMaterial(new MaterialObject().setDiffuseColor(1.0,0.0,0.0))))
          .addChild(new PositionInterpolatorObject("PI1").setKeyValue(new MFVec3fObject(Java.to([0.0,0.0,0.0,0.0,5.0,0.0], Java.type("float[]")))).setKey(Java.to([0.0,1.0], Java.type("float[]"))))
          .addChild(new ScriptObject("MB1").setSourceCode(
"<![CDATA[" + "\n" +
"\n" + 
"\n" + 
"ecmascript:" + "\n" + 
"		function set_location(value) {" + "\n" + 
"                    old = translation;" + "\n" + 
"		    translation = new SFVec3f(Math.random()*10-5, Math.random()*10-5, Math.random()*10-5);" + "\n" + 
"                    keyValue = new MFVec3f([old, translation]);" + "\n" + 
"		    // Browser.println(translation);" + "\n" + 
"		}" + "\n" + "]]>"
)
            .addField(new fieldObject().setAccessType("inputOutput").setName("translation").setType("SFVec3f").setValue("50 50 0"))
            .addField(new fieldObject().setAccessType("inputOutput").setName("old").setType("SFVec3f").setValue("0 0 0"))
            .addField(new fieldObject().setAccessType("inputOnly").setName("set_location").setType("SFTime"))
            .addField(new fieldObject().setAccessType("outputOnly").setName("keyValue").setType("MFVec3f")))
          .addChild(new TimeSensorObject("CL1").setCycleInterval(3).setLoop(true))
          .addChild(new ROUTEObject().setFromNode("CL1").setFromField("cycleTime").setToNode("MB1").setToField("set_location"))
          .addChild(new ROUTEObject().setFromNode("CL1").setFromField("fraction_changed").setToNode("PI1").setToField("set_fraction"))
          .addChild(new ROUTEObject().setFromNode("MB1").setFromField("keyValue").setToNode("PI1").setToField("keyValue"))
          .addChild(new ROUTEObject().setFromNode("PI1").setFromField("value_changed").setToNode("node").setToField("set_translation")))))
    .addComments(" from doug sanden ")
    .addChild(new ProtoDeclareObject().setName("x3dconnector")
      .setProtoInterface(new ProtoInterfaceObject()
        .addField(new fieldObject().setAccessType("inputOutput").setName("startnode").setType("SFNode"))
        .addField(new fieldObject().setAccessType("inputOutput").setName("endnode").setType("SFNode"))
        .addField(new fieldObject().setAccessType("inputOutput").setName("transnode").setType("SFNode"))
        .addField(new fieldObject().setAccessType("inputOutput").setName("rotscalenode").setType("SFNode"))
        .addField(new fieldObject().setAccessType("inputOnly").setName("set_startpoint").setType("SFVec3f"))
        .addField(new fieldObject().setAccessType("inputOnly").setName("set_endpoint").setType("SFVec3f")))
      .setProtoBody(new ProtoBodyObject()
        .addChild(new ScriptObject("S1").setSourceCode(
"<![CDATA[" + "\n" +
"\n" + 
"            ecmascript:" + "\n" + 
"        function recompute(startpoint,endpoint){" + "\n" + 
"	    if (typeof endpoint === 'undefined') {" + "\n" + 
"		return;" + "\n" + 
"	    }" + "\n" + 
"            var dif = endpoint.subtract(startpoint);" + "\n" + 
"            var dist = dif.length()*0.5;" + "\n" + 
"            var dif2 = dif.multiply(0.5);" + "\n" + 
"            var norm = dif.normalize();" + "\n" + 
"            var transl = startpoint.add(dif2);" + "\n" + 
"	    if (typeof Quaternion !== 'undefined') {" + "\n" + 
"		    return {" + "\n" + 
"			    scale : new SFVec3f(1.0,dist,1.0)," + "\n" + 
"			    translation : transl," + "\n" + 
"			    rotation : new Quaternion.rotateFromTo(new SFVec3f(0.0,1.0,0.0), norm)" + "\n" + 
"		    };" + "\n" + 
"	    } else {" + "\n" + 
"		    return {" + "\n" + 
"			    scale : new SFVec3f(1.0,dist,1.0)," + "\n" + 
"			    translation : transl," + "\n" + 
"			    rotation : new SFRotation(new SFVec3f(0.0,1.0,0.0),norm)" + "\n" + 
"		    };" + "\n" + 
"	    }" + "\n" + 
"	}" + "\n" + 
"	function recompute_and_route(startpoint, endpoint) {" + "\n" + 
"		var trafo = recompute(startpoint, endpoint);" + "\n" + 
"		if (typeof trafo !== 'undefined') {" + "\n" + 
"			transnode.translation = trafo.translation;" + "\n" + 
"			rotscalenode.rotation = trafo.rotation;" + "\n" + 
"			rotscalenode.scale = trafo.scale;" + "\n" + 
"		} else {" + "\n" + 
"			Browser.print(\"recompute returned undefined\");" + "\n" + 
"		}" + "\n" + 
"	}" + "\n" + 
"        function initialize(){" + "\n" + 
"            recompute_and_route(startnode.translation,endnode.translation);" + "\n" + 
"        }" + "\n" + 
"        function set_startpoint(val,t){" + "\n" + 
"            recompute_and_route(val || startnode.translation,endnode.translation);" + "\n" + 
"        }" + "\n" + 
"        function set_endpoint(val,t){" + "\n" + 
"            recompute_and_route(startnode.translation,val || endnode.translation);" + "\n" + 
"        }" + "\n" + "]]>"
)
          .addField(new fieldObject().setAccessType("inputOutput").setName("startnode").setType("SFNode"))
          .addField(new fieldObject().setAccessType("inputOutput").setName("endnode").setType("SFNode"))
          .addField(new fieldObject().setAccessType("inputOutput").setName("transnode").setType("SFNode"))
          .addField(new fieldObject().setAccessType("inputOutput").setName("rotscalenode").setType("SFNode"))
          .addField(new fieldObject().setAccessType("inputOnly").setName("set_startpoint").setType("SFVec3f"))
          .addField(new fieldObject().setAccessType("inputOnly").setName("set_endpoint").setType("SFVec3f"))
          .setIS(new ISObject()
            .addConnect(new connectObject().setNodeField("startnode").setProtoField("startnode"))
            .addConnect(new connectObject().setNodeField("endnode").setProtoField("endnode"))
            .addConnect(new connectObject().setNodeField("transnode").setProtoField("transnode"))
            .addConnect(new connectObject().setNodeField("rotscalenode").setProtoField("rotscalenode"))
            .addConnect(new connectObject().setNodeField("set_startpoint").setProtoField("set_startpoint"))
            .addConnect(new connectObject().setNodeField("set_endpoint").setProtoField("set_endpoint"))))))
    .addChild(new ProtoInstanceObject("G1", "point").setDEF("G1").setName("point"))
    .addChild(new ProtoInstanceObject("G2", "point").setDEF("G2").setName("point"))
    .addChild(new ProtoInstanceObject("G3", "point").setDEF("G3").setName("point"))
    .addChild(new ProtoInstanceObject("G4", "point").setDEF("G4").setName("point"))
    .addChild(new ProtoInstanceObject("connector1", "x3dconnector").setDEF("connector1").setName("x3dconnector")
      .addFieldValue(new fieldValueObject().setName("startnode")
        .addChild(new ProtoInstanceObject().setUSE("G1")))
      .addFieldValue(new fieldValueObject().setName("endnode")
        .addChild(new ProtoInstanceObject().setUSE("G2")))
      .addFieldValue(new fieldValueObject().setName("transnode")
        .addChild(new TransformObject().setUSE("trans1")))
      .addFieldValue(new fieldValueObject().setName("rotscalenode")
        .addChild(new TransformObject().setUSE("rotscale1"))))
    .addChild(new ProtoInstanceObject("connector2", "x3dconnector").setDEF("connector2").setName("x3dconnector")
      .addFieldValue(new fieldValueObject().setName("startnode")
        .addChild(new ProtoInstanceObject().setUSE("G1")))
      .addFieldValue(new fieldValueObject().setName("endnode")
        .addChild(new ProtoInstanceObject().setUSE("G3")))
      .addFieldValue(new fieldValueObject().setName("transnode")
        .addChild(new TransformObject().setUSE("trans2")))
      .addFieldValue(new fieldValueObject().setName("rotscalenode")
        .addChild(new TransformObject().setUSE("rotscale2"))))
    .addChild(new ProtoInstanceObject("connector3", "x3dconnector").setDEF("connector3").setName("x3dconnector")
      .addFieldValue(new fieldValueObject().setName("startnode")
        .addChild(new ProtoInstanceObject().setUSE("G1")))
      .addFieldValue(new fieldValueObject().setName("endnode")
        .addChild(new ProtoInstanceObject().setUSE("G4")))
      .addFieldValue(new fieldValueObject().setName("transnode")
        .addChild(new TransformObject().setUSE("trans3")))
      .addFieldValue(new fieldValueObject().setName("rotscalenode")
        .addChild(new TransformObject().setUSE("rotscale3"))))
    .addChild(new ROUTEObject().setFromNode("G1").setFromField("translation_changed").setToNode("connector1").setToField("set_startpoint"))
    .addChild(new ROUTEObject().setFromNode("G2").setFromField("translation_changed").setToNode("connector1").setToField("set_endpoint"))
    .addChild(new ROUTEObject().setFromNode("G1").setFromField("translation_changed").setToNode("connector2").setToField("set_startpoint"))
    .addChild(new ROUTEObject().setFromNode("G3").setFromField("translation_changed").setToNode("connector2").setToField("set_endpoint"))
    .addChild(new ROUTEObject().setFromNode("G1").setFromField("translation_changed").setToNode("connector3").setToField("set_startpoint"))
    .addChild(new ROUTEObject().setFromNode("G4").setFromField("translation_changed").setToNode("connector3").setToField("set_endpoint")));
  },
  // end of initialize() method


  /** Provide a shallow copy of the X3D model.
   * @return arcold_sail model
   */
  getX3dModel : function()
  {	  
	  return this.x3dModel;
  },
  
  /** Indicate X3DJSAIL validation results for this X3D model.
   * @return validation results plus exception information, if any
   */
  validateSelf : function()
  {
	var       metaResult = "";
	var validationResult = "";
	var  exceptionResult = "";
	try
	{
		this.initialize();
		
		if ((this.getX3dModel() == null) || (this.getX3dModel().getHead() == null))
		{
			validationResult = "empty scene, nothing to validate. " + this.x3dModel.validate();
			return validationResult;
		}
		// first list informational meta elements of interest
		var metaList = this.getX3dModel().getHead().getMetaList();
		for (var m in metaList) {
			meta = metaList[m];
			if (meta.getName().equals(metaObject.NAME_ERROR) ||
				meta.getName().equals(metaObject.NAME_WARNING) ||
				meta.getName().equals(metaObject.NAME_HINT) ||
				meta.getName().equals(metaObject.NAME_INFO) ||
				meta.getName().equals(metaObject.NAME_TODO))
			{
				metaResult += meta.toStringX3D();
			}
		}
		validationResult += this.x3dModel.validate(); // walk entire tree to validate correctness
	}
	catch (e)
	{
		exceptionResult = e; // report exception failures, if any
	}
	if  (metaResult === "" && exceptionResult === "" && validationResult === "")
	     return "success";
	else
	{
		var returnMessage = metaResult;
		if  (exceptionResult !== "" && validationResult !== "")
			returnMessage += "\n*** ";
		returnMessage += exceptionResult;
		if  (exceptionResult === "" && validationResult !== "")
			returnMessage = "\n" + returnMessage; // skip line before meta tags, etc.
		returnMessage += validationResult;
		return returnMessage;
	}
  },
    /** Default main() method provided for test purposes.
     * @param argv input parameters
     */
    main : function (argv)
    {
		var testObject = new arcold_sail();
		print ("arcold_sail execution self-validation test results: " + testObject.validateSelf());
	}
}
new arcold_sail().main();