const subtractDate = (date, num) => {
  const day = 24 * 60 * 60 * 1000;
  return new Date(
    new Date().setTime(date.getTime() - day * num)
  ).toLocaleDateString();
};

console.log(subtractDate(new Date(2000, 04, 10), 2));
