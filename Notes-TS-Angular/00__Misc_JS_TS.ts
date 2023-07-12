// point d'exclamation
console.info("console.info()");

// rouge
console.error("console.error()");

// jaune
console.warn("console.warn()");

// standard
console.log("console.log()");

console.debug("debug");
console.assert(false, "No element found with ID 'Test'");
console.count("compte=");
console.count("compte=");
console.count("compte=");
console.count("compte=");
console.trace("La trace est?");
console.time("MyTimer")
console.timeLog("MyTimer")
console.timeEnd("MyTimer")

console.log("This is the first level");
console.group("First group");
console.log("In the first group");
console.group("Second group");
console.log("In the second group under first group");
console.warn("Still in the second group");
console.groupEnd();
console.log("Back to the first group");
console.groupEnd();

var user0 = {
    name:"Ravidu",
    age:25,
    job:"writer",
}
console.table(user0);
var cities =["Washington","Delhi","London","Stockholm"];
console.table(cities);
var Destinations =[["USA", "Washington"],["India","Delhi"],["UK","London"],["Sweden","Stockholm"]];
console.table(Destinations);
var users = [
    {
        name: "Sam",
        age: 30
    },
    {
        name: "John",
        age: 45
    },
    {
        name: "Peter",
        age: 20
    }
 ];
 console.table(users);
 var roles = {
    writer: {
     firstname: "Ravindu",
     lastname: "Shehan", 
     email: "ravindu@gmail.com"
    }, 
    reviewer: {
     firstname: "Ravindu",
     lastname: "Shehan", 
     email: "ravindu@gmail.com"
    }
  }

  console.table(roles);

//   console.clear() // affiche : Console was cleared.