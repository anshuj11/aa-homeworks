class DOMNodeCollection {
  constructor(HTMLelements) {
    this.HTMLelements = HTMLelements;
  }

  //If it receives an argument, this will become the innerHTML(hint hint) of the each of the nodes.If it does not receive an argument, it should return the innerHTML of the first node in the array.

  html(string) {
    if (string) {
      this.HTMLelements.forEach(element => {
        element.html = string;
      });
    } else {
      this.HTMLelements[0].html;
    }
  }

  empty() {
    this.HTMLelements.forEach(element => {
      element.html = "";
    });
  }

  // Take a look here.This method should accept either a jQuery-lite wrapped collection, an HTML element, or a string.Append the outerHTML of each element in the argument to the innerHTML of each element in the DOMNodeCollection.Don't worry about converting strings into HTML elements; just pass them straight through to the elements' innerHTML.
  // ul.append(li)

  //   append(arg) {
  //     this.HTMLelements.forEach(element => {
  //       // arg.forEach(a => {
  //       element.innerHTML += arg;
  //       // });
  //     });
  //   }

  each(cb) {
    // Our each passes in the node and index in traditional 'forEach' order,
    // jquery passes in index first and binds the call to the element.
    this.HTMLelements.forEach(cb);
  }

  append(children) {
    if (this.HTMLelements.length === 0) return;

    if (
      typeof children === "object" &&
      !(children instanceof DOMNodeCollection)
    ) {
      // ensure argument is coerced into DomNodeCollection
      children = $1(children);
    }

    if (typeof children === "string") {
      this.each(node => {
        node.innerHTML += children;
      });
    } else if (children instanceof DOMNodeCollection) {
      // You can't append the same child node to multiple parents,
      // so we must duplicate the child nodes here.
      this.each(node => {
        // The argument to cloneNode indicates whether or not
        // all children should be cloned.
        children.each(childNode => {
          node.appendChild(childNode.cloneNode(true));
        });
      });
    }
  }

  attr(key, val) {
    if (typeof val === "string") {
      element => element.setAttribute(key, val);
    } else {
      return this.HTMLlements[0].getAttribute(key);
    }
  }

  //   children() {
  //     let arr = [];
  //     this.each(node => {
  //       arr = arr.concat(Array.from(node.children));
  //     });

  //     return new DOMNodeCollection(arr);
  //   }
  children() {
    let childNodes = [];
    this.each(node => {
      const childNodeList = node.children;
      childNodes = childNodes.concat(Array.from(childNodeList));
    });
    return new DOMNodeCollection(childNodes);
  }

  parent() {
    let parent = [];
    let m;
    this.each(({ parentNode }) => {
      if (!parentNode.hotdogs) {
        parentNode.hotdogs = true;
        console.log(parentNode);
        parent.push(parentNode);
        console.log("parent: ", parent);
      }
    });
    parent.forEach(node => {
      node.hotdogs = false;
    });
    m = new DOMNodeCollection(parent);
    console.log("m ", m);
    return m;
  }
}
// children is a method that should return a DOMNodeCollection of ALL children of all nodes in the array.
// Each node in the array will natively have a children attribute.Look here for more information.
// Make sure the return value of this method is an instance of DOMNodeCollection.

module.exports = DOMNodeCollection;
