// function greet() {
//     console.log('Hello world');
// }

// function sayName(name) {
//     console.log('Hello' + ' ' + name);
// }

// setTimeout(greet, 2000);
// sayName('John');

/* 
Output:
Hello John
Hello world
*/

function greet(name, callback) {
  console.log("Hello world");
  callback(name);
}

function sayName(name) {
  console.log("Hello" + " " + name);
}

setTimeout(() => {
  greet("john", sayName);
}, 2000);

/*
Output:
Hello world
Hello john
*/