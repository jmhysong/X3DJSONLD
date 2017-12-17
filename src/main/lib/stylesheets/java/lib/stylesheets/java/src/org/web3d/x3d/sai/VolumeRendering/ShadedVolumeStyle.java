/*
Copyright (c) 1995-2017 held by the author(s).  All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions
are met:

    * Redistributions of source code must retain the above copyright
      notice, this list of conditions and the following disclaimer.
    * Redistributions in binary form must reproduce the above copyright
      notice, this list of conditions and the following disclaimer
      in the documentation and/or other materials provided with the
      distribution.
    * Neither the name of the Web3D Consortium (http://www.web3D.org)
      nor the names of its contributors may be used to endorse or
      promote products derived from this software without specific
      prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
"AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS
FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING,
BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT
LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN
ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
POSSIBILITY OF SUCH DAMAGE.
*/

package org.web3d.x3d.sai.VolumeRendering;

import java.util.*;
import org.web3d.x3d.sai.*;  // making sure #2
import org.web3d.x3d.sai.Shape.*;
import org.web3d.x3d.sai.Core.*;
import org.web3d.x3d.sai.Texturing3D.*;

/**
 * All fields fully supported except shadows supported with at least Phong shading at level 3. All fields fully supported with at least Phong shading and Henyey-Greenstein phase function, shadows fully supported at level 4.
 * 
 * <br><br>
 * <i>X3D node tooltip</i>: (X3D version 3.3 or later) ShadedVolumeStyle applies Blinn-Phong illumination model to volume rendering.
 * <ul>
 *  <li> <i> Hint:</i>  ShadedVolumeStyle can contain a single Texture3D node with containerField='surfaceNormals' and a single Material node. </li> 
 * </ul>
 * <br>
 * <i>Package hint:</i>  This interface is defined by the X3D Java Language Binding Specification for the Scene Authoring Interface (SAI).
 *
 * @author Don Brutzman and Roy Walmsley
 * @see <a href="http://www.web3d.org/documents/specifications/19777-2/V3.0/Part2/concretes.html#ShadedVolumeStyle" target="_blank">SAI Java Specification: TODO</a>
 * @see <a href="http://www.web3d.org/documents/specifications/19775-1/V3.3/Part01/components/volume.html#ShadedVolumeStyle" target="blank">X3D Abstract Specification: ShadedVolumeStyle</a>

 * @see <a href="http://www.web3d.org/x3d/tooltips/X3dTooltips.html#ShadedVolumeStyle" target="_blank">X3D Tooltips: ShadedVolumeStyle</a>
 * @see <a href="http://www.web3d.org/x3d/content/examples/X3dSceneAuthoringHints.html#Volume" target="_blank">X3D Scene Authoring Hints: Volume</a>
 */
public interface ShadedVolumeStyle extends X3DComposableVolumeRenderStyleNode
{
	// ==== Accessor methods: strongly typed get/set methods for compile-time strictness

	/**
	 * Provide boolean value from inputOutput SFBool field named <i>enabled</i>.
	 * <br><br>
	 * <i>Tooltip:</i>  Enables/disables node operation.  * <br>

	 * @return value of enabled field
	 */
	@Override
	public boolean getEnabled();

	/**
	 * Assign boolean value to inputOutput SFBool field named <i>enabled</i>.
	 * <br><br>
	 * <i>Tooltip:</i> Enables/disables node operation.
	 * @param newValue is new value for the enabled field.
	 * @return {@link ShadedVolumeStyle} - namely <i>this</i> same object to allow sequential method pipelining (i.e. consecutive method invocations on the same node object).
	 */
	@Override
	public ShadedVolumeStyle setEnabled(boolean newValue);

	/**
	 * Provide boolean value from inputOutput SFBool field named <i>lighting</i>.
	 * <br><br>
	 * <i>Tooltip:</i>  Whether rendering calculates and applies shading effects to visual output.  * <br>

	 * @return value of lighting field
	 */
	public boolean getLighting();

