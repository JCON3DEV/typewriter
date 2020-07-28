const sentence = "hello there from lighthouse labs";



// const interval = setInterval(() => {
//   counter++; 
//   process.stdout.write(char);

// },500);
const typewriter = function(str, delay = 50) {
  str += "\n";
  let counter = 0;
  for (let char of str) {
    // if (str[char]) {
    // }
    setTimeout(() => {
      process.stdout.write(char);
    }, counter += delay) // <= 1s delay to make it noticeable. Can dial it down later.
    
  }
};

typewriter(sentence, 30);
