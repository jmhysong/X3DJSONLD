var x3dom = require('../node/fields.js');
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
SFBool = Boolean;
var SFColor = x3dom.fields.SFColor;
var SFColorRGBA = x3dom.fields.SFColorRGBA;
SFDouble = Number;
SFFloat = Number;
SFInt32 = Number;
var SFImage = x3dom.fields.SFImage;
var SFMatrix3d = function() { return Array.prototype.slice.call(arguments, 0); };
var SFMatrix3f = function() { return Array.prototype.slice.call(arguments, 0); };
var SFMatrix4d = function() { return Array.prototype.slice.call(arguments, 0); };
var SFMatrix4f = x3dom.fields.SFMatrix4f;
var SFNode = x3dom.fields.SFNode;
var SFRotation = x3dom.fields.Quaternion;
SFString = String;
SFTime = Number;
var SFVec2d = function() { return Array.prototype.slice.call(arguments, 0); };
var SFVec2f = x3dom.fields.SFVec2f;
var SFVec3d = function() { return Array.prototype.slice.call(arguments, 0); };
var SFVec3f = x3dom.fields.SFVec3f;
var SFVec4d = function() { return Array.prototype.slice.call(arguments, 0); };
var SFvec4f = x3dom.fields.SFvec4f;
var X3DJSON = {};
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
		var element = document.querySelector("[DEF='"+node+"'], [name='"+node+"']");
		if (element === null) {
			console.error('unDEFed node',node);
		} else if (arguments.length > 2) {
			element.setAttribute(field, value);
			console.log('set '+ field+ '='+ value);
			return element;
		} else if (arguments.length > 1) {
			var value = element.getAttribute(field)
			console.log('get', field,'=',value);
			return value;
		} else {
			return element;
		}
};
if (typeof X3DJSON['Script'] === 'undefined') {
X3DJSON['Script'] = {};
}

X3DJSON['Script']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_Bounce'] = function() {
	this.set_translation = function (value) {
		X3DJSON.nodeUtil('DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_Bounce', 'translation', (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(',') : value));
	};
	this.translation_changed = function () {
		return X3DJSON.nodeUtil('DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_Bounce', 'translation');
	};
	this.set_translation(new SFVec3f(0,0,0));
	this.set_velocity = function (value) {
		X3DJSON.nodeUtil('DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_Bounce', 'velocity', (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(',') : value));
	};
	this.velocity_changed = function () {
		return X3DJSON.nodeUtil('DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_Bounce', 'velocity');
	};
	this.set_velocity(new SFVec3f(0,0,0));
	this.set_fraction = function (value) {
		X3DJSON.nodeUtil('DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_Bounce', 'fraction', (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(',') : value));
	};
	this.fraction_changed = function () {
		return X3DJSON.nodeUtil('DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_Bounce', 'fraction');
	};
	this.set_fraction(undefined);
	this.set_a = function (value) {
		X3DJSON.nodeUtil('DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_Bounce', 'a', (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(',') : value));
	};
	this.a_changed = function () {
		return X3DJSON.nodeUtil('DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_Bounce', 'a');
	};
	this.set_a(new SFFloat(0.5));
	this.set_b = function (value) {
		X3DJSON.nodeUtil('DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_Bounce', 'b', (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(',') : value));
	};
	this.b_changed = function () {
		return X3DJSON.nodeUtil('DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_Bounce', 'b');
	};
	this.set_b(new SFFloat(0.5));
	this.set_c = function (value) {
		X3DJSON.nodeUtil('DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_Bounce', 'c', (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(',') : value));
	};
	this.c_changed = function () {
		return X3DJSON.nodeUtil('DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_Bounce', 'c');
	};
	this.set_c(new SFFloat(3));
	this.set_d = function (value) {
		X3DJSON.nodeUtil('DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_Bounce', 'd', (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(',') : value));
	};
	this.d_changed = function () {
		return X3DJSON.nodeUtil('DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_Bounce', 'd');
	};
	this.set_d(new SFFloat(3));
	this.set_tdelta = function (value) {
		X3DJSON.nodeUtil('DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_Bounce', 'tdelta', (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(',') : value));
	};
	this.tdelta_changed = function () {
		return X3DJSON.nodeUtil('DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_Bounce', 'tdelta');
	};
	this.set_tdelta(new SFFloat(0.5));
	this.set_pdelta = function (value) {
		X3DJSON.nodeUtil('DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_Bounce', 'pdelta', (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(',') : value));
	};
	this.pdelta_changed = function () {
		return X3DJSON.nodeUtil('DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_Bounce', 'pdelta');
	};
	this.set_pdelta(new SFFloat(0.5));

ecmascript:
			
	this.initialize = function () {
			    this.set_translation ( new SFVec3f(0, 0, 0));
			    this.set_velocity ( new SFVec3f(
			    	Math.random() - 0.5,
				Math.random() - 0.5,
				Math.random() - 0.5));
			}
			;

	this.set_fraction = function () {
			    this.set_translation ( new SFVec3f(
			    	this.translation_changed().x + this.velocity_changed().x,
				this.translation_changed().y + this.velocity_changed().y,
				this.translation_changed().z + this.velocity_changed().z));
			    for (var j = 0; j <= 2; j++) {
				    if (Math.abs(this.translation_changed().x) > 10) {
					this.initialize();
				    } else if (Math.abs(this.translation_changed().y) > 10) {
					this.initialize();
				    } else if (Math.abs(this.translation_changed().z) > 10) {
					this.initialize();
				    } else {
					this.velocity_changed().x += Math.random() * 0.2 - 0.1;
					this.velocity_changed().y += Math.random() * 0.2 - 0.1;
					this.velocity_changed().z += Math.random() * 0.2 - 0.1;
				    }
			    }
			    this.animate_flowers();
			}

			;

	this.animate_flowers = function (fraction, eventTime) {
				choice = Math.floor(Math.random() * 4);
				switch (choice) {
				case 0:
					this.set_a(this.a_changed() +  Math.random() * 0.2 - 0.1);
					break;
				case 1:
					this.set_b(this.b_changed() +  Math.random() * 0.2 - 0.1);
					break;
				case 2:
					this.set_c(this.c_changed() +  Math.random() * 2 - 1);
					break;
				case 3:
					this.set_d(this.d_changed() +  Math.random() * 2 - 1);
					break;
				}
				this.set_tdelta(this.tdelta_changed() +  0.5);
				this.set_pdelta(this.pdelta_changed() +  0.5);
				if (this.a_changed() > 1) {
					this.set_a (  0.5);
				}
				if (this.b_changed() > 1) {
					this.set_b (  0.5);
				}
				if (this.c_changed() < 1) {
					this.set_c (  4);
				}
				if (this.d_changed() < 1) {
					this.set_d (  4);
				}
				if (this.c_changed() > 10) {
					this.set_c ( 4);
				}
				if (this.d_changed() > 10) {
					this.set_d ( 4);
				}
			};

};
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}

X3DJSON['Obj']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_Bounce'] = new X3DJSON['Script']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_Bounce']();
if (typeof X3DJSON['Obj']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_Bounce'].initialize === "function") X3DJSON['Obj']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_Bounce'].initialize();
if (typeof X3DJSON['Script'] === 'undefined') {
X3DJSON['Script'] = {};
}

X3DJSON['Script']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_Bounce'] = function() {
	this.set_translation = function (value) {
		X3DJSON.nodeUtil('DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_Bounce', 'translation', (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(',') : value));
	};
	this.translation_changed = function () {
		return X3DJSON.nodeUtil('DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_Bounce', 'translation');
	};
	this.set_translation(new SFVec3f(0,0,0));
	this.set_velocity = function (value) {
		X3DJSON.nodeUtil('DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_Bounce', 'velocity', (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(',') : value));
	};
	this.velocity_changed = function () {
		return X3DJSON.nodeUtil('DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_Bounce', 'velocity');
	};
	this.set_velocity(new SFVec3f(0,0,0));
	this.set_fraction = function (value) {
		X3DJSON.nodeUtil('DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_Bounce', 'fraction', (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(',') : value));
	};
	this.fraction_changed = function () {
		return X3DJSON.nodeUtil('DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_Bounce', 'fraction');
	};
	this.set_fraction(undefined);
	this.set_a = function (value) {
		X3DJSON.nodeUtil('DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_Bounce', 'a', (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(',') : value));
	};
	this.a_changed = function () {
		return X3DJSON.nodeUtil('DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_Bounce', 'a');
	};
	this.set_a(new SFFloat(0.5));
	this.set_b = function (value) {
		X3DJSON.nodeUtil('DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_Bounce', 'b', (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(',') : value));
	};
	this.b_changed = function () {
		return X3DJSON.nodeUtil('DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_Bounce', 'b');
	};
	this.set_b(new SFFloat(0.5));
	this.set_c = function (value) {
		X3DJSON.nodeUtil('DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_Bounce', 'c', (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(',') : value));
	};
	this.c_changed = function () {
		return X3DJSON.nodeUtil('DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_Bounce', 'c');
	};
	this.set_c(new SFFloat(3));
	this.set_d = function (value) {
		X3DJSON.nodeUtil('DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_Bounce', 'd', (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(',') : value));
	};
	this.d_changed = function () {
		return X3DJSON.nodeUtil('DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_Bounce', 'd');
	};
	this.set_d(new SFFloat(3));
	this.set_tdelta = function (value) {
		X3DJSON.nodeUtil('DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_Bounce', 'tdelta', (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(',') : value));
	};
	this.tdelta_changed = function () {
		return X3DJSON.nodeUtil('DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_Bounce', 'tdelta');
	};
	this.set_tdelta(new SFFloat(0.5));
	this.set_pdelta = function (value) {
		X3DJSON.nodeUtil('DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_Bounce', 'pdelta', (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(',') : value));
	};
	this.pdelta_changed = function () {
		return X3DJSON.nodeUtil('DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_Bounce', 'pdelta');
	};
	this.set_pdelta(new SFFloat(0.5));

ecmascript:
			
	this.initialize = function () {
			    this.set_translation ( new SFVec3f(0, 0, 0));
			    this.set_velocity ( new SFVec3f(
			    	Math.random() - 0.5,
				Math.random() - 0.5,
				Math.random() - 0.5));
			}
			;

	this.set_fraction = function () {
			    this.set_translation ( new SFVec3f(
			    	this.translation_changed().x + this.velocity_changed().x,
				this.translation_changed().y + this.velocity_changed().y,
				this.translation_changed().z + this.velocity_changed().z));
			    for (var j = 0; j <= 2; j++) {
				    if (Math.abs(this.translation_changed().x) > 10) {
					this.initialize();
				    } else if (Math.abs(this.translation_changed().y) > 10) {
					this.initialize();
				    } else if (Math.abs(this.translation_changed().z) > 10) {
					this.initialize();
				    } else {
					this.velocity_changed().x += Math.random() * 0.2 - 0.1;
					this.velocity_changed().y += Math.random() * 0.2 - 0.1;
					this.velocity_changed().z += Math.random() * 0.2 - 0.1;
				    }
			    }
			    this.animate_flowers();
			}

			;

	this.animate_flowers = function (fraction, eventTime) {
				choice = Math.floor(Math.random() * 4);
				switch (choice) {
				case 0:
					this.set_a(this.a_changed() +  Math.random() * 0.2 - 0.1);
					break;
				case 1:
					this.set_b(this.b_changed() +  Math.random() * 0.2 - 0.1);
					break;
				case 2:
					this.set_c(this.c_changed() +  Math.random() * 2 - 1);
					break;
				case 3:
					this.set_d(this.d_changed() +  Math.random() * 2 - 1);
					break;
				}
				this.set_tdelta(this.tdelta_changed() +  0.5);
				this.set_pdelta(this.pdelta_changed() +  0.5);
				if (this.a_changed() > 1) {
					this.set_a (  0.5);
				}
				if (this.b_changed() > 1) {
					this.set_b (  0.5);
				}
				if (this.c_changed() < 1) {
					this.set_c (  4);
				}
				if (this.d_changed() < 1) {
					this.set_d (  4);
				}
				if (this.c_changed() > 10) {
					this.set_c ( 4);
				}
				if (this.d_changed() > 10) {
					this.set_d ( 4);
				}
			};

};
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}

X3DJSON['Obj']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_Bounce'] = new X3DJSON['Script']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_Bounce']();
if (typeof X3DJSON['Obj']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_Bounce'].initialize === "function") X3DJSON['Obj']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_Bounce'].initialize();
if (typeof X3DJSON['Script'] === 'undefined') {
X3DJSON['Script'] = {};
}

X3DJSON['Script']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_Bounce'] = function() {
	this.set_translation = function (value) {
		X3DJSON.nodeUtil('DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_Bounce', 'translation', (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(',') : value));
	};
	this.translation_changed = function () {
		return X3DJSON.nodeUtil('DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_Bounce', 'translation');
	};
	this.set_translation(new SFVec3f(0,0,0));
	this.set_velocity = function (value) {
		X3DJSON.nodeUtil('DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_Bounce', 'velocity', (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(',') : value));
	};
	this.velocity_changed = function () {
		return X3DJSON.nodeUtil('DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_Bounce', 'velocity');
	};
	this.set_velocity(new SFVec3f(0,0,0));
	this.set_fraction = function (value) {
		X3DJSON.nodeUtil('DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_Bounce', 'fraction', (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(',') : value));
	};
	this.fraction_changed = function () {
		return X3DJSON.nodeUtil('DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_Bounce', 'fraction');
	};
	this.set_fraction(undefined);
	this.set_a = function (value) {
		X3DJSON.nodeUtil('DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_Bounce', 'a', (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(',') : value));
	};
	this.a_changed = function () {
		return X3DJSON.nodeUtil('DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_Bounce', 'a');
	};
	this.set_a(new SFFloat(0.5));
	this.set_b = function (value) {
		X3DJSON.nodeUtil('DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_Bounce', 'b', (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(',') : value));
	};
	this.b_changed = function () {
		return X3DJSON.nodeUtil('DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_Bounce', 'b');
	};
	this.set_b(new SFFloat(0.5));
	this.set_c = function (value) {
		X3DJSON.nodeUtil('DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_Bounce', 'c', (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(',') : value));
	};
	this.c_changed = function () {
		return X3DJSON.nodeUtil('DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_Bounce', 'c');
	};
	this.set_c(new SFFloat(3));
	this.set_d = function (value) {
		X3DJSON.nodeUtil('DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_Bounce', 'd', (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(',') : value));
	};
	this.d_changed = function () {
		return X3DJSON.nodeUtil('DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_Bounce', 'd');
	};
	this.set_d(new SFFloat(3));
	this.set_tdelta = function (value) {
		X3DJSON.nodeUtil('DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_Bounce', 'tdelta', (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(',') : value));
	};
	this.tdelta_changed = function () {
		return X3DJSON.nodeUtil('DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_Bounce', 'tdelta');
	};
	this.set_tdelta(new SFFloat(0.5));
	this.set_pdelta = function (value) {
		X3DJSON.nodeUtil('DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_Bounce', 'pdelta', (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(',') : value));
	};
	this.pdelta_changed = function () {
		return X3DJSON.nodeUtil('DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_Bounce', 'pdelta');
	};
	this.set_pdelta(new SFFloat(0.5));

ecmascript:
			
	this.initialize = function () {
			    this.set_translation ( new SFVec3f(0, 0, 0));
			    this.set_velocity ( new SFVec3f(
			    	Math.random() - 0.5,
				Math.random() - 0.5,
				Math.random() - 0.5));
			}
			;

	this.set_fraction = function () {
			    this.set_translation ( new SFVec3f(
			    	this.translation_changed().x + this.velocity_changed().x,
				this.translation_changed().y + this.velocity_changed().y,
				this.translation_changed().z + this.velocity_changed().z));
			    for (var j = 0; j <= 2; j++) {
				    if (Math.abs(this.translation_changed().x) > 10) {
					this.initialize();
				    } else if (Math.abs(this.translation_changed().y) > 10) {
					this.initialize();
				    } else if (Math.abs(this.translation_changed().z) > 10) {
					this.initialize();
				    } else {
					this.velocity_changed().x += Math.random() * 0.2 - 0.1;
					this.velocity_changed().y += Math.random() * 0.2 - 0.1;
					this.velocity_changed().z += Math.random() * 0.2 - 0.1;
				    }
			    }
			    this.animate_flowers();
			}

			;

	this.animate_flowers = function (fraction, eventTime) {
				choice = Math.floor(Math.random() * 4);
				switch (choice) {
				case 0:
					this.set_a(this.a_changed() +  Math.random() * 0.2 - 0.1);
					break;
				case 1:
					this.set_b(this.b_changed() +  Math.random() * 0.2 - 0.1);
					break;
				case 2:
					this.set_c(this.c_changed() +  Math.random() * 2 - 1);
					break;
				case 3:
					this.set_d(this.d_changed() +  Math.random() * 2 - 1);
					break;
				}
				this.set_tdelta(this.tdelta_changed() +  0.5);
				this.set_pdelta(this.pdelta_changed() +  0.5);
				if (this.a_changed() > 1) {
					this.set_a (  0.5);
				}
				if (this.b_changed() > 1) {
					this.set_b (  0.5);
				}
				if (this.c_changed() < 1) {
					this.set_c (  4);
				}
				if (this.d_changed() < 1) {
					this.set_d (  4);
				}
				if (this.c_changed() > 10) {
					this.set_c ( 4);
				}
				if (this.d_changed() > 10) {
					this.set_d ( 4);
				}
			};

};
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}

