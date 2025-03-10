const loadData = async() => {
  try {
    console.log("ami Prothom");
    console.log("ami Second");
  
    
    // setTimeout(() => {
    //   console.log("ami setTimeout");
    // }, 2000);
  
    // fetch("https://jsonplaceholder.typicode.com/users")
    // .then(res => res.json())
    // .then(data => console.log(data))
  
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data);
  
  
    const result = 10 + 10;
    console.log(result);
  
    console.log("ami Third");
  }
  catch {
    console.log("Error");
    
  }
};
loadData();
