// ==========================
// Synchronous function
// ==========================

// This function simulates a long-running synchronous operation

function fetchUserData() {
  console.log("Fetching user data...");
  let startTime = Date.now();
  // blocks execution for 5 sec
  while (Date.now() - startTime < 5000) {} 
  console.log("User Data Loaded");
}

console.log("Start");
fetchUserData(); // Calls the synchronous function (Execution is blocked)
console.log("End");

/*
    Expected Output
    Start
    Fetching user data...
    // apears after 5 sec
    User Data Loaded
    End
*/

// ==========================
// Asynchronous function
// ==========================

// This function is truly asynchronous because it uses setTimeout()
// setTimeout() schedules the operation without blocking execution

async function fetchUserData() {
  console.log("Fetching user data...");
  // Non-blocking async delay using setTimeout wrapped in a Promise
  await new Promise((resolve) => setTimeout(resolve, 5000));
  // Executes after 5 seconds
  console.log("User Data Loaded"); 
}

console.log("Start");
fetchUserData(); // Runs asynchronously (does NOT block execution)
console.log("End");

/*
    Start
    Fetching user data...
    End
    //apears after 5 sec
    User Data Loaded
*/