
const sentence = "hello there";
let time = 0;

for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
}, time);
time = time + 100
/*
  setTimeout(() => {
    process.stdout.write('h');
}, 0);
setTimeout(() => {
  process.stdout.write('e');
}, 10);
setTimeout(() => {
  process.stdout.write('l');
}, 20);
setTimeout(() => {
  process.stdout.write('l');
}, 30);
setTimeout(() => {
  process.stdout.write('o');
}, 40);
setTimeout(() => {
  process.stdout.write(' ');
}, 50);
setTimeout(() => {
  process.stdout.write('t');
}, 60);
setTimeout(() => {
  process.stdout.write('h');
}, 70);
setTimeout(() => {
  process.stdout.write('e');
}, 80);
setTimeout(() => {
  process.stdout.write('r');
}, 90);
setTimeout(() => {
  process.stdout.write('e');
}, 100);
*/

};

setTimeout(() => {
  console.log();
}, time);


