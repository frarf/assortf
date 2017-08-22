choc = {
  internal = {
    graphics = {}
  },
  graphics = {}
};

var internal = choc.internal;

window.onload = function() {
  var g = internal.graphics;
  var c;
  c = g.canvas = document.querySelector("canvas");
  g.ctx = c.getContext("2d");
}

choc.graphics.rectangle = function(x, y, width, height) {
  choc.internal.graphics.ctx.fillRect(x, y, width, height);
}

choc.graphics.setColor = function(r, g, b, a) {
  var a = a || 255;
  choc.internal.graphics.ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${a})`;
}
