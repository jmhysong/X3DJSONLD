package net.x3djsonld;

import java.util.*;
import org.web3d.x3d.jsail.Core.*;
import org.web3d.x3d.jsail.CubeMapTexturing.*;
import org.web3d.x3d.jsail.EnvironmentalEffects.*;
import org.web3d.x3d.jsail.fields.*;
import org.web3d.x3d.jsail.Geometry3D.*;
import org.web3d.x3d.jsail.Grouping.*;
import org.web3d.x3d.jsail.Navigation.*;
import org.web3d.x3d.jsail.Scripting.*;
import org.web3d.x3d.jsail.Shaders.*;
import org.web3d.x3d.jsail.Shape.*;
import org.web3d.x3d.jsail.Texturing.*;
import org.web3d.x3d.jsail.Time.*;

// Javadoc annotations follow, see below for source.
/**
 * <p> sphere with alternating backgrounds. </p>
 <p> Related links: mirror.java source, <a href="http://www.web3d.org/x3d/content/examples/X3dResources.html" target="_blank">X3D Resources</a>, <a href="http://www.web3d.org/x3d/content/examples/X3dSceneAuthoringHints.html" target="_blank">X3D Scene Authoring Hints</a> and <a href="http://www.web3d.org/x3d/content/X3dTooltips.html" target="_blank">X3D Tooltips</a>. </p>
	<table style="color:black; border:0px solid; border-spacing:10px 0px;" summary="Scene Metadata">
		<tr style="background-color:silver; border-color:silver;">
			<td style="text-align:center; padding:10px 0px;"><i>meta tags</i></td>
			<td style="text-align:left;   padding:10px 0px;">net.x3djsonld.mirror&nbsp; Document Metadata </td>
		</tr>

		<tr>
			<td style="text-align:right; vertical-align: text-top;"> <i> title </i> </td>
			<td> <a href="http://coderextreme.net/X3DJSONLD/mirror.x3d">mirror.x3d</a> </td>
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
			<td> <a href="http://coderextreme.net/X3DJSONLD/mirror.x3d" target="_blank">http://coderextreme.net/X3DJSONLD/mirror.x3d</a> </td>
		</tr>
		<tr>
			<td style="text-align:right; vertical-align: text-top;"> <i> description </i> </td>
			<td> sphere with alternating backgrounds </td>
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

public class mirror
{
  /** Default constructor to create this object. */
  public mirror ()
  {
    initialize();
  }
	
  /** Create and initialize the X3D model. */
  public final void initialize()
  {
  x3dModel = new X3DObject().setProfile("Immersive").setVersion("3.3")
  .setHead(new headObject()
    .addComponent(new componentObject().setName("EnvironmentalEffects").setLevel(3))
    .addMeta(new metaObject().setName("title").setContent("mirror.x3d"))
    .addMeta(new metaObject().setName("creator").setContent("John Carlson"))
    .addMeta(new metaObject().setName("generator").setContent("manual"))
    .addMeta(new metaObject().setName("identifier").setContent("http://coderextreme.net/X3DJSONLD/mirror.x3d"))
    .addMeta(new metaObject().setName("description").setContent("sphere with alternating backgrounds")))
  .setScene(new SceneObject()
    .addChild(new ViewpointObject().setDescription("Switch background and images texture").setPosition(0.0f,5.0f,100.0f))
    .addChild(new TextureBackgroundObject()
      .setLeftTexture(new ImageTextureObject("leftBack").setUrl(new MFStringObject("\"images/all_probes/beach_cross/beach_left.png\" \"http://coderextreme.net/images/all_probes/beach_cross/beach_left.png\"")))
      .setRightTexture(new ImageTextureObject("rightBack").setUrl(new MFStringObject("\"images/all_probes/beach_cross/beach_right.png\" \"http://coderextreme.net/images/all_probes/beach_cross/beach_right.png\"")))
      .setFrontTexture(new ImageTextureObject("frontBack").setUrl(new MFStringObject("\"images/all_probes/beach_cross/beach_front.png\" \"http://coderextreme.net/images/all_probes/beach_cross/beach_front.png\"")))
      .setBackTexture(new ImageTextureObject("backBack").setUrl(new MFStringObject("\"images/all_probes/beach_cross/beach_back.png\" \"http://coderextreme.net/images/all_probes/beach_cross/beach_back.png\"")))
      .setTopTexture(new ImageTextureObject("topBack").setUrl(new MFStringObject("\"images/all_probes/beach_cross/beach_top.png\" \"http://coderextreme.net/images/all_probes/beach_cross/beach_top.png\"")))
      .setBottomTexture(new ImageTextureObject("bottomBack").setUrl(new MFStringObject("\"images/all_probes/beach_cross/beach_bottom.png\" \"http://coderextreme.net/images/all_probes/beach_cross/beach_bottom.png\""))))
    .addChild(new TransformObject()
      .addChild(new ShapeObject()
        .setAppearance(new AppearanceObject()
          .setMaterial(new MaterialObject().setSpecularColor(.5f,.5f,.5f).setDiffuseColor(.7f,.7f,.7f))
          .setTexture(new ComposedCubeMapTextureObject()
            .setBack(new ImageTextureObject("backShader").setUrl(new MFStringObject("\"images/all_probes/beach_cross/beach_back.png\" \"http://coderextreme.net/images/all_probes/beach_cross/beach_back.png\"")))
            .setBottom(new ImageTextureObject("bottomShader").setUrl(new MFStringObject("\"images/all_probes/beach_cross/beach_bottom.png\" \"http://coderextreme.net/images/all_probes/beach_cross/beach_bottom.png\"")))
            .setFront(new ImageTextureObject("frontShader").setUrl(new MFStringObject("\"images/all_probes/beach_cross/beach_front.png\" \"http://coderextreme.net/images/all_probes/beach_cross/beach_front.png\"")))
            .setLeft(new ImageTextureObject("leftShader").setUrl(new MFStringObject("\"images/all_probes/beach_cross/beach_left.png\" \"http://coderextreme.net/images/all_probes/beach_cross/beach_left.png\"")))
            .setRight(new ImageTextureObject("rightShader").setUrl(new MFStringObject("\"images/all_probes/beach_cross/beach_right.png\" \"http://coderextreme.net/images/all_probes/beach_cross/beach_right.png\"")))
            .setTop(new ImageTextureObject("topShader").setUrl(new MFStringObject("\"images/all_probes/beach_cross/beach_top.png\" \"http://coderextreme.net/images/all_probes/beach_cross/beach_top.png\""))))
          .addShaders(new ComposedShaderObject("x3dom").setLanguage("GLSL")
            .addComments("http://hypertextbook.com/facts/2005/JustinChe.shtml")
            .addField(new fieldObject().setAccessType("inputOutput").setName("chromaticDispertion").setType("SFVec3f").setValue("0.98 1 1.033"))
            .addField(new fieldObject().setAccessType("inputOutput").setName("cube").setType("SFInt32").setValue("0"))
            .addField(new fieldObject().setAccessType("inputOutput").setName("bias").setType("SFFloat").setValue("0.5"))
            .addField(new fieldObject().setAccessType("inputOutput").setName("scale").setType("SFFloat").setValue("0.5"))
            .addField(new fieldObject().setAccessType("inputOutput").setName("power").setType("SFFloat").setValue("2"))
            .addParts(new ShaderPartObject().setUrl(new MFStringObject("\"x3dom.vs\" \"http://coderextreme.net/X3DJSONLD/x3dom.vs\"")))
            .addParts(new ShaderPartObject().setType("FRAGMENT").setUrl(new MFStringObject("\"mix.fs\" \"http://coderextreme.net/X3DJSONLD/mix.fs\""))))
          .addShaders(new ComposedShaderObject("cobweb").setLanguage("GLSL")
            .addComments("http://hypertextbook.com/facts/2005/JustinChe.shtml")
            .addField(new fieldObject().setAccessType("inputOutput").setName("chromaticDispertion").setType("SFVec3f").setValue("0.98 1 1.033"))
            .addField(new fieldObject().setAccessType("inputOutput").setName("cube").setType("SFInt32").setValue("0"))
            .addField(new fieldObject().setAccessType("inputOutput").setName("bias").setType("SFFloat").setValue("0.5"))
            .addField(new fieldObject().setAccessType("inputOutput").setName("scale").setType("SFFloat").setValue("0.5"))
            .addField(new fieldObject().setAccessType("inputOutput").setName("power").setType("SFFloat").setValue("2"))
            .addParts(new ShaderPartObject().setUrl(new MFStringObject("\"cobweb.vs\" \"http://coderextreme.net/X3DJSONLD/cobweb.vs\"")))
            .addParts(new ShaderPartObject().setType("FRAGMENT").setUrl(new MFStringObject("\"mix.fs\" \"http://coderextreme.net/X3DJSONLD/mix.fs\"")))))
        .setGeometry(new SphereObject().setRadius(30f)))
      .addChild(new ScriptObject("UrlSelector").setDirectOutput(true).setSourceCode(
"<![CDATA[" + "\n" +
" " + "\n" + 
"\n" + 
"ecmascript:" + "\n" + 
"        function set_fraction( f, tm ) {" + "\n" + 
"	    var side = Math.floor(f*frontUrls.length);" + "\n" + 
"	    if (side > frontUrls.length-1) {" + "\n" + 
"	    	side = 0;" + "\n" + 
"	    }" + "\n" + 
"	    if (side != old) {" + "\n" + 
"	    	    Browser.print(f+\" \"+side);" + "\n" + 
"	    	    old = side;" + "\n" + 
"		    front_changed[0] = frontUrls[side];" + "\n" + 
"		    back_changed[0] = backUrls[side];" + "\n" + 
"		    left_changed[0] = leftUrls[side];" + "\n" + 
"		    right_changed[0] = rightUrls[side];" + "\n" + 
"		    top_changed[0] = topUrls[side];" + "\n" + 
"		    bottom_changed[0] = bottomUrls[side];" + "\n" + 
"            }" + "\n" + 
"        }" + "\n" + "]]>"
)
        .addField(new fieldObject().setAccessType("initializeOnly").setName("frontUrls").setType("MFString").setValue(field_frontUrls_5_43_value))
        .addField(new fieldObject().setAccessType("initializeOnly").setName("backUrls").setType("MFString").setValue(field_backUrls_5_44_value))
        .addField(new fieldObject().setAccessType("initializeOnly").setName("leftUrls").setType("MFString").setValue(field_leftUrls_5_45_value))
        .addField(new fieldObject().setAccessType("initializeOnly").setName("rightUrls").setType("MFString").setValue(field_rightUrls_5_46_value))
        .addField(new fieldObject().setAccessType("initializeOnly").setName("topUrls").setType("MFString").setValue(field_topUrls_5_47_value))
        .addField(new fieldObject().setAccessType("initializeOnly").setName("bottomUrls").setType("MFString").setValue(field_bottomUrls_5_48_value))
        .addField(new fieldObject().setAccessType("outputOnly").setName("front_changed").setType("MFString"))
        .addField(new fieldObject().setAccessType("outputOnly").setName("back_changed").setType("MFString"))
        .addField(new fieldObject().setAccessType("outputOnly").setName("left_changed").setType("MFString"))
        .addField(new fieldObject().setAccessType("outputOnly").setName("right_changed").setType("MFString"))
        .addField(new fieldObject().setAccessType("outputOnly").setName("top_changed").setType("MFString"))
        .addField(new fieldObject().setAccessType("outputOnly").setName("bottom_changed").setType("MFString"))
        .addField(new fieldObject().setAccessType("inputOnly").setName("set_fraction").setType("SFFloat"))
        .addField(new fieldObject().setAccessType("inputOutput").setName("old").setType("SFInt32").setValue("-1")))
      .addChild(new TimeSensorObject("Clock").setCycleInterval(45).setLoop(true))
      .addChild(new ROUTEObject().setFromNode("Clock").setFromField("fraction_changed").setToNode("UrlSelector").setToField("set_fraction"))
      .addChild(new ROUTEObject().setFromNode("UrlSelector").setFromField("front_changed").setToNode("frontBack").setToField("url"))
      .addChild(new ROUTEObject().setFromNode("UrlSelector").setFromField("back_changed").setToNode("backBack").setToField("url"))
      .addChild(new ROUTEObject().setFromNode("UrlSelector").setFromField("left_changed").setToNode("leftBack").setToField("url"))
      .addChild(new ROUTEObject().setFromNode("UrlSelector").setFromField("right_changed").setToNode("rightBack").setToField("url"))
      .addChild(new ROUTEObject().setFromNode("UrlSelector").setFromField("top_changed").setToNode("topBack").setToField("url"))
      .addChild(new ROUTEObject().setFromNode("UrlSelector").setFromField("bottom_changed").setToNode("bottomBack").setToField("url"))
      .addChild(new ROUTEObject().setFromNode("UrlSelector").setFromField("front_changed").setToNode("frontShader").setToField("url"))
      .addChild(new ROUTEObject().setFromNode("UrlSelector").setFromField("back_changed").setToNode("backShader").setToField("url"))
      .addChild(new ROUTEObject().setFromNode("UrlSelector").setFromField("left_changed").setToNode("leftShader").setToField("url"))
      .addChild(new ROUTEObject().setFromNode("UrlSelector").setFromField("right_changed").setToNode("rightShader").setToField("url"))
      .addChild(new ROUTEObject().setFromNode("UrlSelector").setFromField("top_changed").setToNode("topShader").setToField("url"))
      .addChild(new ROUTEObject().setFromNode("UrlSelector").setFromField("bottom_changed").setToNode("bottomShader").setToField("url"))));
  }
  // end of initialize() method

	/** Large attribute array: field value field, scene-graph level=5, element #43, 9 total values */
	private SFStringObject field_frontUrls_5_43_value = new SFStringObject("\"images/all_probes/beach_cross/beach_front.png\" \"images/all_probes/building_cross/building_front.png\" \"images/all_probes/campus_cross/campus_front.png\" \"images/all_probes/galileo_cross/galileo_front.png\" \"images/all_probes/grace_cross/grace_front.png\" \"images/all_probes/kitchen_cross/kitchen_front.png\" \"images/all_probes/rnl_cross/rnl_front.png\" \"images/all_probes/stpeters_cross/stpeters_front.png\" \"images/all_probes/uffizi_cross/uffizi_front.png\"");

	/** Large attribute array: field value field, scene-graph level=5, element #44, 9 total values */
	private SFStringObject field_backUrls_5_44_value = new SFStringObject("\"images/all_probes/beach_cross/beach_back.png\" \"images/all_probes/building_cross/building_back.png\" \"images/all_probes/campus_cross/campus_back.png\" \"images/all_probes/galileo_cross/galileo_back.png\" \"images/all_probes/grace_cross/grace_back.png\" \"images/all_probes/kitchen_cross/kitchen_back.png\" \"images/all_probes/rnl_cross/rnl_back.png\" \"images/all_probes/stpeters_cross/stpeters_back.png\" \"images/all_probes/uffizi_cross/uffizi_back.png\"");

	/** Large attribute array: field value field, scene-graph level=5, element #45, 9 total values */
	private SFStringObject field_leftUrls_5_45_value = new SFStringObject("\"images/all_probes/beach_cross/beach_left.png\" \"images/all_probes/building_cross/building_left.png\" \"images/all_probes/campus_cross/campus_left.png\" \"images/all_probes/galileo_cross/galileo_left.png\" \"images/all_probes/grace_cross/grace_left.png\" \"images/all_probes/kitchen_cross/kitchen_left.png\" \"images/all_probes/rnl_cross/rnl_left.png\" \"images/all_probes/stpeters_cross/stpeters_left.png\" \"images/all_probes/uffizi_cross/uffizi_left.png\"");

	/** Large attribute array: field value field, scene-graph level=5, element #46, 9 total values */
	private SFStringObject field_rightUrls_5_46_value = new SFStringObject("\"images/all_probes/beach_cross/beach_right.png\" \"images/all_probes/building_cross/building_right.png\" \"images/all_probes/campus_cross/campus_right.png\" \"images/all_probes/galileo_cross/galileo_right.png\" \"images/all_probes/grace_cross/grace_right.png\" \"images/all_probes/kitchen_cross/kitchen_right.png\" \"images/all_probes/rnl_cross/rnl_right.png\" \"images/all_probes/stpeters_cross/stpeters_right.png\" \"images/all_probes/uffizi_cross/uffizi_right.png\"");

	/** Large attribute array: field value field, scene-graph level=5, element #47, 9 total values */
	private SFStringObject field_topUrls_5_47_value = new SFStringObject("\"images/all_probes/beach_cross/beach_top.png\" \"images/all_probes/building_cross/building_top.png\" \"images/all_probes/campus_cross/campus_top.png\" \"images/all_probes/galileo_cross/galileo_top.png\" \"images/all_probes/grace_cross/grace_top.png\" \"images/all_probes/kitchen_cross/kitchen_top.png\" \"images/all_probes/rnl_cross/rnl_top.png\" \"images/all_probes/stpeters_cross/stpeters_top.png\" \"images/all_probes/uffizi_cross/uffizi_top.png\"");

	/** Large attribute array: field value field, scene-graph level=5, element #48, 9 total values */
	private SFStringObject field_bottomUrls_5_48_value = new SFStringObject("\"images/all_probes/beach_cross/beach_bottom.png\" \"images/all_probes/building_cross/building_bottom.png\" \"images/all_probes/campus_cross/campus_bottom.png\" \"images/all_probes/galileo_cross/galileo_bottom.png\" \"images/all_probes/grace_cross/grace_bottom.png\" \"images/all_probes/kitchen_cross/kitchen_bottom.png\" \"images/all_probes/rnl_cross/rnl_bottom.png\" \"images/all_probes/stpeters_cross/stpeters_bottom.png\" \"images/all_probes/uffizi_cross/uffizi_bottom.png\"");

  /** The initialized model object, created within initialize() method. */
  private X3DObject x3dModel;
  
  /** Provide a shallow copy of the X3D model.
   * @return mirror model
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
		mirror testObject = new mirror();
		System.out.println ("mirror execution self-validation test results: " + testObject.validateSelf());
	}
}
