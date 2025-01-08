function showSuccessMessage(data) {
  document.getElementById("success").innerHTML += `<p>${data}</p>`;
}

function showErrorMessage(error) {
  document.getElementById("error").innerHTML += `<p>${error.message}</p>`;
}

function fetchUserData() {
  return new Promise((resolve, reject) => {
    // "Producing Code" (May take some time)
    setTimeout(() => {
      let success = Math.random() > 0.5; // 50% chance of success or failure

      if (success) {
        resolve("User data retrieved successfully!");
      } else {
        reject(new Error("Failed to fetch user data"));
      }
    }, 3000);
  });
}

// "Consuming Code" (Must wait for a fulfilled Promise)
fetchUserData()
  .then((data) => {
    showSuccessMessage(data);
    console.log(data);
  })
  .catch((error) => {
    showErrorMessage(error);
    console.log(error);
  })
  .finally(() => console.log("API call completed"));




//   console.log("Initial Promise State:", fUD);

//   setTimeout(() => {
//     console.log("Final Promise State:", fUD);
//   }, 5000);

// async function checkFinalPromise() {
//   try {
//     let finalResult = await fUD;
//     console.log("Final Promise Result (using async/await):", finalResult);
//   } catch (error) {
//     console.log("Final Promise Error (using async/await):", error);
//   }
// }

// setTimeout(() => checkFinalPromise(), 3000);
