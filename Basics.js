var a = 4;
var b = "ajfab";
var c = 4;
var list = [1, 2, 3, 4];
var dynamic;
dynamic = 1;
dynamic = "aja";
var _loop_1 = function (i) {
    setTimeout(function () { console.log(i); }, 100 * i);
};
for (var i = 0; i < 5; i++) {
    _loop_1(i);
    console.log(i);
}
