/*
There are two ways in which the callback may be called: synchronous and asynchronous. Synchronous callbacks 
are called immediately after the invocation of the outer function, with no intervening asynchronous 
tasks, while asynchronous callbacks are called at some point later, after an asynchronous operation has completed.
*/



// Sychronous callback

function processNumber(num, callback) {
    console.log("Processing number...");
    let result = callback(num); // Callback executes immediately
    console.log("Result:", result);
}

function square(n) {
    return n * n;
}

// Calling with a synchronous callback
processNumber(4, square);

// Asynchronous callback

function fetchData(callback) {
    console.log("Fetching data...");
    
    setTimeout(() => {
        let data = "Server response";
        console.log("Data received.");
        callback(data); // Callback executes after delay
    }, 2000);
}

function handleResponse(response) {
    console.log("Processing:", response);
}

// Calling with an asynchronous callback
fetchData(handleResponse);
