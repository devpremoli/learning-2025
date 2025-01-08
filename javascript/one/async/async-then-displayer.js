function oneDisplayer(some) {
  document.getElementById("success").innerHTML += some;
}

function twoDisplayer(some) {
  document.getElementById("error").innerHTML += some;
}

async function displayerPromise() {
    return new Promise((resolve, reject) => {
        let x = Math.random() > 0.5;

        setTimeout(() => {
            if (x) {
                resolve("Promise Resolved");
            } else {
                reject("Promise Rejected!");
            }
        }, 3000);
    });
}

displayerPromise()
  .then((v) => {
    oneDisplayer(v);
    console.log(v);
  })
  .catch((e) => {
    twoDisplayer(e);
    console.log(e);
  })
  .finally(() => console.log("Promise completed"));
