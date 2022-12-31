// Code your solution here
const driversNames = ["Bobby", "Sammy", "Sally", "Annette", "Sarah", "Bobby"];

const drivers = [
  {
    name: "Bobby",
    hometown: "Pittsburgh",
  },
  {
    name: "Sammy",
    hometown: "New York",
  },
  {
    name: "Sally",
    hometown: "Cleveland",
  },
  {
    name: "Annette",
    hometown: "Los Angeles",
  },
  {
    name: "Bobby",
    hometown: "Tampa Bay",
  },
];

function findMatching(names, string) {
  // To filter in an insensetive case the both params should be converted to lowercase
  // console.log(names)
  const result = names.filter(
    (driver) => driver.toLowerCase() === string.toLowerCase()
  );
  return result;
}

console.log(findMatching(driversNames, "bobby"));
///////////////////////////////////////////////

function fuzzyMatch(names, string) {
  // the trick here is to use .startWith() method to check if the provided string matches the begening of the array of elements
  const result = names.filter((driver) => driver.startsWith(string));
  return result;
}
console.log(fuzzyMatch(driversNames, "B"));
//////////////////

// This function uses the filter method to create a new array containing only the elements from the drivers array that satisfy the provided condition. In this case, the condition is that the name property of the driver object must equal the name argument.
function matchName(drivers, string) {
  const result = drivers.filter((driver) => driver.name === string);
  return result;
}

console.log(matchName(drivers, "Sammy"));
