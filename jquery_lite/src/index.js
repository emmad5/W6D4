import DomNodeCollection from "./dom_node_collection.js";

window.$l = (selector) => {
  if (typeof selector === HTMLElement) {
    const array = Array.from(document.querySelectorAll(selector));
    return new DomNodeCollection(array);
  }
  //So: our core function can receive either a single HTMLElement
  // or a string with a CSS selector 
  // and in either case the return value will be a DOMNodeCollection.
};

