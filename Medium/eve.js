function timeForMilkAndCookies(date) {
  if (date.getDate() == 24 && date.getMonth() == 11) {
    return true;
  } else {
    return false;
  }
  //   console.log(date.getDate());
}
console.log(timeForMilkAndCookies(new Date(2013, 11, 24)));
