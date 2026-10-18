function daysBetweenDates(date1, date2) {
  let firstDate = new Date(date1);
  let secondDate = new Date(date2);

  let difference = Math.abs(secondDate - firstDate);

  let days = difference / (1000 * 60 * 60 * 24);

  return days;
}


// let test = daysBetweenDates("2020-01-15", "2020-01-20");
// let test = daysBetweenDates("2024-06-10", "2024-06-10");

let test = daysBetweenDates("2020-01-20", "2020-01-15");

console.log(test);