X3DJSON['Obj']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_Bounce'] = new X3DJSON['Script']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_Bounce']();
if (typeof X3DJSON['Obj']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_Bounce'].initialize === "function") X3DJSON['Obj']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_Bounce'].initialize();
if (typeof X3DJSON['Script'] === 'undefined') {
X3DJSON['Script'] = {};
}

X3DJSON['Script']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_Bounce'] = function() {
	this.set_translation = function (value) {
		X3DJSON.nodeUtil('DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_Bounce', 'translation', (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(',') : value));
	};
	this.translation_changed = function () {
		return X3DJSON.nodeUtil('DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_Bounce', 'translation');
	};
	this.set_translation(new SFVec3f(0,0,0));
	this.set_velocity = function (value) {
		X3DJSON.nodeUtil('DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_Bounce', 'velocity', (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(',') : value));
	};
	this.velocity_changed = function () {
		return X3DJSON.nodeUtil('DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_Bounce', 'velocity');
	};
	this.set_velocity(new SFVec3f(0,0,0));
	this.set_fraction = function (value) {
		X3DJSON.nodeUtil('DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_Bounce', 'fraction', (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(',') : value));
	};
	this.fraction_changed = function () {
		return X3DJSON.nodeUtil('DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_Bounce', 'fraction');
	};
	this.set_fraction(undefined);
	this.set_a = function (value) {
		X3DJSON.nodeUtil('DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_Bounce', 'a', (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(',') : value));
	};
	this.a_changed = function () {
		return X3DJSON.nodeUtil('DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_Bounce', 'a');
	};
	this.set_a(new SFFloat(0.5));
	this.set_b = function (value) {
		X3DJSON.nodeUtil('DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_Bounce', 'b', (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(',') : value));
	};
	this.b_changed = function () {
		return X3DJSON.nodeUtil('DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_Bounce', 'b');
	};
	this.set_b(new SFFloat(0.5));
	this.set_c = function (value) {
		X3DJSON.nodeUtil('DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_Bounce', 'c', (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(',') : value));
	};
	this.c_changed = function () {
		return X3DJSON.nodeUtil('DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_Bounce', 'c');
	};
	this.set_c(new SFFloat(3));
	this.set_d = function (value) {
		X3DJSON.nodeUtil('DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_Bounce', 'd', (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(',') : value));
	};
	this.d_changed = function () {
		return X3DJSON.nodeUtil('DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_Bounce', 'd');
	};
	this.set_d(new SFFloat(3));
	this.set_tdelta = function (value) {
		X3DJSON.nodeUtil('DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_Bounce', 'tdelta', (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(',') : value));
	};
	this.tdelta_changed = function () {
		return X3DJSON.nodeUtil('DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_Bounce', 'tdelta');
	};
	this.set_tdelta(new SFFloat(0.5));
	this.set_pdelta = function (value) {
		X3DJSON.nodeUtil('DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_Bounce', 'pdelta', (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(',') : value));
	};
	this.pdelta_changed = function () {
		return X3DJSON.nodeUtil('DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_Bounce', 'pdelta');
	};
	this.set_pdelta(new SFFloat(0.5));

ecmascript:
			
	this.initialize = function () {
			    this.set_translation ( new SFVec3f(0, 0, 0));
			    this.set_velocity ( new SFVec3f(
			    	Math.random() - 0.5,
				Math.random() - 0.5,
				Math.random() - 0.5));
			}
			;

	this.set_fraction = function () {
			    this.set_translation ( new SFVec3f(
			    	this.translation_changed().x + this.velocity_changed().x,
				this.translation_changed().y + this.velocity_changed().y,
				this.translation_changed().z + this.velocity_changed().z));
			    for (var j = 0; j <= 2; j++) {
				    if (Math.abs(this.translation_changed().x) > 10) {
					this.initialize();
				    } else if (Math.abs(this.translation_changed().y) > 10) {
					this.initialize();
				    } else if (Math.abs(this.translation_changed().z) > 10) {
					this.initialize();
				    } else {
					this.velocity_changed().x += Math.random() * 0.2 - 0.1;
					this.velocity_changed().y += Math.random() * 0.2 - 0.1;
					this.velocity_changed().z += Math.random() * 0.2 - 0.1;
				    }
			    }
			    this.animate_flowers();
			}

			;

	this.animate_flowers = function (fraction, eventTime) {
				choice = Math.floor(Math.random() * 4);
				switch (choice) {
				case 0:
					this.set_a(this.a_changed() +  Math.random() * 0.2 - 0.1);
					break;
				case 1:
					this.set_b(this.b_changed() +  Math.random() * 0.2 - 0.1);
					break;
				case 2:
					this.set_c(this.c_changed() +  Math.random() * 2 - 1);
					break;
				case 3:
					this.set_d(this.d_changed() +  Math.random() * 2 - 1);
					break;
				}
				this.set_tdelta(this.tdelta_changed() +  0.5);
				this.set_pdelta(this.pdelta_changed() +  0.5);
				if (this.a_changed() > 1) {
					this.set_a (  0.5);
				}
				if (this.b_changed() > 1) {
					this.set_b (  0.5);
				}
				if (this.c_changed() < 1) {
					this.set_c (  4);
				}
				if (this.d_changed() < 1) {
					this.set_d (  4);
				}
				if (this.c_changed() > 10) {
					this.set_c ( 4);
				}
				if (this.d_changed() > 10) {
					this.set_d ( 4);
				}
			};

};
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}

X3DJSON['Obj']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_Bounce'] = new X3DJSON['Script']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_Bounce']();
if (typeof X3DJSON['Obj']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_Bounce'].initialize === "function") X3DJSON['Obj']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_Bounce'].initialize();
if (typeof X3DJSON['Script'] === 'undefined') {
X3DJSON['Script'] = {};
}

X3DJSON['Script']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_Bounce'] = function() {
	this.set_translation = function (value) {
		X3DJSON.nodeUtil('DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_Bounce', 'translation', (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(',') : value));
	};
	this.translation_changed = function () {
		return X3DJSON.nodeUtil('DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_Bounce', 'translation');
	};
	this.set_translation(new SFVec3f(0,0,0));
	this.set_velocity = function (value) {
		X3DJSON.nodeUtil('DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_Bounce', 'velocity', (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(',') : value));
	};
	this.velocity_changed = function () {
		return X3DJSON.nodeUtil('DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_Bounce', 'velocity');
	};
	this.set_velocity(new SFVec3f(0,0,0));
	this.set_fraction = function (value) {
		X3DJSON.nodeUtil('DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_Bounce', 'fraction', (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(',') : value));
	};
	this.fraction_changed = function () {
		return X3DJSON.nodeUtil('DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_Bounce', 'fraction');
	};
	this.set_fraction(undefined);
	this.set_a = function (value) {
		X3DJSON.nodeUtil('DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_Bounce', 'a', (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(',') : value));
	};
	this.a_changed = function () {
		return X3DJSON.nodeUtil('DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_Bounce', 'a');
	};
	this.set_a(new SFFloat(0.5));
	this.set_b = function (value) {
		X3DJSON.nodeUtil('DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_Bounce', 'b', (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(',') : value));
	};
	this.b_changed = function () {
		return X3DJSON.nodeUtil('DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_Bounce', 'b');
	};
	this.set_b(new SFFloat(0.5));
	this.set_c = function (value) {
		X3DJSON.nodeUtil('DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_Bounce', 'c', (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(',') : value));
	};
	this.c_changed = function () {
		return X3DJSON.nodeUtil('DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_Bounce', 'c');
	};
	this.set_c(new SFFloat(3));
	this.set_d = function (value) {
		X3DJSON.nodeUtil('DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_Bounce', 'd', (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(',') : value));
	};
	this.d_changed = function () {
		return X3DJSON.nodeUtil('DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_Bounce', 'd');
	};
	this.set_d(new SFFloat(3));
	this.set_tdelta = function (value) {
		X3DJSON.nodeUtil('DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_Bounce', 'tdelta', (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(',') : value));
	};
	this.tdelta_changed = function () {
		return X3DJSON.nodeUtil('DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_Bounce', 'tdelta');
	};
	this.set_tdelta(new SFFloat(0.5));
	this.set_pdelta = function (value) {
		X3DJSON.nodeUtil('DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_Bounce', 'pdelta', (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(',') : value));
	};
	this.pdelta_changed = function () {
		return X3DJSON.nodeUtil('DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_Bounce', 'pdelta');
	};
	this.set_pdelta(new SFFloat(0.5));

ecmascript:
			
	this.initialize = function () {
			    this.set_translation ( new SFVec3f(0, 0, 0));
			    this.set_velocity ( new SFVec3f(
			    	Math.random() - 0.5,
				Math.random() - 0.5,
				Math.random() - 0.5));
			}
			;

	this.set_fraction = function () {
			    this.set_translation ( new SFVec3f(
			    	this.translation_changed().x + this.velocity_changed().x,
				this.translation_changed().y + this.velocity_changed().y,
				this.translation_changed().z + this.velocity_changed().z));
			    for (var j = 0; j <= 2; j++) {
				    if (Math.abs(this.translation_changed().x) > 10) {
					this.initialize();
				    } else if (Math.abs(this.translation_changed().y) > 10) {
					this.initialize();
				    } else if (Math.abs(this.translation_changed().z) > 10) {
					this.initialize();
				    } else {
					this.velocity_changed().x += Math.random() * 0.2 - 0.1;
					this.velocity_changed().y += Math.random() * 0.2 - 0.1;
					this.velocity_changed().z += Math.random() * 0.2 - 0.1;
				    }
			    }
			    this.animate_flowers();
			}

			;

	this.animate_flowers = function (fraction, eventTime) {
				choice = Math.floor(Math.random() * 4);
				switch (choice) {
				case 0:
					this.set_a(this.a_changed() +  Math.random() * 0.2 - 0.1);
					break;
				case 1:
					this.set_b(this.b_changed() +  Math.random() * 0.2 - 0.1);
					break;
				case 2:
					this.set_c(this.c_changed() +  Math.random() * 2 - 1);
					break;
				case 3:
					this.set_d(this.d_changed() +  Math.random() * 2 - 1);
					break;
				}
				this.set_tdelta(this.tdelta_changed() +  0.5);
				this.set_pdelta(this.pdelta_changed() +  0.5);
				if (this.a_changed() > 1) {
					this.set_a (  0.5);
				}
				if (this.b_changed() > 1) {
					this.set_b (  0.5);
				}
				if (this.c_changed() < 1) {
					this.set_c (  4);
				}
				if (this.d_changed() < 1) {
					this.set_d (  4);
				}
				if (this.c_changed() > 10) {
					this.set_c ( 4);
				}
				if (this.d_changed() > 10) {
					this.set_d ( 4);
				}
			};

};
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}

X3DJSON['Obj']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_Bounce'] = new X3DJSON['Script']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_Bounce']();
if (typeof X3DJSON['Obj']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_Bounce'].initialize === "function") X3DJSON['Obj']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_Bounce'].initialize();
if (typeof X3DJSON['Script'] === 'undefined') {
X3DJSON['Script'] = {};
}

X3DJSON['Script']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_Bounce'] = function() {
	this.set_translation = function (value) {
		X3DJSON.nodeUtil('DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_Bounce', 'translation', (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(',') : value));
	};
	this.translation_changed = function () {
		return X3DJSON.nodeUtil('DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_Bounce', 'translation');
	};
	this.set_translation(new SFVec3f(0,0,0));
	this.set_velocity = function (value) {
		X3DJSON.nodeUtil('DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_Bounce', 'velocity', (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(',') : value));
	};
	this.velocity_changed = function () {
		return X3DJSON.nodeUtil('DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_Bounce', 'velocity');
	};
	this.set_velocity(new SFVec3f(0,0,0));
	this.set_fraction = function (value) {
		X3DJSON.nodeUtil('DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_Bounce', 'fraction', (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(',') : value));
	};
	this.fraction_changed = function () {
		return X3DJSON.nodeUtil('DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_Bounce', 'fraction');
	};
	this.set_fraction(undefined);
	this.set_a = function (value) {
		X3DJSON.nodeUtil('DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_Bounce', 'a', (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(',') : value));
	};
	this.a_changed = function () {
		return X3DJSON.nodeUtil('DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_Bounce', 'a');
	};
	this.set_a(new SFFloat(0.5));
	this.set_b = function (value) {
		X3DJSON.nodeUtil('DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_Bounce', 'b', (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(',') : value));
	};
	this.b_changed = function () {
		return X3DJSON.nodeUtil('DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_Bounce', 'b');
	};
	this.set_b(new SFFloat(0.5));
	this.set_c = function (value) {
		X3DJSON.nodeUtil('DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_Bounce', 'c', (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(',') : value));
	};
	this.c_changed = function () {
		return X3DJSON.nodeUtil('DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_Bounce', 'c');
	};
	this.set_c(new SFFloat(3));
	this.set_d = function (value) {
		X3DJSON.nodeUtil('DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_Bounce', 'd', (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(',') : value));
	};
	this.d_changed = function () {
		return X3DJSON.nodeUtil('DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_Bounce', 'd');
	};
	this.set_d(new SFFloat(3));
	this.set_tdelta = function (value) {
		X3DJSON.nodeUtil('DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_Bounce', 'tdelta', (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(',') : value));
	};
	this.tdelta_changed = function () {
		return X3DJSON.nodeUtil('DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_Bounce', 'tdelta');
	};
	this.set_tdelta(new SFFloat(0.5));
	this.set_pdelta = function (value) {
		X3DJSON.nodeUtil('DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_Bounce', 'pdelta', (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(',') : value));
	};
	this.pdelta_changed = function () {
		return X3DJSON.nodeUtil('DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_Bounce', 'pdelta');
	};
	this.set_pdelta(new SFFloat(0.5));

ecmascript:
			
	this.initialize = function () {
			    this.set_translation ( new SFVec3f(0, 0, 0));
			    this.set_velocity ( new SFVec3f(
			    	Math.random() - 0.5,
				Math.random() - 0.5,
				Math.random() - 0.5));
			}
			;

	this.set_fraction = function () {
			    this.set_translation ( new SFVec3f(
			    	this.translation_changed().x + this.velocity_changed().x,
				this.translation_changed().y + this.velocity_changed().y,
				this.translation_changed().z + this.velocity_changed().z));
			    for (var j = 0; j <= 2; j++) {
				    if (Math.abs(this.translation_changed().x) > 10) {
					this.initialize();
				    } else if (Math.abs(this.translation_changed().y) > 10) {
					this.initialize();
				    } else if (Math.abs(this.translation_changed().z) > 10) {
					this.initialize();
				    } else {
					this.velocity_changed().x += Math.random() * 0.2 - 0.1;
					this.velocity_changed().y += Math.random() * 0.2 - 0.1;
					this.velocity_changed().z += Math.random() * 0.2 - 0.1;
				    }
			    }
			    this.animate_flowers();
			}

			;

	this.animate_flowers = function (fraction, eventTime) {
				choice = Math.floor(Math.random() * 4);
				switch (choice) {
				case 0:
					this.set_a(this.a_changed() +  Math.random() * 0.2 - 0.1);
					break;
				case 1:
					this.set_b(this.b_changed() +  Math.random() * 0.2 - 0.1);
					break;
				case 2:
					this.set_c(this.c_changed() +  Math.random() * 2 - 1);
					break;
				case 3:
					this.set_d(this.d_changed() +  Math.random() * 2 - 1);
					break;
				}
				this.set_tdelta(this.tdelta_changed() +  0.5);
				this.set_pdelta(this.pdelta_changed() +  0.5);
				if (this.a_changed() > 1) {
					this.set_a (  0.5);
				}
				if (this.b_changed() > 1) {
					this.set_b (  0.5);
				}
				if (this.c_changed() < 1) {
					this.set_c (  4);
				}
				if (this.d_changed() < 1) {
					this.set_d (  4);
				}
				if (this.c_changed() > 10) {
					this.set_c ( 4);
				}
				if (this.d_changed() > 10) {
					this.set_d ( 4);
				}
			};

};
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}