	/**
	 * Assign boolean value to inputOutput SFBool field named <i>lighting</i>.
	 * <br><br>
	 * <i>Tooltip:</i> Whether rendering calculates and applies shading effects to visual output.
	 * @param newValue is new value for the lighting field.
	 * @return {@link ShadedVolumeStyle} - namely <i>this</i> same object to allow sequential method pipelining (i.e. consecutive method invocations on the same node object).
	 */
	public ShadedVolumeStyle setLighting(boolean newValue);

	/**
	 * Provide X3DMaterialNode instance (using a properly typed node) from inputOutput SFNode field <i>material</i>.
	 * @return value of material field
	 */
	public X3DMaterialNode getMaterial(); // acceptable node types: X3DMaterialNode

	/**
	 * Assign X3DMaterialNode instance (using a properly typed node) to inputOutput SFNode field <i>material</i>.
	 * @param newValue is new value for the material field.
	 * @return {@link ShadedVolumeStyle} - namely <i>this</i> same object to allow sequential method pipelining (i.e. consecutive method invocations on the same node object).
	 */
	public ShadedVolumeStyle setMaterial(X3DMaterialNode newValue); // acceptable node types: X3DMaterialNode

	/**
	 * Provide X3DMetadataObject instance (using a properly typed node) from inputOutput SFNode field <i>metadata</i>.
	 * @see <a href="http://www.web3d.org/x3d/content/examples/X3dSceneAuthoringHints.html#Metadata">X3D Scene Authoring Hints: Metadata Nodes</a>
	 * @return value of metadata field
	 */
	@Override
	public X3DMetadataObject getMetadata(); // acceptable node types: X3DMetadataObject

	/**
	 * Assign X3DMetadataObject instance (using a properly typed node) to inputOutput SFNode field <i>metadata</i>.
	 * @see <a href="http://www.web3d.org/x3d/content/examples/X3dSceneAuthoringHints.html#Metadata">X3D Scene Authoring Hints: Metadata Nodes</a>
	 * @param newValue is new value for the metadata field.
	 * @return {@link ShadedVolumeStyle} - namely <i>this</i> same object to allow sequential method pipelining (i.e. consecutive method invocations on the same node object).
	 */
	@Override
	public ShadedVolumeStyle setMetadata(X3DMetadataObject newValue); // acceptable node types: X3DMetadataObject

	/**
	 * Provide String enumeration value ['Henyey-Greenstein'|'NONE'|'etc.'] from initializeOnly SFString field named <i>phaseFunction</i>.
	 * <br><br>
	 * <i>Tooltip:</i> define scattering model for implementations using global illumination (NONE or Henyey-Greenstein phase function).#10;
 * <ul>
 *  <li> <i>Warning:</i>  do not wrap extra quotation marks around these SFString enumeration values, since "quotation" "marks" are only used for MFString values. </li> 
 * </ul>
	 * @return value of phaseFunction field
	 */
	public String getPhaseFunction();

	/**
	 * Assign String enumeration value ("Henyey-Greenstein"|"NONE") ['Henyey-Greenstein'|'NONE'|'etc.'] to initializeOnly SFString field named <i>phaseFunction</i>.
	 * <br><br>
	 * <i>Tooltip:</i> define scattering model for implementations using global illumination (NONE or Henyey-Greenstein phase function).#10;Warning: do not wrap extra quotation marks around these SFString enumeration values, since "quotation" "marks" are only used for MFString values.
	 * @param newValue is new value for the phaseFunction field.
	 * @return {@link ShadedVolumeStyle} - namely <i>this</i> same object to allow sequential method pipelining (i.e. consecutive method invocations on the same node object).
	 */
	public ShadedVolumeStyle setPhaseFunction(String newValue);

	/**
	 * Provide boolean value from inputOutput SFBool field named <i>shadows</i>.
	 * <br><br>
	 * <i>Tooltip:</i>  Whether rendering calculates and applies shadows to visual output (using global illumination model).  * <br>

	 * @return value of shadows field
	 */
	public boolean getShadows();

