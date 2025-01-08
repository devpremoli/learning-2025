const posts = [
  { title: "Post One", body: "This is post one" },
  { title: "Post Two", body: "This is post two" },
];

function getPosts() {
  let output = "";
  posts.forEach((post) => {
    output += `<li>${post.title}</li>`;
  });
  document.body.innerHTML = output;
}

function createPost(post) {
  posts.push(post);
}

setTimeout(getPosts, 5000);
setTimeout(() => createPost({ title: "Post Three", body: "This is post three" }), 3000);