X3DJSON['Obj']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_Bounce'] = new X3DJSON['Script']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_Bounce']();
if (typeof X3DJSON['Obj']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_Bounce'].initialize === "function") X3DJSON['Obj']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_Bounce'].initialize();
if (typeof X3DJSON['ROUTE'] === 'undefined') {
X3DJSON['ROUTE'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_TourTime'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_TourTime'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_TourTime']['cycleTime'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_TourTime']['cycleTime'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_TourTime']['cycleTime']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_Bounce'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_TourTime']['cycleTime']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_Bounce'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_TourTime']['cycleTime']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_Bounce']['set_fraction'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_TourTime']['cycleTime']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_Bounce']['set_fraction'] = {};
}

X3DJSON['ROUTE']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_TourTime']['cycleTime']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_Bounce']['set_fraction']['FROM'] = new MutationObserver(function(mutations) {
		mutations.forEach(function(mutation) {
			console.log(mutation, 'cycleTime');
			X3DJSON.nodeUtil('DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_Bounce','set_fraction',X3DJSON.nodeUtil('DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_TourTime','cycleTime'), __eventTime);
		});
});
var config = { attributes: true, childList: true, attributeFilter:['cycleTime'] };
X3DJSON['ROUTE']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_TourTime']['cycleTime']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_Bounce']['set_fraction']['FROM'].observe(X3DJSON.nodeUtil('DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_TourTime'), config);
if (typeof X3DJSON['ROUTE'] === 'undefined') {
X3DJSON['ROUTE'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_TourTime'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_TourTime'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_TourTime']['cycleTime'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_TourTime']['cycleTime'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_TourTime']['cycleTime']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_Bounce'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_TourTime']['cycleTime']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_Bounce'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_TourTime']['cycleTime']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_Bounce']['set_fraction'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_TourTime']['cycleTime']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_Bounce']['set_fraction'] = {};
}

X3DJSON['ROUTE']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_TourTime']['cycleTime']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_Bounce']['set_fraction']['TO'] = new MutationObserver(function(mutations) {
		mutations.forEach(function(mutation) {
			console.log(mutation, 'set_fraction');
			if (typeof X3DJSON['Obj']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_Bounce'].set_fraction === "function") X3DJSON['Obj']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_Bounce'].set_fraction(X3DJSON.nodeUtil('DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_Bounce','set_fraction'), __eventTime);
		});
});
var config = { attributes: true, childList: true, attributeFilter:['set_fraction'] };
X3DJSON['ROUTE']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_TourTime']['cycleTime']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_Bounce']['set_fraction']['TO'].observe(X3DJSON.nodeUtil('DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_Bounce'), config);
if (typeof X3DJSON['ROUTE'] === 'undefined') {
X3DJSON['ROUTE'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_Bounce'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_Bounce'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_Bounce']['translation_changed'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_Bounce']['translation_changed'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_Bounce']['translation_changed']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_transform'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_Bounce']['translation_changed']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_transform'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_Bounce']['translation_changed']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_transform']['set_translation'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_Bounce']['translation_changed']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_transform']['set_translation'] = {};
}

X3DJSON['ROUTE']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_Bounce']['translation_changed']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_transform']['set_translation']['FROM'] = new MutationObserver(function(mutations) {
		mutations.forEach(function(mutation) {
			console.log(mutation, 'translation_changed');
			X3DJSON.nodeUtil('DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_transform','set_translation',X3DJSON.nodeUtil('DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_Bounce','translation_changed'), __eventTime);
		});
});
var config = { attributes: true, childList: true, attributeFilter:['translation_changed'] };
X3DJSON['ROUTE']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_Bounce']['translation_changed']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_transform']['set_translation']['FROM'].observe(X3DJSON.nodeUtil('DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_Bounce'), config);
if (typeof X3DJSON['ROUTE'] === 'undefined') {
X3DJSON['ROUTE'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_Bounce'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_Bounce'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_Bounce']['translation_changed'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_Bounce']['translation_changed'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_Bounce']['translation_changed']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_transform'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_Bounce']['translation_changed']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_transform'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_Bounce']['translation_changed']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_transform']['set_translation'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_Bounce']['translation_changed']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_transform']['set_translation'] = {};
}

X3DJSON['ROUTE']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_Bounce']['translation_changed']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_transform']['set_translation']['TO'] = new MutationObserver(function(mutations) {
		mutations.forEach(function(mutation) {
			console.log(mutation, 'set_translation');
			if (typeof X3DJSON['Obj']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_transform'].set_translation === "function") X3DJSON['Obj']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_transform'].set_translation(X3DJSON.nodeUtil('DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_transform','set_translation'), __eventTime);
		});
});
var config = { attributes: true, childList: true, attributeFilter:['set_translation'] };
X3DJSON['ROUTE']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_Bounce']['translation_changed']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_transform']['set_translation']['TO'].observe(X3DJSON.nodeUtil('DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_transform'), config);
if (typeof X3DJSON['ROUTE'] === 'undefined') {
X3DJSON['ROUTE'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_Bounce'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_Bounce'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_Bounce']['a'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_Bounce']['a'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_Bounce']['a']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_shader'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_Bounce']['a']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_shader'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_Bounce']['a']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_shader']['a'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_Bounce']['a']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_shader']['a'] = {};
}

X3DJSON['ROUTE']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_Bounce']['a']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_shader']['a']['FROM'] = new MutationObserver(function(mutations) {
		mutations.forEach(function(mutation) {
			console.log(mutation, 'a');
			X3DJSON.nodeUtil('DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_shader','a',X3DJSON.nodeUtil('DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_Bounce','a'), __eventTime);
		});
});
var config = { attributes: true, childList: true, attributeFilter:['a'] };
X3DJSON['ROUTE']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_Bounce']['a']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_shader']['a']['FROM'].observe(X3DJSON.nodeUtil('DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_Bounce'), config);
if (typeof X3DJSON['ROUTE'] === 'undefined') {
X3DJSON['ROUTE'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_Bounce'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_Bounce'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_Bounce']['a'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_Bounce']['a'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_Bounce']['a']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_shader'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_Bounce']['a']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_shader'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_Bounce']['a']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_shader']['a'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_Bounce']['a']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_shader']['a'] = {};
}

X3DJSON['ROUTE']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_Bounce']['a']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_shader']['a']['TO'] = new MutationObserver(function(mutations) {
		mutations.forEach(function(mutation) {
			console.log(mutation, 'a');
			if (typeof X3DJSON['Obj']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_shader'].a === "function") X3DJSON['Obj']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_shader'].a(X3DJSON.nodeUtil('DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_shader','a'), __eventTime);
		});
});
var config = { attributes: true, childList: true, attributeFilter:['a'] };
X3DJSON['ROUTE']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_Bounce']['a']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_shader']['a']['TO'].observe(X3DJSON.nodeUtil('DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_shader'), config);
if (typeof X3DJSON['ROUTE'] === 'undefined') {
X3DJSON['ROUTE'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_Bounce'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_Bounce'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_Bounce']['b'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_Bounce']['b'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_Bounce']['b']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_shader'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_Bounce']['b']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_shader'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_Bounce']['b']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_shader']['b'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_Bounce']['b']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_shader']['b'] = {};
}

X3DJSON['ROUTE']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_Bounce']['b']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_shader']['b']['FROM'] = new MutationObserver(function(mutations) {
		mutations.forEach(function(mutation) {
			console.log(mutation, 'b');
			X3DJSON.nodeUtil('DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_shader','b',X3DJSON.nodeUtil('DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_Bounce','b'), __eventTime);
		});
});
var config = { attributes: true, childList: true, attributeFilter:['b'] };
X3DJSON['ROUTE']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_Bounce']['b']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_shader']['b']['FROM'].observe(X3DJSON.nodeUtil('DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_Bounce'), config);
if (typeof X3DJSON['ROUTE'] === 'undefined') {
X3DJSON['ROUTE'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_Bounce'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_Bounce'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_Bounce']['b'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_Bounce']['b'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_Bounce']['b']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_shader'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_Bounce']['b']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_shader'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_Bounce']['b']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_shader']['b'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_Bounce']['b']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_shader']['b'] = {};
}

X3DJSON['ROUTE']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_Bounce']['b']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_shader']['b']['TO'] = new MutationObserver(function(mutations) {
		mutations.forEach(function(mutation) {
			console.log(mutation, 'b');
			if (typeof X3DJSON['Obj']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_shader'].b === "function") X3DJSON['Obj']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_shader'].b(X3DJSON.nodeUtil('DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_shader','b'), __eventTime);
		});
});
var config = { attributes: true, childList: true, attributeFilter:['b'] };
X3DJSON['ROUTE']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_Bounce']['b']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_shader']['b']['TO'].observe(X3DJSON.nodeUtil('DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_shader'), config);
if (typeof X3DJSON['ROUTE'] === 'undefined') {
X3DJSON['ROUTE'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_Bounce'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_Bounce'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_Bounce']['c'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_Bounce']['c'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_Bounce']['c']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_shader'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_Bounce']['c']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_shader'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_Bounce']['c']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_shader']['c'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_Bounce']['c']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_shader']['c'] = {};
}

X3DJSON['ROUTE']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_Bounce']['c']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_shader']['c']['FROM'] = new MutationObserver(function(mutations) {
		mutations.forEach(function(mutation) {
			console.log(mutation, 'c');
			X3DJSON.nodeUtil('DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_shader','c',X3DJSON.nodeUtil('DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_Bounce','c'), __eventTime);
		});
});
var config = { attributes: true, childList: true, attributeFilter:['c'] };
X3DJSON['ROUTE']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_Bounce']['c']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_shader']['c']['FROM'].observe(X3DJSON.nodeUtil('DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_Bounce'), config);
if (typeof X3DJSON['ROUTE'] === 'undefined') {
X3DJSON['ROUTE'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_Bounce'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_Bounce'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_Bounce']['c'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_Bounce']['c'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_Bounce']['c']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_shader'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_Bounce']['c']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_shader'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_Bounce']['c']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_shader']['c'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_Bounce']['c']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_shader']['c'] = {};
}

X3DJSON['ROUTE']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_Bounce']['c']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_shader']['c']['TO'] = new MutationObserver(function(mutations) {
		mutations.forEach(function(mutation) {
			console.log(mutation, 'c');
			if (typeof X3DJSON['Obj']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_shader'].c === "function") X3DJSON['Obj']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_shader'].c(X3DJSON.nodeUtil('DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_shader','c'), __eventTime);
		});
});
var config = { attributes: true, childList: true, attributeFilter:['c'] };
X3DJSON['ROUTE']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_Bounce']['c']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_shader']['c']['TO'].observe(X3DJSON.nodeUtil('DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_shader'), config);
if (typeof X3DJSON['ROUTE'] === 'undefined') {
X3DJSON['ROUTE'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_Bounce'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_Bounce'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_Bounce']['d'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_Bounce']['d'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_Bounce']['d']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_shader'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_Bounce']['d']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_shader'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_Bounce']['d']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_shader']['d'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_Bounce']['d']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_shader']['d'] = {};
}

X3DJSON['ROUTE']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_Bounce']['d']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_shader']['d']['FROM'] = new MutationObserver(function(mutations) {
		mutations.forEach(function(mutation) {
			console.log(mutation, 'd');
			X3DJSON.nodeUtil('DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_shader','d',X3DJSON.nodeUtil('DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_Bounce','d'), __eventTime);
		});
});
var config = { attributes: true, childList: true, attributeFilter:['d'] };
X3DJSON['ROUTE']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_Bounce']['d']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_shader']['d']['FROM'].observe(X3DJSON.nodeUtil('DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_Bounce'), config);
if (typeof X3DJSON['ROUTE'] === 'undefined') {
X3DJSON['ROUTE'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_Bounce'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_Bounce'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_Bounce']['d'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_Bounce']['d'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_Bounce']['d']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_shader'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_Bounce']['d']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_shader'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_Bounce']['d']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_shader']['d'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_Bounce']['d']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_shader']['d'] = {};
}

X3DJSON['ROUTE']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_Bounce']['d']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_shader']['d']['TO'] = new MutationObserver(function(mutations) {
		mutations.forEach(function(mutation) {
			console.log(mutation, 'd');
			if (typeof X3DJSON['Obj']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_shader'].d === "function") X3DJSON['Obj']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_shader'].d(X3DJSON.nodeUtil('DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_shader','d'), __eventTime);
		});
});
var config = { attributes: true, childList: true, attributeFilter:['d'] };
X3DJSON['ROUTE']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_Bounce']['d']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_shader']['d']['TO'].observe(X3DJSON.nodeUtil('DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_shader'), config);
if (typeof X3DJSON['ROUTE'] === 'undefined') {
X3DJSON['ROUTE'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_Bounce'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_Bounce'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_Bounce']['tdelta'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_Bounce']['tdelta'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_Bounce']['tdelta']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_shader'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_Bounce']['tdelta']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_shader'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_Bounce']['tdelta']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_shader']['tdelta'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_Bounce']['tdelta']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_shader']['tdelta'] = {};
}

X3DJSON['ROUTE']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_Bounce']['tdelta']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_shader']['tdelta']['FROM'] = new MutationObserver(function(mutations) {
		mutations.forEach(function(mutation) {
			console.log(mutation, 'tdelta');
			X3DJSON.nodeUtil('DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_shader','tdelta',X3DJSON.nodeUtil('DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_Bounce','tdelta'), __eventTime);
		});
});
var config = { attributes: true, childList: true, attributeFilter:['tdelta'] };
X3DJSON['ROUTE']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_Bounce']['tdelta']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_shader']['tdelta']['FROM'].observe(X3DJSON.nodeUtil('DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_Bounce'), config);
if (typeof X3DJSON['ROUTE'] === 'undefined') {
X3DJSON['ROUTE'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_Bounce'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_Bounce'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_Bounce']['tdelta'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_Bounce']['tdelta'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_Bounce']['tdelta']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_shader'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_Bounce']['tdelta']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_shader'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_Bounce']['tdelta']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_shader']['tdelta'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_Bounce']['tdelta']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_shader']['tdelta'] = {};
}

X3DJSON['ROUTE']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_Bounce']['tdelta']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_shader']['tdelta']['TO'] = new MutationObserver(function(mutations) {
		mutations.forEach(function(mutation) {
			console.log(mutation, 'tdelta');
			if (typeof X3DJSON['Obj']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_shader'].tdelta === "function") X3DJSON['Obj']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_shader'].tdelta(X3DJSON.nodeUtil('DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_shader','tdelta'), __eventTime);
		});
});
var config = { attributes: true, childList: true, attributeFilter:['tdelta'] };
X3DJSON['ROUTE']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_Bounce']['tdelta']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_shader']['tdelta']['TO'].observe(X3DJSON.nodeUtil('DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_shader'), config);
if (typeof X3DJSON['ROUTE'] === 'undefined') {
X3DJSON['ROUTE'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_Bounce'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_Bounce'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_Bounce']['pdelta'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_Bounce']['pdelta'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_Bounce']['pdelta']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_shader'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_Bounce']['pdelta']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_shader'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_Bounce']['pdelta']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_shader']['pdelta'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_Bounce']['pdelta']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_shader']['pdelta'] = {};
}

X3DJSON['ROUTE']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_Bounce']['pdelta']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_shader']['pdelta']['FROM'] = new MutationObserver(function(mutations) {
		mutations.forEach(function(mutation) {
			console.log(mutation, 'pdelta');
			X3DJSON.nodeUtil('DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_shader','pdelta',X3DJSON.nodeUtil('DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_Bounce','pdelta'), __eventTime);
		});
});
var config = { attributes: true, childList: true, attributeFilter:['pdelta'] };
X3DJSON['ROUTE']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_Bounce']['pdelta']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_shader']['pdelta']['FROM'].observe(X3DJSON.nodeUtil('DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_Bounce'), config);
if (typeof X3DJSON['ROUTE'] === 'undefined') {
X3DJSON['ROUTE'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_Bounce'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_Bounce'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_Bounce']['pdelta'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_Bounce']['pdelta'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_Bounce']['pdelta']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_shader'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_Bounce']['pdelta']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_shader'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_Bounce']['pdelta']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_shader']['pdelta'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_Bounce']['pdelta']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_shader']['pdelta'] = {};
}

X3DJSON['ROUTE']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_Bounce']['pdelta']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_shader']['pdelta']['TO'] = new MutationObserver(function(mutations) {
		mutations.forEach(function(mutation) {
			console.log(mutation, 'pdelta');
			if (typeof X3DJSON['Obj']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_shader'].pdelta === "function") X3DJSON['Obj']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_shader'].pdelta(X3DJSON.nodeUtil('DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_shader','pdelta'), __eventTime);
		});
});
var config = { attributes: true, childList: true, attributeFilter:['pdelta'] };
X3DJSON['ROUTE']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_Bounce']['pdelta']['DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_shader']['pdelta']['TO'].observe(X3DJSON.nodeUtil('DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_shader'), config);
if (typeof X3DJSON['ROUTE'] === 'undefined') {
X3DJSON['ROUTE'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_TourTime'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_TourTime'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_TourTime']['cycleTime'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_TourTime']['cycleTime'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_TourTime']['cycleTime']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_Bounce'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_TourTime']['cycleTime']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_Bounce'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_TourTime']['cycleTime']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_Bounce']['set_fraction'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_TourTime']['cycleTime']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_Bounce']['set_fraction'] = {};
}

