// Code your solution here
const drivers = ["Bobby", "Sammy", "Sally", "Annette", "Sarah", "Bobby"];

function findMatching(names, string) {
   // To filter in an insensetive case the both params should be converted to lowercase
   // console.log(names)
   const result = names.filter(
      (driver) => driver.toLowerCase() === string.toLowerCase()
   );
   return result;
}

console.log(findMatching(drivers, "bobby"));
///////////////////////////////////////////////

function fuzzyMatch(names, string) {    // the trick here is to use .startWith() method to check if the provided string matches the begening of the array of elements 
   const result = names.filter(
      (driver) => driver.startsWith(string)
   );
   return result
}
console.log(fuzzyMatch(drivers, 'Annet'))