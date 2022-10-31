"strict mode";
console.log("Hello World");
var user = {
  //creating the object property
  first_name: "John",
  last_name: "Smith",
  age: "38",
  department: "Software",
};
console.log(user); // printing the object's properties

delete user.last_name; // deleting the second property
console.log(user);

var size = Object.keys(user).length; // showing the length of the object
console.log(size);
