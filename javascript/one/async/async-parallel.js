// async function fetchData(id) {
//   let response = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${id}`
//   );

//   if (!response.ok) {
//     throw new Error(`HTTP Error! Status: ${response.status}`);
//   }
//   return await response.json();
// }

async function fetchData(id) {
  try {
    let response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );

    if (!response.ok) {
      throw new Error(`HTTP Error! Status: ${response.status}`);
    }

    return await response.json(); // Returns JSON data if successful
  } catch (error) {
    return { error: `Failed to fetch post ${id}: ${error.message}` }; // Handles error inside function
  }
}

// async function fetchSequentially() {
//   let post1 = await fetchData(1);
//   let post2 = await fetchData(2);
//   let post3 = await fetchData(3);
//   let post4 = await fetchData(4);
//   let post5 = await fetchData(5);
//   let post6 = await fetchData(6);
//   let post7 = await fetchData(7);
//   let post8 = await fetchData(8);
//   let post9 = await fetchData(9);
//   let post10 = await fetchData(10);

//   document.getElementById("result").innerHTML = `
//             <strong>Post 1:</strong> ${JSON.stringify(post1, null, 2)}<br><br>
//             <strong>Post 2:</strong> ${JSON.stringify(post2, null, 2)}<br><br>
//             <strong>Post 3:</strong> ${JSON.stringify(post3, null, 2)}<br><br>
//             <strong>Post 1:</strong> ${JSON.stringify(post4, null, 2)}<br><br>
//             <strong>Post 2:</strong> ${JSON.stringify(post5, null, 2)}<br><br>
//             <strong>Post 1:</strong> ${JSON.stringify(post6, null, 2)}<br><br>
//             <strong>Post 2:</strong> ${JSON.stringify(post7, null, 2)}<br><br>
//             <strong>Post 3:</strong> ${JSON.stringify(post8, null, 2)}<br><br>
//             <strong>Post 1:</strong> ${JSON.stringify(post9, null, 2)}<br><br>
//             <strong>Post 2:</strong> ${JSON.stringify(post10, null, 2)}
//         `;

//   console.log(post1, post2, post3, post4, post5, post6, post7, post8, post9, post10);
// }
// fetchSequentially();

async function fetchParallel() {
  try {
    let [
      post1,
      post2,
      post3,
      post4,
      post5,
      post9999,
      post6,
      post7,
      post8,
      post9,
      post10,
    ] = await Promise.all([
      fetchData(1),
      fetchData(2),
      fetchData(3),
      fetchData(4),
      fetchData(5),
      fetchData(9999),
      fetchData(6),
      fetchData(7),
      fetchData(8),
      fetchData(9),
      fetchData(10),
    ]);

    document.getElementById("result").innerHTML = `
            <strong>Post 1:</strong> ${JSON.stringify(post1, null, 2)}<br><br>
            <strong>Post 2:</strong> ${JSON.stringify(post2, null, 2)}<br><br>
            <strong>Post 3:</strong> ${JSON.stringify(post3, null, 2)}<br><br>
            <strong>Post 4:</strong> ${JSON.stringify(post4, null, 2)}<br><br>
            <strong>Post 5:</strong> ${JSON.stringify(post5, null, 2)}<br><br>
            <strong>Post 9999: </strong> ${JSON.stringify(
              post9999,
              null,
              2
            )}<br><br>
            <strong>Post 6:</strong> ${JSON.stringify(post6, null, 2)}<br><br>
            <strong>Post 7:</strong> ${JSON.stringify(post7, null, 2)}<br><br>
            <strong>Post 8:</strong> ${JSON.stringify(post8, null, 2)}<br><br>
            <strong>Post 9:</strong> ${JSON.stringify(post9, null, 2)}<br><br>
            <strong>Post 10:</strong> ${JSON.stringify(
              post10,
              null,
              2
            )}                    
        `;

    console.log(
      post1,
      post2,
      post3,
      post4,
      post5,
      post9999,
      post6,
      post7,
      post8,
      post9,
      post10
    );
  } catch (error) {
    console.error("Error fetching multiple posts:", error);
  }
}
fetchParallel();

// async function fetchParallelAllSettled() {
//     try {
//         // Fetch multiple posts, even if some fail
//         let results = await Promise.allSettled([
//             fetchData(1),
//             fetchData(2),
//             fetchData(3),
//             fetchData(4),
//             fetchData(5),
//             fetchData(9999), // This will likely fail
//             fetchData(6),
//             fetchData(7),
//             fetchData(8),
//             fetchData(9),
//             fetchData(10)
//         ]);

//         // Process results
//         let formattedResults = results.map((result, index) => {
//             if (result.status === "fulfilled") {
//                 return `<strong>Post ${index + 1}:</strong> ${JSON.stringify(result.value, null, 2)}<br><br>`;
//             } else {
//                 return `<strong>Post ${index + 1} (Failed):</strong> ${result.reason}<br><br>`;
//             }
//         }).join(""); // Convert array to string for HTML

//         // Display results in the HTML page
//         document.getElementById("result").innerHTML = formattedResults;

//         console.log("Fetch Results:", results);
//     } catch (error) {
//         console.error("Error fetching posts:", error);
//     }
// }
// fetchParallelAllSettled();
