const tellJoke = () => {
  console.log("Why don't scientists trust atoms? Because they make up everything!");
}

const result = setInterval(() => {
  tellJoke();
}, 2000);

setTimeout(() => {
  clearInterval(result)
}, 10000);