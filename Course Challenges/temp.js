function printForecast(arr) {
  for (let i = 0; i < arr.length; i++) {
    const currentValue = i + 1;
    console.log(`${arr[i]}ºC in ${currentValue} days`);
  }
}

printForecast([21, -2, 45])
