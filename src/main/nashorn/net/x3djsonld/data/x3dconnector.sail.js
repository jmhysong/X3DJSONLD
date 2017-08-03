load('X3Dautoclass.js');

// Javadoc annotations follow, see below for source.
/**
 * <p> a generic proto to connect two objects. </p>
 <p> Related links: x3dconnector_sail.java source, <a href="http://www.web3d.org/x3d/content/examples/X3dResources.html" target="_blank">X3D Resources</a>, <a href="http://www.web3d.org/x3d/content/examples/X3dSceneAuthoringHints.html" target="_blank">X3D Scene Authoring Hints</a> and <a href="http://www.web3d.org/x3d/content/X3dTooltips.html" target="_blank">X3D Tooltips</a>. </p>
	<table style="color:black; border:0px solid; border-spacing:10px 0px;" summary="Scene Metadata">
		<tr style="background-color:silver; border-color:silver;">
			<td style="text-align:center; padding:10px 0px;"><i>meta tags</i></td>
			<td style="text-align:left;   padding:10px 0px;">net.x3djsonld.data.x3dconnector_sail&nbsp; Document Metadata </td>
		</tr>

		<tr>
			<td style="text-align:right; vertical-align: text-top;"> <i> title </i> </td>
			<td> <a href="https://coderextreme.net/X3DJSONLD/x3dconnectorProto">x3dconnectorProto</a> </td>
		</tr>
		<tr>
			<td style="text-align:right; vertical-align: text-top;"> <i> creator </i> </td>
			<td> Lost, Doug Sanden I think </td>
		</tr>
		<tr>
			<td style="text-align:right; vertical-align: text-top;"> <i> generator </i> </td>
			<td> manual </td>
		</tr>
		<tr>
			<td style="text-align:right; vertical-align: text-top;"> <i> identifier </i> </td>
			<td> <a href="https://coderextreme.net/X3DJSONLD/x3dconnectorProto.x3d" target="_blank">https://coderextreme.net/X3DJSONLD/x3dconnectorProto.x3d</a> </td>
		</tr>
		<tr>
			<td style="text-align:right; vertical-align: text-top;"> <i> description </i> </td>
			<td> a generic proto to connect two objects </td>
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

	* @author Lost, Doug Sanden I think
 */

function x3dconnector_sail
  /** Default constructor to create this object. */
  ()
  {
    /** The initialized model object, created within initialize() method. */
    this.x3dModel = {};
    this.initialize();
    return this;
  }
