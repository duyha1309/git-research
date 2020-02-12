function hello() {
  console.log("say hello!");
  var name = "abc";
  this.bravo = false;
}
hello.prototype.bravo = function () {
  this.bravo = true;
};

modules.exports = hello; 