// ## 1️⃣ Variables & Data Types

// 1. Create variables of **different types**: string, number, boolean, undefined, null.

let string = "string";
let number = 2;
let boolean = true;
let undefined1 = undefined;
let null1 = null;
console.log(string, number, boolean, undefined1, null1);

// 2. Swap the values of two variables without using a third variable.

let firstName = "osama";
let lastName = "hasan";

// Combine the texts directly in firstName
firstName += lastName;

// Update lastName to extract the original first name from the combined text
lastName = firstName.slice(0, firstName.length - lastName.length);

// Update firstName to extract the original last name from the combined text
firstName = firstName.slice(lastName.length);

// Test the result
console.log("firstName =", firstName); // "hasan"
console.log("lastName =", lastName); // "osama"

// 3. Calculate the area of a rectangle using variables.
let length = 50;
let width = 50;
let area = length * width;
console.log(area);
// 4. Create a program that asks the user for their **name** and **age**, then prints:
//    `"Hello <name>, you are <age> years old."`

// my code:
// let username = prompt("whats your name?")
// let age = prompt("How old are you?")
//console.log(`Hello ${username}, you are ${age} years old`)

// ---

// ## 2️⃣ Operators & Expressions

// 1. Write an expression to check if a number is **even**.

// 2. Given two numbers, find **the larger one**.

// 3. Calculate the **average of 5 numbers** stored in variables.

// 4. Use `+=`, `-=`, `*=`, `/=` operators to modify a variable step by step and log the result each time.

// ---

// ## 3️⃣ Strings

// 1. Count the number of characters in a string.
let str = "How many characters";
console.log(str.length);
// 2. Extract a substring from a string.
console.log(str.slice(2, 8));
// 3. Convert a string to **uppercase** and **lowercase**.
let str2 = "how are you?";
console.log(str2.toUpperCase());
// 4. Replace all spaces in a string with dashes.
console.log(str.replaceAll(" ", "#"));
// 5. Check if a string **contains** a certain word.
console.log(str.includes("?"));
// ---

// ## 4️⃣ Arrays

// 1. Create an array of your **favorite foods**.
let favoriteFoods = ["fish", "rise"];
// 2. Add an item at the **beginning** and **end** of the array.
favoriteFoods.push("salad");
favoriteFoods.unshift("shrimp");
console.log(favoriteFoods);
// 3. Remove the first and last items.
favoriteFoods.shift();
favoriteFoods.pop();
console.log(favoriteFoods);
// 4. Find the **index of a specific item**.
console.log(favoriteFoods.indexOf("rise"));
//or
console.log(favoriteFoods.includes("rise"));
// 5. Loop through the array and print each element.
favoriteFoods.forEach((food) => console.log(food));
// 6. Create a new array containing the **length of each string** in the original array.
let newArray = favoriteFoods.map((food) => food.length);
console.log(newArray);

// ---

// ## 5️⃣ Loops

// 1. Print numbers from 1 to 50 using a loop.
// 2. Print **only even numbers** from 1 to 50.
// 3. Calculate the sum of all numbers in an array.
// 4. Loop through a 2D array (matrix) and print all elements.
// 5. Loop through an array of objects and print a property from each.

// ---

// ## 6️⃣ Conditionals

// 1. Ask the user for their age and check if they can **vote**.

// let age = prompt("How old are you?")
// if (age >= 18) {
//   alert("You can vote")
// } else {
//   alert("You cannot vote")
// }

// 2. Write a program that converts a **grade (0–100)** into a **letter grade** (A, B, C, D, F). //solved in:
//Exercise 10
// https://github.com/mahoozi97/intro-to-javascript-functions-lab/blob/main/app.js

// 3. Check if a number is **positive, negative, or zero**.

let num = 2;
if (num > 0) {
  console.log("the number is positive");
} else if (num < 0) {
  console.log("the number is negative");
} else {
  console.log("the number is zero");
}
// 4. Ask the user for a day of the week and print if it’s a **weekday or weekend**.

