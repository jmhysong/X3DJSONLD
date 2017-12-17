var x3dom = require('../node/fields.js');
if (typeof X3DJSON === 'undefined') {
	var X3DJSON = {};
}
var MFBool = x3dom.fields.MFBoolean;
var MFColor = x3dom.fields.MFColor;
var MFColorRGBA = x3dom.fields.MFColorRGBA;
var MFDouble = function() { return Array.prototype.slice.call(arguments, 0); };
var MFFloat = x3dom.fields.MFFloat;
var MFImage = function() { return Array.prototype.slice.call(arguments, 0); };
var MFInt32 = x3dom.fields.MFInt32;
var MFMatrix3d = function() { return Array.prototype.slice.call(arguments, 0); };
var MFMatrix3f = function() { return Array.prototype.slice.call(arguments, 0); };
var MFMatrix4d = function() { return Array.prototype.slice.call(arguments, 0); };
var MFMatrix4f = function() { return Array.prototype.slice.call(arguments, 0); };
var MFNode = x3dom.fields.MFNode;
var MFRotation = x3dom.fields.MFRotation;
var MFString = x3dom.fields.MFString;
var MFTime = function() { return Array.prototype.slice.call(arguments, 0); };
var MFVec2d = function() { return Array.prototype.slice.call(arguments, 0); };
var MFVec2f = x3dom.fields.MFVec2f;
var MFVec3d = function() { return Array.prototype.slice.call(arguments, 0); };
var MFVec3f = x3dom.fields.MFVec3f;
var MFVec4d = function() { return Array.prototype.slice.call(arguments, 0); };
var MFVec4f = function() { return Array.prototype.slice.call(arguments, 0); };
var SFBool = Boolean;
var SFColor = x3dom.fields.SFColor;
var SFColorRGBA = x3dom.fields.SFColorRGBA;
var SFDouble = Number;
var SFFloat = Number;
var SFInt32 = Number;
var SFImage = x3dom.fields.SFImage;
var SFMatrix3d = function() { return Array.prototype.slice.call(arguments, 0); };
var SFMatrix3f = function() { return Array.prototype.slice.call(arguments, 0); };
var SFMatrix4d = function() { return Array.prototype.slice.call(arguments, 0); };
var SFMatrix4f = x3dom.fields.SFMatrix4f;
var SFNode = x3dom.fields.SFNode;
var Quaternion = x3dom.fields.Quaternion;
var SFString = String;
var SFTime = Number;
var SFVec2d = function() { return Array.prototype.slice.call(arguments, 0); };
var SFVec2f = x3dom.fields.SFVec2f;
var SFVec3d = function() { return Array.prototype.slice.call(arguments, 0); };
var SFVec3f = x3dom.fields.SFVec3f;
var SFVec4d = function() { return Array.prototype.slice.call(arguments, 0); };
var SFVec4f = x3dom.fields.SFVec4f;
if (typeof document === 'undefined') {
	document = { querySelector : function() {;
		return {
			setAttribute : function(field, value) {
				this[field] = value;
				console.log('set '+ field+ '='+ value);
			},
			getAttribute : function(field) {
				var value = this[field];
				console.log('get '+ field+ '='+ value);
			}
		};
	}};
}
X3DJSON.nodeUtil = function(node, field, value) {
		var selector = "undefined [DEF='"+node+"']";
		var element = document.querySelector(selector);
		if (element === null) {
			console.error('unDEFed node',node);
		} else if (arguments.length > 2) {
			/*
			if (value && typeof value.toString === 'function') {
				value = value.toString();
			}
			$(selector).attr(field, value);
			// console.log('set', node, '.', field, '=', value);
			*/
			element.setFieldValue(field, value);
			return element;
		} else if (arguments.length > 1) {
			value = element.getFieldValue(field);
			/*
			value = $(selector).attr(field);
			if (element &&
				element._x3domNode &&
				element._x3domNode._vf &&
				element._x3domNode._vf[field] &&
				element._x3domNode._vf[field].setValueByStr) {
				value = element._x3domNode._vf[field].setValueByStr(value);
			}
			*/
			// console.log('get', node, '.', field,'=',value);
			return value;
		} else {
			return $(selector)[0];
		}
};
X3DJSON.createProxy = function(action, scriptObject) {
	var proxy = new Proxy(scriptObject, {
		get: function(target, property, receiver) {
			return Reflect.get(target, property, receiver);
		},
		set: function(target, property, value, receiver) {
                 if (typeof action[property] === 'object') {
                        for (var route in action[property]) {
                                if (typeof action[property][route] === 'function') {
                                        action[property][route](property, value);
   		                     // console.log('Set',property,'to', value);
                                }
                        }
                 }
		      return Reflect.set(target, property, value, receiver);
		}
	});
	return proxy;
};
if (typeof X3DJSON['Script'] === 'undefined') {
X3DJSON['Script'] = {};
}

