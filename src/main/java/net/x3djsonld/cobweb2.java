package net.x3djsonld;

import java.util.*;
import org.web3d.x3d.jsail.Core.*;
import org.web3d.x3d.jsail.EnvironmentalEffects.*;
import org.web3d.x3d.jsail.fields.*;
import org.web3d.x3d.jsail.Geometry3D.*;
import org.web3d.x3d.jsail.Grouping.*;
import org.web3d.x3d.jsail.Navigation.*;
import org.web3d.x3d.jsail.Scripting.*;
import org.web3d.x3d.jsail.Shape.*;
import org.web3d.x3d.jsail.Time.*;

// Javadoc annotations follow, see below for source.
/**
 * <p> Tour around a prismatic sphere. </p>
 <p> Related links: cobweb2.java source, <a href="http://www.web3d.org/x3d/content/examples/X3dResources.html" target="_blank">X3D Resources</a>, <a href="http://www.web3d.org/x3d/content/examples/X3dSceneAuthoringHints.html" target="_blank">X3D Scene Authoring Hints</a> and <a href="http://www.web3d.org/x3d/content/X3dTooltips.html" target="_blank">X3D Tooltips</a>. </p>
	<table style="color:black; border:0px solid; border-spacing:10px 0px;" summary="Scene Metadata">
		<tr style="background-color:silver; border-color:silver;">
			<td style="text-align:center; padding:10px 0px;"><i>meta tags</i></td>
			<td style="text-align:left;   padding:10px 0px;">net.x3djsonld.cobweb2&nbsp; Document Metadata </td>
		</tr>

		<tr>
			<td style="text-align:right; vertical-align: text-top;"> <i> title </i> </td>
			<td> <a href="http://coderextreme.net/X3DJSONLD/geo.x3d">geo.x3d</a> </td>
		</tr>
		<tr>
			<td style="text-align:right; vertical-align: text-top;"> <i> creator </i> </td>
			<td> John Carlson </td>
		</tr>
		<tr>
			<td style="text-align:right; vertical-align: text-top;"> <i> description </i> </td>
			<td> Tour around a prismatic sphere </td>
		</tr>
		<tr>
			<td style="text-align:right; vertical-align: text-top;"> <i> generator </i> </td>
			<td> X3D-Edit, <a href="https://savage.nps.edu/X3D-Edit" target="_blank">https://savage.nps.edu/X3D-Edit</a> </td>
		</tr>
		<tr>
			<td style="text-align:right; vertical-align: text-top;"> <i> identifier </i> </td>
			<td> <a href="http://coderextreme.net/X3DJSONLD/geo.x3d" target="_blank">http://coderextreme.net/X3DJSONLD/geo.x3d</a> </td>
		</tr>
		<tr>
			<td style="text-align:right; vertical-align: text-top;"> <i> translated </i> </td>
			<td> 13 March 2016 </td>
		</tr>
		<tr>
			<td style="text-align:right; vertical-align: text-top;"> <i> generator </i> </td>
			<td> X3dToJson.xslt, <a href="http://www.web3d.org/x3d/stylesheets/X3dToJson.html" target="_blank">http://www.web3d.org/x3d/stylesheets/X3dToJson.html</a> </td>
		</tr>
		<tr style="background-color:silver; border-color:silver;">
			<td style="text-align:center;" colspan="2">  &nbsp; </td>
		</tr>
	</table>

	<p>
		This program uses the
		<a href="http://www.web3d.org/specifications/java/X3DJSAIL.html" target="_blank">X3D Java Scene Access Interface Library (X3DJSAIL)</a>.
		It has been produced using the 
		<a href="http://www.web3d.org/x3d/stylesheets/X3dToJava.xslt" target="_blank">X3dToJava.xslt</a>
		stylesheet to create Java source code from an <code>.x3d</code> scene.
	</p>

	* @author John Carlson
 */

public class cobweb2
{
  /** Default constructor to create this object. */
  public cobweb2 ()
  {
    initialize();
  }
	