X3DJSON['ROUTE']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_TourTime']['cycleTime']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_Bounce']['set_fraction']['FROM'] = new MutationObserver(function(mutations) {
		mutations.forEach(function(mutation) {
			console.log(mutation, 'cycleTime');
			X3DJSON.nodeUtil('DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_Bounce','set_fraction',X3DJSON.nodeUtil('DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_TourTime','cycleTime'), __eventTime);
		});
});
var config = { attributes: true, childList: true, attributeFilter:['cycleTime'] };
X3DJSON['ROUTE']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_TourTime']['cycleTime']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_Bounce']['set_fraction']['FROM'].observe(X3DJSON.nodeUtil('DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_TourTime'), config);
if (typeof X3DJSON['ROUTE'] === 'undefined') {
X3DJSON['ROUTE'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_TourTime'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_TourTime'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_TourTime']['cycleTime'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_TourTime']['cycleTime'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_TourTime']['cycleTime']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_Bounce'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_TourTime']['cycleTime']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_Bounce'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_TourTime']['cycleTime']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_Bounce']['set_fraction'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_TourTime']['cycleTime']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_Bounce']['set_fraction'] = {};
}

X3DJSON['ROUTE']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_TourTime']['cycleTime']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_Bounce']['set_fraction']['TO'] = new MutationObserver(function(mutations) {
		mutations.forEach(function(mutation) {
			console.log(mutation, 'set_fraction');
			if (typeof X3DJSON['Obj']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_Bounce'].set_fraction === "function") X3DJSON['Obj']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_Bounce'].set_fraction(X3DJSON.nodeUtil('DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_Bounce','set_fraction'), __eventTime);
		});
});
var config = { attributes: true, childList: true, attributeFilter:['set_fraction'] };
X3DJSON['ROUTE']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_TourTime']['cycleTime']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_Bounce']['set_fraction']['TO'].observe(X3DJSON.nodeUtil('DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_Bounce'), config);
if (typeof X3DJSON['ROUTE'] === 'undefined') {
X3DJSON['ROUTE'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_Bounce'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_Bounce'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_Bounce']['translation_changed'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_Bounce']['translation_changed'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_Bounce']['translation_changed']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_transform'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_Bounce']['translation_changed']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_transform'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_Bounce']['translation_changed']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_transform']['set_translation'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_Bounce']['translation_changed']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_transform']['set_translation'] = {};
}

X3DJSON['ROUTE']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_Bounce']['translation_changed']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_transform']['set_translation']['FROM'] = new MutationObserver(function(mutations) {
		mutations.forEach(function(mutation) {
			console.log(mutation, 'translation_changed');
			X3DJSON.nodeUtil('DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_transform','set_translation',X3DJSON.nodeUtil('DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_Bounce','translation_changed'), __eventTime);
		});
});
var config = { attributes: true, childList: true, attributeFilter:['translation_changed'] };
X3DJSON['ROUTE']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_Bounce']['translation_changed']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_transform']['set_translation']['FROM'].observe(X3DJSON.nodeUtil('DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_Bounce'), config);
if (typeof X3DJSON['ROUTE'] === 'undefined') {
X3DJSON['ROUTE'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_Bounce'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_Bounce'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_Bounce']['translation_changed'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_Bounce']['translation_changed'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_Bounce']['translation_changed']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_transform'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_Bounce']['translation_changed']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_transform'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_Bounce']['translation_changed']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_transform']['set_translation'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_Bounce']['translation_changed']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_transform']['set_translation'] = {};
}

X3DJSON['ROUTE']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_Bounce']['translation_changed']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_transform']['set_translation']['TO'] = new MutationObserver(function(mutations) {
		mutations.forEach(function(mutation) {
			console.log(mutation, 'set_translation');
			if (typeof X3DJSON['Obj']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_transform'].set_translation === "function") X3DJSON['Obj']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_transform'].set_translation(X3DJSON.nodeUtil('DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_transform','set_translation'), __eventTime);
		});
});
var config = { attributes: true, childList: true, attributeFilter:['set_translation'] };
X3DJSON['ROUTE']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_Bounce']['translation_changed']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_transform']['set_translation']['TO'].observe(X3DJSON.nodeUtil('DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_transform'), config);
if (typeof X3DJSON['ROUTE'] === 'undefined') {
X3DJSON['ROUTE'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_Bounce'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_Bounce'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_Bounce']['a'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_Bounce']['a'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_Bounce']['a']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_shader'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_Bounce']['a']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_shader'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_Bounce']['a']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_shader']['a'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_Bounce']['a']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_shader']['a'] = {};
}

X3DJSON['ROUTE']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_Bounce']['a']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_shader']['a']['FROM'] = new MutationObserver(function(mutations) {
		mutations.forEach(function(mutation) {
			console.log(mutation, 'a');
			X3DJSON.nodeUtil('DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_shader','a',X3DJSON.nodeUtil('DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_Bounce','a'), __eventTime);
		});
});
var config = { attributes: true, childList: true, attributeFilter:['a'] };
X3DJSON['ROUTE']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_Bounce']['a']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_shader']['a']['FROM'].observe(X3DJSON.nodeUtil('DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_Bounce'), config);
if (typeof X3DJSON['ROUTE'] === 'undefined') {
X3DJSON['ROUTE'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_Bounce'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_Bounce'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_Bounce']['a'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_Bounce']['a'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_Bounce']['a']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_shader'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_Bounce']['a']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_shader'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_Bounce']['a']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_shader']['a'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_Bounce']['a']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_shader']['a'] = {};
}

X3DJSON['ROUTE']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_Bounce']['a']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_shader']['a']['TO'] = new MutationObserver(function(mutations) {
		mutations.forEach(function(mutation) {
			console.log(mutation, 'a');
			if (typeof X3DJSON['Obj']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_shader'].a === "function") X3DJSON['Obj']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_shader'].a(X3DJSON.nodeUtil('DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_shader','a'), __eventTime);
		});
});
var config = { attributes: true, childList: true, attributeFilter:['a'] };
X3DJSON['ROUTE']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_Bounce']['a']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_shader']['a']['TO'].observe(X3DJSON.nodeUtil('DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_shader'), config);
if (typeof X3DJSON['ROUTE'] === 'undefined') {
X3DJSON['ROUTE'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_Bounce'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_Bounce'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_Bounce']['b'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_Bounce']['b'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_Bounce']['b']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_shader'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_Bounce']['b']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_shader'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_Bounce']['b']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_shader']['b'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_Bounce']['b']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_shader']['b'] = {};
}

X3DJSON['ROUTE']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_Bounce']['b']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_shader']['b']['FROM'] = new MutationObserver(function(mutations) {
		mutations.forEach(function(mutation) {
			console.log(mutation, 'b');
			X3DJSON.nodeUtil('DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_shader','b',X3DJSON.nodeUtil('DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_Bounce','b'), __eventTime);
		});
});
var config = { attributes: true, childList: true, attributeFilter:['b'] };
X3DJSON['ROUTE']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_Bounce']['b']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_shader']['b']['FROM'].observe(X3DJSON.nodeUtil('DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_Bounce'), config);
if (typeof X3DJSON['ROUTE'] === 'undefined') {
X3DJSON['ROUTE'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_Bounce'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_Bounce'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_Bounce']['b'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_Bounce']['b'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_Bounce']['b']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_shader'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_Bounce']['b']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_shader'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_Bounce']['b']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_shader']['b'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_Bounce']['b']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_shader']['b'] = {};
}

X3DJSON['ROUTE']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_Bounce']['b']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_shader']['b']['TO'] = new MutationObserver(function(mutations) {
		mutations.forEach(function(mutation) {
			console.log(mutation, 'b');
			if (typeof X3DJSON['Obj']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_shader'].b === "function") X3DJSON['Obj']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_shader'].b(X3DJSON.nodeUtil('DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_shader','b'), __eventTime);
		});
});
var config = { attributes: true, childList: true, attributeFilter:['b'] };
X3DJSON['ROUTE']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_Bounce']['b']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_shader']['b']['TO'].observe(X3DJSON.nodeUtil('DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_shader'), config);
if (typeof X3DJSON['ROUTE'] === 'undefined') {
X3DJSON['ROUTE'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_Bounce'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_Bounce'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_Bounce']['c'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_Bounce']['c'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_Bounce']['c']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_shader'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_Bounce']['c']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_shader'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_Bounce']['c']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_shader']['c'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_Bounce']['c']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_shader']['c'] = {};
}

X3DJSON['ROUTE']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_Bounce']['c']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_shader']['c']['FROM'] = new MutationObserver(function(mutations) {
		mutations.forEach(function(mutation) {
			console.log(mutation, 'c');
			X3DJSON.nodeUtil('DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_shader','c',X3DJSON.nodeUtil('DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_Bounce','c'), __eventTime);
		});
});
var config = { attributes: true, childList: true, attributeFilter:['c'] };
X3DJSON['ROUTE']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_Bounce']['c']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_shader']['c']['FROM'].observe(X3DJSON.nodeUtil('DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_Bounce'), config);
if (typeof X3DJSON['ROUTE'] === 'undefined') {
X3DJSON['ROUTE'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_Bounce'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_Bounce'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_Bounce']['c'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_Bounce']['c'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_Bounce']['c']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_shader'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_Bounce']['c']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_shader'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_Bounce']['c']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_shader']['c'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_Bounce']['c']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_shader']['c'] = {};
}

X3DJSON['ROUTE']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_Bounce']['c']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_shader']['c']['TO'] = new MutationObserver(function(mutations) {
		mutations.forEach(function(mutation) {
			console.log(mutation, 'c');
			if (typeof X3DJSON['Obj']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_shader'].c === "function") X3DJSON['Obj']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_shader'].c(X3DJSON.nodeUtil('DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_shader','c'), __eventTime);
		});
});
var config = { attributes: true, childList: true, attributeFilter:['c'] };
X3DJSON['ROUTE']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_Bounce']['c']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_shader']['c']['TO'].observe(X3DJSON.nodeUtil('DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_shader'), config);
if (typeof X3DJSON['ROUTE'] === 'undefined') {
X3DJSON['ROUTE'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_Bounce'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_Bounce'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_Bounce']['d'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_Bounce']['d'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_Bounce']['d']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_shader'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_Bounce']['d']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_shader'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_Bounce']['d']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_shader']['d'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_Bounce']['d']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_shader']['d'] = {};
}

X3DJSON['ROUTE']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_Bounce']['d']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_shader']['d']['FROM'] = new MutationObserver(function(mutations) {
		mutations.forEach(function(mutation) {
			console.log(mutation, 'd');
			X3DJSON.nodeUtil('DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_shader','d',X3DJSON.nodeUtil('DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_Bounce','d'), __eventTime);
		});
});
var config = { attributes: true, childList: true, attributeFilter:['d'] };
X3DJSON['ROUTE']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_Bounce']['d']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_shader']['d']['FROM'].observe(X3DJSON.nodeUtil('DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_Bounce'), config);
if (typeof X3DJSON['ROUTE'] === 'undefined') {
X3DJSON['ROUTE'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_Bounce'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_Bounce'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_Bounce']['d'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_Bounce']['d'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_Bounce']['d']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_shader'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_Bounce']['d']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_shader'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_Bounce']['d']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_shader']['d'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_Bounce']['d']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_shader']['d'] = {};
}

X3DJSON['ROUTE']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_Bounce']['d']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_shader']['d']['TO'] = new MutationObserver(function(mutations) {
		mutations.forEach(function(mutation) {
			console.log(mutation, 'd');
			if (typeof X3DJSON['Obj']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_shader'].d === "function") X3DJSON['Obj']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_shader'].d(X3DJSON.nodeUtil('DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_shader','d'), __eventTime);
		});
});
var config = { attributes: true, childList: true, attributeFilter:['d'] };
X3DJSON['ROUTE']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_Bounce']['d']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_shader']['d']['TO'].observe(X3DJSON.nodeUtil('DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_shader'), config);
if (typeof X3DJSON['ROUTE'] === 'undefined') {
X3DJSON['ROUTE'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_Bounce'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_Bounce'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_Bounce']['tdelta'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_Bounce']['tdelta'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_Bounce']['tdelta']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_shader'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_Bounce']['tdelta']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_shader'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_Bounce']['tdelta']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_shader']['tdelta'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_Bounce']['tdelta']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_shader']['tdelta'] = {};
}

X3DJSON['ROUTE']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_Bounce']['tdelta']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_shader']['tdelta']['FROM'] = new MutationObserver(function(mutations) {
		mutations.forEach(function(mutation) {
			console.log(mutation, 'tdelta');
			X3DJSON.nodeUtil('DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_shader','tdelta',X3DJSON.nodeUtil('DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_Bounce','tdelta'), __eventTime);
		});
});
var config = { attributes: true, childList: true, attributeFilter:['tdelta'] };
X3DJSON['ROUTE']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_Bounce']['tdelta']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_shader']['tdelta']['FROM'].observe(X3DJSON.nodeUtil('DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_Bounce'), config);
if (typeof X3DJSON['ROUTE'] === 'undefined') {
X3DJSON['ROUTE'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_Bounce'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_Bounce'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_Bounce']['tdelta'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_Bounce']['tdelta'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_Bounce']['tdelta']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_shader'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_Bounce']['tdelta']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_shader'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_Bounce']['tdelta']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_shader']['tdelta'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_Bounce']['tdelta']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_shader']['tdelta'] = {};
}

X3DJSON['ROUTE']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_Bounce']['tdelta']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_shader']['tdelta']['TO'] = new MutationObserver(function(mutations) {
		mutations.forEach(function(mutation) {
			console.log(mutation, 'tdelta');
			if (typeof X3DJSON['Obj']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_shader'].tdelta === "function") X3DJSON['Obj']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_shader'].tdelta(X3DJSON.nodeUtil('DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_shader','tdelta'), __eventTime);
		});
});
var config = { attributes: true, childList: true, attributeFilter:['tdelta'] };
X3DJSON['ROUTE']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_Bounce']['tdelta']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_shader']['tdelta']['TO'].observe(X3DJSON.nodeUtil('DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_shader'), config);
if (typeof X3DJSON['ROUTE'] === 'undefined') {
X3DJSON['ROUTE'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_Bounce'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_Bounce'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_Bounce']['pdelta'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_Bounce']['pdelta'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_Bounce']['pdelta']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_shader'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_Bounce']['pdelta']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_shader'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_Bounce']['pdelta']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_shader']['pdelta'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_Bounce']['pdelta']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_shader']['pdelta'] = {};
}

X3DJSON['ROUTE']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_Bounce']['pdelta']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_shader']['pdelta']['FROM'] = new MutationObserver(function(mutations) {
		mutations.forEach(function(mutation) {
			console.log(mutation, 'pdelta');
			X3DJSON.nodeUtil('DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_shader','pdelta',X3DJSON.nodeUtil('DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_Bounce','pdelta'), __eventTime);
		});
});
var config = { attributes: true, childList: true, attributeFilter:['pdelta'] };
X3DJSON['ROUTE']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_Bounce']['pdelta']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_shader']['pdelta']['FROM'].observe(X3DJSON.nodeUtil('DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_Bounce'), config);
if (typeof X3DJSON['ROUTE'] === 'undefined') {
X3DJSON['ROUTE'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_Bounce'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_Bounce'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_Bounce']['pdelta'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_Bounce']['pdelta'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_Bounce']['pdelta']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_shader'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_Bounce']['pdelta']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_shader'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_Bounce']['pdelta']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_shader']['pdelta'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_Bounce']['pdelta']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_shader']['pdelta'] = {};
}

X3DJSON['ROUTE']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_Bounce']['pdelta']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_shader']['pdelta']['TO'] = new MutationObserver(function(mutations) {
		mutations.forEach(function(mutation) {
			console.log(mutation, 'pdelta');
			if (typeof X3DJSON['Obj']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_shader'].pdelta === "function") X3DJSON['Obj']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_shader'].pdelta(X3DJSON.nodeUtil('DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_shader','pdelta'), __eventTime);
		});
});
var config = { attributes: true, childList: true, attributeFilter:['pdelta'] };
X3DJSON['ROUTE']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_Bounce']['pdelta']['DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_shader']['pdelta']['TO'].observe(X3DJSON.nodeUtil('DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_shader'), config);
if (typeof X3DJSON['ROUTE'] === 'undefined') {
X3DJSON['ROUTE'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_TourTime'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_TourTime'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_TourTime']['cycleTime'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_TourTime']['cycleTime'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_TourTime']['cycleTime']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_Bounce'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_TourTime']['cycleTime']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_Bounce'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_TourTime']['cycleTime']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_Bounce']['set_fraction'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_TourTime']['cycleTime']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_Bounce']['set_fraction'] = {};
}

