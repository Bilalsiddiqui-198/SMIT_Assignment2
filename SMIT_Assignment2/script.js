//task1

var num=5;
if (num>0) {
    console.log("The number is positive");
} 
else if (num<0) {
    console.log("The number is negative");
} 
else {
    console.log("The number is zero");
}

//task2
var num1=3;
if(num1%2 ===0) {
    console.log("The number is even.");
} 
else {
    console.log("The number is odd.");
}

//task3
var age=21;
if(age>=18) {
    console.log("You are eligible to vote.");
} 
else {
    console.log("You are not eligible to vote.");
}

//task4
var num2=8;
if(num1>num2) {
    console.log(num1+" is larger.");
} 
else if(num2>num1) {
    console.log(num2+ "is larger.");
} 
else{
    console.log("Both numbers are equal.");
}


//task5
var age1=20;
var memberShip=true;
if(age1>=60 || memberShip) {
    console.log("You are eligible for a discount.");
} 
else{
    console.log("You are not eligible for a discount.");
}


//task6
var username = "admin";
var password = "12345";
if (username === "admin" && password === "12345") {
    console.log("Login successful.");
} else {
    console.log("Invalid credentials.");
}


//tasj7
var marks=70
if (marks >= 90 && marks<=100) {
    console.log("Grade: A");
} else if (marks >= 80&& marks<=89) {
    console.log("Grade: B");
} else if (marks >= 70&& marks<=79) {
    console.log("Grade: C");
} else if (marks >= 60&& marks<=69) {
    console.log("Grade: D");
} else {
    console.log("Grade: F");
}

//task8
var color = prompt("Enter the traffic light color (red, yellow, or green): ").toLowerCase();

if (color === "red") {
    console.log("Stop");
} 
else if (color === "yellow") {
    console.log("Slow down");
} 
else if (color === "green") {
    console.log("Go");
} 
else {
    console.log("Invalid color. Please enter red, yellow, or green.");
}