/*
The consumer of a callback-based API writes a function that is passed into the API. The provider of the API 
(called the caller) takes the function and calls back (or executes) the function at some point inside the 
caller's body. The caller is responsible for passing the right parameters into the callback function. The 
caller may also expect a particular return value from the callback function, which is used to instruct 
further behavior of the caller.
*/

// function fetchData(callback) {
//     console.log("Fetching data...");

//     setTimeout(() => {
//         let data = "Server response";
//         console.log("Data received.");
        
//         // Caller invokes the callback with data
//         callback(data);
//     }, 2000);
// }

// // Consumer defines a callback function
// function processResponse(response) {
//     console.log("Processing:", response);
// }

// // Passing the callback function to the API (caller)
// fetchData(processResponse);



function executeTask(task, callback) {
    console.log(`Starting task: ${task}`);

    setTimeout(() => {
        let status = callback(task); // Caller expects a return value from callback
        console.log(`Task "${task}" completed with status: ${status}`);
    }, 2000);
}

// Consumer defines a callback function that returns a value
function taskHandler(taskName) {
    console.log(`Handling task: ${taskName}`);
    return "Success"; // The return value is used by executeTask()
}

// Passing callback to API
executeTask("Download File", taskHandler);

