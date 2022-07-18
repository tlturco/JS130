function startCounting() {
  let count = 0;
  let counterId = setInterval(() => {
    count += 1;
    console.log(count);
  }, 1000
  );

  return counterId;
}


function stopCounting(counterId) {
  clearInterval(counterId);
}


let counterId = startCounting();
stopCounting(counterId);


