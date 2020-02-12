function demo() {
  this.name = "abc";
  this.hasBeautyful = false;
}

demo.prototype.fly = function (x) {
  this.name = x;
};

demo.prototype.hasBeautiful = function () {
  this.hasBeautiful = true;
};

modules.exports = demo;