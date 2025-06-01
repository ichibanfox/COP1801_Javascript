// Get a reference to the output div
const output = document.getElementById("output");

// Count from 0 to 10, check if odd or even
for (let i = 0; i <= 10; i++) {
    let message = (i % 2 === 0) ? `${i} is even.` : `${i} is odd.`;
    output.innerHTML += `<p>${message}</p>`;
}

// Prompt user for a number between 5 and 20
let myNum;
do {
    myNum = prompt("Enter a number between 5 and 20:");
    myNum = parseInt(myNum);

    if (isNaN(myNum) || myNum < 5 || myNum > 20) {
        alert("Invalid input! Please enter a number between 5 and 20.");
    }
} while (isNaN(myNum) || myNum < 5 || myNum > 20);

// Count from 1 to myNum
let counter = 1;
do {
    output.innerHTML += `<p>Counter: ${counter}</p>`;
    counter++;
} while (counter <= myNum);

// Array of subjects
let subjects = ["Accounting", "Algebra", "Programming", "Art", "Data Analytics"];

// Display subjects using forEach
let subjectList = "";
subjects.forEach((subject, index) => {
    subjectList += subject;
    if (index < subjects.length - 1) {
        subjectList += ", ";
    }
});
output.innerHTML += `<p>Subjects: ${subjectList}</p>`;