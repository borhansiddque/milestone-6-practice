let count = 0;
const clockID = setInterval(() => {
  count++
  console.log(count);
  if (count === 10) {
    clearInterval(clockID);
  }
}, 2000)