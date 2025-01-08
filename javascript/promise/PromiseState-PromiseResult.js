let myPromise = new Promise((resolve, reject) => {
  let x = Math.random() > 0.5;
  let t = 3000;
  if (x) {
    setTimeout(() => resolve("done"), t);
  } else {
    setTimeout(() => reject(new Error("Error happened")), t);
  }
});

/*
toggle Promise object before 3 sec to see:
[[PromiseState]]: "pending"
[[PromiseResult]]: undefined

DevTools updates objects dynamically in the console. When you inspect an object like a Promise, DevTools 
shows its latest state.
*/
console.log(myPromise); // pending state

fulfilledRejected = myPromise
  .then((v) => {
    console.log(v);
    document.getElementById("a").innerHTML = v;
    console.log(myPromise); // fulfilled state
  })
  .catch((e) => {
    console.log(e);
    document.getElementById("a").innerHTML = e;
    console.log(myPromise); // rejected state
  })
  .finally(
    console.log("Promise Completed")
    // () => console.log("Promise Completed")
  );
