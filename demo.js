function demo() {
  this.name = "abc";
}

demo.prototype.fly = function (x) {
  this.name = x;
};

modules.exports = demo;