test_json = 
{ "X3D": {
    "encoding":"UTF-8",
    "@profile":"Immersive",
    "@version":"3.0",
    "@xsd:noNamespaceSchemaLocation":"http://www.web3d.org/specifications/x3d-3.0.xsd",
    "JSON schema":"http://www.web3d.org/specifications/x3d-3.3-JSONSchema.json",
    "head": {
        "meta": [
          {
            "@name":"title",
            "@content":"ExtrusionHeart.x3d"
          },
          {
            "@name":"description",
            "@content":"Simple extrusion of a Valentine heart."
          },
          {
            "@name":"creator",
            "@content":"Class participants in course Introduction to VRML/X3D."
          },
          {
            "@name":"created",
            "@content":"14 February 2001"
          },
          {
            "@name":"modified",
            "@content":"27 November 2015"
          },
          {
            "@name":"identifier",
            "@content":"http://www.web3d.org/x3d/content/examples/Basic/course/ExtrusionHeart.x3d"
          },
          {
            "@name":"generator",
            "@content":"X3D-Edit 3.3, https://savage.nps.edu/X3D-Edit"
          },
          {
            "@name":"license",
            "@content":"../license.html"
          },
          {
            "@name":"translated",
            "@content":"15 July 2016"
          },
          {
            "@name":"generator",
            "@content":"X3dToJson.xslt, http://www.web3d.org/x3d/stylesheets/X3dToJson.html"
          },
          {
            "@name":"warning",
            "@content":"An experimental version of X3D JSON encoding is used for this scene.  Status online at http://www.web3d.org/wiki/index.php/X3D_JSON_Encoding"
          }
        ]
    },
    "Scene": {
        "-children":[
          { "Viewpoint":
            {
              "@description":"Extrusion Heart",
              "@orientation":[1,0,0,1.57],
              "@position":[0,-4,0]
            }
          },
          { "Transform":
            {
              "@translation":[0,-0.5,0],
              "-children":[
                { "Shape":
                  {
                    "-geometry":
                      { "Extrusion":
                        {
                          "@creaseAngle":3.14159,
                          "@crossSection":[0,0.8,0.2,1,0.7,0.95,1,0.5,0.8,0,0.5,-0.3,0,-0.7,-0.5,-0.3,-0.8,0,-1,0.5,-0.7,0.95,-0.2,1,0,0.8],
                          "@scale":[0.01,0.01,0.8,0.8,1,1,0.8,0.8,0.01,0.01],
                          "@solid":false,
                          "@spine":[0,0,0,0,0.1,0,0,0.5,0,0,0.9,0,0,1,0]
                        }
                      },
                    "-appearance":
                      { "Appearance":
                        {
                          "-material":
                            { "Material":
                              {
                                "@diffuseColor":[0.8,0.3,0.3]
                              }
                            }
                        }
                      }
                  }
                }
              ]
            }
          }
        ]
    }
  };
}
