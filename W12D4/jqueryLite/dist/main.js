/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/dom_node_collection.js":
/*!************************************!*\
  !*** ./src/dom_node_collection.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class DOMNodeCollection {\n  constructor(HTMLelements) {\n    this.HTMLelements = HTMLelements;\n  }\n\n  //If it receives an argument, this will become the innerHTML(hint hint) of the each of the nodes.If it does not receive an argument, it should return the innerHTML of the first node in the array.\n\n  html(string) {\n    if (string) {\n      this.HTMLelements.forEach(element => {\n        element.html = string;\n      });\n    } else {\n      this.HTMLelements[0].html;\n    }\n  }\n\n  empty() {\n    this.HTMLelements.forEach(element => {\n      element.html = \"\";\n    });\n  }\n\n  // Take a look here.This method should accept either a jQuery-lite wrapped collection, an HTML element, or a string.Append the outerHTML of each element in the argument to the innerHTML of each element in the DOMNodeCollection.Don't worry about converting strings into HTML elements; just pass them straight through to the elements' innerHTML.\n  // ul.append(li)\n\n  //   append(arg) {\n  //     this.HTMLelements.forEach(element => {\n  //       // arg.forEach(a => {\n  //       element.innerHTML += arg;\n  //       // });\n  //     });\n  //   }\n\n  each(cb) {\n    // Our each passes in the node and index in traditional 'forEach' order,\n    // jquery passes in index first and binds the call to the element.\n    this.HTMLelements.forEach(cb);\n  }\n\n  append(children) {\n    if (this.HTMLelements.length === 0) return;\n\n    if (\n      typeof children === \"object\" &&\n      !(children instanceof DOMNodeCollection)\n    ) {\n      // ensure argument is coerced into DomNodeCollection\n      children = $1(children);\n    }\n\n    if (typeof children === \"string\") {\n      this.each(node => {\n        node.innerHTML += children;\n      });\n    } else if (children instanceof DOMNodeCollection) {\n      // You can't append the same child node to multiple parents,\n      // so we must duplicate the child nodes here.\n      this.each(node => {\n        // The argument to cloneNode indicates whether or not\n        // all children should be cloned.\n        children.each(childNode => {\n          node.appendChild(childNode.cloneNode(true));\n        });\n      });\n    }\n  }\n\n  attr(key, val) {\n    if (typeof val === \"string\") {\n      element => element.setAttribute(key, val);\n    } else {\n      return this.HTMLlements[0].getAttribute(key);\n    }\n  }\n\n  //   children() {\n  //     let arr = [];\n  //     this.each(node => {\n  //       arr = arr.concat(Array.from(node.children));\n  //     });\n\n  //     return new DOMNodeCollection(arr);\n  //   }\n  children() {\n    let childNodes = [];\n    this.each(node => {\n      const childNodeList = node.children;\n      childNodes = childNodes.concat(Array.from(childNodeList));\n    });\n    return new DOMNodeCollection(childNodes);\n  }\n\n  parent() {\n    let parent = [];\n    let m;\n    this.each(({ parentNode }) => {\n      if (!parentNode.hotdogs) {\n        parentNode.hotdogs = true;\n        console.log(parentNode);\n        parent.push(parentNode);\n        console.log(\"parent: \", parent);\n      }\n    });\n    parent.forEach(node => {\n      node.hotdogs = false;\n    });\n    m = new DOMNodeCollection(parent);\n    console.log(\"m \", m);\n    return m;\n  }\n}\n// children is a method that should return a DOMNodeCollection of ALL children of all nodes in the array.\n// Each node in the array will natively have a children attribute.Look here for more information.\n// Make sure the return value of this method is an instance of DOMNodeCollection.\n\nmodule.exports = DOMNodeCollection;\n\n\n//# sourceURL=webpack:///./src/dom_node_collection.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const DOMNodeCollection = __webpack_require__(/*! ./dom_node_collection.js */ \"./src/dom_node_collection.js\");\n\nwindow.$1 = function(arg) {\n  let elementList;\n  let elementArray;\n  if (arg instanceof HTMLElement) {\n    elementArray = [arg];\n  } else if (arg instanceof HTMLCollection) {\n    elementArray = Array.from(arg);\n  } else if (typeof arg === \"string\") {\n    // arg = new String(arg);\n    elementList = document.querySelectorAll(arg);\n    console.log(elementList);\n    elementArray = Array.from(elementList);\n  }\n  //window.c = new DOMNodeCollection(elementArray);\n  //c.html(\"abc\");\n\n  return new DOMNodeCollection(elementArray);\n};\n\n//el = new HTMLElement\n\nc = document.getElementsByClassName(\"parentul\");\nconsole.log(c);\ncc = $1(c);\nconsole.log(cc);\n    m = cc.parent();\nconsole.log(m);\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });