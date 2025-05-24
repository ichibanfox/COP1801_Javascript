// Prompt the user for their first name
let Fname = prompt("What is your first name?");

// Declare a variable for the favorite number
let myFavNum;

// Lovely input loop asking for the user's favorite number
do {
    myFavNum = prompt("Enter your favorite number (used as the radius of a circle):");
    myFavNum = parseFloat(myFavNum);

    if (isNaN(myFavNum) || myFavNum <= 0) {
        alert("Invalid input! Please enter a valid positive number.");
    }

} while (isNaN(myFavNum) || myFavNum <= 0);

// Declare constant for Pi to 7 significant digits
const piValue = 3.141593;

// Calculate the area of the circle
let myArea = piValue * Math.pow(myFavNum, 2);

// Message contents
let displayMessage = `
    <h2>Welcome Message and Circle Calculation</h2>
    <p>Hello ${Fname}, you entered ${myFavNum} as your favorite number.</p>
    <p>If that was the radius of a circle, the circle's area would be ${myArea.toFixed(6)}.</p>
    <p>Here are the details of the calculation:</p>
    <ul>
        <li>Your name: ${Fname}</li>
        <li>Favorite number (radius): ${myFavNum}</li>
        <li>Pi value used: ${piValue}</li>
        <li>Calculated area: ${myArea.toFixed(6)}</li>
    </ul>
`;

// Display the message on the webpage
document.body.innerHTML += displayMessage;