  /** Create and initialize the X3D model. */
  public final void initialize()
  {
  x3dModel = new X3DObject().setProfile("Immersive").setVersion("3.3")
  .setHead(new headObject()
    .addMeta(new metaObject().setName("title").setContent("geo.x3d"))
    .addMeta(new metaObject().setName("creator").setContent("John Carlson"))
    .addMeta(new metaObject().setName("description").setContent("Tour around a prismatic sphere"))
    .addMeta(new metaObject().setName("generator").setContent("X3D-Edit, https://savage.nps.edu/X3D-Edit"))
    .addMeta(new metaObject().setName("identifier").setContent("http://coderextreme.net/X3DJSONLD/geo.x3d"))
    .addMeta(new metaObject().setName("translated").setContent("13 March 2016"))
    .addMeta(new metaObject().setName("generator").setContent("X3dToJson.xslt, http://www.web3d.org/x3d/stylesheets/X3dToJson.html")))
  .setScene(new SceneObject()
    .addChild(new NavigationInfoObject().setType(new MFStringObject("\"EXAMINE\"")))
    .addChild(new ViewpointObject().setDescription("Bubbles in action").setPosition(0.0f,0.0f,4.0f).setOrientation(1.0f,0.0f,0.0f,0.0f))
    .addChild(new BackgroundObject().setBackUrl(new MFStringObject("\"images/BK.png\" \"http://coderextreme.net/X3DJSONLD/images/BK.png\"")).setBottomUrl(new MFStringObject("\"images/BT.png\" \"http://coderextreme.net/X3DJSONLD/images/BT.png\"")).setFrontUrl(new MFStringObject("\"images/FR.png\" \"http://coderextreme.net/X3DJSONLD/images/FR.png\"")).setLeftUrl(new MFStringObject("\"images/LF.png\" \"http://coderextreme.net/X3DJSONLD/images/LF.png\"")).setRightUrl(new MFStringObject("\"images/RT.png\" \"http://coderextreme.net/X3DJSONLD/images/RT.png\"")).setTopUrl(new MFStringObject("\"images/TP.png\" \"http://coderextreme.net/X3DJSONLD/images/TP.png\"")))
    .addChild(new ProtoDeclareObject().setName("Bubble")
      .setProtoBody(new ProtoBodyObject()
        .addChild(new TransformObject("transform")
          .addChild(new ShapeObject()
            .setGeometry(new SphereObject().setRadius(0.25f))
            .setAppearance(new AppearanceObject()
              .setMaterial(new MaterialObject().setTransparency(0.2f).setDiffuseColor(1.0f,0.0f,0.0f))))
          .addChild(new ScriptObject("bounce").setSourceCode(
"<![CDATA[" + "\n" +
"\n" + 
"ecmascript:" + "\n" + 
"function initialize() {" + "\n" + 
"    velocity = new SFVec3f(Math.random() * 0.25 - 0.125, Math.random() * 0.25 - 0.125, Math.random() * 0.25 - 0.125);" + "\n" + 
"\n" + 
"    scalvel = new SFVec3f(Math.random() * 0.4, Math.random() * 0.4, Math.random() * 0.4);" + "\n" + 
"}" + "\n" + 
"\n" + 
"function set_translation(value) {" + "\n" + 
"   translation = value;" + "\n" + 
"}" + "\n" + 
"\n" + 
"function set_scale(value) {" + "\n" + 
"   scale = value;" + "\n" + 
"}" + "\n" + 
"\n" + 
"function translation_changed() {" + "\n" + 
"	return translation;" + "\n" + 
"}" + "\n" + 
"\n" + 
"function set_fraction(value) {" + "\n" + 
"    if (typeof translation === 'undefined') {" + "\n" + 
"		translation = [0, 0, 0];" + "\n" + 
"    }" + "\n" + 
"    if (typeof velocity === 'undefined') {" + "\n" + 
"		velocity = [0, 0, 0];" + "\n" + 
"    }" + "\n" + 
"    if (typeof scalevel === 'undefined') {" + "\n" + 
"		scalevel = [0, 0, 0];" + "\n" + 
"    }" + "\n" + 
"    if (typeof scale === 'undefined') {" + "\n" + 
"		scale = [1, 1, 1];" + "\n" + 
"    }" + "\n" + 
"    translation = new SFVec3f(	translation[0] + velocity[0], translation[1] + velocity[1], translation[2] + velocity[2]);" + "\n" + 
"    scale = new SFVec3f(scale[0] + scalvel[0], scale[1] + scalvel[1], scale[2] + scalvel[2]);" + "\n" + 
"    for (var j = 0; j &lt; 3; j++) {" + "\n" + 
"	    // if you get to far away or too big, explode" + "\n" + 
"	    if ( Math.abs(translation[j]) &gt; 256) {" + "\n" + 
"		translation[j] = 0;" + "\n" + 
"		initialize();" + "\n" + 
"	    }" + "\n" + 
"	    if (Math.abs(scale[j]) &gt; 20) {" + "\n" + 
"		scale[j] = scale[j]/2;" + "\n" + 
"		translation[j] = 0;" + "\n" + 
"		initialize();" + "\n" + 
"	    }" + "\n" + 
"    }" + "\n" + 
"}" + "]]>"
)
            .addField(new fieldObject().setAccessType("inputOutput").setName("scale").setType("SFVec3f").setValue("1 1 1"))
            .addField(new fieldObject().setAccessType("inputOutput").setName("translation").setType("SFVec3f").setValue("0 0 0"))
            .addField(new fieldObject().setAccessType("inputOutput").setName("velocity").setType("SFVec3f").setValue("0 0 0"))
            .addField(new fieldObject().setAccessType("inputOutput").setName("scalvel").setType("SFVec3f").setValue("0 0 0"))
            .addField(new fieldObject().setAccessType("inputOnly").setName("set_fraction").setType("SFFloat")))
          .addChild(new TimeSensorObject("bubbleClock").setCycleInterval(10).setLoop(true))
          .addChild(new ROUTEObject().setFromNode("transform").setFromField("translation_changed").setToNode("bounce").setToField("set_translation"))
          .addChild(new ROUTEObject().setFromNode("transform").setFromField("scale_changed").setToNode("bounce").setToField("set_scale"))
          .addChild(new ROUTEObject().setFromNode("bounce").setFromField("translation_changed").setToNode("transform").setToField("set_translation"))
          .addChild(new ROUTEObject().setFromNode("bounce").setFromField("scale_changed").setToNode("transform").setToField("set_scale"))
          .addChild(new ROUTEObject().setFromNode("bubbleClock").setFromField("fraction_changed").setToNode("bounce").setToField("set_fraction")))))
    .addChild(new ProtoInstanceObject("bubbleA", "Bubble").setDEF("bubbleA").setName("Bubble"))
    .addChild(new ProtoInstanceObject("bubbleB", "Bubble").setDEF("bubbleB").setName("Bubble"))
    .addChild(new ProtoInstanceObject("bubbleC", "Bubble").setDEF("bubbleC").setName("Bubble"))
    .addChild(new ProtoInstanceObject("bubbleD", "Bubble").setDEF("bubbleD").setName("Bubble")));
  }
  // end of initialize() method

