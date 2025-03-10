
setTimeout(() => {
  console.log("Welcome My website");
  
}, 5000);


const delayedGreeting = (name, delayTime) => {
  setTimeout(() => {
    console.log(`Hello, ${name}!`);
    
  }, delayTime);
}

delayedGreeting("Alice", 2000)