function a() {
  b();
  console.log("A");
}
function b() {
  c();
  console.log("B");
}

console.log("Hello World!");


setTimeout(() => {
  console.log("ami setTimeout");
  
}, 2000);

setTimeout(() => {
  console.log("ami setTimeout2");
  
}, 2000);

function c() {
  d();
  console.log("C");
}
function d() {
  e();
  console.log("D");
}
function e() {
  console.log("E");
}

a();