X3DJSON['ROUTE']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_TourTime']['cycleTime']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_Bounce']['set_fraction']['FROM'] = new MutationObserver(function(mutations) {
		mutations.forEach(function(mutation) {
			console.log(mutation, 'cycleTime');
			X3DJSON.nodeUtil('DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_Bounce','set_fraction',X3DJSON.nodeUtil('DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_TourTime','cycleTime'), __eventTime);
		});
});
var config = { attributes: true, childList: true, attributeFilter:['cycleTime'] };
X3DJSON['ROUTE']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_TourTime']['cycleTime']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_Bounce']['set_fraction']['FROM'].observe(X3DJSON.nodeUtil('DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_TourTime'), config);
if (typeof X3DJSON['ROUTE'] === 'undefined') {
X3DJSON['ROUTE'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_TourTime'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_TourTime'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_TourTime']['cycleTime'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_TourTime']['cycleTime'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_TourTime']['cycleTime']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_Bounce'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_TourTime']['cycleTime']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_Bounce'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_TourTime']['cycleTime']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_Bounce']['set_fraction'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_TourTime']['cycleTime']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_Bounce']['set_fraction'] = {};
}

X3DJSON['ROUTE']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_TourTime']['cycleTime']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_Bounce']['set_fraction']['TO'] = new MutationObserver(function(mutations) {
		mutations.forEach(function(mutation) {
			console.log(mutation, 'set_fraction');
			if (typeof X3DJSON['Obj']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_Bounce'].set_fraction === "function") X3DJSON['Obj']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_Bounce'].set_fraction(X3DJSON.nodeUtil('DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_Bounce','set_fraction'), __eventTime);
		});
});
var config = { attributes: true, childList: true, attributeFilter:['set_fraction'] };
X3DJSON['ROUTE']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_TourTime']['cycleTime']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_Bounce']['set_fraction']['TO'].observe(X3DJSON.nodeUtil('DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_Bounce'), config);
if (typeof X3DJSON['ROUTE'] === 'undefined') {
X3DJSON['ROUTE'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_Bounce'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_Bounce'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_Bounce']['translation_changed'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_Bounce']['translation_changed'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_Bounce']['translation_changed']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_transform'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_Bounce']['translation_changed']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_transform'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_Bounce']['translation_changed']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_transform']['set_translation'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_Bounce']['translation_changed']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_transform']['set_translation'] = {};
}

X3DJSON['ROUTE']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_Bounce']['translation_changed']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_transform']['set_translation']['FROM'] = new MutationObserver(function(mutations) {
		mutations.forEach(function(mutation) {
			console.log(mutation, 'translation_changed');
			X3DJSON.nodeUtil('DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_transform','set_translation',X3DJSON.nodeUtil('DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_Bounce','translation_changed'), __eventTime);
		});
});
var config = { attributes: true, childList: true, attributeFilter:['translation_changed'] };
X3DJSON['ROUTE']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_Bounce']['translation_changed']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_transform']['set_translation']['FROM'].observe(X3DJSON.nodeUtil('DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_Bounce'), config);
if (typeof X3DJSON['ROUTE'] === 'undefined') {
X3DJSON['ROUTE'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_Bounce'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_Bounce'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_Bounce']['translation_changed'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_Bounce']['translation_changed'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_Bounce']['translation_changed']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_transform'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_Bounce']['translation_changed']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_transform'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_Bounce']['translation_changed']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_transform']['set_translation'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_Bounce']['translation_changed']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_transform']['set_translation'] = {};
}

X3DJSON['ROUTE']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_Bounce']['translation_changed']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_transform']['set_translation']['TO'] = new MutationObserver(function(mutations) {
		mutations.forEach(function(mutation) {
			console.log(mutation, 'set_translation');
			if (typeof X3DJSON['Obj']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_transform'].set_translation === "function") X3DJSON['Obj']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_transform'].set_translation(X3DJSON.nodeUtil('DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_transform','set_translation'), __eventTime);
		});
});
var config = { attributes: true, childList: true, attributeFilter:['set_translation'] };
X3DJSON['ROUTE']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_Bounce']['translation_changed']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_transform']['set_translation']['TO'].observe(X3DJSON.nodeUtil('DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_transform'), config);
if (typeof X3DJSON['ROUTE'] === 'undefined') {
X3DJSON['ROUTE'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_Bounce'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_Bounce'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_Bounce']['a'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_Bounce']['a'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_Bounce']['a']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_shader'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_Bounce']['a']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_shader'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_Bounce']['a']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_shader']['a'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_Bounce']['a']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_shader']['a'] = {};
}

X3DJSON['ROUTE']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_Bounce']['a']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_shader']['a']['FROM'] = new MutationObserver(function(mutations) {
		mutations.forEach(function(mutation) {
			console.log(mutation, 'a');
			X3DJSON.nodeUtil('DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_shader','a',X3DJSON.nodeUtil('DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_Bounce','a'), __eventTime);
		});
});
var config = { attributes: true, childList: true, attributeFilter:['a'] };
X3DJSON['ROUTE']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_Bounce']['a']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_shader']['a']['FROM'].observe(X3DJSON.nodeUtil('DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_Bounce'), config);
if (typeof X3DJSON['ROUTE'] === 'undefined') {
X3DJSON['ROUTE'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_Bounce'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_Bounce'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_Bounce']['a'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_Bounce']['a'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_Bounce']['a']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_shader'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_Bounce']['a']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_shader'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_Bounce']['a']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_shader']['a'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_Bounce']['a']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_shader']['a'] = {};
}

X3DJSON['ROUTE']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_Bounce']['a']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_shader']['a']['TO'] = new MutationObserver(function(mutations) {
		mutations.forEach(function(mutation) {
			console.log(mutation, 'a');
			if (typeof X3DJSON['Obj']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_shader'].a === "function") X3DJSON['Obj']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_shader'].a(X3DJSON.nodeUtil('DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_shader','a'), __eventTime);
		});
});
var config = { attributes: true, childList: true, attributeFilter:['a'] };
X3DJSON['ROUTE']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_Bounce']['a']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_shader']['a']['TO'].observe(X3DJSON.nodeUtil('DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_shader'), config);
if (typeof X3DJSON['ROUTE'] === 'undefined') {
X3DJSON['ROUTE'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_Bounce'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_Bounce'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_Bounce']['b'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_Bounce']['b'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_Bounce']['b']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_shader'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_Bounce']['b']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_shader'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_Bounce']['b']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_shader']['b'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_Bounce']['b']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_shader']['b'] = {};
}

X3DJSON['ROUTE']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_Bounce']['b']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_shader']['b']['FROM'] = new MutationObserver(function(mutations) {
		mutations.forEach(function(mutation) {
			console.log(mutation, 'b');
			X3DJSON.nodeUtil('DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_shader','b',X3DJSON.nodeUtil('DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_Bounce','b'), __eventTime);
		});
});
var config = { attributes: true, childList: true, attributeFilter:['b'] };
X3DJSON['ROUTE']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_Bounce']['b']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_shader']['b']['FROM'].observe(X3DJSON.nodeUtil('DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_Bounce'), config);
if (typeof X3DJSON['ROUTE'] === 'undefined') {
X3DJSON['ROUTE'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_Bounce'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_Bounce'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_Bounce']['b'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_Bounce']['b'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_Bounce']['b']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_shader'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_Bounce']['b']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_shader'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_Bounce']['b']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_shader']['b'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_Bounce']['b']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_shader']['b'] = {};
}

X3DJSON['ROUTE']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_Bounce']['b']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_shader']['b']['TO'] = new MutationObserver(function(mutations) {
		mutations.forEach(function(mutation) {
			console.log(mutation, 'b');
			if (typeof X3DJSON['Obj']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_shader'].b === "function") X3DJSON['Obj']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_shader'].b(X3DJSON.nodeUtil('DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_shader','b'), __eventTime);
		});
});
var config = { attributes: true, childList: true, attributeFilter:['b'] };
X3DJSON['ROUTE']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_Bounce']['b']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_shader']['b']['TO'].observe(X3DJSON.nodeUtil('DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_shader'), config);
if (typeof X3DJSON['ROUTE'] === 'undefined') {
X3DJSON['ROUTE'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_Bounce'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_Bounce'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_Bounce']['c'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_Bounce']['c'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_Bounce']['c']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_shader'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_Bounce']['c']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_shader'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_Bounce']['c']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_shader']['c'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_Bounce']['c']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_shader']['c'] = {};
}

X3DJSON['ROUTE']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_Bounce']['c']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_shader']['c']['FROM'] = new MutationObserver(function(mutations) {
		mutations.forEach(function(mutation) {
			console.log(mutation, 'c');
			X3DJSON.nodeUtil('DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_shader','c',X3DJSON.nodeUtil('DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_Bounce','c'), __eventTime);
		});
});
var config = { attributes: true, childList: true, attributeFilter:['c'] };
X3DJSON['ROUTE']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_Bounce']['c']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_shader']['c']['FROM'].observe(X3DJSON.nodeUtil('DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_Bounce'), config);
if (typeof X3DJSON['ROUTE'] === 'undefined') {
X3DJSON['ROUTE'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_Bounce'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_Bounce'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_Bounce']['c'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_Bounce']['c'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_Bounce']['c']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_shader'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_Bounce']['c']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_shader'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_Bounce']['c']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_shader']['c'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_Bounce']['c']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_shader']['c'] = {};
}

X3DJSON['ROUTE']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_Bounce']['c']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_shader']['c']['TO'] = new MutationObserver(function(mutations) {
		mutations.forEach(function(mutation) {
			console.log(mutation, 'c');
			if (typeof X3DJSON['Obj']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_shader'].c === "function") X3DJSON['Obj']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_shader'].c(X3DJSON.nodeUtil('DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_shader','c'), __eventTime);
		});
});
var config = { attributes: true, childList: true, attributeFilter:['c'] };
X3DJSON['ROUTE']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_Bounce']['c']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_shader']['c']['TO'].observe(X3DJSON.nodeUtil('DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_shader'), config);
if (typeof X3DJSON['ROUTE'] === 'undefined') {
X3DJSON['ROUTE'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_Bounce'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_Bounce'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_Bounce']['d'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_Bounce']['d'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_Bounce']['d']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_shader'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_Bounce']['d']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_shader'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_Bounce']['d']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_shader']['d'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_Bounce']['d']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_shader']['d'] = {};
}

X3DJSON['ROUTE']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_Bounce']['d']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_shader']['d']['FROM'] = new MutationObserver(function(mutations) {
		mutations.forEach(function(mutation) {
			console.log(mutation, 'd');
			X3DJSON.nodeUtil('DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_shader','d',X3DJSON.nodeUtil('DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_Bounce','d'), __eventTime);
		});
});
var config = { attributes: true, childList: true, attributeFilter:['d'] };
X3DJSON['ROUTE']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_Bounce']['d']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_shader']['d']['FROM'].observe(X3DJSON.nodeUtil('DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_Bounce'), config);
if (typeof X3DJSON['ROUTE'] === 'undefined') {
X3DJSON['ROUTE'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_Bounce'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_Bounce'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_Bounce']['d'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_Bounce']['d'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_Bounce']['d']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_shader'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_Bounce']['d']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_shader'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_Bounce']['d']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_shader']['d'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_Bounce']['d']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_shader']['d'] = {};
}

X3DJSON['ROUTE']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_Bounce']['d']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_shader']['d']['TO'] = new MutationObserver(function(mutations) {
		mutations.forEach(function(mutation) {
			console.log(mutation, 'd');
			if (typeof X3DJSON['Obj']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_shader'].d === "function") X3DJSON['Obj']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_shader'].d(X3DJSON.nodeUtil('DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_shader','d'), __eventTime);
		});
});
var config = { attributes: true, childList: true, attributeFilter:['d'] };
X3DJSON['ROUTE']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_Bounce']['d']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_shader']['d']['TO'].observe(X3DJSON.nodeUtil('DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_shader'), config);
if (typeof X3DJSON['ROUTE'] === 'undefined') {
X3DJSON['ROUTE'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_Bounce'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_Bounce'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_Bounce']['tdelta'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_Bounce']['tdelta'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_Bounce']['tdelta']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_shader'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_Bounce']['tdelta']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_shader'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_Bounce']['tdelta']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_shader']['tdelta'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_Bounce']['tdelta']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_shader']['tdelta'] = {};
}

X3DJSON['ROUTE']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_Bounce']['tdelta']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_shader']['tdelta']['FROM'] = new MutationObserver(function(mutations) {
		mutations.forEach(function(mutation) {
			console.log(mutation, 'tdelta');
			X3DJSON.nodeUtil('DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_shader','tdelta',X3DJSON.nodeUtil('DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_Bounce','tdelta'), __eventTime);
		});
});
var config = { attributes: true, childList: true, attributeFilter:['tdelta'] };
X3DJSON['ROUTE']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_Bounce']['tdelta']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_shader']['tdelta']['FROM'].observe(X3DJSON.nodeUtil('DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_Bounce'), config);
if (typeof X3DJSON['ROUTE'] === 'undefined') {
X3DJSON['ROUTE'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_Bounce'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_Bounce'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_Bounce']['tdelta'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_Bounce']['tdelta'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_Bounce']['tdelta']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_shader'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_Bounce']['tdelta']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_shader'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_Bounce']['tdelta']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_shader']['tdelta'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_Bounce']['tdelta']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_shader']['tdelta'] = {};
}

X3DJSON['ROUTE']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_Bounce']['tdelta']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_shader']['tdelta']['TO'] = new MutationObserver(function(mutations) {
		mutations.forEach(function(mutation) {
			console.log(mutation, 'tdelta');
			if (typeof X3DJSON['Obj']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_shader'].tdelta === "function") X3DJSON['Obj']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_shader'].tdelta(X3DJSON.nodeUtil('DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_shader','tdelta'), __eventTime);
		});
});
var config = { attributes: true, childList: true, attributeFilter:['tdelta'] };
X3DJSON['ROUTE']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_Bounce']['tdelta']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_shader']['tdelta']['TO'].observe(X3DJSON.nodeUtil('DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_shader'), config);
if (typeof X3DJSON['ROUTE'] === 'undefined') {
X3DJSON['ROUTE'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_Bounce'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_Bounce'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_Bounce']['pdelta'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_Bounce']['pdelta'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_Bounce']['pdelta']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_shader'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_Bounce']['pdelta']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_shader'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_Bounce']['pdelta']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_shader']['pdelta'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_Bounce']['pdelta']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_shader']['pdelta'] = {};
}

X3DJSON['ROUTE']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_Bounce']['pdelta']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_shader']['pdelta']['FROM'] = new MutationObserver(function(mutations) {
		mutations.forEach(function(mutation) {
			console.log(mutation, 'pdelta');
			X3DJSON.nodeUtil('DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_shader','pdelta',X3DJSON.nodeUtil('DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_Bounce','pdelta'), __eventTime);
		});
});
var config = { attributes: true, childList: true, attributeFilter:['pdelta'] };
X3DJSON['ROUTE']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_Bounce']['pdelta']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_shader']['pdelta']['FROM'].observe(X3DJSON.nodeUtil('DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_Bounce'), config);
if (typeof X3DJSON['ROUTE'] === 'undefined') {
X3DJSON['ROUTE'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_Bounce'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_Bounce'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_Bounce']['pdelta'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_Bounce']['pdelta'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_Bounce']['pdelta']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_shader'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_Bounce']['pdelta']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_shader'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_Bounce']['pdelta']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_shader']['pdelta'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_Bounce']['pdelta']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_shader']['pdelta'] = {};
}

X3DJSON['ROUTE']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_Bounce']['pdelta']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_shader']['pdelta']['TO'] = new MutationObserver(function(mutations) {
		mutations.forEach(function(mutation) {
			console.log(mutation, 'pdelta');
			if (typeof X3DJSON['Obj']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_shader'].pdelta === "function") X3DJSON['Obj']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_shader'].pdelta(X3DJSON.nodeUtil('DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_shader','pdelta'), __eventTime);
		});
});
var config = { attributes: true, childList: true, attributeFilter:['pdelta'] };
X3DJSON['ROUTE']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_Bounce']['pdelta']['DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_shader']['pdelta']['TO'].observe(X3DJSON.nodeUtil('DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_shader'), config);
if (typeof X3DJSON['ROUTE'] === 'undefined') {
X3DJSON['ROUTE'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_TourTime'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_TourTime'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_TourTime']['cycleTime'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_TourTime']['cycleTime'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_TourTime']['cycleTime']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_Bounce'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_TourTime']['cycleTime']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_Bounce'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_TourTime']['cycleTime']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_Bounce']['set_fraction'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_TourTime']['cycleTime']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_Bounce']['set_fraction'] = {};
}

