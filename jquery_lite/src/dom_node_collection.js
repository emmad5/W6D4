class DomNodeCollection {
  constructor(HTMLElements) {
    this.HTMLElements = HTMLElements;
  }
  
  html(string) {
    if (string === null) {
      return this.HTMLElements[0].innerHTML;
    } else {
      this.HTMLElements.forEach( (el) => {
        el.innerHTML = string;
      });
    }
  }
  
  
  empty() {
    this.html('');
  }
  
  append(element) {
    if (element instanceof DomNodeCollection){
      this.HTMLElements.forEach( (el) => {
        element.HTMLElements.forEach ( (elmt) => {
          el.appendChild(elmt);
        });
      });
    } else if (typeof element === 'object') {
      this.HTMLElements.forEach( (el) => {
        el.appendChild(element);
      });
    } else {
      this.HTMLElements.forEach( (el) => {
        el.innerHTML += element;
      });
    }
  }
  
  attr (attribute) {
    this.HTMLElements.forEach( (el) => {
      el.outerHTML += attribute;
    });
  }
  
  addClass(string) {
    this.HTMLElements.forEach( (el) => {
      el.class += string;
    });
  }
  
  removeClass(string) {
    this.HTMLElements.forEach( (el) => {
      if (string === null) {
        el.class = '';
      } else {
        el.class -= string;
      }
    });
  }
}












module.exports = DomNodeCollection;