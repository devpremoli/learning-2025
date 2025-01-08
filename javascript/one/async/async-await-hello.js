async function hello() {
  let success = Math.random() > 0.5;

  let promise = new Promise((resolve, reject) => {
    if (success) {
        return resolve("Hello, World!");
      } else {
        return reject(new Error("Error happened"));
      }
  });

  try {
    let result = await promise;
    document.getElementById("a").innerHTML = result;
    console.log(result);
  } catch (error) {
    document.getElementById("a").innerHTML = error;
    console.error(error);
  }
}
hello();

// async function hello() {
//   let success = Math.random() > 0.5;

//   return new Promise((resolve, reject) => {
//     if (success) {
//       return resolve("Hello, World!");
//     } else {
//       return reject(new Error("Error happened"));
//     }
//   });
// }
// async function displayHello() {
//   try {
//     let result = await hello();
//     document.getElementById("a").innerHTML = result;
//     console.log(result);
//   } catch (error) {
//     document.getElementById("a").innerHTML = error;
//     console.error(error);
//   }
// }
// displayHello();