X3DJSON['ROUTE']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_TourTime']['cycleTime']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_Bounce']['set_fraction']['FROM'] = new MutationObserver(function(mutations) {
		mutations.forEach(function(mutation) {
			console.log(mutation, 'cycleTime');
			X3DJSON.nodeUtil('DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_Bounce','set_fraction',X3DJSON.nodeUtil('DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_TourTime','cycleTime'), __eventTime);
		});
});
var config = { attributes: true, childList: true, attributeFilter:['cycleTime'] };
X3DJSON['ROUTE']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_TourTime']['cycleTime']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_Bounce']['set_fraction']['FROM'].observe(X3DJSON.nodeUtil('DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_TourTime'), config);
if (typeof X3DJSON['ROUTE'] === 'undefined') {
X3DJSON['ROUTE'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_TourTime'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_TourTime'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_TourTime']['cycleTime'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_TourTime']['cycleTime'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_TourTime']['cycleTime']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_Bounce'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_TourTime']['cycleTime']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_Bounce'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_TourTime']['cycleTime']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_Bounce']['set_fraction'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_TourTime']['cycleTime']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_Bounce']['set_fraction'] = {};
}

X3DJSON['ROUTE']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_TourTime']['cycleTime']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_Bounce']['set_fraction']['TO'] = new MutationObserver(function(mutations) {
		mutations.forEach(function(mutation) {
			console.log(mutation, 'set_fraction');
			if (typeof X3DJSON['Obj']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_Bounce'].set_fraction === "function") X3DJSON['Obj']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_Bounce'].set_fraction(X3DJSON.nodeUtil('DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_Bounce','set_fraction'), __eventTime);
		});
});
var config = { attributes: true, childList: true, attributeFilter:['set_fraction'] };
X3DJSON['ROUTE']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_TourTime']['cycleTime']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_Bounce']['set_fraction']['TO'].observe(X3DJSON.nodeUtil('DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_Bounce'), config);
if (typeof X3DJSON['ROUTE'] === 'undefined') {
X3DJSON['ROUTE'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_Bounce'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_Bounce'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_Bounce']['translation_changed'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_Bounce']['translation_changed'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_Bounce']['translation_changed']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_transform'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_Bounce']['translation_changed']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_transform'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_Bounce']['translation_changed']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_transform']['set_translation'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_Bounce']['translation_changed']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_transform']['set_translation'] = {};
}

X3DJSON['ROUTE']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_Bounce']['translation_changed']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_transform']['set_translation']['FROM'] = new MutationObserver(function(mutations) {
		mutations.forEach(function(mutation) {
			console.log(mutation, 'translation_changed');
			X3DJSON.nodeUtil('DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_transform','set_translation',X3DJSON.nodeUtil('DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_Bounce','translation_changed'), __eventTime);
		});
});
var config = { attributes: true, childList: true, attributeFilter:['translation_changed'] };
X3DJSON['ROUTE']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_Bounce']['translation_changed']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_transform']['set_translation']['FROM'].observe(X3DJSON.nodeUtil('DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_Bounce'), config);
if (typeof X3DJSON['ROUTE'] === 'undefined') {
X3DJSON['ROUTE'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_Bounce'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_Bounce'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_Bounce']['translation_changed'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_Bounce']['translation_changed'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_Bounce']['translation_changed']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_transform'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_Bounce']['translation_changed']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_transform'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_Bounce']['translation_changed']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_transform']['set_translation'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_Bounce']['translation_changed']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_transform']['set_translation'] = {};
}

X3DJSON['ROUTE']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_Bounce']['translation_changed']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_transform']['set_translation']['TO'] = new MutationObserver(function(mutations) {
		mutations.forEach(function(mutation) {
			console.log(mutation, 'set_translation');
			if (typeof X3DJSON['Obj']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_transform'].set_translation === "function") X3DJSON['Obj']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_transform'].set_translation(X3DJSON.nodeUtil('DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_transform','set_translation'), __eventTime);
		});
});
var config = { attributes: true, childList: true, attributeFilter:['set_translation'] };
X3DJSON['ROUTE']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_Bounce']['translation_changed']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_transform']['set_translation']['TO'].observe(X3DJSON.nodeUtil('DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_transform'), config);
if (typeof X3DJSON['ROUTE'] === 'undefined') {
X3DJSON['ROUTE'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_Bounce'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_Bounce'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_Bounce']['a'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_Bounce']['a'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_Bounce']['a']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_shader'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_Bounce']['a']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_shader'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_Bounce']['a']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_shader']['a'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_Bounce']['a']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_shader']['a'] = {};
}

X3DJSON['ROUTE']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_Bounce']['a']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_shader']['a']['FROM'] = new MutationObserver(function(mutations) {
		mutations.forEach(function(mutation) {
			console.log(mutation, 'a');
			X3DJSON.nodeUtil('DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_shader','a',X3DJSON.nodeUtil('DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_Bounce','a'), __eventTime);
		});
});
var config = { attributes: true, childList: true, attributeFilter:['a'] };
X3DJSON['ROUTE']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_Bounce']['a']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_shader']['a']['FROM'].observe(X3DJSON.nodeUtil('DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_Bounce'), config);
if (typeof X3DJSON['ROUTE'] === 'undefined') {
X3DJSON['ROUTE'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_Bounce'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_Bounce'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_Bounce']['a'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_Bounce']['a'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_Bounce']['a']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_shader'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_Bounce']['a']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_shader'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_Bounce']['a']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_shader']['a'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_Bounce']['a']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_shader']['a'] = {};
}

X3DJSON['ROUTE']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_Bounce']['a']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_shader']['a']['TO'] = new MutationObserver(function(mutations) {
		mutations.forEach(function(mutation) {
			console.log(mutation, 'a');
			if (typeof X3DJSON['Obj']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_shader'].a === "function") X3DJSON['Obj']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_shader'].a(X3DJSON.nodeUtil('DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_shader','a'), __eventTime);
		});
});
var config = { attributes: true, childList: true, attributeFilter:['a'] };
X3DJSON['ROUTE']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_Bounce']['a']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_shader']['a']['TO'].observe(X3DJSON.nodeUtil('DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_shader'), config);
if (typeof X3DJSON['ROUTE'] === 'undefined') {
X3DJSON['ROUTE'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_Bounce'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_Bounce'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_Bounce']['b'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_Bounce']['b'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_Bounce']['b']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_shader'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_Bounce']['b']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_shader'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_Bounce']['b']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_shader']['b'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_Bounce']['b']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_shader']['b'] = {};
}

X3DJSON['ROUTE']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_Bounce']['b']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_shader']['b']['FROM'] = new MutationObserver(function(mutations) {
		mutations.forEach(function(mutation) {
			console.log(mutation, 'b');
			X3DJSON.nodeUtil('DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_shader','b',X3DJSON.nodeUtil('DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_Bounce','b'), __eventTime);
		});
});
var config = { attributes: true, childList: true, attributeFilter:['b'] };
X3DJSON['ROUTE']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_Bounce']['b']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_shader']['b']['FROM'].observe(X3DJSON.nodeUtil('DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_Bounce'), config);
if (typeof X3DJSON['ROUTE'] === 'undefined') {
X3DJSON['ROUTE'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_Bounce'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_Bounce'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_Bounce']['b'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_Bounce']['b'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_Bounce']['b']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_shader'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_Bounce']['b']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_shader'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_Bounce']['b']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_shader']['b'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_Bounce']['b']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_shader']['b'] = {};
}

X3DJSON['ROUTE']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_Bounce']['b']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_shader']['b']['TO'] = new MutationObserver(function(mutations) {
		mutations.forEach(function(mutation) {
			console.log(mutation, 'b');
			if (typeof X3DJSON['Obj']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_shader'].b === "function") X3DJSON['Obj']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_shader'].b(X3DJSON.nodeUtil('DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_shader','b'), __eventTime);
		});
});
var config = { attributes: true, childList: true, attributeFilter:['b'] };
X3DJSON['ROUTE']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_Bounce']['b']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_shader']['b']['TO'].observe(X3DJSON.nodeUtil('DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_shader'), config);
if (typeof X3DJSON['ROUTE'] === 'undefined') {
X3DJSON['ROUTE'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_Bounce'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_Bounce'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_Bounce']['c'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_Bounce']['c'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_Bounce']['c']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_shader'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_Bounce']['c']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_shader'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_Bounce']['c']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_shader']['c'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_Bounce']['c']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_shader']['c'] = {};
}

X3DJSON['ROUTE']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_Bounce']['c']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_shader']['c']['FROM'] = new MutationObserver(function(mutations) {
		mutations.forEach(function(mutation) {
			console.log(mutation, 'c');
			X3DJSON.nodeUtil('DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_shader','c',X3DJSON.nodeUtil('DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_Bounce','c'), __eventTime);
		});
});
var config = { attributes: true, childList: true, attributeFilter:['c'] };
X3DJSON['ROUTE']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_Bounce']['c']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_shader']['c']['FROM'].observe(X3DJSON.nodeUtil('DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_Bounce'), config);
if (typeof X3DJSON['ROUTE'] === 'undefined') {
X3DJSON['ROUTE'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_Bounce'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_Bounce'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_Bounce']['c'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_Bounce']['c'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_Bounce']['c']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_shader'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_Bounce']['c']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_shader'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_Bounce']['c']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_shader']['c'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_Bounce']['c']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_shader']['c'] = {};
}

X3DJSON['ROUTE']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_Bounce']['c']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_shader']['c']['TO'] = new MutationObserver(function(mutations) {
		mutations.forEach(function(mutation) {
			console.log(mutation, 'c');
			if (typeof X3DJSON['Obj']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_shader'].c === "function") X3DJSON['Obj']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_shader'].c(X3DJSON.nodeUtil('DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_shader','c'), __eventTime);
		});
});
var config = { attributes: true, childList: true, attributeFilter:['c'] };
X3DJSON['ROUTE']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_Bounce']['c']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_shader']['c']['TO'].observe(X3DJSON.nodeUtil('DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_shader'), config);
if (typeof X3DJSON['ROUTE'] === 'undefined') {
X3DJSON['ROUTE'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_Bounce'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_Bounce'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_Bounce']['d'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_Bounce']['d'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_Bounce']['d']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_shader'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_Bounce']['d']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_shader'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_Bounce']['d']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_shader']['d'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_Bounce']['d']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_shader']['d'] = {};
}

X3DJSON['ROUTE']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_Bounce']['d']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_shader']['d']['FROM'] = new MutationObserver(function(mutations) {
		mutations.forEach(function(mutation) {
			console.log(mutation, 'd');
			X3DJSON.nodeUtil('DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_shader','d',X3DJSON.nodeUtil('DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_Bounce','d'), __eventTime);
		});
});
var config = { attributes: true, childList: true, attributeFilter:['d'] };
X3DJSON['ROUTE']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_Bounce']['d']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_shader']['d']['FROM'].observe(X3DJSON.nodeUtil('DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_Bounce'), config);
if (typeof X3DJSON['ROUTE'] === 'undefined') {
X3DJSON['ROUTE'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_Bounce'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_Bounce'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_Bounce']['d'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_Bounce']['d'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_Bounce']['d']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_shader'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_Bounce']['d']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_shader'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_Bounce']['d']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_shader']['d'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_Bounce']['d']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_shader']['d'] = {};
}

X3DJSON['ROUTE']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_Bounce']['d']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_shader']['d']['TO'] = new MutationObserver(function(mutations) {
		mutations.forEach(function(mutation) {
			console.log(mutation, 'd');
			if (typeof X3DJSON['Obj']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_shader'].d === "function") X3DJSON['Obj']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_shader'].d(X3DJSON.nodeUtil('DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_shader','d'), __eventTime);
		});
});
var config = { attributes: true, childList: true, attributeFilter:['d'] };
X3DJSON['ROUTE']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_Bounce']['d']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_shader']['d']['TO'].observe(X3DJSON.nodeUtil('DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_shader'), config);
if (typeof X3DJSON['ROUTE'] === 'undefined') {
X3DJSON['ROUTE'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_Bounce'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_Bounce'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_Bounce']['tdelta'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_Bounce']['tdelta'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_Bounce']['tdelta']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_shader'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_Bounce']['tdelta']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_shader'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_Bounce']['tdelta']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_shader']['tdelta'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_Bounce']['tdelta']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_shader']['tdelta'] = {};
}

X3DJSON['ROUTE']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_Bounce']['tdelta']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_shader']['tdelta']['FROM'] = new MutationObserver(function(mutations) {
		mutations.forEach(function(mutation) {
			console.log(mutation, 'tdelta');
			X3DJSON.nodeUtil('DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_shader','tdelta',X3DJSON.nodeUtil('DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_Bounce','tdelta'), __eventTime);
		});
});
var config = { attributes: true, childList: true, attributeFilter:['tdelta'] };
X3DJSON['ROUTE']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_Bounce']['tdelta']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_shader']['tdelta']['FROM'].observe(X3DJSON.nodeUtil('DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_Bounce'), config);
if (typeof X3DJSON['ROUTE'] === 'undefined') {
X3DJSON['ROUTE'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_Bounce'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_Bounce'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_Bounce']['tdelta'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_Bounce']['tdelta'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_Bounce']['tdelta']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_shader'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_Bounce']['tdelta']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_shader'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_Bounce']['tdelta']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_shader']['tdelta'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_Bounce']['tdelta']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_shader']['tdelta'] = {};
}

X3DJSON['ROUTE']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_Bounce']['tdelta']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_shader']['tdelta']['TO'] = new MutationObserver(function(mutations) {
		mutations.forEach(function(mutation) {
			console.log(mutation, 'tdelta');
			if (typeof X3DJSON['Obj']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_shader'].tdelta === "function") X3DJSON['Obj']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_shader'].tdelta(X3DJSON.nodeUtil('DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_shader','tdelta'), __eventTime);
		});
});
var config = { attributes: true, childList: true, attributeFilter:['tdelta'] };
X3DJSON['ROUTE']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_Bounce']['tdelta']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_shader']['tdelta']['TO'].observe(X3DJSON.nodeUtil('DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_shader'), config);
if (typeof X3DJSON['ROUTE'] === 'undefined') {
X3DJSON['ROUTE'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_Bounce'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_Bounce'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_Bounce']['pdelta'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_Bounce']['pdelta'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_Bounce']['pdelta']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_shader'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_Bounce']['pdelta']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_shader'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_Bounce']['pdelta']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_shader']['pdelta'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_Bounce']['pdelta']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_shader']['pdelta'] = {};
}

X3DJSON['ROUTE']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_Bounce']['pdelta']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_shader']['pdelta']['FROM'] = new MutationObserver(function(mutations) {
		mutations.forEach(function(mutation) {
			console.log(mutation, 'pdelta');
			X3DJSON.nodeUtil('DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_shader','pdelta',X3DJSON.nodeUtil('DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_Bounce','pdelta'), __eventTime);
		});
});
var config = { attributes: true, childList: true, attributeFilter:['pdelta'] };
X3DJSON['ROUTE']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_Bounce']['pdelta']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_shader']['pdelta']['FROM'].observe(X3DJSON.nodeUtil('DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_Bounce'), config);
if (typeof X3DJSON['ROUTE'] === 'undefined') {
X3DJSON['ROUTE'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_Bounce'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_Bounce'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_Bounce']['pdelta'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_Bounce']['pdelta'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_Bounce']['pdelta']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_shader'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_Bounce']['pdelta']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_shader'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_Bounce']['pdelta']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_shader']['pdelta'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_Bounce']['pdelta']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_shader']['pdelta'] = {};
}

X3DJSON['ROUTE']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_Bounce']['pdelta']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_shader']['pdelta']['TO'] = new MutationObserver(function(mutations) {
		mutations.forEach(function(mutation) {
			console.log(mutation, 'pdelta');
			if (typeof X3DJSON['Obj']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_shader'].pdelta === "function") X3DJSON['Obj']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_shader'].pdelta(X3DJSON.nodeUtil('DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_shader','pdelta'), __eventTime);
		});
});
var config = { attributes: true, childList: true, attributeFilter:['pdelta'] };
X3DJSON['ROUTE']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_Bounce']['pdelta']['DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_shader']['pdelta']['TO'].observe(X3DJSON.nodeUtil('DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_shader'), config);
if (typeof X3DJSON['ROUTE'] === 'undefined') {
X3DJSON['ROUTE'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_TourTime'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_TourTime'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_TourTime']['cycleTime'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_TourTime']['cycleTime'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_TourTime']['cycleTime']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_Bounce'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_TourTime']['cycleTime']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_Bounce'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_TourTime']['cycleTime']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_Bounce']['set_fraction'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_TourTime']['cycleTime']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_Bounce']['set_fraction'] = {};
}

X3DJSON['ROUTE']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_TourTime']['cycleTime']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_Bounce']['set_fraction']['FROM'] = new MutationObserver(function(mutations) {
		mutations.forEach(function(mutation) {
			console.log(mutation, 'cycleTime');
			X3DJSON.nodeUtil('DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_Bounce','set_fraction',X3DJSON.nodeUtil('DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_TourTime','cycleTime'), __eventTime);
		});
});
var config = { attributes: true, childList: true, attributeFilter:['cycleTime'] };
X3DJSON['ROUTE']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_TourTime']['cycleTime']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_Bounce']['set_fraction']['FROM'].observe(X3DJSON.nodeUtil('DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_TourTime'), config);
if (typeof X3DJSON['ROUTE'] === 'undefined') {
X3DJSON['ROUTE'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_TourTime'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_TourTime'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_TourTime']['cycleTime'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_TourTime']['cycleTime'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_TourTime']['cycleTime']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_Bounce'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_TourTime']['cycleTime']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_Bounce'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_TourTime']['cycleTime']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_Bounce']['set_fraction'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_TourTime']['cycleTime']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_Bounce']['set_fraction'] = {};
}

