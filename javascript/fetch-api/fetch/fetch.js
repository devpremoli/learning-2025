const baseUrl = "http://localhost:8080/person";

async function getAllPersons() {
  try {
    let response = await fetch(baseUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    let responseJson = await response.json();
    console.log(responseJson);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
getAllPersons();

// async function createPerson(person) {
//     try {
//         let response = await fetch(baseUrl, {
//             method: "POST", // HTTP Method
//             headers: {
//                 "Content-Type": "application/json", // JSON Content Type
//             },
//             body: JSON.stringify(person), // Convert JS object to JSON
//         });

//         if (!response.ok) {
//             throw new Error(`HTTP error! Status: ${response.status}`);
//         }

//         let responseJson = await response.json();
//         console.log("Person Created:", responseJson);
//     } catch (error) {
//         console.error("Error creating person:", error);
//     }
// }

// const newPerson = {
//     firstName: "John",
//     lastName: "Doe",
//     email: "johndoe@gmail.com",
//     phoneNumber: "222-222-2222",
//     address: 'New York, NY'
// };
// createPerson(newPerson);