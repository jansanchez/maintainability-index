
function foo(x) {
  var tmp = 3;

  return function (y) {
      console.log(x + y + tmp);
      x.memb = x.memb ? x.memb + 1 : 1;
      alert(x.memb);
    };
}

var age = 2;
var bar = foo(age);
bar(10);