X3DJSON['ROUTE']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_TourTime']['cycleTime']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_Bounce']['set_fraction']['TO'] = new MutationObserver(function(mutations) {
		mutations.forEach(function(mutation) {
			console.log(mutation, 'set_fraction');
			if (typeof X3DJSON['Obj']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_Bounce'].set_fraction === "function") X3DJSON['Obj']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_Bounce'].set_fraction(X3DJSON.nodeUtil('DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_Bounce','set_fraction'), __eventTime);
		});
});
var config = { attributes: true, childList: true, attributeFilter:['set_fraction'] };
X3DJSON['ROUTE']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_TourTime']['cycleTime']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_Bounce']['set_fraction']['TO'].observe(X3DJSON.nodeUtil('DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_Bounce'), config);
if (typeof X3DJSON['ROUTE'] === 'undefined') {
X3DJSON['ROUTE'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_Bounce'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_Bounce'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_Bounce']['translation_changed'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_Bounce']['translation_changed'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_Bounce']['translation_changed']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_transform'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_Bounce']['translation_changed']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_transform'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_Bounce']['translation_changed']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_transform']['set_translation'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_Bounce']['translation_changed']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_transform']['set_translation'] = {};
}

X3DJSON['ROUTE']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_Bounce']['translation_changed']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_transform']['set_translation']['FROM'] = new MutationObserver(function(mutations) {
		mutations.forEach(function(mutation) {
			console.log(mutation, 'translation_changed');
			X3DJSON.nodeUtil('DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_transform','set_translation',X3DJSON.nodeUtil('DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_Bounce','translation_changed'), __eventTime);
		});
});
var config = { attributes: true, childList: true, attributeFilter:['translation_changed'] };
X3DJSON['ROUTE']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_Bounce']['translation_changed']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_transform']['set_translation']['FROM'].observe(X3DJSON.nodeUtil('DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_Bounce'), config);
if (typeof X3DJSON['ROUTE'] === 'undefined') {
X3DJSON['ROUTE'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_Bounce'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_Bounce'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_Bounce']['translation_changed'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_Bounce']['translation_changed'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_Bounce']['translation_changed']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_transform'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_Bounce']['translation_changed']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_transform'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_Bounce']['translation_changed']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_transform']['set_translation'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_Bounce']['translation_changed']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_transform']['set_translation'] = {};
}

X3DJSON['ROUTE']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_Bounce']['translation_changed']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_transform']['set_translation']['TO'] = new MutationObserver(function(mutations) {
		mutations.forEach(function(mutation) {
			console.log(mutation, 'set_translation');
			if (typeof X3DJSON['Obj']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_transform'].set_translation === "function") X3DJSON['Obj']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_transform'].set_translation(X3DJSON.nodeUtil('DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_transform','set_translation'), __eventTime);
		});
});
var config = { attributes: true, childList: true, attributeFilter:['set_translation'] };
X3DJSON['ROUTE']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_Bounce']['translation_changed']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_transform']['set_translation']['TO'].observe(X3DJSON.nodeUtil('DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_transform'), config);
if (typeof X3DJSON['ROUTE'] === 'undefined') {
X3DJSON['ROUTE'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_Bounce'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_Bounce'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_Bounce']['a'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_Bounce']['a'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_Bounce']['a']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_shader'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_Bounce']['a']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_shader'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_Bounce']['a']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_shader']['a'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_Bounce']['a']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_shader']['a'] = {};
}

X3DJSON['ROUTE']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_Bounce']['a']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_shader']['a']['FROM'] = new MutationObserver(function(mutations) {
		mutations.forEach(function(mutation) {
			console.log(mutation, 'a');
			X3DJSON.nodeUtil('DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_shader','a',X3DJSON.nodeUtil('DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_Bounce','a'), __eventTime);
		});
});
var config = { attributes: true, childList: true, attributeFilter:['a'] };
X3DJSON['ROUTE']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_Bounce']['a']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_shader']['a']['FROM'].observe(X3DJSON.nodeUtil('DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_Bounce'), config);
if (typeof X3DJSON['ROUTE'] === 'undefined') {
X3DJSON['ROUTE'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_Bounce'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_Bounce'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_Bounce']['a'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_Bounce']['a'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_Bounce']['a']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_shader'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_Bounce']['a']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_shader'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_Bounce']['a']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_shader']['a'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_Bounce']['a']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_shader']['a'] = {};
}

X3DJSON['ROUTE']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_Bounce']['a']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_shader']['a']['TO'] = new MutationObserver(function(mutations) {
		mutations.forEach(function(mutation) {
			console.log(mutation, 'a');
			if (typeof X3DJSON['Obj']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_shader'].a === "function") X3DJSON['Obj']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_shader'].a(X3DJSON.nodeUtil('DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_shader','a'), __eventTime);
		});
});
var config = { attributes: true, childList: true, attributeFilter:['a'] };
X3DJSON['ROUTE']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_Bounce']['a']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_shader']['a']['TO'].observe(X3DJSON.nodeUtil('DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_shader'), config);
if (typeof X3DJSON['ROUTE'] === 'undefined') {
X3DJSON['ROUTE'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_Bounce'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_Bounce'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_Bounce']['b'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_Bounce']['b'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_Bounce']['b']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_shader'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_Bounce']['b']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_shader'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_Bounce']['b']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_shader']['b'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_Bounce']['b']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_shader']['b'] = {};
}

X3DJSON['ROUTE']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_Bounce']['b']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_shader']['b']['FROM'] = new MutationObserver(function(mutations) {
		mutations.forEach(function(mutation) {
			console.log(mutation, 'b');
			X3DJSON.nodeUtil('DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_shader','b',X3DJSON.nodeUtil('DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_Bounce','b'), __eventTime);
		});
});
var config = { attributes: true, childList: true, attributeFilter:['b'] };
X3DJSON['ROUTE']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_Bounce']['b']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_shader']['b']['FROM'].observe(X3DJSON.nodeUtil('DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_Bounce'), config);
if (typeof X3DJSON['ROUTE'] === 'undefined') {
X3DJSON['ROUTE'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_Bounce'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_Bounce'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_Bounce']['b'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_Bounce']['b'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_Bounce']['b']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_shader'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_Bounce']['b']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_shader'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_Bounce']['b']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_shader']['b'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_Bounce']['b']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_shader']['b'] = {};
}

X3DJSON['ROUTE']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_Bounce']['b']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_shader']['b']['TO'] = new MutationObserver(function(mutations) {
		mutations.forEach(function(mutation) {
			console.log(mutation, 'b');
			if (typeof X3DJSON['Obj']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_shader'].b === "function") X3DJSON['Obj']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_shader'].b(X3DJSON.nodeUtil('DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_shader','b'), __eventTime);
		});
});
var config = { attributes: true, childList: true, attributeFilter:['b'] };
X3DJSON['ROUTE']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_Bounce']['b']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_shader']['b']['TO'].observe(X3DJSON.nodeUtil('DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_shader'), config);
if (typeof X3DJSON['ROUTE'] === 'undefined') {
X3DJSON['ROUTE'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_Bounce'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_Bounce'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_Bounce']['c'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_Bounce']['c'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_Bounce']['c']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_shader'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_Bounce']['c']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_shader'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_Bounce']['c']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_shader']['c'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_Bounce']['c']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_shader']['c'] = {};
}

X3DJSON['ROUTE']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_Bounce']['c']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_shader']['c']['FROM'] = new MutationObserver(function(mutations) {
		mutations.forEach(function(mutation) {
			console.log(mutation, 'c');
			X3DJSON.nodeUtil('DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_shader','c',X3DJSON.nodeUtil('DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_Bounce','c'), __eventTime);
		});
});
var config = { attributes: true, childList: true, attributeFilter:['c'] };
X3DJSON['ROUTE']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_Bounce']['c']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_shader']['c']['FROM'].observe(X3DJSON.nodeUtil('DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_Bounce'), config);
if (typeof X3DJSON['ROUTE'] === 'undefined') {
X3DJSON['ROUTE'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_Bounce'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_Bounce'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_Bounce']['c'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_Bounce']['c'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_Bounce']['c']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_shader'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_Bounce']['c']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_shader'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_Bounce']['c']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_shader']['c'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_Bounce']['c']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_shader']['c'] = {};
}

X3DJSON['ROUTE']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_Bounce']['c']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_shader']['c']['TO'] = new MutationObserver(function(mutations) {
		mutations.forEach(function(mutation) {
			console.log(mutation, 'c');
			if (typeof X3DJSON['Obj']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_shader'].c === "function") X3DJSON['Obj']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_shader'].c(X3DJSON.nodeUtil('DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_shader','c'), __eventTime);
		});
});
var config = { attributes: true, childList: true, attributeFilter:['c'] };
X3DJSON['ROUTE']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_Bounce']['c']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_shader']['c']['TO'].observe(X3DJSON.nodeUtil('DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_shader'), config);
if (typeof X3DJSON['ROUTE'] === 'undefined') {
X3DJSON['ROUTE'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_Bounce'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_Bounce'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_Bounce']['d'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_Bounce']['d'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_Bounce']['d']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_shader'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_Bounce']['d']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_shader'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_Bounce']['d']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_shader']['d'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_Bounce']['d']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_shader']['d'] = {};
}

X3DJSON['ROUTE']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_Bounce']['d']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_shader']['d']['FROM'] = new MutationObserver(function(mutations) {
		mutations.forEach(function(mutation) {
			console.log(mutation, 'd');
			X3DJSON.nodeUtil('DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_shader','d',X3DJSON.nodeUtil('DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_Bounce','d'), __eventTime);
		});
});
var config = { attributes: true, childList: true, attributeFilter:['d'] };
X3DJSON['ROUTE']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_Bounce']['d']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_shader']['d']['FROM'].observe(X3DJSON.nodeUtil('DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_Bounce'), config);
if (typeof X3DJSON['ROUTE'] === 'undefined') {
X3DJSON['ROUTE'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_Bounce'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_Bounce'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_Bounce']['d'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_Bounce']['d'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_Bounce']['d']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_shader'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_Bounce']['d']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_shader'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_Bounce']['d']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_shader']['d'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_Bounce']['d']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_shader']['d'] = {};
}

X3DJSON['ROUTE']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_Bounce']['d']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_shader']['d']['TO'] = new MutationObserver(function(mutations) {
		mutations.forEach(function(mutation) {
			console.log(mutation, 'd');
			if (typeof X3DJSON['Obj']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_shader'].d === "function") X3DJSON['Obj']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_shader'].d(X3DJSON.nodeUtil('DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_shader','d'), __eventTime);
		});
});
var config = { attributes: true, childList: true, attributeFilter:['d'] };
X3DJSON['ROUTE']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_Bounce']['d']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_shader']['d']['TO'].observe(X3DJSON.nodeUtil('DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_shader'), config);
if (typeof X3DJSON['ROUTE'] === 'undefined') {
X3DJSON['ROUTE'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_Bounce'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_Bounce'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_Bounce']['tdelta'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_Bounce']['tdelta'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_Bounce']['tdelta']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_shader'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_Bounce']['tdelta']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_shader'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_Bounce']['tdelta']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_shader']['tdelta'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_Bounce']['tdelta']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_shader']['tdelta'] = {};
}

X3DJSON['ROUTE']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_Bounce']['tdelta']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_shader']['tdelta']['FROM'] = new MutationObserver(function(mutations) {
		mutations.forEach(function(mutation) {
			console.log(mutation, 'tdelta');
			X3DJSON.nodeUtil('DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_shader','tdelta',X3DJSON.nodeUtil('DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_Bounce','tdelta'), __eventTime);
		});
});
var config = { attributes: true, childList: true, attributeFilter:['tdelta'] };
X3DJSON['ROUTE']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_Bounce']['tdelta']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_shader']['tdelta']['FROM'].observe(X3DJSON.nodeUtil('DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_Bounce'), config);
if (typeof X3DJSON['ROUTE'] === 'undefined') {
X3DJSON['ROUTE'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_Bounce'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_Bounce'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_Bounce']['tdelta'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_Bounce']['tdelta'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_Bounce']['tdelta']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_shader'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_Bounce']['tdelta']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_shader'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_Bounce']['tdelta']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_shader']['tdelta'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_Bounce']['tdelta']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_shader']['tdelta'] = {};
}

X3DJSON['ROUTE']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_Bounce']['tdelta']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_shader']['tdelta']['TO'] = new MutationObserver(function(mutations) {
		mutations.forEach(function(mutation) {
			console.log(mutation, 'tdelta');
			if (typeof X3DJSON['Obj']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_shader'].tdelta === "function") X3DJSON['Obj']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_shader'].tdelta(X3DJSON.nodeUtil('DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_shader','tdelta'), __eventTime);
		});
});
var config = { attributes: true, childList: true, attributeFilter:['tdelta'] };
X3DJSON['ROUTE']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_Bounce']['tdelta']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_shader']['tdelta']['TO'].observe(X3DJSON.nodeUtil('DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_shader'), config);
if (typeof X3DJSON['ROUTE'] === 'undefined') {
X3DJSON['ROUTE'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_Bounce'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_Bounce'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_Bounce']['pdelta'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_Bounce']['pdelta'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_Bounce']['pdelta']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_shader'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_Bounce']['pdelta']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_shader'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_Bounce']['pdelta']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_shader']['pdelta'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_Bounce']['pdelta']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_shader']['pdelta'] = {};
}

X3DJSON['ROUTE']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_Bounce']['pdelta']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_shader']['pdelta']['FROM'] = new MutationObserver(function(mutations) {
		mutations.forEach(function(mutation) {
			console.log(mutation, 'pdelta');
			X3DJSON.nodeUtil('DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_shader','pdelta',X3DJSON.nodeUtil('DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_Bounce','pdelta'), __eventTime);
		});
});
var config = { attributes: true, childList: true, attributeFilter:['pdelta'] };
X3DJSON['ROUTE']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_Bounce']['pdelta']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_shader']['pdelta']['FROM'].observe(X3DJSON.nodeUtil('DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_Bounce'), config);
if (typeof X3DJSON['ROUTE'] === 'undefined') {
X3DJSON['ROUTE'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_Bounce'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_Bounce'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_Bounce']['pdelta'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_Bounce']['pdelta'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_Bounce']['pdelta']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_shader'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_Bounce']['pdelta']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_shader'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_Bounce']['pdelta']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_shader']['pdelta'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_Bounce']['pdelta']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_shader']['pdelta'] = {};
}

X3DJSON['ROUTE']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_Bounce']['pdelta']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_shader']['pdelta']['TO'] = new MutationObserver(function(mutations) {
		mutations.forEach(function(mutation) {
			console.log(mutation, 'pdelta');
			if (typeof X3DJSON['Obj']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_shader'].pdelta === "function") X3DJSON['Obj']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_shader'].pdelta(X3DJSON.nodeUtil('DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_shader','pdelta'), __eventTime);
		});
});
var config = { attributes: true, childList: true, attributeFilter:['pdelta'] };
X3DJSON['ROUTE']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_Bounce']['pdelta']['DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_shader']['pdelta']['TO'].observe(X3DJSON.nodeUtil('DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_shader'), config);
if (typeof X3DJSON['ROUTE'] === 'undefined') {
X3DJSON['ROUTE'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_TourTime'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_TourTime'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_TourTime']['cycleTime'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_TourTime']['cycleTime'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_TourTime']['cycleTime']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_Bounce'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_TourTime']['cycleTime']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_Bounce'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_TourTime']['cycleTime']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_Bounce']['set_fraction'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_TourTime']['cycleTime']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_Bounce']['set_fraction'] = {};
}

X3DJSON['ROUTE']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_TourTime']['cycleTime']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_Bounce']['set_fraction']['FROM'] = new MutationObserver(function(mutations) {
		mutations.forEach(function(mutation) {
			console.log(mutation, 'cycleTime');
			X3DJSON.nodeUtil('DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_Bounce','set_fraction',X3DJSON.nodeUtil('DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_TourTime','cycleTime'), __eventTime);
		});
});
var config = { attributes: true, childList: true, attributeFilter:['cycleTime'] };
X3DJSON['ROUTE']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_TourTime']['cycleTime']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_Bounce']['set_fraction']['FROM'].observe(X3DJSON.nodeUtil('DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_TourTime'), config);
if (typeof X3DJSON['ROUTE'] === 'undefined') {
X3DJSON['ROUTE'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_TourTime'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_TourTime'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_TourTime']['cycleTime'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_TourTime']['cycleTime'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_TourTime']['cycleTime']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_Bounce'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_TourTime']['cycleTime']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_Bounce'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_TourTime']['cycleTime']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_Bounce']['set_fraction'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_TourTime']['cycleTime']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_Bounce']['set_fraction'] = {};
}