// let day = prompt("What is today?")
// if (day === "friday" || day === "saturday") {
//   alert("weekend")
// } else {
//   alert("weekday")
// }

// ---

// ## 7️⃣ Functions

// 1. Write a function that **adds two numbers**.
// 2. Write a function that **checks if a number is prime**.
// 3. Write a function that returns the **factorial** of a number.
// 4. Write a function that **reverses a string**.
// 5. Write a function that takes an array and returns the **largest number**.

// ---

// ## 8️⃣ Objects

// 1. Create an object representing a **person** with `name`, `age`, `city`.
let person = {
  name: "Hasan",
  age: 19,
  city: "manama",
};
console.log(person);
// 2. Add a method that prints a **greeting** using the person’s name.

person = {
  name: "ahmed",
  age: 22,
  hi() {
    console.log(`Hi, ${this.name}`);
  },
};

person.hi();

// 3. Loop through all the properties of an object and print them.

// 4. Update a property and delete a property from the object.
person.name = "Qassim"; //
delete person.age;
console.log(person);
// 5. Create an array of objects (people) and filter **all people older than 20**.

// ---

// ## 9️⃣ Classes

// 1. Create a `Car` class with `brand` and `model`, and a method to display them.
// 2. Add a **static array** to store all created cars.
// 3. Add a method to remove a car from the static array.
// 4. Create a `Book` class (like we did) and experiment with **static methods**.
// 5. Add inheritance: Create a `SportsCar` class extending `Car` and add a new property.

// ---

// ## 🔟 DOM Manipulation (if using a browser)

// 1. Select an element by ID, class, and tag name.
document.getElementById("h-js");

// 2. Change the **text content** of an element.
document.querySelector(".div-js").innerHTML = "Edited by DOM";

// 3. Add a new **element** to the DOM.

// my solution...
document.querySelector(".add-element").innerHTML = "<button>Button</button>";

// perfect solution..
let parent = document.querySelector(".create-element");
let btn = document.createElement("button");
btn.innerHTML = "Toggle Background";
parent.appendChild(btn);

// 4. Remove an element from the DOM.

// my solution...
document.querySelector(".remove-element").innerHTML = "";

// perfect solution..
let el = document.querySelector(".remove-element2");
el.remove(); // removes the element itself

// 5. Create a small **interactive button** that changes the page background when clicked.
document.querySelectorAll(".create-element").forEach((button) => {
  button.addEventListener("click", () => {
    if (document.body.style.background === "white") {
      document.body.style.background = "red";
    } else {
      document.body.style.background = "white"
    }

    // short way!!
    // document.body.style.background =
    // document.body.style.background === "red" ? "white" : "red";
  });
});

// ---

// ## 1️⃣1️⃣ Advanced Topics

// 1. Use **template literals** to construct a sentence with variables.
// 2. Use **destructuring** with arrays and objects.
// 3. Use **spread/rest operators** to merge arrays or objects.
// 4. Practice **arrow functions** and compare them to regular functions.
// 5. Practice **callbacks**: create a function that takes another function as an argument.
// 6. Practice **promises**: create a promise that resolves after 2 seconds and prints a message.
// 7. Async/await: write a function that waits for a promise to resolve before continuing.

// ---

// ## 1️⃣2️⃣ Miscellaneous / Mini Projects

// 1. **Calculator**: Ask the user for two numbers and an operation (`+`, `-`, `*`, `/`) and display the result.
// 2. **To-do list (console version)**: Create an array of tasks, allow adding, removing, and listing tasks.
// 3. **Guess the number**: Computer randomly picks a number 1–20, user guesses it, give hints (`too high`/`too low`).
// 4. **Palindrome checker**: Ask the user for a word and check if it’s a palindrome.
// 5. **Fibonacci series**: Generate first N numbers of Fibonacci.

// ---
