

const sentence = "|/-\\|/-\\|";

let count = 0;
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write('\r    ' + char);
  }, count);
  count += 400;
};

setTimeout(() => {  
  process.stdout.write("\n");
}, count += 400);