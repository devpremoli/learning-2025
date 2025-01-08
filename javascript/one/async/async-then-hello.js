async function hello() {
    return "Hello, World!";
}

async function hello() {
  let success = Math.random() > 0.5;

  if (success) {
    return Promise.resolve("Hello, World!");
  } else {
    return Promise.reject(new Error("Error happened"));
  }
}

async function hello() {
  let success = Math.random() > 0.5;

  return new Promise((resolve, reject) => {
    if (success) {
      return resolve("Hello, World!");
    } else {
      return reject(new Error("Error happened"));
    }
  });
}

let helloPromise = hello();
document.getElementById("a").innerHTML = helloPromise;
console.log(helloPromise);

helloPromise
  .then((v) => {
    document.getElementById("b").innerHTML = v;
    console.log(v);
  })
  .catch((e) => {
    document.getElementById("b").innerHTML = e;
    console.error(e);
    //console.log(e);
  });


// async function hello() {
//   let success = Math.random() > 0.5;

//   let promise = new Promise((resolve, reject) => {
//     if (success) {
//         return resolve("Hello, World!");
//       } else {
//         return reject(new Error("Error happened"));
//       }
//   });

//   try {
//     let result = await promise;
//     console.log(result);
//   } catch (error) {
//     console.error(error);
//   }
// }

// hello();
