//mini project 1 : Multiplication Table Generator

const number = parseInt(prompt("Enter a number for multiplication table:"));

if (!isNaN(number)) {
    console.log(`Multiplication Table for ${number}:`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${number} x ${i} = ${number * i}`);
    }
} else {
    console.log("Invalid input! Please enter a valid number.");
}


//mini project 2 : simpleLogin System

const storedUsername = "ragul";
const storedPassword = "password123";

const username = prompt("Enter your username:");
const password = prompt("Enter your password:");

if (username === storedUsername && password === storedPassword) {
    console.log("Login successful!");
} else {
    console.log("Invalid credentials!");
}

//mini project 3 : temperature Converter

let celsius = 25; 

let fahrenheit = (celsius * 9/5) + 32;

console.log(`${celsius}°C is equal to ${fahrenheit}°F`);


//mini project 4 : traffic Light System

const trafficLight = prompt("Enter a traffic light color (red, yellow, green):").toLowerCase();

if (trafficLight === "red") {
    console.log("Stop!");
} else if (trafficLight === "yellow") {
    console.log("Slow down!");
} else if (trafficLight === "green") {
    console.log("Go!");
} else {
    console.log("Invalid color!");
}


//mini project 5 : vote Eligibility Checker

let citizen = "India"; 
let age = 20; 

if (age >= 18 && citizen === "India") {
    console.log("✅ Eligible to Vote");
} else {
    console.log("❌ Not Eligible to Vote");
}


//mini project 6 : online food ordering system


let restaurantName = "Tasty Bites";
let orderNumber = 101;
let foodItems = ["Burger", "Fries", "Coke"];
let totalPrice = 350;
let isDelivered = false;


console.log("📌 Order Summary:");
console.log("Restaurant:", restaurantName);
console.log("Order Number:", orderNumber);
console.log("Food Items:", foodItems.join(", "));
console.log("Total Price: ₹" + totalPrice);
console.log("Delivery Status:", isDelivered ? "✅ Delivered" : "🚚 Out for Delivery");


isDelivered = true;
console.log("🚀 Delivery status updated:", isDelivered ? "✅ Delivered" : "🚚 Out for Delivery");


foodItems.push("Pizza");
totalPrice += 250;
console.log("🛒 Added Pizza. New Total: ₹" + totalPrice);


let itemToRemove = "Fries";
let itemIndex = foodItems.indexOf(itemToRemove);
if (itemIndex !== -1) {
    foodItems.splice(itemIndex, 1);
    totalPrice -= 100;
    console.log("❌ Removed Fries. New Total: ₹" + totalPrice);
}


console.log("\n📌 Updated Order Summary:");
console.log("Food Items:", foodItems.join(", "));
console.log("Total Price: ₹" + totalPrice);
console.log("Delivery Status:", isDelivered ? "✅ Delivered" : "🚚 Out for Delivery");


//mini project 7 : quiz App

let question1 = "What is the capital of India?";
let options1 = ["A) Mumbai", "B) Delhi", "C) Kolkata", "D) Chennai"];
let correctAnswer1 = "B";
let userAnswer1 = "B"; 

let score = 0;

console.log("📌 Quiz Results:");

console.log("\nQ1: " + question1);
console.log(options1.join("\n"));
console.log("Your Answer: " + userAnswer1 + (userAnswer1 === correctAnswer1 ? " ✅ Correct" : " ❌ Wrong"));
if (userAnswer1 === correctAnswer1) score++;


console.log("\n🎯 Final Score: " + score + "/1");
console.log("🎉 Thank you for participating!");

// mini project 8 : sum of digit of a number

let number1 = parseInt(prompt("Enter a positive number: "));


let sumOfDigits = 0;


while (number1 > 0) {
    let digit = number1 % 10;  
    sumOfDigits += digit;     
    number1 = Math.floor(number1 / 10);  
}


console.log("The sum of the digits is:", sumOfDigits);