	/**
	 * Assign boolean value to inputOutput SFBool field named <i>shadows</i>.
	 * <br><br>
	 * <i>Tooltip:</i> Whether rendering calculates and applies shadows to visual output (using global illumination model).
	 * @param newValue is new value for the shadows field.
	 * @return {@link ShadedVolumeStyle} - namely <i>this</i> same object to allow sequential method pipelining (i.e. consecutive method invocations on the same node object).
	 */
	public ShadedVolumeStyle setShadows(boolean newValue);

	/**
	 * Provide X3DTexture3DNode instance (using a properly typed node) from inputOutput SFNode field <i>surfaceNormals</i>.
	 * @return value of surfaceNormals field
	 */
	public X3DTexture3DNode getSurfaceNormals(); // acceptable node types: X3DTexture3DNode

	/**
	 * Assign X3DTexture3DNode instance (using a properly typed node) to inputOutput SFNode field <i>surfaceNormals</i>.
	 * @param newValue is new value for the surfaceNormals field.
	 * @return {@link ShadedVolumeStyle} - namely <i>this</i> same object to allow sequential method pipelining (i.e. consecutive method invocations on the same node object).
	 */
	public ShadedVolumeStyle setSurfaceNormals(X3DTexture3DNode newValue); // acceptable node types: X3DTexture3DNode


	/**
	 * Assign String value to inputOutput SFString field named <i>DEF</i>.
	 * <br><br>
	 * <i>Tooltip:</i> DEF defines a unique ID name for this node, referenceable by other nodes. Hint: descriptive DEF names improve clarity and help document a model. Hint: well-defined names can simplify design and debugging through improved author understanding. Hint: X3D Scene Authoring Hints, Naming Conventions http://www.web3d.org/x3d/content/examples/X3dSceneAuthoringHints.html#NamingConventions
	 * <br><br>
	 *  Note that setting the DEF value clears the USE value.
	 * @param newValue is new value for the DEF field.
	 * @return {@link ShadedVolumeStyle} - namely <i>this</i> same object to allow sequential method pipelining (i.e. consecutive method invocations on the same node object).
	 */
	@Override
	public ShadedVolumeStyle setDEF(String newValue);


	/**
	 * Assign String value to inputOutput SFString field named <i>USE</i>.
	 * <br><br>
	 * <i>Tooltip:</i> USE means reuse an already DEF-ed node ID, excluding all child nodes and all other attributes (except for containerField, which can have a different value). Hint: USE references to previously defined DEF geometry (instead of duplicating nodes) can improve performance. Warning: do NOT include any child nodes, a DEF attribute, or any other attribute values (except for containerField) when defining a USE attribute. Warning: each USE value must match a corresponding DEF value that is defined earlier in the scene.
	 * <br><br>
	 * <i>Note:</i> each <code>USE</code> node is still an independent object, with the <code>USE</code> value matching the <code>DEF</code> value in the preceding object. 
	 * <br><br>
	 * <i>Warning:</i> invoking the <code>setUSE()</code> method on this node resets all other fields to their default values (except for containerField) and also releases all child nodes.<br><br>
	 * <i>Warning:</i> no other operations can be performed to modify a USE node other than setting an alternate containerField value.
	 * @param newValue is new value for the USE field.
	 * @return {@link ShadedVolumeStyle} - namely <i>this</i> same object to allow sequential method pipelining (i.e. consecutive method invocations on the same node object).
	 */
	@Override
	public ShadedVolumeStyle setUSE(String newValue);


	/**
	 * Assign String value to inputOutput SFString field named <i>class</i>.
	 * <br><br>
	 * <i>Tooltip:</i> The class attribute is a space-separated list of classes, reserved for use by CSS cascading stylesheets. Warning: currently the class attribute is only supported in XML encoding of X3D scenes. Hint: W3C Cascading Style Sheets https://www.w3.org/Style/CSS
	 * @param newValue is new value for the class field.
	 * @return {@link ShadedVolumeStyle} - namely <i>this</i> same object to allow sequential method pipelining (i.e. consecutive method invocations on the same node object).
	 */
	@Override
	public ShadedVolumeStyle setCssClass(String newValue);

}