function hello() {
  console.log("say hello!");
  var name = "abc";
  this.bravo = false;
  this.step = 0;
<<<<<<< HEAD
  this.music = '';
=======
>>>>>>> b55a38ef5d95f231624272111b112bc7b83bc0b1
}
hello.prototype.bravo = function () {
  this.bravo = true;
};

hello.prototype.run = function () {
  this.step += 1;
};
<<<<<<< HEAD
hello.prototype.sing = function (x) {
  this.music = x;
};
=======
>>>>>>> b55a38ef5d95f231624272111b112bc7b83bc0b1

modules.exports = hello; 