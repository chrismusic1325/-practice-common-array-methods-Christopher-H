// Task 1: Create the Order System
let drinks = ["Latte", "Tea", "Espresso"];
let pastries = ["Croissant", "Muffin", "Bagel"];

// Task 2: Log number of items using .length
console.log("Number of drinks:", drinks.length);
console.log("Number of pastries:", pastries.length);

// Task 3: Access Orders Using Bracket Notation (hardcoded)
console.log("First drink:", drinks[0]);
console.log("Last pastry:", pastries[2]);
console.log("Second drink:", drinks[1], "and first pastry:", pastries[0]);

// Task 4: Access Orders Dynamically with Variables
let drinkIndex = 2;
let pastryIndex = 1;

console.log("Selected drink:", drinks[drinkIndex]);
console.log("Selected pastry:", pastries[pastryIndex]);

// Task 5: Loop through drinks using .length
console.log("All drink orders:");
for (let i = 0; i < drinks.length; i++) {
    console.log(drinks[i]);
}

// Task 6: Add a New Order & Track Length
drinks.push("Flat white");

console.log("Updated drinks list:", drinks);
console.log("Updated number of drinks:", drinks.length);

// Dynamic selection again after update
let newDrinkIndex = drinks.length - 1;
console.log("Newest drink added:", drinks[newDrinkIndex]);
