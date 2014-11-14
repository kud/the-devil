String.prototype.capitalise = function() {
  return this.charAt(0).toUpperCase() + this.slice(1)
}

String.prototype.capitalize = String.prototype.capitalise
