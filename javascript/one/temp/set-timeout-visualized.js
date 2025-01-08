const posts = [
  { title: "Post One", body: "This is post one" },
  { title: "Post Two", body: "This is post two" },
];

function getPosts() {
    let output = "";
    posts.forEach((post, index) => {
        output += `<li>${post.title}</li>`
    })
    document.body.innerHTML = output;
}

function createPost(post) {
    posts.push(post);
}

function getPosts() {
    document.body.innerHTML += `<p>getPost called</p>`;
  setTimeout(() => {
    document.body.innerHTML += `<p>getPost timout started</p>`;
    let output = "";
    posts.forEach((post) => {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML += output;
  }, 5000);
}

function createPost(post) {
    document.body.innerHTML += `<p>createPost called</p>`;
    setTimeout(() => {
        document.body.innerHTML += `<p>createPost timout started</p>`;
        posts.push(post);
    }, 3000)
}

getPosts();
createPost({ title: "Post Three", body: "This is post three" });



// const MAX_PRIME = 1000000;

// function isPrime(n) {
//   for (let i = 2; i <= Math.sqrt(n); i++) {
//     if (n % i === 0) {
//       return false;
//     }
//   }
//   return n > 1;
// }

// const random = (max) => Math.floor(Math.random() * max);

// function generatePrimes(quota) {
//   const primes = [];
//   while (primes.length < quota) {
//     const candidate = random(MAX_PRIME);
//     if (isPrime(candidate)) {
//       primes.push(candidate);
//     }
//   }
//   return primes;
// }

// const quota = document.querySelector("#quota");
// const output = document.querySelector("#output");

// document.querySelector("#generate").addEventListener("click", () => {
//   const primes = generatePrimes(quota.value);
//   output.textContent = `Finished generating ${quota.value} primes!`;
// });

// document.querySelector("#reload").addEventListener("click", () => {
//   document.location.reload();
// });