X3DJSON['ROUTE']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_TourTime']['cycleTime']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_Bounce']['set_fraction']['TO'] = new MutationObserver(function(mutations) {
		mutations.forEach(function(mutation) {
			console.log(mutation, 'set_fraction');
			if (typeof X3DJSON['Obj']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_Bounce'].set_fraction === "function") X3DJSON['Obj']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_Bounce'].set_fraction(X3DJSON.nodeUtil('DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_Bounce','set_fraction'), __eventTime);
		});
});
var config = { attributes: true, childList: true, attributeFilter:['set_fraction'] };
X3DJSON['ROUTE']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_TourTime']['cycleTime']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_Bounce']['set_fraction']['TO'].observe(X3DJSON.nodeUtil('DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_Bounce'), config);
if (typeof X3DJSON['ROUTE'] === 'undefined') {
X3DJSON['ROUTE'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_Bounce'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_Bounce'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_Bounce']['translation_changed'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_Bounce']['translation_changed'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_Bounce']['translation_changed']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_transform'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_Bounce']['translation_changed']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_transform'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_Bounce']['translation_changed']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_transform']['set_translation'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_Bounce']['translation_changed']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_transform']['set_translation'] = {};
}

X3DJSON['ROUTE']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_Bounce']['translation_changed']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_transform']['set_translation']['FROM'] = new MutationObserver(function(mutations) {
		mutations.forEach(function(mutation) {
			console.log(mutation, 'translation_changed');
			X3DJSON.nodeUtil('DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_transform','set_translation',X3DJSON.nodeUtil('DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_Bounce','translation_changed'), __eventTime);
		});
});
var config = { attributes: true, childList: true, attributeFilter:['translation_changed'] };
X3DJSON['ROUTE']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_Bounce']['translation_changed']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_transform']['set_translation']['FROM'].observe(X3DJSON.nodeUtil('DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_Bounce'), config);
if (typeof X3DJSON['ROUTE'] === 'undefined') {
X3DJSON['ROUTE'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_Bounce'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_Bounce'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_Bounce']['translation_changed'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_Bounce']['translation_changed'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_Bounce']['translation_changed']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_transform'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_Bounce']['translation_changed']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_transform'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_Bounce']['translation_changed']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_transform']['set_translation'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_Bounce']['translation_changed']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_transform']['set_translation'] = {};
}

X3DJSON['ROUTE']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_Bounce']['translation_changed']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_transform']['set_translation']['TO'] = new MutationObserver(function(mutations) {
		mutations.forEach(function(mutation) {
			console.log(mutation, 'set_translation');
			if (typeof X3DJSON['Obj']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_transform'].set_translation === "function") X3DJSON['Obj']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_transform'].set_translation(X3DJSON.nodeUtil('DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_transform','set_translation'), __eventTime);
		});
});
var config = { attributes: true, childList: true, attributeFilter:['set_translation'] };
X3DJSON['ROUTE']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_Bounce']['translation_changed']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_transform']['set_translation']['TO'].observe(X3DJSON.nodeUtil('DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_transform'), config);
if (typeof X3DJSON['ROUTE'] === 'undefined') {
X3DJSON['ROUTE'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_Bounce'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_Bounce'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_Bounce']['a'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_Bounce']['a'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_Bounce']['a']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_shader'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_Bounce']['a']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_shader'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_Bounce']['a']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_shader']['a'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_Bounce']['a']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_shader']['a'] = {};
}

X3DJSON['ROUTE']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_Bounce']['a']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_shader']['a']['FROM'] = new MutationObserver(function(mutations) {
		mutations.forEach(function(mutation) {
			console.log(mutation, 'a');
			X3DJSON.nodeUtil('DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_shader','a',X3DJSON.nodeUtil('DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_Bounce','a'), __eventTime);
		});
});
var config = { attributes: true, childList: true, attributeFilter:['a'] };
X3DJSON['ROUTE']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_Bounce']['a']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_shader']['a']['FROM'].observe(X3DJSON.nodeUtil('DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_Bounce'), config);
if (typeof X3DJSON['ROUTE'] === 'undefined') {
X3DJSON['ROUTE'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_Bounce'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_Bounce'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_Bounce']['a'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_Bounce']['a'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_Bounce']['a']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_shader'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_Bounce']['a']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_shader'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_Bounce']['a']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_shader']['a'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_Bounce']['a']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_shader']['a'] = {};
}

X3DJSON['ROUTE']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_Bounce']['a']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_shader']['a']['TO'] = new MutationObserver(function(mutations) {
		mutations.forEach(function(mutation) {
			console.log(mutation, 'a');
			if (typeof X3DJSON['Obj']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_shader'].a === "function") X3DJSON['Obj']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_shader'].a(X3DJSON.nodeUtil('DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_shader','a'), __eventTime);
		});
});
var config = { attributes: true, childList: true, attributeFilter:['a'] };
X3DJSON['ROUTE']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_Bounce']['a']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_shader']['a']['TO'].observe(X3DJSON.nodeUtil('DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_shader'), config);
if (typeof X3DJSON['ROUTE'] === 'undefined') {
X3DJSON['ROUTE'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_Bounce'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_Bounce'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_Bounce']['b'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_Bounce']['b'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_Bounce']['b']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_shader'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_Bounce']['b']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_shader'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_Bounce']['b']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_shader']['b'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_Bounce']['b']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_shader']['b'] = {};
}

X3DJSON['ROUTE']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_Bounce']['b']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_shader']['b']['FROM'] = new MutationObserver(function(mutations) {
		mutations.forEach(function(mutation) {
			console.log(mutation, 'b');
			X3DJSON.nodeUtil('DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_shader','b',X3DJSON.nodeUtil('DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_Bounce','b'), __eventTime);
		});
});
var config = { attributes: true, childList: true, attributeFilter:['b'] };
X3DJSON['ROUTE']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_Bounce']['b']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_shader']['b']['FROM'].observe(X3DJSON.nodeUtil('DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_Bounce'), config);
if (typeof X3DJSON['ROUTE'] === 'undefined') {
X3DJSON['ROUTE'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_Bounce'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_Bounce'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_Bounce']['b'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_Bounce']['b'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_Bounce']['b']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_shader'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_Bounce']['b']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_shader'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_Bounce']['b']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_shader']['b'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_Bounce']['b']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_shader']['b'] = {};
}

X3DJSON['ROUTE']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_Bounce']['b']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_shader']['b']['TO'] = new MutationObserver(function(mutations) {
		mutations.forEach(function(mutation) {
			console.log(mutation, 'b');
			if (typeof X3DJSON['Obj']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_shader'].b === "function") X3DJSON['Obj']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_shader'].b(X3DJSON.nodeUtil('DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_shader','b'), __eventTime);
		});
});
var config = { attributes: true, childList: true, attributeFilter:['b'] };
X3DJSON['ROUTE']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_Bounce']['b']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_shader']['b']['TO'].observe(X3DJSON.nodeUtil('DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_shader'), config);
if (typeof X3DJSON['ROUTE'] === 'undefined') {
X3DJSON['ROUTE'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_Bounce'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_Bounce'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_Bounce']['c'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_Bounce']['c'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_Bounce']['c']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_shader'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_Bounce']['c']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_shader'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_Bounce']['c']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_shader']['c'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_Bounce']['c']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_shader']['c'] = {};
}

X3DJSON['ROUTE']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_Bounce']['c']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_shader']['c']['FROM'] = new MutationObserver(function(mutations) {
		mutations.forEach(function(mutation) {
			console.log(mutation, 'c');
			X3DJSON.nodeUtil('DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_shader','c',X3DJSON.nodeUtil('DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_Bounce','c'), __eventTime);
		});
});
var config = { attributes: true, childList: true, attributeFilter:['c'] };
X3DJSON['ROUTE']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_Bounce']['c']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_shader']['c']['FROM'].observe(X3DJSON.nodeUtil('DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_Bounce'), config);
if (typeof X3DJSON['ROUTE'] === 'undefined') {
X3DJSON['ROUTE'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_Bounce'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_Bounce'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_Bounce']['c'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_Bounce']['c'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_Bounce']['c']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_shader'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_Bounce']['c']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_shader'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_Bounce']['c']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_shader']['c'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_Bounce']['c']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_shader']['c'] = {};
}

X3DJSON['ROUTE']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_Bounce']['c']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_shader']['c']['TO'] = new MutationObserver(function(mutations) {
		mutations.forEach(function(mutation) {
			console.log(mutation, 'c');
			if (typeof X3DJSON['Obj']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_shader'].c === "function") X3DJSON['Obj']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_shader'].c(X3DJSON.nodeUtil('DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_shader','c'), __eventTime);
		});
});
var config = { attributes: true, childList: true, attributeFilter:['c'] };
X3DJSON['ROUTE']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_Bounce']['c']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_shader']['c']['TO'].observe(X3DJSON.nodeUtil('DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_shader'), config);
if (typeof X3DJSON['ROUTE'] === 'undefined') {
X3DJSON['ROUTE'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_Bounce'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_Bounce'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_Bounce']['d'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_Bounce']['d'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_Bounce']['d']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_shader'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_Bounce']['d']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_shader'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_Bounce']['d']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_shader']['d'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_Bounce']['d']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_shader']['d'] = {};
}

X3DJSON['ROUTE']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_Bounce']['d']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_shader']['d']['FROM'] = new MutationObserver(function(mutations) {
		mutations.forEach(function(mutation) {
			console.log(mutation, 'd');
			X3DJSON.nodeUtil('DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_shader','d',X3DJSON.nodeUtil('DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_Bounce','d'), __eventTime);
		});
});
var config = { attributes: true, childList: true, attributeFilter:['d'] };
X3DJSON['ROUTE']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_Bounce']['d']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_shader']['d']['FROM'].observe(X3DJSON.nodeUtil('DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_Bounce'), config);
if (typeof X3DJSON['ROUTE'] === 'undefined') {
X3DJSON['ROUTE'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_Bounce'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_Bounce'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_Bounce']['d'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_Bounce']['d'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_Bounce']['d']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_shader'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_Bounce']['d']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_shader'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_Bounce']['d']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_shader']['d'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_Bounce']['d']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_shader']['d'] = {};
}

X3DJSON['ROUTE']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_Bounce']['d']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_shader']['d']['TO'] = new MutationObserver(function(mutations) {
		mutations.forEach(function(mutation) {
			console.log(mutation, 'd');
			if (typeof X3DJSON['Obj']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_shader'].d === "function") X3DJSON['Obj']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_shader'].d(X3DJSON.nodeUtil('DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_shader','d'), __eventTime);
		});
});
var config = { attributes: true, childList: true, attributeFilter:['d'] };
X3DJSON['ROUTE']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_Bounce']['d']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_shader']['d']['TO'].observe(X3DJSON.nodeUtil('DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_shader'), config);
if (typeof X3DJSON['ROUTE'] === 'undefined') {
X3DJSON['ROUTE'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_Bounce'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_Bounce'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_Bounce']['tdelta'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_Bounce']['tdelta'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_Bounce']['tdelta']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_shader'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_Bounce']['tdelta']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_shader'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_Bounce']['tdelta']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_shader']['tdelta'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_Bounce']['tdelta']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_shader']['tdelta'] = {};
}

X3DJSON['ROUTE']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_Bounce']['tdelta']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_shader']['tdelta']['FROM'] = new MutationObserver(function(mutations) {
		mutations.forEach(function(mutation) {
			console.log(mutation, 'tdelta');
			X3DJSON.nodeUtil('DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_shader','tdelta',X3DJSON.nodeUtil('DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_Bounce','tdelta'), __eventTime);
		});
});
var config = { attributes: true, childList: true, attributeFilter:['tdelta'] };
X3DJSON['ROUTE']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_Bounce']['tdelta']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_shader']['tdelta']['FROM'].observe(X3DJSON.nodeUtil('DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_Bounce'), config);
if (typeof X3DJSON['ROUTE'] === 'undefined') {
X3DJSON['ROUTE'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_Bounce'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_Bounce'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_Bounce']['tdelta'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_Bounce']['tdelta'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_Bounce']['tdelta']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_shader'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_Bounce']['tdelta']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_shader'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_Bounce']['tdelta']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_shader']['tdelta'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_Bounce']['tdelta']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_shader']['tdelta'] = {};
}

X3DJSON['ROUTE']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_Bounce']['tdelta']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_shader']['tdelta']['TO'] = new MutationObserver(function(mutations) {
		mutations.forEach(function(mutation) {
			console.log(mutation, 'tdelta');
			if (typeof X3DJSON['Obj']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_shader'].tdelta === "function") X3DJSON['Obj']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_shader'].tdelta(X3DJSON.nodeUtil('DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_shader','tdelta'), __eventTime);
		});
});
var config = { attributes: true, childList: true, attributeFilter:['tdelta'] };
X3DJSON['ROUTE']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_Bounce']['tdelta']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_shader']['tdelta']['TO'].observe(X3DJSON.nodeUtil('DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_shader'), config);
if (typeof X3DJSON['ROUTE'] === 'undefined') {
X3DJSON['ROUTE'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_Bounce'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_Bounce'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_Bounce']['pdelta'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_Bounce']['pdelta'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_Bounce']['pdelta']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_shader'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_Bounce']['pdelta']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_shader'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_Bounce']['pdelta']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_shader']['pdelta'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_Bounce']['pdelta']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_shader']['pdelta'] = {};
}

X3DJSON['ROUTE']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_Bounce']['pdelta']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_shader']['pdelta']['FROM'] = new MutationObserver(function(mutations) {
		mutations.forEach(function(mutation) {
			console.log(mutation, 'pdelta');
			X3DJSON.nodeUtil('DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_shader','pdelta',X3DJSON.nodeUtil('DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_Bounce','pdelta'), __eventTime);
		});
});
var config = { attributes: true, childList: true, attributeFilter:['pdelta'] };
X3DJSON['ROUTE']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_Bounce']['pdelta']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_shader']['pdelta']['FROM'].observe(X3DJSON.nodeUtil('DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_Bounce'), config);
if (typeof X3DJSON['ROUTE'] === 'undefined') {
X3DJSON['ROUTE'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_Bounce'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_Bounce'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_Bounce']['pdelta'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_Bounce']['pdelta'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_Bounce']['pdelta']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_shader'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_Bounce']['pdelta']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_shader'] = {};
}
if (typeof X3DJSON['ROUTE']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_Bounce']['pdelta']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_shader']['pdelta'] === 'undefined') {
X3DJSON['ROUTE']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_Bounce']['pdelta']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_shader']['pdelta'] = {};
}

X3DJSON['ROUTE']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_Bounce']['pdelta']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_shader']['pdelta']['TO'] = new MutationObserver(function(mutations) {
		mutations.forEach(function(mutation) {
			console.log(mutation, 'pdelta');
			if (typeof X3DJSON['Obj']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_shader'].pdelta === "function") X3DJSON['Obj']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_shader'].pdelta(X3DJSON.nodeUtil('DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_shader','pdelta'), __eventTime);
		});
});
var config = { attributes: true, childList: true, attributeFilter:['pdelta'] };
X3DJSON['ROUTE']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_Bounce']['pdelta']['DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_shader']['pdelta']['TO'].observe(X3DJSON.nodeUtil('DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_shader'), config);
			X3DJSON.nodeUtil('DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_Bounce','set_fraction',X3DJSON.nodeUtil('DECLflower_INSTANCE74000_DECLFlowerProto_INSTANCE75000_TourTime','cycleTime'), __eventTime);
			X3DJSON.nodeUtil('DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_Bounce','set_fraction',X3DJSON.nodeUtil('DECLflower_INSTANCE76000_DECLFlowerProto_INSTANCE77000_TourTime','cycleTime'), __eventTime);
			X3DJSON.nodeUtil('DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_Bounce','set_fraction',X3DJSON.nodeUtil('DECLflower_INSTANCE78000_DECLFlowerProto_INSTANCE79000_TourTime','cycleTime'), __eventTime);
			X3DJSON.nodeUtil('DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_Bounce','set_fraction',X3DJSON.nodeUtil('DECLflower_INSTANCE80000_DECLFlowerProto_INSTANCE81000_TourTime','cycleTime'), __eventTime);
			X3DJSON.nodeUtil('DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_Bounce','set_fraction',X3DJSON.nodeUtil('DECLflower_INSTANCE82000_DECLFlowerProto_INSTANCE83000_TourTime','cycleTime'), __eventTime);
			X3DJSON.nodeUtil('DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_Bounce','set_fraction',X3DJSON.nodeUtil('DECLflower_INSTANCE84000_DECLFlowerProto_INSTANCE85000_TourTime','cycleTime'), __eventTime);