function demo() {
  this.name = "abc";
  this.hasBeautyful = false;
  this.swim = false;
  this.reverse = false;
}

demo.prototype.fly = function (x) {
  this.name = x;
};

demo.prototype.hasBeautiful = function () {
  this.hasBeautiful = true;
};
demo.prototype.swimming = function () {
  this.swim = true;
};

demo.prototype.reverse = function () {
  this.reverse = true;
};
modules.exports = demo;