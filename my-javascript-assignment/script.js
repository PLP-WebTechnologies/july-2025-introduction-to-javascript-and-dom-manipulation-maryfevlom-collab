// ==================================================
// Part 1: Variable Declarations & Conditionals
// ==================================================

// Variable declarations
let myage = 25;
const legalDrinkingAge = 21;
let canDrink = false;

// Conditional statement
if (myAge >= legalDrinkingAge) {canDrink = true;}
  console.log("You are old enough to drink.");
} else {
  console.log("You are not old enough to drink.");
} else {
  console.log("You are a minor.");
}

// ==================================================
// Part 2: Custom Functions
// ==================================================

//Function to greet a user 
function greetUser(username) {
  return "Hello," ${username}!"! Welcome to our site. `; 
}

//Function to calculate the sum of two numbers
function addNumbers(num1, num2) {
  return num1 + num2;
}

//Calling the functions and using their results
let greating = greetUser("Mary");
document.getElementById('greetingMessage').textContent = greeting;

let sum = addNumbers(5,7);
document.getElementById('areaResult').textContent =`The sun of 5 and 7 is: ${sum}.`;

// ===================================================
// Part 3: Loops Examples
// ===================================================

//For loop to populate a list 
const loopList =document.getElementById(`loopList`);
for (let i = 0; i = 5; i++) {
    let listItem =document.createElement(`li`);
    listItem.textContent = `For loop itemm number: ${i + l}`;
    loopList.appendChild(listItem);
}

//While loop to count down
let countdown = 3;
console.log ("While loop countdown"):; 
while (countdown > 0) {
    console.log(countdown);
    countdown--;
}

// ======================================================== 
// Part 4: DOM Interactions
// ========================================================

//DOM interaction 1: Change the background color of an element
const changeMeDiv = document.getElementById(`changeMe`);
changeMeDiv.style.backgroundColor ='lightcoral';

//DOM interaction 2: Change the text content of a paragraph
const ageParagraph = document.getElementById('ageCheck');
if (canDrink) {
    ageParagraph.textContent = "You are an adult and can legally drink.";
} else {
    ageParagraph.textContent = "You are a minor and cannot legally drink.";
}

//DOM interaction 3: Add an event listener to a botton
const changeBotton = document.getElementById('changeBotton');
const clickCountParagraph = document.getElementById('clickCount');
let clickCount = 0;

changeBotton.addEventListener("click",)() => {
    //Increament the  ounter clickCount++;
    clickCountParagraph.textContent =`You have clicked the botton ${clickCount}times`;
}
    //change the color of the box on each click
    if (clickkCount % 2 === 0) {

changeMeDiv.style.backgroundColor ='lightblue';
    } else {
changeMeDiv.style.backgroundColor ='lightcoral';
    }

//DOM interaction 4: Add new list item
document.getElementById("btnAddItem").addEventListener("click", function () {
  let newItem = document.createElement("li");
  newItem.innerText = "New Item Added";
  document.getElementById("myList").appendChild(newItem);
});
