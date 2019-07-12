const DOMNodeCollection = require("./dom_node_collection.js");

window.$1 = function(arg) {
  let elementList;
  let elementArray;
  if (arg instanceof HTMLElement) {
    elementArray = [arg];
  } else if (arg instanceof HTMLCollection) {
    elementArray = Array.from(arg);
  } else if (typeof arg === "string") {
    // arg = new String(arg);
    elementList = document.querySelectorAll(arg);
    console.log(elementList);
    elementArray = Array.from(elementList);
  }
  //window.c = new DOMNodeCollection(elementArray);
  //c.html("abc");

  return new DOMNodeCollection(elementArray);
};

//el = new HTMLElement

c = document.getElementsByClassName("parentul");
console.log(c);
cc = $1(c);
console.log(cc);
    m = cc.parent();
console.log(m);