  /** The initialized model object, created within initialize() method. */
  private X3DObject x3dModel;
  
  /** Provide a shallow copy of the X3D model.
   * @return cobweb2 model
   */
  public X3DObject getX3dModel()
  {	  
	  return x3dModel;
  }
  
  /** Indicate X3DJSAIL validation results for this X3D model.
   * @return validation results plus exception information, if any
   */
  public String validateSelf()
  {
	String       metaResult = new String();
	String validationResult = new String();
	String  exceptionResult = new String();
	try
	{
		initialize();
		
		if ((getX3dModel() == null) || (getX3dModel().getHead() == null))
		{
			validationResult = "empty scene, nothing to validate. " + x3dModel.validate();
			return validationResult;
		}
		// first list informational meta elements of interest
		for (metaObject meta : getX3dModel().getHead().getMetaList())
		{
			if (meta.getName().equals(metaObject.NAME_ERROR) ||
				meta.getName().equals(metaObject.NAME_WARNING) ||
				meta.getName().equals(metaObject.NAME_HINT) ||
				meta.getName().equals(metaObject.NAME_INFO) ||
				meta.getName().equals(metaObject.NAME_TODO))
			{
				metaResult += meta.toStringX3D();
			}
		}
		validationResult += x3dModel.validate(); // walk entire tree to validate correctness
	}
	catch (Exception e)
	{
		exceptionResult = e.getMessage(); // report exception failures, if any
	}
	if  (metaResult.isEmpty() && exceptionResult.isEmpty() && validationResult.isEmpty())
	     return "success";
	else
	{
		String returnMessage = metaResult;
		if  (!exceptionResult.isEmpty() && !validationResult.isEmpty())
			returnMessage += "\n*** ";
		returnMessage += exceptionResult;
		if  (exceptionResult.isEmpty() && !validationResult.isEmpty())
			returnMessage = "\n" + returnMessage; // skip line before meta tags, etc.
		returnMessage += validationResult;
		return returnMessage;
	}
  }
    /** Default main() method provided for test purposes.
     * @param argv input parameters
     */
    public static void main(String argv[])
    {
		cobweb2 testObject = new cobweb2();
		System.out.println ("cobweb2 execution self-validation test results: " + testObject.validateSelf());
	}
}