x3dconnector_sail.prototype = {
  /** Create and initialize the X3D model. */
  initialize : function ()
  {
  this.x3dModel = new X3DObject().setProfile("Immersive").setVersion("3.3")
  .setHead(new headObject()
    .addMeta(new metaObject().setName("title").setContent("x3dconnectorProto"))
    .addMeta(new metaObject().setName("creator").setContent("Lost, Doug Sanden I think"))
    .addMeta(new metaObject().setName("generator").setContent("manual"))
    .addMeta(new metaObject().setName("identifier").setContent("https://coderextreme.net/X3DJSONLD/x3dconnectorProto.x3d"))
    .addMeta(new metaObject().setName("description").setContent("a generic proto to connect two objects")))
  .setScene(new SceneObject()
    .addChild(new ViewpointObject().setDescription("Only Viewpoint").setPosition(0.0,0.0,5.0))
    .addChild(new BackgroundObject().setSkyColor(new MFColorObject(Java.to([0.4,0.4,0.4], Java.type("float[]")))))
    .addChild(new TransformObject("G1")
      .addChild(new ShapeObject()
        .setAppearance(new AppearanceObject()
          .setMaterial(new MaterialObject().setDiffuseColor(0.7,0.2,0.2)))
        .setGeometry(new SphereObject().setRadius(.1)))
      .addChild(new PlaneSensorObject("PS1").setDescription("Grab to move"))
      .addChild(new ROUTEObject().setFromNode("PS1").setFromField("translation_changed").setToNode("G1").setToField("translation")))
    .addChild(new TransformObject("G2").setTranslation(1.0,-1.0,.01)
      .addChild(new ShapeObject()
        .setAppearance(new AppearanceObject()
          .setMaterial(new MaterialObject().setDiffuseColor(0.2,0.7,0.2)))
        .setGeometry(new SphereObject().setRadius(.1)))
      .addChild(new PlaneSensorObject("PS2").setDescription("Grab to move"))
      .addChild(new ROUTEObject().setFromNode("PS2").setFromField("translation_changed").setToNode("G2").setToField("translation")))
    .addChild(new TransformObject("C0")
      .addChild(new TransformObject("C1")
        .addChild(new TransformObject("C2")
          .addChild(new ShapeObject()
            .setAppearance(new AppearanceObject()
              .setMaterial(new MaterialObject().setTransparency(.5).setDiffuseColor(0.2,0.7,0.7)))
            .setGeometry(new CylinderObject().setRadius(.05))))))
    .addChild(new ScriptObject("S1").setSourceCode(
"<![CDATA[" + "\n" +
"\n" + 
"        ecmascript:" + "\n" + 
"        function recompute(startpoint,endpoint){" + "\n" + 
"            var dif = endpoint.subtract(startpoint);" + "\n" + 
"            var dist = dif.length()*0.5;" + "\n" + 
"            var dif2 = dif.multiply(0.5);" + "\n" + 
"            var norm = dif.normalize();" + "\n" + 
"            var transl = startpoint.add(dif2);" + "\n" + 
"	    return {" + "\n" + 
"		    scale : new SFVec3f(1.0,dist,1.0)," + "\n" + 
"		    translation : transl," + "\n" + 
"		    rotation : new SFRotation(new SFVec3f(0.0,1.0,0.0),norm)" + "\n" + 
"	    	    // rotation : new x3dom.fields.Quaternion.rotateFromTo(new SFVec3f(0.0,1.0,0.0), norm)" + "\n" + 
"	    };" + "\n" + 
"	}" + "\n" + 
"	function recompute_and_route(startpoint, endpoint) {" + "\n" + 
"	      var trafo = recompute(startpoint, endpoint);" + "\n" + 
"	      transnode.translation = trafo.translation;" + "\n" + 
"	      rotscalenode.rotation = trafo.rotation;" + "\n" + 
"	      rotscalenode.scale = trafo.scale;" + "\n" + 
"	}" + "\n" + 
"        function initialize(){" + "\n" + 
"            recompute_and_route(startnode.translation,endnode.translation);" + "\n" + 
"        }" + "\n" + 
"        function set_startpoint(val,t){" + "\n" + 
"            recompute_and_route(val,endnode.translation);" + "\n" + 
"        }" + "\n" + 
"        function set_endpoint(val,t){" + "\n" + 
"            recompute_and_route(startnode.translation,val);" + "\n" + 
"        }" + "\n" + "]]>"
)
      .addField(new fieldObject().setAccessType("initializeOnly").setName("startnode").setType("SFNode")
        .addChild(new TransformObject().setUSE("G1")))
      .addField(new fieldObject().setAccessType("initializeOnly").setName("endnode").setType("SFNode")
        .addChild(new TransformObject().setUSE("G2")))
      .addField(new fieldObject().setAccessType("inputOutput").setName("transnode").setType("SFNode")
        .addChild(new TransformObject().setUSE("C0")))
      .addField(new fieldObject().setAccessType("inputOutput").setName("rotscalenode").setType("SFNode")
        .addChild(new TransformObject().setUSE("C2")))
      .addField(new fieldObject().setAccessType("inputOnly").setName("set_startpoint").setType("SFVec3f"))
      .addField(new fieldObject().setAccessType("inputOnly").setName("set_endpoint").setType("SFVec3f")))
    .addChild(new ROUTEObject().setFromNode("G1").setFromField("translation_changed").setToNode("S1").setToField("set_startpoint"))
    .addChild(new ROUTEObject().setFromNode("G2").setFromField("translation_changed").setToNode("S1").setToField("set_endpoint")));
  },
  // end of initialize() method


  /** Provide a shallow copy of the X3D model.
   * @return x3dconnector_sail model
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
		var testObject = new x3dconnector_sail();
		print ("x3dconnector_sail execution self-validation test results: " + testObject.validateSelf());
	}
}
new x3dconnector_sail().main();