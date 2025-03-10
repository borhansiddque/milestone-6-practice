// Catch
// const handleUser = () => {
//   fetch("https://jsonplaceholder.typicode.com/posts")
//   .then(res => res.json())
//   .then(data => console.log(data))
//   .catch(error => console.log("error dhorchi", error))
  
// }
// handleUser();



//============== Async ==============

// const num1 = 10;
// const num2 = 20;
// const result = num1 + num2;


// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then(res => res.json())
//   .then(data => console.log(data))

// console.log(result);
// console.log("Hello");

const handleUser2 = async() => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    console.log(data);
  }
  catch {
    console.log("Errorrrrrrrrrr");
    
  }
  
}
handleUser2()
