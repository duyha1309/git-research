function hello() {
  console.log("say hello!");
  var name = "abc";
  this.bravo = false;
  this.step = 0;
  this.music = '';
}
hello.prototype.bravo = function () {
  this.bravo = true;
};

hello.prototype.run = function () {
  this.step += 1;
};
hello.prototype.sing = function (x) {
  this.music = x;
};

modules.exports = hello; 