X3DJSON['Script']['MoveCylinder'] = function() {
	this.set_cycle = function (value) {
		this.proxy.cycle = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
	};
	this.cycle_changed = function () {
		var value = this.cycle;
		return value;
	};
	this.cycle = undefined;
	this.set_spine = function (value) {
		this.proxy.spine = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
	};
	this.spine_changed = function () {
		var value = this.spine;
		return value;
	};
	this.spine = new MFVec3f([new SFVec3f ( -50 , -50 , 0 ),new SFVec3f ( 50 , 50 , 0 )]);
ecmascript:

                
	this.set_cycle = function (value) {
                        console.error(value);
                        var endA = new SFVec3f(this.proxy.spine[0].x*Math.random()*2, this.proxy.spine[0].y*Math.random()*2, this.proxy.spine[0].z*Math.random()*2);
                        var endB = new SFVec3f(this.proxy.spine[1].x*Math.random()*2, this.proxy.spine[1].y*Math.random()*2, this.proxy.spine[1].z*Math.random()*2);
		        this.proxy.spine = new MFVec3f([endA, endB]);
                };

};
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}

X3DJSON['Obj']['MoveCylinder'] = new X3DJSON['Script']['MoveCylinder']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['MoveCylinder'] === 'undefined') {
X3DJSON['Obj']['MoveCylinder'] = {};
}

if (typeof X3DJSON['Obj']['MoveCylinder']['ACTION'] === 'undefined') {
X3DJSON['Obj']['MoveCylinder']['ACTION'] = {};
X3DJSON['Obj']['MoveCylinder'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['MoveCylinder']['ACTION'],X3DJSON['Obj']['MoveCylinder']);
}
if (typeof X3DJSON['Obj']['MoveCylinder'].initialize === "function") X3DJSON['Obj']['MoveCylinder'].initialize();
X3DJSON.nodeUtil('TourTime').addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['MoveCylinder'].set_cycle(X3DJSON.nodeUtil('TourTime','cycleTime'), __eventTime);
}, false);
			X3DJSON['Obj']['MoveCylinder'].set_cycle(X3DJSON.nodeUtil('TourTime','cycleTime'), __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['MoveCylinder'] === 'undefined') {
X3DJSON['Obj']['MoveCylinder'] = {};
}

if (typeof X3DJSON['Obj']['MoveCylinder']['ACTION']['spine'] === 'undefined') {
X3DJSON['Obj']['MoveCylinder']['ACTION']['spine'] = [];
}
X3DJSON['Obj']['MoveCylinder']['ACTION']['spine'].push(function(property, value) {
		if (property === 'spine') {
			X3DJSON.nodeUtil('extrusion','spine',typeof X3DJSON['Obj']['MoveCylinder'].spine_changed === "function" ? X3DJSON['Obj']['MoveCylinder'].spine_changed() : X3DJSON['Obj']['MoveCylinder'].spine, __eventTime);
		}
});
			X3DJSON.nodeUtil('extrusion','spine',typeof X3DJSON['Obj']['MoveCylinder'].spine_changed === "function" ? X3DJSON['Obj']['MoveCylinder'].spine_changed() : X3DJSON['Obj']['MoveCylinder'].spine, __eventTime);
			X3DJSON['Obj']['MoveCylinder'].set_cycle(X3DJSON.nodeUtil('TourTime','cycleTime'), __eventTime);
			X3DJSON.nodeUtil('extrusion','spine',typeof X3DJSON['Obj']['MoveCylinder'].spine_changed === "function" ? X3DJSON['Obj']['MoveCylinder'].spine_changed() : X3DJSON['Obj']['MoveCylinder'].spine, __eventTime);