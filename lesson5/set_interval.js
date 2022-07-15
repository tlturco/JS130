function startCounting() {
  let count = 0;
  setInterval(() => {
    count += 1;
    console.log(count);
  }, 1000
  );
}

startCounting();