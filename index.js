var capitaliseDescriptor = {
  value : function () {
    return this.charAt(0).toUpperCase() + this.slice(1)
  },
  writable : true,
  configurable : true,
  enumerable : false
}

Object.defineProperty(String.prototype, "capitalise", capitaliseDescriptor)
Object.defineProperty(String.prototype, "capitalize", capitaliseDescriptor)
